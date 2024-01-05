import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Visualiser = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const VisualizerType = {
    Bars: 'Bars',
    Waveform: 'Waveform',
    RotatingCube: 'RotatingCube'
  }

  const [currentVisualizer, setCurrentVisualizer] = useState(
    VisualizerType.Bars
  )

  useEffect(() => {
    let audioContext: AudioContext
    let analyser: AnalyserNode | undefined
    let dataArray: Uint8Array
    let scene: THREE.Scene | undefined
    let camera: THREE.Camera | undefined
    let renderer: THREE.WebGLRenderer | undefined
    let bars: THREE.Mesh[] = []
    let cube: THREE.Mesh | undefined

    const ensureAudioContext = () => {
      if (audioContext.state === 'suspended') {
        audioContext.resume()
      }
    }

    const animateVisualizer = () => {
      const canvas = canvasRef.current
      const context = canvas?.getContext('2d')
      if (!context || !canvas) return

      const { width, height } = canvas
      const barWidth = width / (analyser?.frequencyBinCount || 1) // Ensure non-zero divisor
      const barHeightMultiplier = height / 255

      ensureAudioContext()
      analyser?.getByteFrequencyData(dataArray)
      context.clearRect(0, 0, width, height)

      dataArray.forEach((data, index) => {
        const x = index * barWidth
        const barHeight = data * barHeightMultiplier
        context.fillStyle = `rgb(${data}, 0, 0)`
        context.fillRect(x, height - barHeight, barWidth, barHeight)
      })

      // Update Three.js scene based on the selected visualizer
      if (currentVisualizer === VisualizerType.Bars) {
        bars = bars.map((bar, index) => {
          const scale = dataArray[index] / 255
          const newBar = new THREE.Mesh(bar.geometry, bar.material)
          newBar.position.copy(bar.position)
          newBar.scale.set(bar.scale.x, scale, bar.scale.z)
          return newBar
        }) as THREE.Mesh[]
      } else if (currentVisualizer === VisualizerType.RotatingCube && cube) {
        const animateCube = () => {
          cube.rotation.x += 0.01
          cube.rotation.y += 0.01
        }

        animateCube()
        renderer?.render(scene!, camera!)
      }

      requestAnimationFrame(animateVisualizer)
    }

    const initThreeJs = () => {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! })
      renderer.setSize(window.innerWidth, window.innerHeight)

      if (currentVisualizer === VisualizerType.RotatingCube) {
        // Create a rotating cube
        const cubeGeometry = new THREE.BoxGeometry()
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        scene!.add(cube)

        // Set the initial position to the center of the scene
        cube.position.set(0, 0, 0)

        // Set up a basic animation for the cube
        const animateCube = () => {
          cube.rotation.x += 0.01
          cube.rotation.y += 0.01
        }

        // Start the cube animation
        const animate = () => {
          animateCube()
          renderer!.render(scene!, camera!)
          requestAnimationFrame(animate)
        }

        animate()
      } else {
        // Create bars or other visualizers as needed
        const barGeometry = new THREE.BoxGeometry(1, 1, 1)
        const barMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        bars = []

        const analyserFrequencyBinCount = analyser?.frequencyBinCount ?? 1

        for (let i = 0; i < analyserFrequencyBinCount; i += 1) {
          const bar = new THREE.Mesh(barGeometry, barMaterial)
          bar.position.x = i - analyserFrequencyBinCount / 2
          scene!.add(bar)
          bars.push(bar)
        }
      }

      camera!.position.z = 5
    }

    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true
        })
        audioContext = new AudioContext()
        const source = audioContext.createMediaStreamSource(stream)
        analyser = audioContext.createAnalyser()
        analyser.fftSize = 2048
        dataArray = new Uint8Array(analyser.frequencyBinCount)
        source.connect(analyser)

        initThreeJs()
        animateVisualizer()
      } catch (error) {
        console.error('Error accessing microphone:', error)
      }
    }

    initAudio()

    return () => {
      if (audioContext) audioContext.close()
    }
  }, [currentVisualizer])

  const toggleFullScreen = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (canvas.requestFullscreen) {
      canvas.requestFullscreen()
    }
  }

  return (
    <div>
      <Button onClick={() => setCurrentVisualizer(VisualizerType.Bars)}>
        Frequency Bars
      </Button>
      <Button onClick={() => setCurrentVisualizer(VisualizerType.Waveform)}>
        Waveform
      </Button>
      <Button onClick={() => setCurrentVisualizer(VisualizerType.RotatingCube)}>
        Rotating Cube (Test)
      </Button>
      <Button onClick={toggleFullScreen}>Toggle Full Screen</Button>
      <div>
        <canvas
          ref={canvasRef}
          width={1020}
          height={500}
          style={{ background: 'black' }}
        />
      </div>
    </div>
  )
}

export default Visualiser
