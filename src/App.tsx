import React, { useState, useEffect } from 'react';
import './App.css'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws,
  FaJava,
  FaGit,
  FaLinux,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiPostgresql, 
  SiMongodb,
  SiOpenai,
  SiPytorch,
  SiDjango,
  SiFlask,
  SiNextdotjs
} from 'react-icons/si';
import { TbBinaryTree } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseY = e.clientY;
    // Show nav when mouse is within 100px from the top or in hero section
    const heroSection = document.getElementById('hero');
    const isInHeroSection = heroSection && 
      mouseY <= heroSection.getBoundingClientRect().bottom;
    
    setIsNavVisible(mouseY <= 100 || !!isInHeroSection);
  };

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      link: "https://github.com/Th1f",
      name: "GitHub"
    },
    { 
      icon: <FaLinkedin />, 
      link: "https://linkedin.com/in/yourusername",
      name: "LinkedIn"
    },
    { 
      icon: <MdEmail />, 
      link: "mailto:your.email@example.com",
      name: "Email"
    }
  ];

  const projects = [
    {
      name: "AI-Powered Portfolio Analyzer",
      technologies: [
        { icon: <SiOpenai />, name: "OpenAI" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTypescript />, name: "TypeScript" }
      ],
      codeLink: "https://github.com/Th1f/project1",
      liveLink: "https://project1-demo.vercel.app"
    },
    {
      name: "Machine Learning Trading Bot",
      technologies: [
        { icon: <SiPytorch />, name: "PyTorch" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" }
      ],
      codeLink: "https://github.com/Th1f/project2",
      liveLink: "https://project2-demo.herokuapp.com"
    },
    {
      name: "Distributed Microservices Platform",
      technologies: [
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <FaNodeJs />, name: "Node.js" }
      ],
      codeLink: "https://github.com/Th1f/project3",
      liveLink: "https://project3-demo.cloud"
    }
  ];

  return (
    <div 
      className="portfolio-container" 
      onMouseMove={handleMouseMove}
    >
      <nav className={`sleek-nav ${isNavVisible ? 'visible' : 'hidden'}`}>
        <div className="nav-links">
          <a href="#technologies">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section id="hero" className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>Irvin Leonardi Hansen</h1>
            <p>A <span className="highlight-role">Software Engineer</span> | Sydney, NSW</p>
            <div className="hero-cta">
              <button className="view-work-btn">View My Work</button>
              <button className="download-cv-btn">Download CV</button>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="technologies-section">
        <h2>Technologies</h2>
        <div className="tech-grid">
          {[
            { icon: <FaReact />, name: 'React' },
            { icon: <SiNextdotjs />, name: 'Next.js' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <SiTypescript />, name: 'TypeScript' },
            { icon: <FaJs />, name: 'JavaScript' },
            { icon: <FaPython />, name: 'Python' },
            { icon: <SiDjango />, name: 'Django' },
            { icon: <SiFlask />, name: 'Flask' },
            { icon: <FaJava />, name: 'Java' },
            { icon: <FaDocker />, name: 'Docker' },
            { icon: <FaAws />, name: 'AWS' },
            { icon: <SiPostgresql />, name: 'PostgreSQL' },
            { icon: <SiMongodb />, name: 'MongoDB' },
            { icon: <SiOpenai />, name: 'OpenAI' },
            { icon: <SiPytorch />, name: 'PyTorch' },
            { icon: <TbBinaryTree />, name: 'Data Structures' },
            { icon: <FaGit />, name: 'Git' },
            { icon: <FaLinux />, name: 'Linux' },
            { icon: <FaHtml5 />, name: 'HTML5' },
            { icon: <FaCss3 />, name: 'CSS3' }
          ].map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.name}</h3>
              </div>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-icon" title={tech.name}>
                    {tech.icon}
                  </div>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
