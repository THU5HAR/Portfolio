import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo('.hero-greeting',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('.hero-name',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('.hero-role',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.hero-desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo('.hero-image-wrap',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )

      // Parallax on hero image
      gsap.to('.hero-portrait', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      })

      // Fade out hero on scroll
      gsap.to('.hero-content', {
        opacity: 0,
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'center top',
          end: 'bottom top',
          scrub: 1,
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Thushar Sathish Bhandary
          </h1>
          <h2 className="hero-role">
            Web Development · Java Full Stack · Frontend Engineering
          </h2>
          <p className="hero-desc">
            Computer Science Engineering student with strong fundamentals in web development and software engineering. Hands-on experience in JavaScript-based systems, frontend development, and data-driven applications, with a disciplined approach to debugging and reliability.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-outline" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-image.png`}
            alt="Thushar Sathish Bhandary"
            className="hero-portrait"
          />
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
