import './Experience.css'

const EXPERIENCES = [
  {
    title: 'Application Developer Intern',
    company: 'Salesforce',
    location: 'Andhra Pradesh, India',
    period: 'Jul 2022 – Dec 2022',
    points: [
      'Improved backend performance and user experience by 20% by debugging Apex services, optimizing business logic, and refactoring inefficient components.',
      'Developed scalable features using Java, Apex, and Lightning Components within a cloud-based SaaS platform.',
      'Designed and tested RESTful APIs using Postman and JUnit for cross-system data consistency.',
      'Worked in Agile/Scrum environment with sprint planning, code reviews, and retrospectives.',
      'Supported release readiness and production stability during feature rollouts.',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'Bruhashith',
    location: 'Andhra Pradesh, India',
    period: 'Jan 2022 – Jun 2022',
    points: [
      'Reduced page load time by 30% by building scalable, responsive frontend applications with HTML, CSS, JavaScript, and Angular.',
      'Collaborated with backend engineers to integrate REST APIs and deliver dynamic, data-driven UIs.',
      'Applied UI/UX best practices and responsive design for accessibility and visual consistency.',
      'Improved frontend code structure and reusability with organized components.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <span className="section-back">Experience</span>
      </div>
      <div className="experience-list">
        {EXPERIENCES.map((exp) => (
          <div key={exp.company} className="experience-card">
            <div className="exp-header">
              <h3>{exp.title}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <p className="company"><span className="company-name">{exp.company}</span> · {exp.location}</p>
            <ul className="exp-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
