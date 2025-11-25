import { useState } from 'react';
import './skills.css';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C', 'JavaScript', 'SQL', 'MongoDB', 'Solidity'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: 'AI/ML',
      skills: ['Deep Learning', 'NLP', 'Transformers', 'Computer Vision', 'Unsupervised Learning', 'Supervised Learning'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 1v6m0 6v6m5.2-14.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m14.2 5.2l-4.2-4.2m0-6l4.2-4.2"></path>
        </svg>
      )
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'Selenium', 'Azure', 'Power Platform', 'Azure DevOps', 'MS Copilot', 'React'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    },
    {
      title: 'Concepts',
      skills: ['Data Structures & Algorithm', 'OOPs', 'Blockchain', 'Zero-Knowledge Proofs'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    },
    {
      title: 'Interpersonal',
      skills: ['Public Speaking', 'Leadership', 'Team Management', 'Critical Thinking', 'Creative Thinking'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Expertise</h2>
          <p className="skills-subtitle">Technologies and competencies I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-card ${hoveredCategory === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="skill-card-border"></div>
              <div className="skill-card-content">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
