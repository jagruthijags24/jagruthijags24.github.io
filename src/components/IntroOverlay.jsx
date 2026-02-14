import { useState, useEffect } from 'react'
import './IntroOverlay.css'

const NAME = 'JAGRUTHI'

function IntroOverlay({ onComplete }) {
  const [phase, setPhase] = useState('idle') // idle | title | hold | fade
  const [unmounted, setUnmounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setPhase('title'), 400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (phase === 'title') {
      const t = setTimeout(() => setPhase('hold'), 2200)
      return () => clearTimeout(t)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'hold') {
      const t = setTimeout(() => setPhase('fade'), 1800)
      return () => clearTimeout(t)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'fade') {
      const t = setTimeout(() => {
        onComplete?.()
        setUnmounted(true)
      }, 1200)
      return () => clearTimeout(t)
    }
  }, [phase, onComplete])

  if (unmounted) return null

  return (
    <div className={`intro-overlay intro-feminine ${phase}`} aria-hidden="true">
      <div className="intro-petal intro-petal-1" />
      <div className="intro-petal intro-petal-2" />
      <div className="intro-petal intro-petal-3" />
      <div className="intro-petal intro-petal-4" />
      <div className="intro-petal intro-petal-5" />
      <div className="intro-sparkle intro-sparkle-1">✦</div>
      <div className="intro-sparkle intro-sparkle-2">✦</div>
      <div className="intro-sparkle intro-sparkle-3">✦</div>

      <div className="intro-frame">
        <h1 className={`intro-title ${phase !== 'idle' ? 'visible' : ''}`}>
          {NAME}
        </h1>
        <p className={`intro-subtitle ${phase === 'hold' || phase === 'fade' ? 'visible' : ''}`}>
          Portfolio
        </p>
      </div>
    </div>
  )
}

export default IntroOverlay
