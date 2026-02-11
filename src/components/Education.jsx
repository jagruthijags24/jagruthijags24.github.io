import './Education.css'

const EDUCATION = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of North Texas',
    location: 'Denton, TX',
    period: 'Aug 2023 – May 2025',
    details: 'Specializing in software engineering, machine learning, and scalable systems.',
  },
  {
    degree: 'Bachelor of Technology in Computer Science and Systems Engineering',
    school: 'Sree Vidyanikethan Engineering College',
    location: 'Tirupathi, India',
    period: 'Aug 2019 – May 2023',
    details: 'Accredited by AICTE, NBA, and NAAC. Graduated with CGPA of 8.30.',
  },
]

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <span className="section-back">Education</span>
      </div>
      <div className="education-list">
        {EDUCATION.map((item) => (
          <div key={item.school} className="education-card">
            <h3>{item.degree}</h3>
            <p className="school">{item.school}</p>
            <p className="location">{item.location}</p>
            <p className="details">{item.details}</p>
            <span className="period">{item.period}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
