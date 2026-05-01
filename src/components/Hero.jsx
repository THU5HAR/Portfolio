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

      // Fade in the background image
      tl.fromTo('.hero-bg-image',
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.6, ease: 'power2.out' }
      )

      // Overlay slides in
      .fromTo('.hero-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' },
        '-=1.2'
      )

      .fromTo('.hero-greeting',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.hero-name',
        { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.out' },
        '-=0.4'
      )
      .fromTo('.hero-role',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
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

      // Floating 3D shapes entrance
      tl.fromTo('.shape-3d',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.7)' },
        '-=1'
      )

      // Parallax on hero background image
      gsap.to('.hero-bg-image', {
        y: -60,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      })

      // Parallax shapes on scroll
      gsap.to('.shape-3d', {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        }
      })

      // Fade out hero content on scroll
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
      {/* Full-width background image */}
      <div className="hero-bg">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-image.png`}
          alt="Thushar Sathish Bhandary in workspace"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Floating 3D shapes */}
      <div className="shape-3d shape-cube" aria-hidden="true"></div>
      <div className="shape-3d shape-sphere" aria-hidden="true"></div>
      <div className="shape-3d shape-ring" aria-hidden="true"></div>
      <div className="shape-3d shape-pyramid" aria-hidden="true"></div>
      <div className="shape-3d shape-dot-grid" aria-hidden="true"></div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Thushar Sathish Bhandary
          </h1>
          <h2 className="hero-role">
            Java Full Stack · Spring Boot · React · Web Development
          </h2>
          <p className="hero-desc">
            Computer Science student specializing in Java Full Stack Development with hands-on experience in Spring Boot, React, and MySQL. Proficient in building RESTful APIs, JWT authentication, and deploying scalable web applications.
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
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="hero-bottom-fade"></div>
    </section>
  )
}

export default Hero
