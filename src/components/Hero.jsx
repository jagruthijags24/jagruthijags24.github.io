import { useState, useEffect } from 'react'
import './Hero.css'

const ROLES = ['Software Engineer', 'Web Developer', 'Full-Stack Developer', 'Data Analyst', 'ML Enthusiast']
const INTRO_TEXT = "I am a Software Engineer specializing in full-stack development with React, Java, Spring Boot, AI and related technologies. I build scalable, user-friendly applications and transform data into strategic decisions."

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (typedText.length < INTRO_TEXT.length) {
      const timeout = setTimeout(() => {
        setTypedText(INTRO_TEXT.slice(0, typedText.length + 1))
      }, 35)
      return () => clearTimeout(timeout)
    } else {
      setIntroDone(true)
    }
  }, [typedText])

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-status-wrap">
              <div className="hero-status">
                <span className="status-dot"></span>
                Available For Work
              </div>
            </div>
            <h1 className="hero-name">Jagruthi Pullaiahgari</h1>
            <div className="code-line">
              <span className="keyword">System</span>
              <span className="dot">.</span>
              <span className="keyword">out</span>
              <span className="dot">.</span>
              <span className="function">println</span>
              <span className="paren">(</span>
              <span className="dynamic-text">"{ROLES[roleIndex]}"</span>
              <span className="paren">);</span>
            </div>
            <p className="hero-intro">
              {typedText}<span className={`typing-cursor ${introDone ? 'blink-only' : ''}`}>|</span>
            </p>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="bx bxs-user-detail"></i> Contact Me
            </a>
            <a href="/JP-- Software Engineer.pdf" download className="btn btn-resume">
              <i className="bx bx-download"></i> Resume
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <span className="hero-hi-bubble">
            <span className="hero-hi-bubble-small" aria-hidden="true" />
            Hi
          </span>
          <img 
            src="/Images/Profile/higirlimage.png?v=2"
            alt="Jagruthi - Software Engineer" 
            className="hero-avatar"
          />
        </div>
      </div>
      <a href="#about" className="scroll-indicator">
        <span className="arrow">›</span>
        <span className="arrow">›</span>
      </a>
    </section>
  )
}

export default Hero
