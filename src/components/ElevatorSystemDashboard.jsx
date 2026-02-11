import { useState, useEffect, useRef } from 'react'
import './ElevatorSystemDashboard.css'

const FLOORS = 5

function ElevatorSystemDashboard() {
  const [elevatorFloor, setElevatorFloor] = useState(3)
  const [direction, setDirection] = useState('up')
  const [load, setLoad] = useState(65)
  const [queue, setQueue] = useState(['5F', '2F', '1F'])
  const directionRef = useRef('up')

  useEffect(() => {
    directionRef.current = direction
  }, [direction])

  useEffect(() => {
    const interval = setInterval(() => {
      setElevatorFloor(prev => {
        if (prev >= FLOORS - 1) {
          setDirection('down')
          directionRef.current = 'down'
          return prev - 1
        }
        if (prev <= 0) {
          setDirection('up')
          directionRef.current = 'up'
          return prev + 1
        }
        const dir = directionRef.current
        return dir === 'up' ? prev + 1 : prev - 1
      })
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(prev => Math.min(100, Math.max(20, prev + (Math.random() * 30 - 15))))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setQueue(prev => {
        const newQueue = [...prev]
        if (newQueue.length > 0 && Math.random() > 0.5) {
          newQueue.shift()
        }
        if (Math.random() > 0.6) {
          newQueue.push(`${Math.floor(Math.random() * FLOORS) + 1}F`)
        }
        return newQueue.slice(0, 4)
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="elevator-dashboard">
      <div className="elevator-dashboard-header">
        <span className="elevator-dashboard-title">Elevator Control</span>
        <span className={`elevator-status ${direction}`}>
          <span className="elevator-arrow">{direction === 'up' ? '▲' : '▼'}</span>
          <span className="elevator-status-text">{direction === 'up' ? 'Going Up' : 'Going Down'}</span>
        </span>
      </div>
      <div className="elevator-dashboard-body">
        <div className="elevator-shaft">
          {Array.from({ length: FLOORS }, (_, i) => FLOORS - 1 - i).map(floor => (
            <div key={floor} className="elevator-floor">
              <span className="elevator-floor-label">{floor + 1}F</span>
              <div className={`elevator-car ${elevatorFloor === floor ? 'present' : ''}`}>
                {elevatorFloor === floor && (
                  <span className="elevator-car-load">{Math.round(load)}%</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="elevator-panel">
          <div className="elevator-current">
            <span className="elevator-current-label">Current</span>
            <span className="elevator-current-floor">{elevatorFloor + 1}F</span>
          </div>
          <div className="elevator-load-bar">
            <span className="elevator-load-label">Load</span>
            <div className="elevator-load-track">
              <div className="elevator-load-fill" style={{ width: `${load}%` }} />
            </div>
          </div>
          <div className="elevator-queue">
            <span className="elevator-queue-label">Queue</span>
            <div className="elevator-queue-list">
              {queue.map((req, i) => (
                <span key={i} className="elevator-queue-item">{req}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElevatorSystemDashboard
