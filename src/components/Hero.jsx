import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const socialRef = useRef(null)

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    })

    timeline
      .add({
        targets: nameRef.current,
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 800
      })
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 800
      }, '-=600')
      .add({
        targets: descRef.current,
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800
      }, '-=600')
      .add({
        targets: buttonRef.current,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 600
      }, '-=400')
      .add({
        targets: socialRef.current?.children,
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(100),
        duration: 500,
        easing: 'easeOutExpo'
      }, '-=400')

    // Floating animation for background elements
    anime({
      targets: '.floating-shape',
      translateY: [0, -20],
      rotate: [0, 5],
      duration: 3000,
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate'
    })
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name" ref={nameRef}>
            Thushar Sathish Bhandary
          </h1>
          <h2 className="hero-title" ref={titleRef}>
            <span className="gradient-text">Web Development</span> | Java Full Stack | Frontend Development
          </h2>
          <p className="hero-description" ref={descRef}>
            Computer Science Engineering student with strong fundamentals in web development and software engineering. Hands-on experience in JavaScript-based systems, frontend development, and data-driven applications, with a disciplined approach to debugging and reliability.
          </p>
          <div className="hero-buttons" ref={buttonRef}>
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>


        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-image.png`}
              alt="Thushar Sathish Bhandary"
              className="hero-portrait"
            />
            <div className="gradient-orb"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

