import { useState, useEffect } from 'react'
import './BitcoinDashboard.css'

function BitcoinDashboard() {
  const [price, setPrice] = useState(67234)
  const [sentiment, setSentiment] = useState('Bullish')
  const [accuracy, setAccuracy] = useState(83)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(p => p + (Math.random() > 0.5 ? 120 : -80))
      setSentiment(s => s === 'Bullish' ? 'Neutral' : s === 'Neutral' ? 'Bearish' : 'Bullish')
      setAccuracy(a => Math.min(90, Math.max(78, a + (Math.random() > 0.5 ? 2 : -2))))
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bitcoin-dashboard">
      <div className="bitcoin-header">
        <span className="bitcoin-symbol">₿</span>
        <span className="bitcoin-title">BTC Price</span>
      </div>
      <div className="bitcoin-price">
        <span className="bitcoin-value">${price.toLocaleString()}</span>
      </div>
      <div className="bitcoin-metrics">
        <div className="bitcoin-metric">
          <span className="bitcoin-metric-value">{accuracy}%</span>
          <span className="bitcoin-metric-label">Accuracy</span>
        </div>
        <div className="bitcoin-metric sentiment">
          <span className="bitcoin-sentiment-value">{sentiment}</span>
        </div>
      </div>
      <div className="bitcoin-chart">
        {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
          <div key={i} className="bitcoin-bar" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

export default BitcoinDashboard
