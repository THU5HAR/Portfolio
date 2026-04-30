import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global GSAP scroll-triggered reveals for all section titles
  useEffect(() => {
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
      gsap.fromTo(title,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    });

    // Animate decorative shapes with parallax
    gsap.utils.toArray('.deco-shape').forEach((shape) => {
      gsap.to(shape, {
        y: `random(-60, 60)`,
        x: `random(-30, 30)`,
        rotation: `random(-20, 20)`,
        duration: `random(4, 7)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Parallax on scroll
      gsap.to(shape, {
        y: `random(-120, -40)`,
        ease: 'none',
        scrollTrigger: {
          trigger: shape.closest('section') || shape.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="App" ref={mainRef}>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        {/* Decorative shapes between sections */}
        <div className="deco-shapes-wrap" aria-hidden="true">
          <div className="deco-shape deco-circle-1"></div>
          <div className="deco-shape deco-square-1"></div>
          <div className="deco-shape deco-dots-1"></div>
          <div className="deco-shape deco-ring-1"></div>
          <div className="deco-shape deco-triangle-1"></div>
          <div className="deco-shape deco-circle-2"></div>
          <div className="deco-shape deco-cross-1"></div>
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
