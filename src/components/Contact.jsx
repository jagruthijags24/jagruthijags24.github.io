import './Contact.css'
import ScrollReveal from './ScrollReveal'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <ScrollReveal from="left">
      <div className="section-header">
        <h2 className="section-title">Let's Connect</h2>
        <span className="section-back">Contact</span>
      </div>
      <p className="contact-intro">
        Feel free to reach out! I'm open to new opportunities and collaborations.
      </p>
      <div className="contact-links">
        <a href="https://github.com/jagruthijags24" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fa-brands fa-github"></i>
          <span>GitHub</span>
          <i className="bx bx-right-arrow-alt"></i>
        </a>
        <a href="https://www.linkedin.com/in/jagruthipullaiahgari/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
          <i className="bx bx-right-arrow-alt"></i>
        </a>
        <a href="mailto:jagruthipullaiahgari@gmail.com" className="contact-link">
          <i className="bx bx-envelope"></i>
          <span>Email</span>
          <i className="bx bx-right-arrow-alt"></i>
        </a>
        <a href="tel:+16032022119" className="contact-link">
          <i className="fa-solid fa-phone"></i>
          <span>603-202-2119</span>
          <i className="bx bx-right-arrow-alt"></i>
        </a>
      </div>
      <p className="contact-note">
        <i className="bx bxs-map"></i> USA · Willing to relocate
      </p>
      </ScrollReveal>
    </section>
  )
}

export default Contact
