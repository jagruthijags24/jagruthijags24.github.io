import { useScrollReveal } from '../hooks/useScrollReveal'
import './ScrollReveal.css'

export default function ScrollReveal({ children, from = 'left', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${from} ${isVisible ? 'scroll-reveal--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
