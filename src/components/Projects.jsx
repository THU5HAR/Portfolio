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
      description: 'Built web application to record and track patient pain levels with interactive pain-scale interface. Designed intuitive UI for pain-scale input and visualization with real-time data updates.',
      tools: ['JavaScript', 'HTML', 'CSS'],
      category: 'Web Development'
    },
    {
      title: 'Curve Guard for Hill Stations (IoT)',
      description: 'Developed IoT-based safety system with Firebase tracking for real-time monitoring of hill station curves.',
      tools: ['Arduino', 'C', 'Firebase'],
      category: 'IoT'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 82%',
          end: 'top 15%',
          toggleActions: 'play reverse play reverse',
        }
      })
      tl.fromTo('.project-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      )
      .fromTo('.tool-tag',
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.25, stagger: 0.02, ease: 'back.out(1.5)' },
        '-=0.3'
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
