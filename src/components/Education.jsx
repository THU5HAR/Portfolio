import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Education.css'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  const sectionRef = useRef(null)

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.) — Computer Science',
      institution: 'Yenepoya Institute of Technology, Moodbidri',
      university: 'VTU, Belagavi',
      duration: '2022 – 2026 (Expected)',
      grade: 'CGPA: 8.1 / 10',
      status: 'Ongoing'
    },
    {
      degree: 'Pre-University Course (PUC) — Science',
      institution: 'P.R.N. Amratha Bharathi PU College, Hebri',
      duration: 'Completed',
      grade: 'Percentage: 82%',
      status: 'Completed'
    },
    {
      degree: 'SSLC (10th Grade)',
      institution: 'Christ King English Medium High School, Karkala',
      duration: 'Completed',
      grade: 'Percentage: 86%',
      status: 'Completed'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.education-timeline',
          start: 'top 82%',
          end: 'top 20%',
          toggleActions: 'play reverse play reverse',
        }
      })
      tl.fromTo('.education-card',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="education" className="education" ref={sectionRef}>
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="edu-icon">
              <span>🎓</span>
            </div>
            <div className="education-content">
              <div className="edu-header">
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className={`edu-status ${edu.status === 'Ongoing' ? 'ongoing' : 'completed'}`}>
                  {edu.status}
                </span>
              </div>
              <p className="edu-institution">{edu.institution}</p>
              {edu.university && <p className="edu-university">{edu.university}</p>}
              <div className="edu-meta">
                <span className="edu-duration">{edu.duration}</span>
                <span className="edu-separator">•</span>
                <span className="edu-grade">{edu.grade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
