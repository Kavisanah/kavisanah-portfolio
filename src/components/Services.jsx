import React from 'react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      title: "Software Engineering & Architecture",
      desc: "Designing robust, scalable system architectures based on clean SOLID principles, high-concurrency execution threads, and secure, stateless API communications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      title: "Backend Development",
      desc: "Constructing secure, high-performance backends using Java and Spring Boot. Implementing bulletproof JWT authentication, Role-Based Access Control, and JPA data flows.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" x2="6.01" y1="6" y2="6"></line>
          <line x1="6" x2="6.01" y1="18" y2="18"></line>
        </svg>
      )
    },
    {
      title: "Frontend Engineering & UX",
      desc: "Creating elegant, highly responsive client-side portals using React.js. Implementing curating glassmorphism styling, clean animations, and optimal viewport contrast metrics.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services-section section">
      <div className="ambient-glow glow-services"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">What I Do For You</span>
          <h2 className="section-title">My Services</h2>
          <p className="section-desc">
            Leveraging engineering principles and end-to-end full-stack capabilities to deliver highly reliable software systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid-3 scroll-scale">
          {servicesList.map((service, idx) => (
            <div key={idx} className="service-card-panel glass-panel">
              <div className="service-icon-box">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
