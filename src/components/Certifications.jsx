import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Certifications.css'

const Certifications = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const certifications = [
    {
      title: 'Introduction to Career Skills in Data Analytics',
      issuer: 'Microsoft',
      type: 'Course'
    },
    {
      title: 'Data Visualisation: Empowering Business with Effective Insights',
      issuer: 'Tata - Job Simulation',
      type: 'Job Simulation'
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte Australia',
      type: 'Job Simulation'
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata',
      type: 'Job Simulation'
    },
    {
      title: 'Software Development Job Simulation',
      issuer: 'Datacom',
      type: 'Job Simulation'
    },
    {
      title: 'Google Cybersecurity Certificate',
      issuer: 'Coursera',
      type: 'Certificate'
    },
    {
      title: 'Web Development Bootcamp',
      issuer: 'LetsUpgrade',
      type: 'Bootcamp'
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
              targets: '.cert-card',
              opacity: [0, 1],
              translateY: [30, 0],
              delay: anime.stagger(80),
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
    <section id="certifications" className="certifications" ref={sectionRef}>
      <h2 className="section-title" ref={titleRef}>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon">🏆</div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-type">{cert.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications

