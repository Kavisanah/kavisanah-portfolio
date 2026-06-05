import React, { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="hero-section section">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="hero-container container grid-2">
        {/* Left Side: Pitch and Details (Jenushan format) */}
        <div className="hero-content scroll-scale">
          <div className="hero-badge animate-pulse-slow">
            <span className="badge-dot"></span> Available for Internships
          </div>
          
          <h1 className="hero-name">Hi! I'm Kavisanah</h1>
          
          <div className="change-text">
            <span className="change-text-intro">And I'm a </span>
            <span className="word-wrapper">
              <span className="word">Full Stack Developer</span>
            </span>
          </div>
          
          <p className="hero-pitch">
            Third-year Software Engineering undergraduate at the University of Kelaniya. I build robust, secure, and highly scalable end-to-end applications, combining high-concurrency Spring Boot backends with sleek, modern React interfaces and containerized deployments.
          </p>
          
          {/* Action Buttons */}
          <div className="btn-box">
            <a 
              href="./resume.pdf" 
              download="Kavisanah_Kanakeshwaran_CV.pdf"
              className="btn btn-cv btn-download"
              title="Download Resume PDF"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-icon">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </a>
            <a 
              href="#projects"
              className="btn btn-secondary btn-projects-link"
              title="View Projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="social-icons">
            <a href="mailto:kanakeshwarankavisanah@gmail.com" title="Send Email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="http://www.linkedin.com/in/kanakeshwaran-kavisanah-32ab61307" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg-icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/kavisanah" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="social-svg-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://medium.com/@kanakeshwarankavisanah" target="_blank" rel="noopener noreferrer" title="Medium Blog">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="social-svg-icon"><path d="M12 12c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 3c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"></path></svg>
            </a>
            <a href="https://dev.to/kavisanah1410" target="_blank" rel="noopener noreferrer" title="DEV Profile">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg-icon">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <text x="12" y="14.5" font-family="Space Grotesk, system-ui, sans-serif" font-weight="800" font-size="7.5" text-anchor="middle" fill="currentColor" stroke="none">DEV</text>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Animated Liquid Shape Backdrop + Profile Picture (Jenushan format) */}
        <div className="hero-visual scroll-scale">
          <div className="home-image-wrapper">
            <div className="img-box glass-panel">
              {!imgError ? (
                <img 
                  src="./kavisanah.png" 
                  alt="Kavisanah Kanakeshwaran"
                  onError={() => setImgError(true)}
                  className="profile-pic"
                />
              ) : (
                /* Sleek floating monogram vector avatar fallback if file doesn't exist yet */
                <div className="profile-pic-fallback">
                  <span className="fallback-monogram">K</span>
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
