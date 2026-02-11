import { useState, useEffect } from 'react'
import './DiseasePredictionPreview.css'

function DiseasePredictionPreview() {
  const [accuracy, setAccuracy] = useState(87)
  const [status, setStatus] = useState('Predicting...')

  useEffect(() => {
    const interval = setInterval(() => {
      setAccuracy(a => Math.min(94, Math.max(82, a + (Math.random() > 0.5 ? 2 : -2))))
      setStatus(s => s === 'Predicting...' ? 'Classified' : 'Predicting...')
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="disease-prediction-preview">
      <div className="disease-preview-header">
        <span className="disease-preview-title">ML Disease Predictor</span>
        <span className="disease-preview-badge">Jupyter</span>
      </div>
      <div className="disease-preview-metric">
        <span className="disease-preview-value">{accuracy}%</span>
        <span className="disease-preview-label">Model Accuracy</span>
      </div>
      <div className="disease-preview-status">
        <span className="disease-preview-dot" />
        <span className="disease-preview-status-text">{status}</span>
      </div>
      <div className="disease-preview-chart">
        {[60, 85, 70, 92, 78].map((h, i) => (
          <div key={i} className="disease-preview-bar" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

export default DiseasePredictionPreview
