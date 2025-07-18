const skills = [
  'html5', 'css3', 'javascript', 'bootstrap',
  'react', 'html5', 'css3', 'javascript', 'bootstrap',
];

const icons = {
  html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
};

const SkillsSection = () => {
  return (
    <div className="container text-center py-5">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="icon-group">
            <div className="icon-circle">
              <img src={icons[skill]} alt={skill} />
            </div>
            <span className="dash">----</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;