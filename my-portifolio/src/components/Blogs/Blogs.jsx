import React from "react";
import blogPosts from "./blogPosts.js";
import "./Blogs.css";

function Blog() {
  return (
    <section id="blog" className="blog-section">
      <h2>Blog</h2>
      <p>Things I’m writing and thinking about.</p>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p className="blog-summary">{post.summary}</p>
            <a href={post.url} className="read-more">Read more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
