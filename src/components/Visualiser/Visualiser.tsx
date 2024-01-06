/* eslint-disable no-console */
import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Visualiser = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const VisualiserType = {
    Bars: 'Bars',
    Waveform: 'Waveform',
    Ferrofluid: 'Ferrofluid',
    RotatingCube: 'RotatingCube'
  }

  const [currentVisualiser, setCurrentVisualiser] = useState(
    VisualiserType.Bars
  )

  const renderFrequencyBars = () => {
    // To do: Create this code for rendering 3D frequency bars
  }

  const renderWaveform = () => {
    // To do: Create this code for rendering waveform
  }

  const renderFerrofluid = () => {
    // To do: Create this code for rendering Ferrofluid
  }

  const renderRotatingCube = () => {
    // To do: Create this code for rendering rotating cube
  }

  const renderVisualiser = () => {
    switch (currentVisualiser) {
      case VisualiserType.Bars:
        renderFrequencyBars()
        break
      case VisualiserType.Waveform:
        renderWaveform()
        break
      case VisualiserType.Ferrofluid:
        renderFerrofluid()
        break
      case VisualiserType.RotatingCube:
        renderRotatingCube()
        break
      // Add more cases for additional Visualiser types
      default:
        console.error('Unknown Visualiser type:', currentVisualiser)
    }
  }

  useEffect(() => {
    let audioContext: AudioContext
    let analyser: AnalyserNode | undefined
    let dataArray: Uint8Array
    let scene: THREE.Scene | undefined
    let camera: THREE.PerspectiveCamera | undefined
    let renderer: THREE.WebGLRenderer | undefined
    let bars: THREE.Mesh[] = []

    const ensureAudioContext = () => {
      if (audioContext.state === 'suspended') {
        audioContext.resume()
      }
    }

    const animateVisualiser = () => {
      const canvas = canvasRef.current
      const canvasContext = canvas?.getContext('2d')
      if (!renderer) {
        console.error('Renderer is not initialized.')
        return
      }
      renderer.setSize(canvasRef.current!.width, canvasRef.current!.height)
      if (!canvasContext || !canvas) return

      const { width, height } = canvas
      const barWidth = width / (analyser?.frequencyBinCount || 1)
      renderVisualiser()

      ensureAudioContext()
      analyser?.getByteFrequencyData(dataArray)

      // Clear the canvas
      canvasContext.clearRect(0, 0, width, height)

      // Draw simple bars based on frequency data
      for (let i = 0; i < dataArray.length; i += 1) {
        const scale = dataArray[i] / 255
        const barHeight = scale * height
        canvasContext.fillStyle = `rgb(${dataArray[i]}, 0, 0)`
        canvasContext.fillRect(
          i * barWidth,
          height - barHeight,
          barWidth,
          barHeight
        )
      }

      requestAnimationFrame(animateVisualiser)
    }

    const animateThreeJsVisualiser = () => {
      if (bars.length === 0 || !analyser || !scene || !camera || !renderer) {
        console.error(
          'Bars, Analyser, Scene, Camera, or Renderer not initialized.'
        )
        return
      }

      analyser.getByteFrequencyData(dataArray)

      const analyserFrequencyBinCount = analyser.frequencyBinCount

      for (let i = 0; i < analyserFrequencyBinCount; i += 1) {
        const scale = dataArray[i] / 255
        const barHeight = scale * 10 // Adjust the height scale as needed
        bars[i].scale.y = barHeight
      }

      renderer.render(scene, camera)
      requestAnimationFrame(animateThreeJsVisualiser)
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

      const analyserFrequencyBinCount = analyser?.frequencyBinCount || 1

      for (let i = 0; i < analyserFrequencyBinCount; i += 1) {
        const bar = new THREE.Mesh(barGeometry, barMaterial)
        bar.position.x = (i / analyserFrequencyBinCount) * 10 - 5
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
        // Add this line after getting frequency data
        // dataArray.fill(255) // Fill dataArray with non-zero values for testing
        source.connect(analyser)

        initThreeJs()
        animateVisualiser()
        animateThreeJsVisualiser()
      } catch (error) {
        console.error('Error accessing microphone:', error)
      }
    }

    const resizeHandler = () => {
      if (renderer && camera) {
        // Add null check for camera
        const canvas = canvasRef.current!
        renderer.setSize(canvas.width, canvas.height)
        if (camera) {
          // Add null check for camera
          camera.aspect = canvas.width / canvas.height
          camera.updateProjectionMatrix()
        }
      }
    }

    // Initialize audio when the component mounts
    initAudio()

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
      // Clean up audio context when the component unmounts
      if (audioContext) audioContext.close()
    }
  }, [currentVisualiser])

  const toggleFullScreen = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (canvas.requestFullscreen) {
      canvas.requestFullscreen()
    }
  }

  return (
    <div>
      <Button onClick={() => setCurrentVisualiser(VisualiserType.Bars)}>
        Frequency Bars
      </Button>
      <Button onClick={() => setCurrentVisualiser(VisualiserType.Waveform)}>
        Waveform
      </Button>
      <Button onClick={() => setCurrentVisualiser(VisualiserType.Ferrofluid)}>
        Ferrofluid
      </Button>
      <Button onClick={() => setCurrentVisualiser(VisualiserType.RotatingCube)}>
        Rotating Cube (Test)
      </Button>
      {/* Add buttons for other Visualiser types */}
      <Button onClick={toggleFullScreen}>Toggle Full Screen</Button>
      <div>
        <canvas ref={canvasRef} style={{ background: 'black' }} />
      </div>
    </div>
  )
}

export default Visualiser
