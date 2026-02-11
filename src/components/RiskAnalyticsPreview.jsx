import { useState, useEffect } from 'react'
import './RiskAnalyticsPreview.css'

function RiskAnalyticsPreview() {
  const [risk, setRisk] = useState(0.24)
  const [chartVals, setChartVals] = useState([70, 55, 80, 45, 65, 50])

  useEffect(() => {
    const interval = setInterval(() => {
      setRisk(r => Number((Math.min(0.35, Math.max(0.18, r + (Math.random() - 0.5) * 0.05))).toFixed(2)))
      setChartVals(prev => prev.map(() => Math.floor(Math.random() * 40) + 40))
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="risk-analytics-preview">
      <div className="risk-preview-header">
        <span className="risk-preview-title">Bank Risk Analytics</span>
      </div>
      <div className="risk-preview-metric">
        <span className="risk-preview-value">{Number(risk).toFixed(2)}</span>
        <span className="risk-preview-label">Risk Score</span>
      </div>
      <div className="risk-preview-chart">
        {chartVals.map((h, i) => (
          <div key={i} className="risk-preview-bar" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="risk-preview-tags">
        <span className="risk-preview-tag">Credit</span>
        <span className="risk-preview-tag">Fraud</span>
        <span className="risk-preview-tag">Market</span>
      </div>
    </div>
  )
}

export default RiskAnalyticsPreview
