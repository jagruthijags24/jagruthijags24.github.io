import { useState, useEffect } from 'react'
import './ResearchPaperPreview.css'

function ResearchPaperPreview() {
  const [glow, setGlow] = useState(true)

  useEffect(() => {
    const t = setInterval(() => setGlow(g => !g), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="research-paper-preview">
      <div className="research-preview-header">
        <span className="research-preview-badge">IEEE</span>
        <span className="research-preview-year">2023</span>
      </div>
      <div className={`research-preview-doc ${glow ? 'glow' : ''}`}>
        <div className="research-preview-line" />
        <div className="research-preview-line short" />
        <div className="research-preview-line" />
        <div className="research-preview-line short" />
        <div className="research-preview-line" />
      </div>
      <div className="research-preview-footer">
        <span className="research-preview-title">Cloud Data Security</span>
      </div>
    </div>
  )
}

export default ResearchPaperPreview
