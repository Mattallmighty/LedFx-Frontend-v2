import React, { useEffect, useRef } from 'react'

const Visualiser = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    let audioContext: AudioContext
    let source: MediaStreamAudioSourceNode
    let analyser: AnalyserNode
    let dataArray: Uint8Array

    const animateVisualizer = () => {
      const canvas = canvasRef.current
      const context = canvas?.getContext('2d')
      if (!context || !canvas) return

      const { width, height } = canvas
      const barWidth = width / analyser.frequencyBinCount
      const barHeightMultiplier = height / 255

      const draw = () => {
        analyser.getByteFrequencyData(dataArray)
        context.clearRect(0, 0, width, height)

        dataArray.forEach((data, index) => {
          const x = index * barWidth
          const barHeight = data * barHeightMultiplier
          context.fillStyle = `rgb(${data}, 0, 0)`
          context.fillRect(x, height - barHeight, barWidth, barHeight)
        })

        requestAnimationFrame(draw)
      }

      draw()
    }

    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true
        })
        audioContext = new AudioContext()
        source = audioContext.createMediaStreamSource(stream)
        analyser = audioContext.createAnalyser()
        analyser.fftSize = 2048
        dataArray = new Uint8Array(analyser.frequencyBinCount)
        source.connect(analyser)
        animateVisualizer()
        audioRef.current!.srcObject = stream
      } catch (error) {
        console.error('Error accessing microphone:', error)
      }
    }

    initAudio()

    return () => {
      if (audioContext) audioContext.close()
    }
  }, [])

  const toggleFullScreen = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (canvas.requestFullscreen) {
      canvas.requestFullscreen()
    }
  }

  return (
    <div>
      <button onClick={toggleFullScreen}>Toggle Full Screen</button>
      <canvas
        ref={canvasRef}
        width={720}
        height={300}
        style={{ background: 'black' }}
      />
    </div>
  )
}

export default Visualiser
