import './About.css'
import ScrollReveal from './ScrollReveal'

const TECHNOLOGIES = [
  { name: 'React', icon: 'fa-brands fa-react' },
  { name: 'JavaScript', icon: '/Images/Icons/javaScript.svg', type: 'img' },
  { name: 'Java', icon: '/Images/Icons/java.svg', type: 'img' },
  { name: 'Python', icon: '/Images/Icons/python.svg', type: 'img' },
  { name: 'Spring Boot', icon: 'bx bx-code' },
  { name: 'Node.js', icon: 'fa-brands fa-node' },
  { name: 'HTML/CSS', icon: '/Images/Icons/html.svg', type: 'img' },
  { name: 'Git', icon: '/Images/Icons/gitt.svg', type: 'img' },
  { name: 'Firebase', icon: 'bx bx-cloud' },
  { name: 'Tableau', icon: 'bx bx-bar-chart-alt' },
  { name: 'PostgreSQL', icon: 'bx bx-data' },
  { name: 'AWS', icon: 'bx bx-server' },
]

function About() {
  return (
    <section id="about" className="section">
      <ScrollReveal from="left">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <span className="section-back">About Me</span>
      </div>
      <div className="about-container">
        <div className="about-card">
          <div className="profile-section">
            <div className="profile-picture">
              <img src="/Images/Profile/jagruthi-profile.png" alt="Jagruthi Pullaiahgari" />
            </div>
            <div className="profile-info">
              <h3>Jagruthi Pullaiahgari</h3>
              <p><i className="bx bxs-map"></i> Mountain View, California</p>
              <p className="summary-text">
                Software Engineer with hands-on experience in full-stack and frontend development. 
                Strong foundation in Agile/Scrum, cloud platforms, and scalable application design. 
                Exposure to AI and Generative AI through ML, NLP, and data-driven projects.
              </p>
            </div>
          </div>
          <div className="tech-grid">
            <h4>Technologies I Work With</h4>
            <div className="tech-list">
              {TECHNOLOGIES.map((tech) => (
                <div key={tech.name} className="tech-item">
                  {tech.type === 'img' ? (
                    <img src={tech.icon} alt={tech.name} />
                  ) : (
                    <i className={tech.icon}></i>
                  )}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  )
}

export default About
