import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          end: 'top 25%',
          toggleActions: 'play reverse play reverse',
        }
      });
      tl.fromTo(title,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    });

    // Gentle idle float for deco shapes
    gsap.utils.toArray('.deco-shape').forEach((shape, i) => {
      gsap.to(shape, {
        y: `random(-30, 30)`,
        x: `random(-15, 15)`,
        rotation: `random(-10, 10)`,
        duration: `random(4, 7)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4,
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  // Cursor repulsion effect on all interactive shapes
  useEffect(() => {
    const REPEL_RADIUS = 200;   // How close cursor must be to start repelling (px)
    const REPEL_STRENGTH = 60;  // Max push distance (px)

    const allShapes = document.querySelectorAll('.deco-shape, .shape-3d');
    if (!allShapes.length) return;

    // Pre-create GSAP quickTo for each shape for silky smooth 60fps movement
    const shapeAnims = Array.from(allShapes).map(shape => ({
      el: shape,
      xTo: gsap.quickTo(shape, 'x', { duration: 0.6, ease: 'power3.out' }),
      yTo: gsap.quickTo(shape, 'y', { duration: 0.6, ease: 'power3.out' }),
    }));

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      shapeAnims.forEach(({ el, xTo, yTo }) => {
        const rect = el.getBoundingClientRect();
        const shapeCenterX = rect.left + rect.width / 2;
        const shapeCenterY = rect.top + rect.height / 2;

        const dx = shapeCenterX - e.clientX;
        const dy = shapeCenterY - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < REPEL_RADIUS) {
          // Normalized repulsion — closer = stronger push
          const force = (1 - distance / REPEL_RADIUS) * REPEL_STRENGTH;
          const angle = Math.atan2(dy, dx);

          xTo(Math.cos(angle) * force);
          yTo(Math.sin(angle) * force);
        } else {
          // Return to idle position smoothly
          xTo(0);
          yTo(0);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App" ref={mainRef}>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        {/* Decorative shapes — cursor-interactive */}
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
