import React from "react";
import "./About.css";
import profilePic from "../../assets/profile.jpg"; // put your image in /src/assets/

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Surafel Belachew" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Surafel Belachew</strong>, a creative and dependable frontend(React) and backend(Golang) developer who turns ideas into scalable, user-friendly digital experiences.
          </p>
          <p>
            I specialize in Golang, JavaScript, React, and clean UI/UX. I care deeply about accessibility, responsive design, and building interfaces that just feel right.
          </p>
          <p>
            Outside of coding, I'm always learning — AI, tech, design, or whatever challenges help me grow. Let's work together to build something great.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
