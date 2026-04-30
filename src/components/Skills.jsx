import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Skills.css'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Python (Core)'],
      icon: '💻'
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React', 'Node.js (Core)'],
      icon: '🌐'
    },
    {
      title: 'Backend Technologies',
      skills: ['Spring Boot', 'JDBC', 'REST APIs', 'JSON', 'API Integration'],
      icon: '⚙️'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      icon: '🗄️'
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'Postman'],
      icon: '🐳'
    },
    {
      title: 'Testing & Analysis',
      skills: ['Debugging', 'Test Case Design', 'Data Validation'],
      icon: '📊'
    },
    {
      title: 'Data & Design Tools',
      skills: ['Excel', 'Tableau', 'Figma', 'Arduino'],
      icon: '🎨'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-category',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills-container', start: 'top 80%' }
        }
      )

      gsap.fromTo('.skill-item',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.4, stagger: 0.03, ease: 'back.out(1.6)',
          scrollTrigger: { trigger: '.skills-container', start: 'top 75%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
