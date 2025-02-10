import React, { useState } from 'react';
import './App.css'
import { 
  ReactOriginal as ReactIcon, 
  NodejsOriginal   as NodejsIcon, 
  PythonOriginal  as PythonIcon, 
  DockerPlain  as DockerIcon, 
  AmazonwebservicesPlainWordmark   as AwsIcon,
  JavaOriginal  as JavaIcon,
  GitOriginal  as GitIcon,
  LinuxOriginal  as LinuxIcon,
  Html5Original  as Html5Icon,
  Css3Original  as Css3Icon,
  JavascriptOriginal  as JavascriptIcon,
} from 'devicons-react';
import { 
  TypescriptOriginal  as TypescriptIcon, 
  PostgresqlOriginal  as PostgresqlIcon, 
  MongodbOriginal  as MongodbIcon,
  PytorchOriginal  as PytorchIcon,
  DjangoPlain  as DjangoIcon,
  FlaskOriginal  as FlaskIcon,
  NextjsPlain  as NextjsIcon
} from 'devicons-react';
import { MdEmail } from 'react-icons/md';
import { TbBinaryTree } from 'react-icons/tb';
import { SiOpenai as OpenaiIcon } from 'react-icons/si';
import { FaGithub as SocialGithubIcon } from 'react-icons/fa';
import { FaLinkedin as SocialLinkedinIcon } from 'react-icons/fa';

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

  // Add smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const socialLinks = [
    { 
      icon: <SocialGithubIcon />, 
      link: "https://github.com/Th1f",
      name: "GitHub"
    },
    { 
      icon: <SocialLinkedinIcon />, 
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
      name: "Irvin LLM-Bot",
      technologies: [
        { icon: <OpenaiIcon />, name: "OpenAI" },
        { icon: <ReactIcon size={45} />, name: 'React' },
        { icon: <TypescriptIcon size={45} />, name: "TypeScript" },
        { icon: <AwsIcon size={45} />, name: 'AWS' },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/head-port",
      liveLink: "https://main.dx8q38lkx5ksh.amplifyapp.com"
    },
    {
      name: "Farm Search Engine",
      technologies: [
        { icon: <ReactIcon size={45} />, name: 'React' },
        { icon: <NodejsIcon size={45} />, name: 'Node.js' },
        { icon: <AwsIcon size={45} />, name: "AWS" },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/fullstack-farm-search",
      liveLink: "https://project2-demo.herokuapp.com"
    },
    {
      name: "Youtube MP3 and MP4 Downloader",
      technologies: [
        { icon: <DockerIcon size={45} />, name: "Docker" },
        { icon: <PythonIcon size={45} />, name: 'Python' },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/Youtube-Downloader-mp3-mp4",
      liveLink: "https://project3-demo.cloud"
    },
    {
      name: "Irvin LLM-Bot",
      technologies: [
        { icon: <OpenaiIcon />, name: "OpenAI" },
        { icon: <ReactIcon size={45} />, name: 'React' },
        { icon: <TypescriptIcon size={45} />, name: "TypeScript" },
        { icon: <AwsIcon size={45} />, name: 'AWS' },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/head-port",
      liveLink: "https://main.dx8q38lkx5ksh.amplifyapp.com"
    },
    {
      name: "Irvin LLM-Bot",
      technologies: [
        { icon: <OpenaiIcon />, name: "OpenAI" },
        { icon: <ReactIcon size={45} />, name: 'React' },
        { icon: <TypescriptIcon size={45} />, name: "TypeScript" },
        { icon: <AwsIcon size={45} />, name: 'AWS' },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/head-port",
      liveLink: "https://main.dx8q38lkx5ksh.amplifyapp.com"
    },
    {
      name: "Irvin LLM-Bot",
      technologies: [
        { icon: <OpenaiIcon />, name: "OpenAI" },
        { icon: <ReactIcon size={45} />, name: 'React' },
        { icon: <TypescriptIcon size={45} />, name: "TypeScript" },
        { icon: <AwsIcon size={45} />, name: 'AWS' },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/head-port",
      liveLink: "https://main.dx8q38lkx5ksh.amplifyapp.com"
    },
    {
      name: "Irvin LLM-Bot",
      technologies: [
        { icon: <OpenaiIcon />, name: "OpenAI" },
        { icon: <ReactIcon size={45} />, name: 'React' },
        { icon: <TypescriptIcon size={45} />, name: "TypeScript" },
        { icon: <AwsIcon size={45} />, name: 'AWS' },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/head-port",
      liveLink: "https://main.dx8q38lkx5ksh.amplifyapp.com"
    },
    {
      name: "Irvin LLM-Bot",
      technologies: [
        { icon: <OpenaiIcon />, name: "OpenAI" },
        { icon: <ReactIcon size={45} />, name: 'React' },
        { icon: <TypescriptIcon size={45} />, name: "TypeScript" },
        { icon: <AwsIcon size={45} />, name: 'AWS' },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/head-port",
      liveLink: "https://main.dx8q38lkx5ksh.amplifyapp.com"
    },
    {
      name: "Irvin LLM-Bot",
      technologies: [
        { icon: <OpenaiIcon />, name: "OpenAI" },
        { icon: <ReactIcon size={45} />, name: 'React' },
        { icon: <TypescriptIcon size={45} />, name: "TypeScript" },
        { icon: <AwsIcon size={45} />, name: 'AWS' },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/head-port",
      liveLink: "https://main.dx8q38lkx5ksh.amplifyapp.com"
    },
    {
      name: "Irvin LLM-Bot",
      technologies: [
        { icon: <OpenaiIcon />, name: "OpenAI" },
        { icon: <ReactIcon size={45} />, name: 'React' },
        { icon: <TypescriptIcon size={45} />, name: "TypeScript" },
        { icon: <AwsIcon size={45} />, name: 'AWS' },
        { icon: <GitIcon size={45} />, name: 'Git' }
      ],
      codeLink: "https://github.com/Th1f/head-port",
      liveLink: "https://main.dx8q38lkx5ksh.amplifyapp.com"
    },
    
  ];

  return (
    <div 
      className="portfolio-container" 
      onMouseMove={handleMouseMove}
    >
      <nav className={`sleek-nav ${isNavVisible ? 'visible' : 'hidden'}`}>
        <div className="nav-links">
          <a onClick={() => scrollToSection('technologies')}>Tech</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
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
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          {[
            { icon: <ReactIcon size={45} />, name: 'React' },
            { icon: <NextjsIcon size={45} />, name: 'Next.js' },
            { icon: <NodejsIcon size={45} />, name: 'Node.js' },
            { icon: <TypescriptIcon size={45} />, name: 'TypeScript' },
            { icon: <JavascriptIcon size={45} />, name: 'JavaScript' },
            { icon: <PythonIcon size={45} />, name: 'Python' },
            { icon: <DjangoIcon size={45} />, name: 'Django' },
            { icon: <FlaskIcon size={45} />, name: 'Flask' },
            { icon: <JavaIcon size={45} />, name: 'Java' },
            { icon: <DockerIcon size={45} />, name: 'Docker' },
            { icon: <AwsIcon size={45} />, name: 'AWS' },
            { icon: <PostgresqlIcon size={45} />, name: 'PostgreSQL' },
            { icon: <MongodbIcon size={45} />, name: 'MongoDB' },
            { icon: <PytorchIcon size={45} />, name: 'PyTorch' },
            { icon: <TbBinaryTree />, name: 'Data Structures' },
            { icon: <GitIcon size={45} />, name: 'Git' },
            { icon: <LinuxIcon size={45} />, name: 'Linux' },
            { icon: <Html5Icon size={45} />, name: 'HTML5' },
            { icon: <Css3Icon size={45} />, name: 'CSS3' }
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
