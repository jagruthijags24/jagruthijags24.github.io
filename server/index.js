/**
 * Node.js + Express backend for AI Assistant
 * Run: npm install express openai
 * Then: node index.js
 * Set OPENAI_API_KEY for real AI, or it uses mock responses
 */

const express = require('express')
const cors = require('cors')
const OpenAI = require('openai')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001

// Mock responses when no API key
const MOCK_ANSWERS = {
  who: "I'm Jagruthi Pullaiahgari, a Software Engineer specializing in full-stack development with React, Java, Spring Boot, AI and related technologies.",
  skills: "I work with React, JavaScript, Java, Python, Spring Boot, Node.js, HTML/CSS, Git, Firebase, Tableau, PostgreSQL, and AWS.",
  experience: "I have experience in full-stack development, data analytics, and AI/ML projects. Check my Experience and Projects sections!",
  contact: "You can reach me via the Contact section. I'm based in the USA and open to opportunities.",
  projects: "My projects include JaxCard with AI, Data Jobs Dashboard, Bitcoin Price Prediction, Cyber Security Dashboard, and more.",
  default: "I'm an AI assistant for Jagruthi's portfolio. Ask me about her skills, experience, projects, or how to contact her!"
}

function getMockReply(query) {
  const q = query.toLowerCase()
  if (q.includes('who') || q.includes('about')) return MOCK_ANSWERS.who
  if (q.includes('skill') || q.includes('tech')) return MOCK_ANSWERS.skills
  if (q.includes('experience') || q.includes('work')) return MOCK_ANSWERS.experience
  if (q.includes('contact') || q.includes('reach') || q.includes('hire')) return MOCK_ANSWERS.contact
  if (q.includes('project')) return MOCK_ANSWERS.projects
  return MOCK_ANSWERS.default
}

app.post('/chat', async (req, res) => {
  const { message } = req.body || {}
  if (!message || typeof message !== 'string') {
    return res.json({ reply: "Please ask a question about Jagruthi!" })
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.json({ reply: getMockReply(message) })
  }

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant for Jagruthi Pullaiahgari\'s portfolio. Answer questions about her skills (React, Java, Python, Node.js, AI/ML), experience, and projects. Keep responses concise (2-3 sentences).'
        },
        { role: 'user', content: message }
      ],
      max_tokens: 150
    })
    const reply = completion.choices[0]?.message?.content || getMockReply(message)
    res.json({ reply })
  } catch (err) {
    console.error(err)
    res.json({ reply: getMockReply(message) })
  }
})

app.listen(PORT, () => {
  console.log(`AI Assistant API running on http://localhost:${PORT}`)
})
