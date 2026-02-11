import { useState, useEffect } from 'react'
import './AsteroidDashboard.css'

function AsteroidDashboard() {
  const [count, setCount] = useState(1247)
  const [classes, setClasses] = useState(['Hazardous', 'Safe', 'Near-Earth'])
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + (Math.random() > 0.5 ? 3 : -2))
      setActiveIdx(i => (i + 1) % 3)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="asteroid-dashboard">
      <div className="asteroid-header">
        <span className="asteroid-title">Asteroid Classifier</span>
      </div>
      <div className="asteroid-orbits">
        <div className="asteroid-dot a1" />
        <div className="asteroid-dot a2" />
        <div className="asteroid-dot a3" />
      </div>
      <div className="asteroid-metric">
        <span className="asteroid-value">{count}</span>
        <span className="asteroid-label">Classified</span>
      </div>
      <div className="asteroid-classes">
        {classes.map((cls, i) => (
          <span key={cls} className={`asteroid-class ${i === activeIdx ? 'active' : ''}`}>
            {cls}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AsteroidDashboard
