import { useState, useEffect } from 'react'
import './BruhashithDashboard.css'

function BruhashithDashboard() {
  const [loading, setLoading] = useState(70)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(l => (l >= 100 ? 65 : l + 5))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bruhashith-dashboard">
      <div className="bruhashith-header">
        <span className="bruhashith-title">Company Site</span>
        <span className="bruhashith-badge">-30% Load</span>
      </div>
      <div className="bruhashith-viewport">
        <div className="bruhashith-nav">
          <span className="bruhashith-logo">B</span>
          <span className="bruhashith-link">Home</span>
          <span className="bruhashith-link">About</span>
          <span className="bruhashith-link">Contact</span>
        </div>
        <div className="bruhashith-content">
          <div className="bruhashith-line w1" />
          <div className="bruhashith-line w2" />
          <div className="bruhashith-line w3" />
        </div>
      </div>
      <div className="bruhashith-perf">
        <div className="bruhashith-perf-bar">
          <div className="bruhashith-perf-fill" style={{ width: `${loading}%` }} />
        </div>
        <span className="bruhashith-perf-text">Perf: {loading}%</span>
      </div>
    </div>
  )
}

export default BruhashithDashboard
