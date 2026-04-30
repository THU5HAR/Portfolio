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
            Currently working as a <strong>Web Developer Intern</strong> at VisionAstraa EV Academy,
            building responsive web interfaces and front-end features. Undergoing
            <strong> Java Full Stack Development Training</strong> at TAP Academy India.
            Previously interned as a <strong>Data Science Intern</strong> at Prodigy InfoTech, contributing
            to statistical data analysis and web design with a focus on impactful data-driven solutions.
          </p>
          <p>
            Pursuing a <strong>Bachelor of Engineering in Computer Science</strong> at Yenepoya
            Institute of Technology, bringing strong analytical skills and a disciplined
            approach to debugging and reliability.
          </p>
          <p>
            Completed multiple job simulations and certifications, enhancing
            capabilities in web development and software engineering. Always exploring
            new technologies to build innovative and scalable applications.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🎯</div>
              <div>
                <h4>Analytical Mindset</h4>
                <p>Strong foundation in statistical analysis and data validation</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">💡</div>
              <div>
                <h4>Problem Solver</h4>
                <p>Proven ability to debug and build reliable applications</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <div>
                <h4>Continuous Learner</h4>
                <p>Always exploring new technologies and methodologies</p>
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
            <div className="stat-number">4+</div>
            <div className="stat-label">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
