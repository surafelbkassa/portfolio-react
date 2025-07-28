
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you’d like to work together or just say hi — feel free to reach out!</p>

        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Or reach me directly:</h3>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:surafelbkassa3@gmail.com">surafelbkassa3@gmail.com</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/surafelbkassa" target="_blank">github.com/surafelbkassa</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/surafel-belachew-1035772a6" target="_blank">Surafel Belachew</a></li>
            <li><strong>LeetCode:</strong> <a href="https://leetcode.com/u/surafelbk/" target="_blank">leetcode.com/u/surafelbk</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
