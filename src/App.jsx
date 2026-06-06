import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

const About    = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Skills   = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Articles = lazy(() => import('./components/Articles'));
const Contact  = lazy(() => import('./components/Contact'));

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const [canvasNode, setCanvasNode] = useState(null);
  const canvasRef = React.useCallback((node) => {
    if (node !== null) {
      setCanvasNode(node);
    }
  }, []);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  // Intersection Observer for scroll reveal animations (handles lazy-loaded elements dynamically)
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const registerElements = () => {
      const revealElements = document.querySelectorAll('.scroll-scale:not(.revealed)');
      revealElements.forEach((el) => observer.observe(el));
    };

    registerElements();

    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Constellation particles & fluid glowing wave ribbons (generative video loop) background
  useEffect(() => {
    if (window.innerWidth <= 768) return;
    const canvas = canvasNode;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let count = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle class for slow floating stardust
    class StardustParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedY = -(Math.random() * 0.22 + 0.08);
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.5 + 0.15;
        // Alternate colors
        this.colorType = Math.random() > 0.5 ? 'coral' : 'other';
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Reset if it goes off the top boundary
        if (this.y < -10) {
          this.reset();
        }
      }

      draw() {
        const isLight = document.documentElement.classList.contains('light-mode');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (isLight) {
          const colorString = this.colorType === 'coral' ? '255, 127, 80' : '30, 58, 95';
          ctx.fillStyle = `rgba(${colorString}, ${this.opacity * 0.6})`;
        } else {
          const colorString = this.colorType === 'coral' ? '255, 127, 80' : '100, 255, 218';
          ctx.fillStyle = `rgba(${colorString}, ${this.opacity})`;
        }
        ctx.fill();
      }
    }

    // Initialize 80 stardust particles
    for (let i = 0; i < 80; i++) {
      particles.push(new StardustParticle());
    }

    // Interactive fluid sine wave lines (like Siri / PS3 background video)
    const waves = [
      {
        y: 0.5,
        length: 130,
        amplitude: 45,
        speed: 0.006,
        color: (isLight, opacity) => isLight 
          ? `rgba(255, 127, 80, ${opacity * 0.7})` 
          : `rgba(255, 127, 80, ${opacity})`
      },
      {
        y: 0.54,
        length: 160,
        amplitude: 30,
        speed: -0.004,
        color: (isLight, opacity) => isLight 
          ? `rgba(30, 58, 95, ${opacity * 0.55})` 
          : `rgba(100, 255, 218, ${opacity})`
      },
      {
        y: 0.46,
        length: 100,
        amplitude: 22,
        speed: 0.009,
        color: (isLight, opacity) => isLight 
          ? `rgba(139, 92, 246, ${opacity * 0.65})` 
          : `rgba(183, 148, 244, ${opacity})`
      }
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isLight = document.documentElement.classList.contains('light-mode');

      // 1. Draw glowing background grid lines
      ctx.strokeStyle = isLight ? 'rgba(30, 58, 95, 0.015)' : 'rgba(100, 255, 218, 0.012)';
      ctx.lineWidth = 1;
      const gridSize = 65;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 2. Draw stardust particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // 3. Draw morphing waves (glowing ribbons)
      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * wave.y);

        for (let i = 0; i < canvas.width; i += 2) {
          const angle = (i / wave.length) + count * wave.speed;
          const y = canvas.height * wave.y + Math.sin(angle) * wave.amplitude;
          ctx.lineTo(i, y);
        }

        ctx.strokeStyle = wave.color(isLight, 0.12);
        ctx.lineWidth = 2.5 - index * 0.5;
        ctx.stroke();
      });

      count += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasNode]);

  useEffect(() => {
    const checkTouch = () => {
      // Check for touchscreen or tablet view
      const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(touchDevice);
      if (!touchDevice) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, [role="button"], .pill, .stall, .filter-btn, .social-link, .ide-tab');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkTouch);
    };
  }, []);

  // Trail interpolation animation
  useEffect(() => {
    if (isMobile) return;
    let animationFrameId;

    const animateTrail = () => {
      setTrailPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16
        };
      });
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animationFrameId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos, isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      {/* Floating Animated Background Blobs */}
      <div className="ambient-blob blob-1 animate-float"></div>
      <div className="ambient-blob blob-2 animate-float-reverse"></div>
      <div className="ambient-blob blob-3 animate-pulse-slow"></div>

      {/* Interactive Background Particle Canvas */}
      <canvas ref={canvasRef} id="bg-canvas"></canvas>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="main-content">
        <Hero />
        <Suspense fallback={<div />}>
          <About />
          <Services />
          <Skills />
          <Projects />
          <Articles />
          <Contact />
        </Suspense>
      </main>

      {/* Modern Developer Footer */}
      <footer className="footer-section">
        <div className="container footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo-text">Kavisanah</span>
            </div>
            <p className="footer-tagline">Crafting scalable backend architectures & high-performance interactive interfaces.</p>
          </div>

          <div className="footer-bottom">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Kavisanah Kanakeshwaran. All rights reserved.
            </p>

            {/* Direct Professional Social Links */}
            <div className="footer-socials">
              <a
                href="https://github.com/kavisanah"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub Profile"
              >
                GitHub
              </a>
              <span className="separator">•</span>
              <a
                href="http://www.linkedin.com/in/kanakeshwaran-kavisanah-32ab61307"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn Profile"
              >
                LinkedIn
              </a>
              <span className="separator">•</span>
              <a
                href="mailto:kanakeshwarankavisanah@gmail.com"
                className="social-link"
                title="Send Email"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Dynamic Floating Back-To-Top Button */}
      <button
        className={`scroll-to-top-btn glass-panel ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="scroll-arrow-icon"><line x1="12" x2="12" y1="19" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
      </button>

      {/* Custom premium cursor (desktop only) */}
      {!isMobile && (
        <>
          <div
            className="custom-cursor-dot"
            style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
          />
          <div
            className={`custom-cursor-circle ${isHovering ? 'hovering' : ''}`}
            style={{ left: `${trailPos.x}px`, top: `${trailPos.y}px` }}
          />
        </>
      )}
    </div>
  );
}
