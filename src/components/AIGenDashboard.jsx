import { useState, useEffect } from 'react'
import './AIGenDashboard.css'

const PROMPTS = [
  'Summarize this document...',
  'Generate code for...',
  'Explain the concept of...',
]

function AIGenDashboard() {
  const [tokens, setTokens] = useState(1247)
  const [latency, setLatency] = useState(342)
  const [activePrompt, setActivePrompt] = useState(0)
  const [inferenceActive, setInferenceActive] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens(prev => prev + Math.floor(Math.random() * 50) - 10)
      setLatency(prev => Math.max(200, Math.min(500, prev + (Math.random() * 80 - 40))))
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePrompt(prev => (prev + 1) % PROMPTS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setInferenceActive(prev => !prev)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="ai-dashboard">
      <div className="ai-dashboard-header">
        <span className="ai-dashboard-title">PromptFlow</span>
        <span className={`ai-status-badge ${inferenceActive ? 'active' : ''}`}>
          <span className="ai-status-dot" />
          <span className="ai-status-text">{inferenceActive ? 'Processing' : 'Idle'}</span>
        </span>
      </div>
      <div className="ai-dashboard-metrics">
        <div className="ai-metric">
          <span className="ai-metric-value">{Math.max(0, tokens)}</span>
          <span className="ai-metric-label">Tokens/s</span>
        </div>
        <div className="ai-metric">
          <span className="ai-metric-value">{Math.round(latency)}ms</span>
          <span className="ai-metric-label">Latency</span>
        </div>
        <div className="ai-metric">
          <span className="ai-metric-value">GPT</span>
          <span className="ai-metric-label">Model</span>
        </div>
      </div>
      <div className="ai-prompt-stream">
        <span className="ai-prompt-label">Prompt</span>
        <div className="ai-prompt-text">
          <span className="ai-typing">{PROMPTS[activePrompt]}</span>
          <span className="ai-cursor" />
        </div>
      </div>
      <div className="ai-token-flow">
        <div className="ai-token token-1" />
        <div className="ai-token token-2" />
        <div className="ai-token token-3" />
        <div className="ai-token token-4" />
        <div className="ai-token token-5" />
      </div>
    </div>
  )
}

export default AIGenDashboard
