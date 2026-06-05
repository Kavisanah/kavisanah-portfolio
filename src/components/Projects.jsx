import React from 'react';
import './Projects.css';

export default function Projects() {
  const projectsList = [
    {
      id: "ai-coach",
      title: "AI Interview Coach",
      type: "Individual Project",
      date: "Apr 2026 – May 2026",
      desc: "A dynamic mock interview platform that parses resumes, uses the Groq API to generate tailored questions, and delivers real-time actionable feedback.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq API", "Tailwind CSS"],
      github: "https://github.com/kavisanah/ai-interview-coach",
      live: "https://ai-interview-coach-app-pi.vercel.app/",
      image: "/ai-interview-coach.png"
    },
    {
      id: "mediremind",
      title: "MediRemind",
      type: "Individual Project",
      date: "Mar 2026 – May 2026",
      desc: "A secure, role-based medical planner featuring automated medication reminders, appointment bookings, and full Docker containerization.",
      tech: ["React.js", "Tailwind CSS", "Spring Boot", "MySQL", "JWT", "Docker"],
      github: "https://github.com/kavisanah/mediremind",
      live: null,
      image: "/mediremind.png"
    },
    {
      id: "bookfair",
      title: "Book Fair Management",
      type: "Group Project",
      date: "Oct 2025 – Jan 2026",
      desc: "A digitized real-time booking platform with interactive stall map selections, refund capabilities, and QR-code entry check-ins.",
      tech: ["React.js", "Spring Boot", "Tailwind CSS", "Framer Motion", "MySQL"],
      github: "https://github.com/Sathiyabalan29/BookFair.git",
      live: null,
      image: "/bookfair.png"
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Portfolio Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Explore my core full-stack systems, detailing key real-world problems and engineered technical solutions.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="projects-list scroll-scale">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              
              {/* Top: Interactive Visual representation of App */}
              <div className="project-preview-side">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image-preview" 
                  />
                ) : (
                  project.graphic
                )}
              </div>

              {/* Bottom: Core Text Details */}
              <div className="project-details-side">
                <div className="project-meta">
                  <span className="project-badge">{project.type}</span>
                  <span className="project-date">{project.date}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">{project.desc}</p>

                {/* Tech pills */}
                <div className="project-tech-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="pill">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-sm"
                    title="View GitHub Repository"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    GitHub
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm btn-vercel"
                      title="Visit App on Vercel"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon"><path d="M24 22.525H0L12 1.705L24 22.525Z"/></svg>
                      Vercel Link
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
