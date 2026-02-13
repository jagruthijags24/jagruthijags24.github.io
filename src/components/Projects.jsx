import './Projects.css'
import TaskManagerDashboard from './TaskManagerDashboard'
import CyberSecurityDashboard from './CyberSecurityDashboard'
import ElevatorSystemDashboard from './ElevatorSystemDashboard'
import AIGenDashboard from './AIGenDashboard'
import DataJobsDashboard from './DataJobsDashboard'
import BitcoinDashboard from './BitcoinDashboard'
import AsteroidDashboard from './AsteroidDashboard'
import BruhashithDashboard from './BruhashithDashboard'
import PortfolioPreview from './PortfolioPreview'
import DiseasePredictionPreview from './DiseasePredictionPreview'
import RiskAnalyticsPreview from './RiskAnalyticsPreview'
import ResearchPaperPreview from './ResearchPaperPreview'
import ResearchPaperScroll from './ResearchPaperScroll'
import JaxCardPreview from './JaxCardPreview'

const PROJECTS = [
  {
    title: 'Data Jobs Dashboard',
    description: 'Interactive dashboard for job seekers and career transitioners showcasing 2024 data science job market insights. Features salary comparisons, location trends, and role analysis using real-world datasets.',
    image: 'data-jobs-dashboard',
    tech: ['Power BI', 'Tableau', 'Excel', 'Python', 'ETL'],
    category: 'Data Analytics',
    github: 'https://github.com/jagruthijags24/-Data-Jobs-Dashboard',
    live: null,
  },
  {
    title: 'Bitcoin Price Movement Prediction',
    description: 'Sentiment-driven model to forecast Bitcoin trends using ETL from news APIs. Built NLP pipeline for sentiment analysis, achieved 83% accuracy. Visualized with Matplotlib and Seaborn.',
    image: 'bitcoin-dashboard',
    tech: ['Python', 'NLP', 'Machine Learning', 'TextBlob', 'Scikit-learn'],
    category: 'Machine Learning',
    github: 'https://github.com/jagruthijags24/BITCOIN-PRICE-MOVEMENT-BASED-ON-NEWS',
    live: null,
  },
  {
    title: 'JaxCard with AI',
    description: 'Fully responsive credit card website built with React featuring an AI assistant chatbot to answer questions about cards, memberships, and features. Clean UI with animations, React Router, and a peaceful blue theme.',
    image: 'jaxcard-preview',
    tech: ['React', 'Vite', 'React Router', 'AI', 'CSS'],
    category: 'Web Development',
    github: 'https://github.com/jagruthijags24/jaxcard',
    live: 'https://698f3a0bb9fc360ee0db9fe2--chimerical-choux-0d8870.netlify.app/',
  },
  {
    title: 'PromptFlow',
    description: 'Full-stack AI prompt orchestration platform for LLM workflows. Node.js/Express REST API with React frontend, real-time token streaming, prompt versioning, and Gen AI integration. Built for scalable AI application development.',
    image: 'ai-dashboard',
    tech: ['Node.js', 'React', 'Express', 'LLM', 'Gen AI'],
    category: 'Full-Stack',
    github: null,
    live: null,
  },
  {
    title: 'Cyber Security Attack Dashboard',
    description: 'Automated ETL pipeline transforming threat data into Tableau dashboard. Cut reporting time by 50% and enhanced visibility for security monitoring.',
    image: 'cyber-dashboard',
    tech: ['Tableau', 'Python', 'Excel', 'ETL'],
    category: 'Data Analytics',
    github: 'https://github.com/jagruthijags24/CyberSecurity_Attack_Tableau-',
    live: null,
  },
  {
    title: 'Task Manager',
    description: 'Full-stack task management app with optimized React components using Hooks, memoization, lazy loading, and client-side validation for improved performance and UX.',
    image: 'dashboard',
    tech: ['React', 'Spring Boot', 'Firebase'],
    category: 'Full-Stack',
    github: null,
    live: null,
  },
  {
    title: 'Elevator System Simulation',
    description: 'Java-based elevator control simulation modeling real-time scheduling, load balancing, and concurrency. Evaluated system behavior under peak traffic for performance and scalability.',
    image: 'elevator-dashboard',
    tech: ['Java', 'Jupyter Notebook'],
    category: 'Systems',
    github: null,
    live: null,
  },
  {
    title: 'Asteroid Classification & Visualization',
    description: 'ML project for classifying and visualizing asteroid data. Built with Jupyter Notebook for data analysis and predictive modeling.',
    image: 'asteroid-dashboard',
    tech: ['Python', 'Jupyter Notebook', 'Machine Learning'],
    category: 'Machine Learning',
    github: 'https://github.com/jagruthijags24/Asteriod-Classification-and-Visualization-main',
    live: null,
  },
  {
    title: 'Bruhashith Company Website',
    description: 'Scalable, responsive frontend built with HTML, CSS, JavaScript, and Angular. Reduced page load time by 30% and integrated REST APIs for dynamic content.',
    image: '/Images/Projects/bruhashith-website.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Angular'],
    category: 'Web Development',
    github: 'https://github.com/jagruthijags24/Bruhashith',
    live: null,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React showcasing projects, skills, and experience. Modern, responsive design with smooth animations.',
    image: '/Images/Projects/portfolio.webp',
    tech: ['React', 'Vite', 'CSS'],
    category: 'Web Development',
    github: 'https://github.com/jagruthijags24/jagruthijags24.github.io',
    live: 'https://jagruthijags24.github.io',
  },
  {
    title: 'Disease Prediction Model',
    description: 'Machine learning project for predicting disease outcomes. Built with Jupyter Notebook using classification and predictive modeling techniques.',
    image: 'disease-prediction-preview',
    tech: ['Python', 'Jupyter Notebook', 'Machine Learning'],
    category: 'Machine Learning',
    github: 'https://github.com/jagruthijags24/Prediction-of-disease-',
    live: null,
  },
  {
    title: 'Risk Analytics for Banking',
    description: 'Data analytics project for banking and financial services. Analyzes risk metrics, credit patterns, and financial data using Jupyter Notebook.',
    image: 'risk-analytics-preview',
    tech: ['Python', 'Jupyter Notebook', 'Data Analytics'],
    category: 'Data Analytics',
    github: 'https://github.com/jagruthijags24/RISK-ANALYTICS-FOR-BANKING-AND-FINANCIAL-SERVICES-main',
    live: null,
  },
  {
    title: 'Research Paper - Cloud Data Security',
    description: 'IEEE publication on provable data possession with privacy protection in cloud storage. Published at IEEE ICCCI 2023 Conference.',
    image: 'research-paper-scroll',
    tech: ['Research', 'Cloud Security', 'Data Privacy'],
    category: 'Research',
    github: 'https://github.com/jagruthijags24/RESEARCHPAPER_Publication',
    live: 'https://ieeexplore.ieee.org/document/10128477',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-wrapper">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <span className="section-back">Projects</span>
        </div>

        <div className="projects-showcase">
          {PROJECTS.map((project, index) => {
            const link = project.live || project.github || '#'
            const linkText = project.live ? 'View live project' : project.github ? 'View source code' : null

            return (
              <article
                key={project.title}
                className={`project-block ${index % 2 === 1 ? 'project-block--reverse' : ''}`}
              >
                <div className="project-block__preview">
                  {project.image === 'dashboard' && <TaskManagerDashboard />}
                  {project.image === 'cyber-dashboard' && <CyberSecurityDashboard />}
                  {project.image === 'elevator-dashboard' && <ElevatorSystemDashboard />}
                  {project.image === 'ai-dashboard' && <AIGenDashboard />}
                  {project.image === 'data-jobs-dashboard' && <DataJobsDashboard />}
                  {project.image === 'bitcoin-dashboard' && <BitcoinDashboard />}
                  {project.image === 'asteroid-dashboard' && <AsteroidDashboard />}
                  {project.image === 'bruhashith-dashboard' && <BruhashithDashboard />}
                  {project.image === 'portfolio-preview' && <PortfolioPreview />}
                  {project.image === 'disease-prediction-preview' && <DiseasePredictionPreview />}
                  {project.image === 'risk-analytics-preview' && <RiskAnalyticsPreview />}
                  {project.image === 'research-paper-preview' && <ResearchPaperPreview />}
                  {project.image === 'research-paper-scroll' && <ResearchPaperScroll />}
                  {project.image === 'jaxcard-preview' && <JaxCardPreview />}
                  {typeof project.image === 'string' && project.image.startsWith('/') && (
                    <img src={project.image} alt={project.title} />
                  )}
                </div>

                <div className="project-block__content">
                  <span className="project-block__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="project-block__title">{project.title}</h3>
                  <p className="project-block__description">{project.description}</p>
                  {linkText && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-block__link"
                    >
                      {linkText} →
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <div className="see-more">
          <a href="https://github.com/jagruthijags24?tab=repositories" target="_blank" rel="noopener noreferrer" className="see-more-btn">
            View All on GitHub <i className="bx bx-arrow-back"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
