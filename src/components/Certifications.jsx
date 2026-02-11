import './Certifications.css'

const CERTIFICATIONS = [
  'Oracle Cloud Infrastructure 2025 Gen AI Professional',
  'AWS',
  'Google Data Analytics',
  'Agile Methodology',
]

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-header">
        <h2 className="section-title">Certifications</h2>
        <span className="section-back">Certifications</span>
      </div>
      <div className="certifications-container">
        <div className="certifications-list">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert} className="cert-item">
              <i className="bx bx-certification"></i>
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
