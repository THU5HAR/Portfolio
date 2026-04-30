import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef(null)

  const projects = [
    {
      title: 'Online Exam System (Full Stack)',
      description: 'Online exam portal with Admin, Teacher, and Student role-based access. Implemented JWT authentication, WebSocket monitoring, and auto-grading. Deployed on Render using Docker with PostgreSQL database.',
      tools: ['Java Spring Boot', 'React', 'PostgreSQL', 'JWT', 'WebSocket', 'Docker'],
      category: 'Full Stack'
    },
    {
      title: 'Blockchain-Based Medicine Counterfeit Prevention System',
      description: 'Built web-based system to verify medicine authenticity using blockchain-inspired logic. Implemented unique identification and verification workflows. Developed frontend interfaces for verification and monitoring.',
      tools: ['React', 'Node.js', 'JavaScript'],
      category: 'Web Development'
    },
    {
      title: 'Pain Monitoring Application',
      description: 'Built web application to record and track patient pain levels with interactive pain-scale interface. Designed intuitive UI for pain-scale input and visualization with real-time data updates. Implemented data tracking and historical pain level analysis.',
      tools: ['JavaScript', 'HTML', 'CSS'],
      category: 'Web Development'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { opacity: 0, y: 50, rotateX: 5 },
        {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 82%' }
        }
      )

      // Tool tags pop in
      gsap.fromTo('.tool-tag',
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1, scale: 1, duration: 0.3, stagger: 0.03, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 75%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2 className="section-title">Featured Projects</h2>
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
