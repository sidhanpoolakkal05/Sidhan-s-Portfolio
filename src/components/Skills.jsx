import React from 'react';
import './Skills.css';

const CategoryIcon = ({ type }) => {
  switch (type) {
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'brain':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 3 3 3 3 0 0 1-1 2.2V14a4 4 0 0 1-8 0v-1.8A3 3 0 0 1 5 10a3 3 0 0 1 3-3V6a4 4 0 0 1 4-4z" />
          <path d="M9 18v1a3 3 0 0 0 6 0v-1" />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'gear':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    default:
      return null;
  }
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: 'code',
      iconColor: '#3b82f6',
      skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C'],
    },
    {
      title: 'AI/ML',
      icon: 'brain',
      iconColor: '#14b8a6',
      skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'NLP', 'Deep Learning'],
    },
    {
      title: 'Web',
      icon: 'globe',
      iconColor: '#a855f7',
      skills: ['HTML', 'CSS', 'Bootstrap', 'React', 'Django', 'FastAPI', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: 'database',
      iconColor: '#f97316',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      icon: 'gear',
      iconColor: '#ec4899',
      skills: ['Git', 'GitHub', 'Power BI', 'Postman', 'Vercel', 'Render'],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills &amp; Tools</h2>
          <p className="skills-subtitle">
            Technologies and tools I use to bring ideas to life.
          </p>
          <div className="skills-accent-line" />
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-card"
              style={{ '--card-accent': category.iconColor }}
            >
              <div className="skill-card-header">
                <div
                  className="skill-icon"
                  style={{ backgroundColor: category.iconColor }}
                >
                  <CategoryIcon type={category.icon} />
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
