import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section glass">
      <div className="contact-container">
        <h2 className="section-title text-gradient">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="contact-details">
              <div className="detail-item">
                <span>📍</span>
                <p>Kerala, India</p>
              </div>
              <div className="detail-item">
                <span>📧</span>
                <p>sidhan@example.com</p> {/* Placeholder */}
              </div>
            </div>
          </div>
          <form className="contact-form glass">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
