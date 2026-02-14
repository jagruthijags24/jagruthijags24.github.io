import { useState } from 'react'
import IntroOverlay from './components/IntroOverlay'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import AIAssistant from './components/AIAssistant'
import Footer from './components/Footer'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {introDone && <AIAssistant />}
      <main>
        <Hero introOverlayDone={introDone} />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Publications />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
