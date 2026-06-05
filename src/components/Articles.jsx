import React from 'react';
import './Articles.css';

export default function Articles() {
  const articlesList = [
    {
      id: 1,
      title: "JWT Authentication Explained Simply",
      description: "Every modern web app needs to know who’s making a request. JWT is one of the most widely used ways to handle that — but most explanations jump straight to code without explaining the idea. This is the article I wish I’d read first.",
      readTime: "4 min read",
      tags: ["Web Security", "JWT", "Authentication", "Backend"],
      date: "June 2026",
      url: "https://medium.com/@kanakeshwarankavisanah/jwt-authentication-explained-simply-5c804ef4ebd9?source=user_profile_page---------0-------------8b8d1fd7cc70----------------------"
    },
    {
      id: 2,
      title: "Recursion Finally Made Sense When I Stopped Thinking Like a Computer",
      description: "A technical deep-dive into overcoming recursive thinking blocks, reframing recursive frames as stacks, and mastering call stack architectures.",
      readTime: "5 min read",
      tags: ["Computer Science", "Algorithms", "Recursion", "Programming"],
      date: "April 2026",
      url: "https://medium.com/@kanakeshwarankavisanah/recursion-finally-made-sense-when-i-stopped-thinking-like-a-computer-234bf9c0571a?source=user_profile_page---------0-------------8b8d1fd7cc70----------------------"
    }
  ];

  return (
    <section id="articles" className="articles-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Thought Leadership</span>
          <h2 className="section-title">Technical Writing</h2>
          <p className="section-desc">
            Explore my latest publications detailing engineering tutorials, architecture reviews, and hands-on system designs.
          </p>
        </div>

        {/* Articles Cards Grid */}
        <div className="articles-grid scroll-scale">
          {articlesList.map((article) => (
            <article key={article.id} className="article-card glass-panel">
              <div className="article-header">
                <span className="article-date">{article.date}</span>
                <span className="article-read-time">{article.readTime}</span>
              </div>

              <h3 className="article-title">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h3>

              <p className="article-desc">{article.description}</p>

              <div className="article-footer">
                <div className="article-tags">
                  {article.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="pill mini-pill">#{tag.toLowerCase().replace(" ", "")}</span>
                  ))}
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-link"
                  aria-label={`Read ${article.title}`}
                >
                  Read Post
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="read-more-icon"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
