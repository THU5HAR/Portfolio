import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Certifications.css'

gsap.registerPlugin(ScrollTrigger)

const Certifications = () => {
  const sectionRef = useRef(null)

  const certifications = [
    {
      title: 'Introduction to Career Skills in Data Analytics',
      issuer: 'Microsoft',
      type: 'Course'
    },
    {
      title: 'Data Visualisation: Empowering Business with Effective Insights Job Simulation',
      issuer: 'Tata - Forage',
      type: 'Job Simulation'
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte Australia - Forage',
      type: 'Job Simulation'
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata - Forage',
      type: 'Job Simulation'
    },
    {
      title: 'Software Development Job Simulation',
      issuer: 'Datacom - Forage',
      type: 'Job Simulation'
    },
    {
      title: 'Google Cybersecurity Certificate',
      issuer: 'Coursera',
      type: 'Certificate'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cert-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'none',
          scrollTrigger: { trigger: '.certifications-grid', start: 'top 82%', end: 'top 20%', scrub: 1, invalidateOnRefresh: true }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="certifications" className="certifications" ref={sectionRef}>
      <h2 className="section-title">Certifications</h2>
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
