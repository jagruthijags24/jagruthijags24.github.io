import './Publications.css'
import ScrollReveal from './ScrollReveal'

function Publications() {
  return (
    <section id="publications" className="section">
      <ScrollReveal from="left">
      <div className="section-header">
        <h2 className="section-title">Publications</h2>
        <span className="section-back">Publications</span>
      </div>
      <div className="publication-card">
        <div className="publication-card-header">
          <h3>A Secure and Proficient Provable Data Possession with Privacy Protection in Cloud Storage</h3>
          <a 
            href="https://ieeexplore.ieee.org/document/10128477" 
            target="_blank" 
            rel="noopener noreferrer"
            className="publication-live-btn"
          >
            <i className="bx bx-globe"></i> View on IEEE
          </a>
        </div>
        <p className="venue">Published at IEEE ICCCI 2023 Conference</p>
        <a 
          href="https://doi.org/10.1109/ICCCI56745.2023.10128477" 
          target="_blank" 
          rel="noopener noreferrer"
          className="doi-link"
        >
          DOI: 10.1109/ICCCI56745.2023.10128477 <i className="bx bx-link-external"></i>
        </a>
      </div>
      </ScrollReveal>
    </section>
  )
}

export default Publications
