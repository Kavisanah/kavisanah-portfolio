import React, { useState } from 'react';
import './About.css';

export default function About() {
  const [imgError, setImgError] = useState(false);

  const education = [
    {
      institution: "University of Kelaniya",
      degree: "B.Sc (Hons) in Software Engineering",
      duration: "April 2024 – Present",
      grade: "GPA: 3.74 / 4.00",
      description: "Focusing on Software Architecture, OOP, SOLID Principles, Data Structures, Algorithms, and Full-Stack development."
    },
    {
      institution: "G.C.E Advanced Level Examination",
      degree: "Physical Science Stream",
      duration: "2022",
      grade: "Chemistry – A | Physics – C | Combined Mathematics – B",
      description: "Strong logical, math, and scientific foundation."
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Let me introduce myself</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">A story of engineering, optimization, and craft.</p>
        </div>

        <div className="about-layout-grid grid-2 scroll-scale">
          {/* Left Column: Profile Quick Facts */}
          <div className="about-profile-card glass-panel">
            <div className="profile-card-header">
              <div className="profile-image-container">
                <img 
                  src={`${import.meta.env.BASE_URL}about-profile.png`} 
                  alt="Kavisanah Kanakeshwaran"
                  className="profile-image-img"
                />
              </div>
              <h3 className="profile-name">Kavisanah Kanakeshwaran</h3>
              <p className="profile-title">Software Engineering Undergraduate</p>
            </div>
            
            <div className="profile-details-list">
              <div className="profile-detail-item">
                <span className="detail-label">Institution</span>
                <span className="detail-value">University of Kelaniya</span>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Current Year</span>
                <span className="detail-value">3rd Year Student</span>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Academic GPA</span>
                <span className="detail-value highlight-text">3.74 / 4.00</span>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Specialization</span>
                <span className="detail-value">Full Stack Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Skills */}
          <div className="about-bio-card glass-panel">
            <h3 className="about-card-title-header">Biography</h3>
            <p className="about-narrative-paragraph">
              I am a passionate software engineering undergraduate at the University of Kelaniya with solid hands-on full-stack development experience. I love turning abstract problem statements into optimized, high-performance backends and highly responsive user interfaces.
            </p>
            <p className="about-narrative-paragraph">
              My architectural focus lies in <strong>scalable systems</strong>, <strong>secure role-based access controls</strong>, <strong>REST APIs</strong>, and <strong>containerized deployments</strong>. I strive to apply clean code principles like <strong>SOLID</strong> and write clean, maintainable systems that scale seamlessly.
            </p>



            {/* Languages */}
            <div className="about-sub-section">
              <h4 className="about-sub-title">Languages</h4>
              <div className="about-languages-container">
                <div className="about-lang-pill">
                  <span className="lang-n">English</span>
                  <span className="lang-l">• Proficient</span>
                </div>
                <div className="about-lang-pill">
                  <span className="lang-n">Tamil</span>
                  <span className="lang-l">• Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline (Renders below as a gorgeous resume board) */}
        <div className="about-timeline-wrapper">
          <h3 className="timeline-section-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="timeline-section-icon"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
            Academic Milestones
          </h3>
          
          <div className="about-education-timeline grid-2">
            {education.map((item, idx) => (
              <div key={idx} className="timeline-card glass-panel">
                <div className="timeline-header-meta">
                  <span className="timeline-date-tag">{item.duration}</span>
                  <span className="timeline-grade-tag">{item.grade}</span>
                </div>
                <h4 className="timeline-card-inst">{item.institution}</h4>
                <h5 className="timeline-card-deg">{item.degree}</h5>
                <p className="timeline-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
