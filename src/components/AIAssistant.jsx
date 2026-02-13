import { useState, useRef, useEffect } from 'react'
import './AIAssistant.css'

const API_URL = import.meta.env.VITE_AI_API_URL || ''

const MOCK_ANSWERS = {
  who: "I'm Jagruthi Pullaiahgari (people call me Jags!). I'm a Software Engineer specializing in full-stack development with React, Java, Spring Boot, AI and related technologies. I build scalable, user-friendly applications and transform data into strategic decisions. I'm based in the USA and available for work.",
  skills: "Jagruthi works with React, JavaScript, Java, Python, Spring Boot, Node.js, HTML/CSS, Git, Firebase, Tableau, PostgreSQL, and AWS. She has strong foundations in Agile/Scrum, cloud platforms, and scalable application design, plus exposure to AI and Gen AI through ML, NLP, and data-driven projects.",
  experience: "Jagruthi was an Application Developer Intern at Salesforce (Jul–Dec 2022) in Andhra Pradesh, India—improving backend performance 20%, building features with Java/Apex/Lightning, and working in Agile. Before that, she was a Web Developer Intern at Bruhashith (Jan–Jun 2022), reducing page load time by 30% with HTML, CSS, JavaScript, and Angular.",
  contact: "You can reach Jagruthi via GitHub (jagruthijags24), LinkedIn (jagruthipullaiahgari), email (jagruthipullaiahgari@gmail.com), or phone (603-202-2119). She's based in the USA, willing to relocate, and open to new opportunities!",
  projects: "Her projects include: JaxCard with AI (React credit card site with AI chatbot), Data Jobs Dashboard (Power BI/Tableau), Bitcoin Price Prediction (83% accuracy with NLP), Cyber Security Attack Dashboard, Task Manager (React + Spring Boot), Elevator System Simulation, Asteroid Classification, Bruhashith Company Website, Portfolio Website, Disease Prediction, Risk Analytics for Banking, and an IEEE-published Research Paper on Cloud Data Security.",
  hobbies: "Jagruthi enjoys exploring new technologies, building side projects, coding for fun, reading tech blogs and books, and staying curious about AI and machine learning. She loves turning ideas into working applications!",
  interests: "She's interested in full-stack development, AI/ML, data analytics, cloud computing, and creating scalable, user-friendly applications. She's passionate about Agile practices, Gen AI, and continuous learning.",
  certifications: "Jagruthi holds certifications in Oracle Cloud Infrastructure 2025 Gen AI Professional, AWS, Google Data Analytics, and Agile Methodology.",
  publications: "She co-authored 'A Secure and Proficient Provable Data Possession with Privacy Protection in Cloud Storage,' published at IEEE ICCCI 2023. You can find it on IEEE Xplore.",
  education: "Check the Experience section for her professional background. She has strong hands-on experience from internships at Salesforce and Bruhashith.",
  default: "I'm Jags, Jagruthi's AI assistant! Ask me about her—skills, experience, projects, hobbies, interests, certifications, publications, or how to contact her. I know everything about her!"
}

function getMockResponse(query) {
  const q = query.toLowerCase()
  if (q.includes('who') || q.includes('about') || q.includes('introduce') || q.includes('jagruthi') || q.includes('jags')) return MOCK_ANSWERS.who
  if (q.includes('skill') || q.includes('tech') || q.includes('work with') || q.includes('technolog')) return MOCK_ANSWERS.skills
  if (q.includes('experience') || q.includes('work') || q.includes('intern') || q.includes('salesforce') || q.includes('bruhashith')) return MOCK_ANSWERS.experience
  if (q.includes('contact') || q.includes('reach') || q.includes('hire') || q.includes('email') || q.includes('linkedin') || q.includes('phone') || q.includes('github')) return MOCK_ANSWERS.contact
  if (q.includes('project')) return MOCK_ANSWERS.projects
  if (q.includes('hobb')) return MOCK_ANSWERS.hobbies
  if (q.includes('interest') || q.includes('passion') || q.includes('like')) return MOCK_ANSWERS.interests
  if (q.includes('certif')) return MOCK_ANSWERS.certifications
  if (q.includes('publication') || q.includes('paper') || q.includes('research') || q.includes('ieee')) return MOCK_ANSWERS.publications
  if (q.includes('education') || q.includes('study') || q.includes('degree')) return MOCK_ANSWERS.education
  return MOCK_ANSWERS.default
}

async function sendToAPI(message) {
  if (!API_URL) return null
  try {
    const res = await fetch(API_URL + '/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })
    const data = await res.json()
    return data.reply
  } catch {
    return null
  }
}

function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Jags, Jagruthi's assistant. Ask me anything about her—skills, hobbies, interests, experience, projects, or how to contact her!" },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight)
  }, [messages])

  const handleSend = async () => {
    const text = input.trim()
    if (!text) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', text }])
    setLoading(true)
    let reply
    if (API_URL) {
      reply = await sendToAPI(text)
    }
    if (reply == null) {
      reply = getMockResponse(text)
    }
    setMessages((m) => [...m, { role: 'assistant', text: reply }])
    setLoading(false)
  }

  return (
    <>
      <button
        className="ai-fab"
        onClick={() => setOpen(!open)}
        aria-label="Open Jags - Ask about Jagruthi"
      >
        <i className="bx bx-chat"></i>
      </button>

      {open && (
        <div className="ai-widget-wrapper">
        <div className="ai-book-3d">
          <div className="ai-page-flip ai-page-1" aria-hidden="true">
            <div className="ai-page-inner ai-page-cover">
              <span className="ai-book-title">Ask Jags</span>
              <span className="ai-book-subtitle">Get to know Jagruthi</span>
            </div>
          </div>
          <div className="ai-page-flip ai-page-2" aria-hidden="true">
            <div className="ai-page-inner">
              <h4>Skills & Experience</h4>
              <p>React · Java · Python · Spring Boot</p>
              <p>Salesforce · Bruhashith</p>
            </div>
          </div>
          <div className="ai-page-flip ai-page-3" aria-hidden="true">
            <div className="ai-page-inner">
              <h4>Projects & More</h4>
              <p>JaxCard · Data Analytics · ML</p>
              <p>IEEE Research · Certifications</p>
            </div>
          </div>
        <div className="ai-widget ai-page-content">
          <div className="ai-widget-header">
            <span>Jags</span>
            <button className="ai-close" onClick={() => setOpen(false)} aria-label="Close">
              <i className="bx bx-x"></i>
            </button>
          </div>
          <p className="ai-widget-intro">Ask me anything about Jagruthi—hobbies, interests, skills, experience, projects, contact info!</p>
          <div className="ai-messages" ref={listRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`ai-msg ai-msg--${msg.role}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="ai-msg ai-msg--assistant ai-msg--loading">Thinking...</div>}
          </div>
          <div className="ai-input-wrap">
            <input
              type="text"
              placeholder="Ask about hobbies, skills, projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} disabled={loading}>
              <i className="bx bx-send"></i>
            </button>
          </div>
        </div>
        </div>
        </div>
      )}
    </>
  )
}

export default AIAssistant
