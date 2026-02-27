import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Experience.css'

const Experience = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const experiences = [
    {
      company: 'VisionAstraa EV Academy',
      position: 'Web Developer Intern',
      duration: 'February 2026 - Present',
      location: 'India',
      description: [
        'Developing responsive web pages using HTML, CSS, and JavaScript',
        'Implementing clean, user-friendly UI layouts with performance focus',
        'Converting design requirements into structured frontend components',
        'Collaborating with team members to ensure cross-browser compatibility and responsive design',
        'Optimizing web applications for maximum speed and scalability'
      ]
    },
    {
      company: 'TAP Academy India',
      position: 'Java Full Stack Development Training',
      duration: 'February 2026 - Present',
      location: 'Remote, India',
      description: [
        'Undergoing comprehensive training in Java Full Stack development with focus on core Java, advanced Java, and Spring Boot',
        'Learning frontend technologies including HTML, CSS, JavaScript, and React for full stack development',
        'Working on hands-on projects to build end-to-end web applications using Java backend and modern frontend frameworks',
        'Gaining expertise in database management with MySQL and implementing RESTful APIs'
      ]
    },
    {
      company: 'Prodigy InfoTech',
      position: 'Data Science Intern',
      duration: 'July 2025 - August 2025',
      location: 'Remote, India',
      description: [
        'Completed data-driven projects applying advanced analytics and problem-solving techniques',
        'Worked on statistical data analysis and web design with focus on impactful solutions',
        'Developed data visualization dashboards using Python libraries including Pandas, NumPy, and Matplotlib',
        'Collaborated with cross-functional teams following agile methodologies for project delivery'
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

