import './skills.css';

const Skills = () => {
  const allSkills = [
    'Java', 'Python', 'C', 'JavaScript', 'SQL', 'MongoDB', 'Solidity',
    'Deep Learning', 'NLP', 'Transformers', 'Computer Vision', 
    'Unsupervised Learning', 'Supervised Learning',
    'Git', 'Selenium', 'Azure', 'Power Platform', 'Azure DevOps', 
    'MS Copilot', 'React',
    'Data Structures & Algorithm', 'OOPs', 'Blockchain', 'Zero-Knowledge Proofs',
    'Public Speaking', 'Leadership', 'Team Management', 
    'Critical Thinking', 'Creative Thinking'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Expertise</h2>
        </div>

        <div className="skills-flow">
          {allSkills.map((skill, index) => (
            <span 
              key={index} 
              className="skill-bubble"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
