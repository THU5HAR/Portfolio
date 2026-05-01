import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 85%',
          end: 'top 25%',
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      tl.fromTo('.about-text p', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'none' }
      )
      .fromTo('.highlight-item',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'none' },
        '<'
      )
      .fromTo('.stat-card',
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'none' },
        '<'
      );
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
            Currently working as a <strong>Web Developer Intern</strong> at VisionAstraa EV Academy
            and undergoing intensive <strong>Java Full Stack Training</strong> at TAP Academy.
            Previously interned as a <strong>Data Science Intern</strong> at Prodigy InfoTech, contributing
            to statistical data analysis and data-driven solutions.
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
            <div className="stat-number">5+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6+</div>
            <div className="stat-label">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
