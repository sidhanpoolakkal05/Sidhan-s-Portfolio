import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      title: "TCS Internship",
      issuer: "TCS iON",
      date: "Nov 2025 - Feb 2026 (135 hrs)",
      description: "Completed a 135-hour Applied Industry Project developing Python-based security automation tools for SOC operations. Scripted threat telemetry extraction, API integrations for threat intelligence lookup, and automated alert triaging to accelerate incident response.",
      // Code Icon
      icon: (
        <svg className="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L2 12L8 18" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Quest Internship",
      issuer: "Quest Innovative Solutions",
      date: "Feb 2026 - April 2026",
      description: "Developed MediScan, a Django-based full-stack Hospital Management System (HMS) utilizing secure QR technology. Engineered instant medical QR registration, role-based security controls, digitized prescription routing, and real-time patient queues.",
      // Brain/AI Icon
      icon: (
        <svg className="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 2C7.567 2 6 3.567 6 5.5c0 1.258.663 2.36 1.66 3C6.398 9.387 5.5 10.59 5.5 12c0 1.662 1.127 3.06 2.65 3.47A3.993 3.993 0 0 0 6 18.5c0 1.933 1.567 3.5 3.5 3.5M14.5 2c1.933 0 3.5 1.567 3.5 3.5 0 1.258-.663 2.36-1.66 3 1.262.887 2.16 2.09 2.16 3.5 0 1.662-1.127 3.06-2.65 3.47A3.993 3.993 0 0 1 18 18.5c0 1.933-1.567 3.5-3.5 3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4v16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="certifications-container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Experience Certificates</h2>
          <p className="section-subtitle">Credentials and certificates validating my professional expertise.</p>
          <div className="cert-divider"></div>
        </div>

        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="cert-card glass">
              <div className="cert-icon-wrapper">
                {cert.icon}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
              <div className="cert-date-badge">
                <svg className="cert-date-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
