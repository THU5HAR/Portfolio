import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-text p', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-text', start: 'top 80%' }
        }
      )

      gsap.fromTo('.highlight-item',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-highlights', start: 'top 85%' }
        }
      )

      gsap.fromTo('.stat-card',
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.about-stats', start: 'top 85%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Computer Science student specializing in <strong>Java Full Stack Development</strong> with
            hands-on experience in <strong>Spring Boot</strong>, <strong>React</strong>, and <strong>MySQL</strong>.
            Proficient in building RESTful APIs, JWT authentication, and deploying scalable web applications.
          </p>
          <p>
            Currently undergoing intensive <strong>Java Full Stack Training</strong> at TAP Academy,
            covering Core Java, OOP, Spring Boot, microservice patterns, and Docker containerization.
            Building end-to-end applications with modern frontend and backend frameworks.
          </p>
          <p>
            Pursuing a <strong>Bachelor of Engineering in Computer Science</strong> at Yenepoya
            Institute of Technology (VTU). Passionate about clean code, scalable architecture,
            and delivering production-grade software.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">⚡</div>
              <div>
                <h4>Full Stack Development</h4>
                <p>Spring Boot backend + React frontend with MySQL databases</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🔐</div>
              <div>
                <h4>API & Authentication</h4>
                <p>RESTful APIs with JWT-based auth and role-based access control</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🐳</div>
              <div>
                <h4>DevOps & Deployment</h4>
                <p>Docker containerization and cloud deployment on Render</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">8.1</div>
            <div className="stat-label">CGPA</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2026</div>
            <div className="stat-label">Expected Graduation</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
