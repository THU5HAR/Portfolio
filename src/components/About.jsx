import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)

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
              targets: contentRef.current,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              delay: 200,
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
    <section id="about" className="about" ref={sectionRef}>
      <h2 className="section-title" ref={titleRef}>About Me</h2>
      <div className="about-content" ref={contentRef}>
        <div className="about-text">
          <p>
            Currently interning as a <strong>Data Science Intern</strong> at Prodigy InfoTech, 
            contributing to statistical data analysis and web design with a focus on impactful 
            data-driven solutions.
          </p>
          <p>
            Pursuing a <strong>Bachelor of Engineering in Computer Science</strong> at Yenepoya 
            Institute of Technology, bringing strong analytical skills and a foundation in 
            statistical methodologies to projects.
          </p>
          <p>
            Completed multiple data analytics job simulations through Forage, enhancing 
            capabilities in visualization and business insights. Working collaboratively to 
            support actionable insights and innovative outcomes in a dynamic team environment.
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

