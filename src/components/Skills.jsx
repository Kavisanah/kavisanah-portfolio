import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "C Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "PHP Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { 
          name: "JWT Security", 
          customIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="skill-custom-svg">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      {/* Background Ambient Glow */}
      <div className="ambient-glow glow-skills"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Competence</span>
          <h2 className="section-title">Technologies & Skills</h2>
          <p className="section-desc">
            A comprehensive matrix of programming languages, libraries, databases, and secure DevOps platforms I utilize.
          </p>
        </div>

        {/* Grouped Badges Flex Wrap Grid */}
        <div className="skills-categories-wrapper scroll-scale">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-category-card glass-panel">
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-badges-flex">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge-pill">
                    <div className="skill-badge-icon-box">
                      {skill.icon ? (
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="skill-devicon"
                          loading="lazy"
                        />
                      ) : (
                        skill.customIcon
                      )}
                    </div>
                    <span className="skill-badge-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
