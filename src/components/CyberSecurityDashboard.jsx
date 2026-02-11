import { useState, useEffect } from 'react'
import './CyberSecurityDashboard.css'

function CyberSecurityDashboard() {
  const [threats, setThreats] = useState(12)
  const [blocked, setBlocked] = useState(847)
  const [alerts, setAlerts] = useState(3)
  const [chartHeights, setChartHeights] = useState([70, 45, 90, 55, 65, 40, 75])

  useEffect(() => {
    const interval = setInterval(() => {
      setChartHeights(prev => prev.map(() => Math.floor(Math.random() * 50) + 30))
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(Math.floor(Math.random() * 8) + 10)
      setBlocked(prev => prev + Math.floor(Math.random() * 20) - 5)
      setAlerts(Math.floor(Math.random() * 4))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="cyber-dashboard">
      <div className="cyber-dashboard-header">
        <span className="cyber-dashboard-title">Threat Monitor</span>
        <span className="cyber-status-badge">
          <span className="cyber-status-dot" />
          <span className="cyber-status-text">Secured</span>
        </span>
      </div>
      <div className="cyber-dashboard-metrics">
        <div className="cyber-metric">
          <span className="cyber-metric-value">{threats}</span>
          <span className="cyber-metric-label">Threats Detected</span>
        </div>
        <div className="cyber-metric">
          <span className="cyber-metric-value">{blocked}</span>
          <span className="cyber-metric-label">Blocked</span>
        </div>
        <div className="cyber-metric">
          <span className="cyber-metric-value">{alerts}</span>
          <span className="cyber-metric-label">Active Alerts</span>
        </div>
      </div>
      <div className="cyber-dashboard-chart">
        {chartHeights.map((h, i) => (
          <div key={i} className="cyber-chart-bar" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="cyber-dashboard-list">
        <div className="cyber-alert-item">
          <span className="cyber-alert-icon critical">!</span>
          <span className="cyber-alert-text">Phishing attempt blocked</span>
        </div>
        <div className="cyber-alert-item">
          <span className="cyber-alert-icon warning">!</span>
          <span className="cyber-alert-text">Suspicious login detected</span>
        </div>
        <div className="cyber-alert-item">
          <span className="cyber-alert-icon info">i</span>
          <span className="cyber-alert-text">Firewall rule updated</span>
        </div>
      </div>
    </div>
  )
}

export default CyberSecurityDashboard
