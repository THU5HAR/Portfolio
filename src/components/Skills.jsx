import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Skills.css'

const Skills = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'C++', 'JavaScript'],
      icon: '💻'
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React', 'Node.js (Basics)'],
      icon: '🌐'
    },
    {
      title: 'Databases',
      skills: ['Oracle SQL', 'MongoDB'],
      icon: '🗄️'
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Excel', 'Tableau', 'Figma', 'Firebase', 'Arduino'],
      icon: '🛠️'
    },
    {
      title: 'Testing & Analysis',
      skills: ['Debugging', 'Test Case Design', 'Data Validation', 'Statistical Analysis'],
      icon: '📊'
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
              targets: '.skill-category',
              opacity: [0, 1],
              translateY: [50, 0],
              delay: anime.stagger(100),
              duration: 800,
              easing: 'easeOutExpo'
            })

            anime({
              targets: '.skill-item',
              scale: [0, 1],
              opacity: [0, 1],
              delay: anime.stagger(50, { start: 300 }),
              duration: 500,
              easing: 'easeOutBack'
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
    <section id="skills" className="skills" ref={sectionRef}>
      <h2 className="section-title" ref={titleRef}>Technical Skills</h2>
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

