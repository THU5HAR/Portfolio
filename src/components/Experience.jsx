import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Experience.css'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const sectionRef = useRef(null)

  const experiences = [
    {
      company: 'TAP Academy',
      position: 'Java Full Stack Development Training',
      duration: 'February 2026 – Present',
      location: 'India',
      badge: 'Training',
      description: [
        'Undergoing intensive Java Full Stack training covering Core Java, OOP and Spring Boot',
        'Building full-stack applications with Spring Boot (backend), React (frontend), and MySQL (database)',
        'Developing RESTful APIs with JWT-based authentication, role-based access control, and SOLID design principles',
        'Implementing microservice patterns and practicing clean code with Git-based version control workflows',
        'Containerizing applications using Docker and deploying to cloud platforms such as Render',
        'Completing hands-on assignments and mini-projects simulating real-world enterprise development scenarios'
      ]
    },
    {
      company: 'VisionAstraa EV Academy',
      position: 'Web Developer Intern',
      duration: 'February 2026 - Present',
      location: 'India',
      badge: 'Internship',
      description: [
        'Developing responsive web pages using HTML, CSS, and JavaScript',
        'Implementing clean, user-friendly UI layouts with performance focus',
        'Converting design requirements into structured frontend components',
        'Collaborating with team members to ensure cross-browser compatibility and responsive design',
        'Optimizing web applications for maximum speed and scalability'
      ]
    },
    {
      company: 'Prodigy InfoTech',
      position: 'Data Science Intern',
      duration: 'July 2025 - August 2025',
      location: 'Remote, India',
      badge: 'Internship',
      description: [
        'Completed data-driven projects applying advanced analytics and problem-solving techniques',
        'Worked on statistical data analysis and web design with focus on impactful solutions',
        'Developed data visualization dashboards using Python libraries including Pandas, NumPy, and Matplotlib',
        'Collaborated with cross-functional teams following agile methodologies for project delivery'
      ]
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.exp-timeline',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      tl.fromTo('.experience-card',
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'none' }
      )
      .fromTo('.timeline-dot',
        { scale: 0 },
        { scale: 1, duration: 0.4, stagger: 0.2, ease: 'none' },
        '<'
      )
      .fromTo('.experience-description li',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'none' },
        '<'
      );
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <h2 className="section-title">Professional Experience</h2>
      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="experience-badge">{exp.badge}</span>
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
