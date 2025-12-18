import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Education.css'

const Education = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.) - Computer Science',
      institution: 'Yenepoya Institute of Technology, Moodbidri',
      university: 'VTU, Belagavi',
      duration: '2022 - 2026 (Expected)',
      grade: 'CGPA: 8.1 / 10',
      status: 'Ongoing'
    },
    {
      degree: 'Pre-University Course (PUC) - Science',
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
              targets: '.education-card',
              opacity: [0, 1],
              translateX: [50, 0],
              delay: anime.stagger(150),
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
    <section id="education" className="education" ref={sectionRef}>
      <h2 className="section-title" ref={titleRef}>Education</h2>
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

