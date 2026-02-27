import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Projects.css'

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const projects = [
    {
      title: 'Blockchain-Based Medicine Counterfeit Prevention System',
      description: 'Built web-based system to verify medicine authenticity using blockchain-inspired logic. Implemented unique identification and verification workflows with frontend interfaces for monitoring.',
      tools: ['React', 'Node.js', 'JavaScript'],
      category: 'Web Development'
    },
    {
      title: 'Hospital Management Display System',
      description: 'Developed real-time hospital display dashboard for patient and admin views. Implemented dynamic UI components and alerts using JavaScript, integrating Firebase for real-time synchronization.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      category: 'Web Development'
    },
    {
      title: 'Pain Monitoring Application',
      description: 'Built web application to record and track patient pain levels. Designed intuitive UI for pain-scale input and visualization.',
      tools: ['JavaScript', 'Web Technologies'],
      category: 'Web Development'
    },
    {
      title: 'Curve Guard for Hill Stations (IoT)',
      description: 'Developed IoT-based safety system with Firebase tracking for real-time monitoring.',
      tools: ['Arduino', 'C', 'Firebase'],
      category: 'IoT'
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

