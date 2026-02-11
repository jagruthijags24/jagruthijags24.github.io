import { useState, useEffect } from 'react'
import './DataJobsDashboard.css'

function DataJobsDashboard() {
  const [salary, setSalary] = useState(95)
  const [chartBars, setChartBars] = useState([65, 80, 55, 90, 70, 85, 60])

  useEffect(() => {
    const interval = setInterval(() => {
      setSalary(s => (s >= 110 ? 85 : s + 3))
      setChartBars(prev => prev.map(() => Math.floor(Math.random() * 40) + 50))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const roles = ['Data Scientist', 'Analyst', 'Engineer']
  const [roleIdx, setRoleIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % 3), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="datajobs-dashboard">
      <div className="datajobs-header">
        <span className="datajobs-title">Data Jobs 2024</span>
        <span className="datajobs-badge">Live</span>
      </div>
      <div className="datajobs-metric">
        <span className="datajobs-value">${salary}K</span>
        <span className="datajobs-label">Avg Salary</span>
      </div>
      <div className="datajobs-chart">
        {chartBars.map((h, i) => (
          <div key={i} className="datajobs-bar" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="datajobs-role">
        <span className="datajobs-role-label">{roles[roleIdx]}</span>
      </div>
    </div>
  )
}

export default DataJobsDashboard
