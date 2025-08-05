import React from "react";
import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>My Resume</h2>
      <p>You can view or download my resume below:</p>
      <iframe
        src="https://drive.google.com/file/d/17n3ZyPP0Kz_dRSTPXt52ac_C9JfWdeLu/preview"
        className="resume-frame"
        allow="autoplay"
      ></iframe>

      <a
        href="https://drive.google.com/file/d/17n3ZyPP0Kz_dRSTPXt52ac_C9JfWdeLu/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
