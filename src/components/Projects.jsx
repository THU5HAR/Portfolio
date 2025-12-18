import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Projects.css'

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const projects = [
    {
      title: 'US Traffic Accident Pattern Analysis',
      description: 'Analyzed 7.7M+ accident records to identify patterns and risk factors. Performed validation, analysis, and visualization.',
      tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly'],
      category: 'Data Analytics'
    },
    {
      title: 'Hospital Management Display System',
      description: 'Built a real-time dashboard for patient and admin interfaces. Implemented frontend logic and tested UI workflows.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      category: 'Web Development'
    },
    {
      title: 'Customer Purchase Prediction System',
      description: 'Developed a predictive model for term deposit subscriptions. Focused on preprocessing, testing, and evaluation.',
      tools: ['Python', 'Pandas', 'Scikit-learn'],
      category: 'Machine Learning'
    },
    {
      title: 'Curve Guard for Hill Stations (IoT)',
      description: 'Designed an IoT safety system with real-time tracking. Integrated hardware and software with systematic testing.',
      tools: ['Arduino', 'C', 'Firebase'],
      category: 'IoT'
    },
    {
      title: 'Sentiment Analysis of Social Media Data',
      description: 'Processed Twitter datasets for sentiment trends and patterns. Analyzed large-scale social media data.',
      tools: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
      category: 'Data Analytics'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: titleRef.current,
              opacity: [0, 1],
              translateY: [-30, 0],
              duration: 800,
              easing: 'easeOutExpo'
            })

            anime({
              targets: '.project-card',
              opacity: [0, 1],
              scale: [0.9, 1],
              delay: anime.stagger(100),
              duration: 600,
              easing: 'easeOutExpo'
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2 className="section-title" ref={titleRef}>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-category">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, toolIndex) => (
                <span key={toolIndex} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

