import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdYy_xTFIWerCjN5sou8T7EdSUlNmwn3FZKocUsL2Z8Fni7oQ/formResponse";
    
    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
      setIsSubmitted(true);
      e.target.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <p>sidhanpoolakkal05@gmail.com</p>
              </div>
            </div>
          </div>
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <input type="text" name="entry.17403156" placeholder="Name" required disabled={isSubmitting} />
            <input type="email" name="entry.1892809722" placeholder="Email" required disabled={isSubmitting} />
            <textarea name="entry.2133161002" placeholder="Message" rows="5" required disabled={isSubmitting}></textarea>
            <button type="submit" className="btn primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {isSubmitted && (
        <div className="popup-overlay">
          <div className="popup-content glass">
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <button className="btn primary" onClick={() => setIsSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
