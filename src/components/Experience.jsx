import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Experience.css'

const Experience = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const experiences = [
    {
      company: 'Prodigy InfoTech',
      position: 'Data Science Intern',
      duration: 'July 2025 - August 2025',
      location: 'India',
      description: [
        'Worked on data-driven applications involving cleaning, analysis, and validation',
        'Developed and tested Python scripts to ensure correctness and consistency',
        'Debugged data inconsistencies to improve result reliability',
        'Recognized for work ethic and attention to detail (LOR received)'
      ]
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
              targets: '.experience-card',
              opacity: [0, 1],
              translateX: [-50, 0],
              delay: anime.stagger(200),
              duration: 800,
              easing: 'easeOutExpo'
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <h2 className="section-title" ref={titleRef}>Professional Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="experience-badge">Internship</span>
              </div>
              <h4 className="position">{exp.position}</h4>
              <div className="experience-meta">
                <span className="duration">{exp.duration}</span>
                <span className="separator">•</span>
                <span className="location">{exp.location}</span>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

