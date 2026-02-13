import { useEffect, useState } from 'react'
import './Header.css'

function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <nav>
        <div className="nav-container">
          <button 
            className={`menu-btn ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><span className="close-hint"><i className="bx bx-chevron-left"></i> Close Menu</span></li>
          <li><a href="#contact" onClick={closeMenu}><i className="fa-solid fa-comments"></i> Let's Talk!</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#publications" onClick={closeMenu}>Publications</a></li>
          <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
          <li>
            <button
              type="button"
              className="nav-chat-btn"
              onClick={() => { closeMenu(); window.dispatchEvent(new CustomEvent('open-ai-chat')) }}
            >
              <i className="bx bx-chat"></i> Let's Chat
            </button>
          </li>
        </ul>
        <div className="nav-social">
          <a href="https://github.com/jagruthijags24" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jagruthipullaiahgari/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin-square"></i></a>
        </div>
      </nav>
    </header>
  )
}

export default Header
