import { useState, useEffect, useRef } from 'react'
import './IntroOverlay.css'

const NAME = 'JAGRUTHI'

function IntroOverlay({ onComplete }) {
  const [phase, setPhase] = useState('idle') // idle | title | hold | merge | fade
  const [unmounted, setUnmounted] = useState(false)
  const [mergeStyle, setMergeStyle] = useState(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setPhase('title'), 300)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (phase === 'title') {
      const t = setTimeout(() => setPhase('hold'), 1800)
      return () => clearTimeout(t)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'hold') {
      const t = setTimeout(() => setPhase('merge'), 2000)
      return () => clearTimeout(t)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'merge') {
      setMergeStyle({ '--merge-x': '0px', '--merge-y': '0px', '--merge-scale': '0.3' })
      const applyTarget = () => {
        const heroJagruthi = document.getElementById('hero-name-jagruthi')
        const titleEl = titleRef.current
        if (heroJagruthi && titleEl) {
          const heroRect = heroJagruthi.getBoundingClientRect()
          const titleRect = titleEl.getBoundingClientRect()
          const scaleX = heroRect.width / titleRect.width
          const scaleY = heroRect.height / titleRect.height
          const scale = Math.min(scaleX, scaleY, 0.5)
          const heroCenterX = heroRect.left + heroRect.width / 2
          const heroCenterY = heroRect.top + heroRect.height / 2
          const titleCenterX = titleRect.left + titleRect.width / 2
          const titleCenterY = titleRect.top + titleRect.height / 2
          setMergeStyle({
            '--merge-x': `${heroCenterX - titleCenterX}px`,
            '--merge-y': `${heroCenterY - titleCenterY}px`,
            '--merge-scale': scale,
          })
        }
      }
      const t1 = requestAnimationFrame(() =>
        requestAnimationFrame(() => requestAnimationFrame(applyTarget))
      )
      return () => cancelAnimationFrame(t1)
    }
  }, [phase, onComplete])

  useEffect(() => {
    if (phase === 'merge') {
      const t = setTimeout(() => {
        onComplete?.()
        setPhase('fade')
      }, 1200)
      return () => clearTimeout(t)
    }
  }, [phase, onComplete])

  useEffect(() => {
    if (phase === 'fade') {
      const t = setTimeout(() => setUnmounted(true), 500)
      return () => clearTimeout(t)
    }
  }, [phase, onComplete])

  if (unmounted) return null

  return (
    <div className={`intro-overlay intro-shorts ${phase}`} aria-hidden="true">
      <div className="intro-shorts-bg" />
      <div className="intro-shorts-scanline" />
      <div className="intro-frame">
        <h1
          ref={titleRef}
          className={`intro-title shorts-title ${phase !== 'idle' ? 'visible' : ''} ${phase === 'merge' || phase === 'fade' ? 'merge' : ''}`}
          style={mergeStyle}
        >
          {NAME.split('').map((letter, i) => (
            <span key={i} className="intro-letter" style={{ animationDelay: `${i * 0.06}s` }}>
              {letter}
            </span>
          ))}
        </h1>
        <p className={`intro-subtitle ${phase === 'hold' || phase === 'merge' ? 'visible' : ''}`}>
          Portfolio
        </p>
      </div>
    </div>
  )
}

export default IntroOverlay
