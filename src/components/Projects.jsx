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

const PROJECTS = [
  {
    title: 'Data Jobs Dashboard',
    description: 'Interactive dashboard for job seekers and career transitioners showcasing 2024 data science job market insights. Features salary comparisons, location trends, and role analysis using real-world datasets.',
    image: 'data-jobs-dashboard',
    tech: ['Power BI', 'Tableau', 'Excel', 'Python', 'ETL'],
    github: 'https://github.com/jagruthijags24/-Data-Jobs-Dashboard',
    live: null,
  },
  {
    title: 'Bitcoin Price Movement Prediction',
    description: 'Sentiment-driven model to forecast Bitcoin trends using ETL from news APIs. Built NLP pipeline for sentiment analysis, achieved 83% accuracy. Visualized with Matplotlib and Seaborn.',
    image: 'bitcoin-dashboard',
    tech: ['Python', 'NLP', 'Machine Learning', 'TextBlob', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/jagruthijags24/BITCOIN-PRICE-MOVEMENT-BASED-ON-NEWS',
    live: null,
  },
  {
    title: 'PromptFlow',
    description: 'Full-stack AI prompt orchestration platform for LLM workflows. Node.js/Express REST API with React frontend, real-time token streaming, prompt versioning, and Gen AI integration. Built for scalable AI application development.',
    image: 'ai-dashboard',
    tech: ['Node.js', 'React', 'Express', 'LLM', 'Gen AI', 'REST API', 'WebSocket'],
    github: null,
    live: null,
  },
  {
    title: 'Cyber Security Attack Dashboard',
    description: 'Automated ETL pipeline transforming threat data into Tableau dashboard. Cut reporting time by 50% and enhanced visibility for security monitoring.',
    image: 'cyber-dashboard',
    tech: ['Tableau', 'Python', 'Excel', 'ETL'],
    github: 'https://github.com/jagruthijags24/CyberSecurity_Attack_Tableau-',
    live: null,
  },
  {
    title: 'Task Manager',
    description: 'Full-stack task management app with optimized React components using Hooks, memoization, lazy loading, and client-side validation for improved performance and UX.',
    image: 'dashboard',
    tech: ['React', 'Spring Boot', 'Firebase', 'useState', 'useEffect'],
    github: null,
    live: null,
  },
  {
    title: 'Elevator System Simulation',
    description: 'Java-based elevator control simulation modeling real-time scheduling, load balancing, and concurrency. Evaluated system behavior under peak traffic for performance and scalability.',
    image: 'elevator-dashboard',
    tech: ['Java', 'Jupyter Notebook', 'Google Colab'],
    github: null,
    live: null,
  },
  {
    title: 'Asteroid Classification & Visualization',
    description: 'ML project for classifying and visualizing asteroid data. Built with Jupyter Notebook for data analysis and predictive modeling.',
    image: 'asteroid-dashboard',
    tech: ['Python', 'Jupyter Notebook', 'Machine Learning'],
    github: 'https://github.com/jagruthijags24/Asteriod-Classification-and-Visualization-main',
    live: null,
  },
  {
    title: 'Bruhashith Company Website',
    description: 'Scalable, responsive frontend built with HTML, CSS, JavaScript, and Angular. Reduced page load time by 30% and integrated REST APIs for dynamic content.',
    image: '/Images/Projects/bruhashith-website.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Angular', 'REST API'],
    github: 'https://github.com/jagruthijags24/Bruhashith',
    live: null,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React showcasing projects, skills, and experience. Modern, responsive design with smooth animations.',
    image: '/Images/Projects/portfolio.webp',
    tech: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/jagruthijags24/jagruthijags24.github.io',
    live: 'https://jagruthijags24.github.io',
  },
  {
    title: 'Disease Prediction Model',
    description: 'Machine learning project for predicting disease outcomes. Built with Jupyter Notebook using classification and predictive modeling techniques.',
    image: 'disease-prediction-preview',
    tech: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Scikit-learn'],
    github: 'https://github.com/jagruthijags24/Prediction-of-disease-',
    live: null,
  },
  {
    title: 'Risk Analytics for Banking',
    description: 'Data analytics project for banking and financial services. Analyzes risk metrics, credit patterns, and financial data using Jupyter Notebook.',
    image: 'risk-analytics-preview',
    tech: ['Python', 'Jupyter Notebook', 'Data Analytics', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/jagruthijags24/RISK-ANALYTICS-FOR-BANKING-AND-FINANCIAL-SERVICES-main',
    live: null,
  },
  {
    title: 'Research Paper - Cloud Data Security',
    description: 'IEEE publication on provable data possession with privacy protection in cloud storage. Published at IEEE ICCCI 2023 Conference.',
    image: 'research-paper-scroll',
    tech: ['Research', 'Cloud Security', 'Data Privacy'],
    github: 'https://github.com/jagruthijags24/RESEARCHPAPER_Publication',
    live: 'https://ieeexplore.ieee.org/document/10128477',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <span className="section-back">Projects</span>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image">
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
              {typeof project.image === 'string' && project.image.startsWith('/') && (
                <img src={project.image} alt={project.title} />
              )}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <i className="fa-brands fa-github"></i> Source
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-solid">
                    <i className="bx bx-globe"></i> Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="see-more">
        <a href="https://github.com/jagruthijags24?tab=repositories" target="_blank" rel="noopener noreferrer" className="see-more-btn">
          View All on GitHub <i className="bx bx-arrow-back"></i>
        </a>
      </div>
    </section>
  )
}

export default Projects
