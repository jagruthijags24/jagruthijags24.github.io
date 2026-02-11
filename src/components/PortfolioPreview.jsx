import { useState, useEffect } from 'react'
import './PortfolioPreview.css'

function PortfolioPreview() {
  const [active, setActive] = useState(0)
  const sections = ['Hero', 'Projects', 'About', 'Contact']

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % 4), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="portfolio-preview">
      <div className="portfolio-preview-header">
        <span className="portfolio-preview-title">Portfolio</span>
        <span className="portfolio-preview-dot" />
      </div>
      <div className="portfolio-preview-nav">
        {sections.map((s, i) => (
          <span key={s} className={`portfolio-preview-nav-item ${i === active ? 'active' : ''}`}>
            {s}
          </span>
        ))}
      </div>
      <div className="portfolio-preview-content">
        <div className="portfolio-preview-card" />
        <div className="portfolio-preview-card small" />
        <div className="portfolio-preview-card small" />
      </div>
    </div>
  )
}

export default PortfolioPreview
