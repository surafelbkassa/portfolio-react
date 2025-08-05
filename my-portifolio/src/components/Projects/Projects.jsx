import React from "react";
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "AI-Powered Chatbot UI",
      description: "A voice + text chatbot UI using Web Speech API and Dialogflow.",
      tech: "JavaScript, HTML, Express",
      link: "https://github.com/surafelbkassa/web-speech-chatbot",
    },
    {
      title: "Go Task Manager API",
      description: "Lightweight REST API for task management using Go and Gin.",
      tech: "Go, Gin, REST",
      link: "https://github.com/surafelbkassa/go-task-manager",
    },
    {
      title: "Book Tracker (In progress...)",
      description: "Full-stack app to track books read, uses Open Library API.",
      tech: "Node.js, PostgreSQL, Express",
      link: "https://github.com/surafelbkassa/Book_Tracker",
    },
    {
      title: "Netflix Clone",
      description: "Frontend clone of Netflix UI for learning responsive layouts.",
      tech: "React, CSS, TMDB API",
      link: "https://github.com/surafelbkassa/Netflix-Clone",
    },
    {
      title: "Notes App (Go)(In progress...)",
      description: "JWT-authenticated REST API for note-taking with bcrypt security.",
      tech: "Go, Gin, JWT",
      link: "https://github.com/surafelbkassa/notes-app-go",
    },
    {
      title: "MiniGit",
      description: "A minimal Git-like version control system in C++.",
      tech: "C++, CLI",
      link: "https://github.com/surafelbkassa/MiniGit",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><em>{project.tech}</em></p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Code →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
