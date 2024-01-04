import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Visualiser = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const VisualizerType = {
    Bars: 'Bars',
    Waveform: 'Waveform'
    // Add more visualizer types as needed
  }

  const [currentVisualizer, setCurrentVisualizer] = useState(
    VisualizerType.Bars
  )

  useEffect(() => {
    let audioContext: AudioContext
    let analyser: AnalyserNode | undefined
    let dataArray: Uint8Array
    let scene: THREE.Scene
    let camera: THREE.Camera
    let renderer: THREE.WebGLRenderer
    let bars: THREE.Mesh[] = []

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

      if (!analyser) {
        console.error('Analyser is not initialized.')
        return
      }

      const barGeometry = new THREE.BoxGeometry(1, 1, 1)
      const barMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
      bars = []

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < analyser.frequencyBinCount; i++) {
        const bar = new THREE.Mesh(barGeometry, barMaterial)
        bar.position.x = i - analyser.frequencyBinCount / 2
        scene.add(bar)
        bars.push(bar)
      }

      camera.position.z = 5
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
        animateVisualizer()
      } catch (error) {
        console.error('Error accessing microphone:', error)
      }
    }

    initThreeJs()
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
      {/* Frequency Bars, Waveform, Oscilloscope, Circle Visualisation, Particle Visualisation, Light Sync Text, Light Sync Space */}
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
