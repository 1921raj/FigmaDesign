import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "Oct 8, 2023",
      title: "How UX works in web",
      tags: ["UX", "UI"],
      mockupClass: "orange-mockup",
      mockupText: "UX"
    },
    {
      id: 2,
      date: "Aug 15, 2023",
      title: "Case study - Analysis Application.",
      tags: ["Analysis", "Figma"],
      mockupClass: "dark-mockup",
      mockupText: "E"
    },
    {
      id: 3,
      date: "Feb 10, 2023",
      title: "3 ways to develop your skill",
      tags: ["Design", "Skill"],
      mockupClass: "orange-mockup-2",
      mockupText: "SKILL"
    }
  ];

  const handleReadClick = (postId) => {
    console.log(`Reading blog post ${postId}`);
  };

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-title">
            <span className="star">✦</span>
            Blog
          </h2>
          <a href="#" className="view-all">View all</a>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <div className={`blog-mockup ${post.mockupClass}`}>
                  {post.mockupText}
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-info">
                  <span className="blog-date">{post.date}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <div className="blog-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <button 
                  className="blog-read-btn"
                  onClick={() => handleReadClick(post.id)}
                >
                  Read
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;