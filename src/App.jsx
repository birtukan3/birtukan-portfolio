import { useEffect, useRef, useState } from "react";
import profilePhoto from "../image/birtukan-portfolio.jpg";

const profile = {
  name: "Birtukan Getnet",
  location: "Bahir Dar, Ethiopia",
  email: "birtukang1204@gmail.com",
  phone: "+251 941 484 952",
  github: "https://github.com/birtukan3",
  linkedin: "https://linkedin.com/in/birtukan-getnet-37b001370",
};

const navigation = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Experience", "experience"], ["Education", "education"], ["Certificates", "certificates"],
];

const skillGroups = [
  { title: "Frontend", context: "PROJECT WORK", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
  { title: "Backend & data", context: "PROJECT WORK", skills: ["Node.js", "NestJS", "TypeScript", "REST APIs", "PostgreSQL", "SQL", "TypeORM", "Socket.IO", "JWT"] },
  { title: "Mobile", context: "GROUP PROJECT", skills: ["Flutter", "Dart"] },
  { title: "Tools", context: "WORKFLOW", skills: ["Git", "GitHub", "Postman", "VS Code"] },
  { title: "Creative & marketing", context: "PROFESSIONAL EXPERIENCE", skills: ["Content creation", "Digital marketing", "Social media content"] },
];

const projects = [
  {
    id: "smartoffice", number: "01", title: "SmartOffice Appointment Management System",
    kind: "Full-stack web application",
    description: "A full-stack office appointment platform covering booking requests, status tracking, staff and administrator workflows, authentication, and notifications.",
    tags: ["Next.js", "React", "NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Socket.IO"],
    repository: "https://github.com/birtukan3/full-stack-appointment-system",
    art: "office", artLabel: "APPOINTMENT WORKFLOWS", mark: "SO", featured: true,
    features: ["Appointment booking", "Role-based workflows", "Status management", "Notifications"],
  },
  {
    id: "unilink", number: "02", title: "UniLink Ethiopia", kind: "Flutter group project",
    description: "A Flutter and Dart mobile application project built collaboratively as part of a group.",
    tags: ["Flutter", "Dart", "Group project"],
    repository: "https://github.com/birtukan3/unilink-flutter-app",
    art: "unilink", artLabel: "MOBILE · GROUP WORK", mark: "UL", featured: true,
  },
  {
    id: "employees", number: "03", title: "Employee Management System", kind: "Web project",
    description: "An employee management web project built with HTML.",
    tags: ["HTML"],
    repository: "https://github.com/birtukan3/employee-management-system",
    art: "employees", artLabel: "HTML · WEB PROJECT", mark: "EM",
  },
  {
    id: "calculator", number: "04", title: "Mini Calculator", kind: "Personal project",
    description: "A compact web calculator for basic arithmetic, with a custom interface and calculation logic.",
    tags: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/birtukan3/Min-calculator_project",
    art: "calculator", artLabel: "BASIC ARITHMETIC", mark: "÷",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></> : <><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>}
    </svg>
  );
}

function SectionHeading({ id, number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-kicker"><span>{number}</span> / {eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const resetMenu = (event) => { if (event.matches) setMenuOpen(false); };
    desktop.addEventListener("change", resetMenu);
    return () => desktop.removeEventListener("change", resetMenu);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Birtukan Getnet, home">
          <span className="brand-mark">BG</span><span className="brand-name">Birtukan Getnet</span>
        </a>
        <button ref={menuButton} className="nav-toggle" type="button" aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen((open) => !open)}>
          <span className={menuOpen ? "menu-icon is-open" : "menu-icon"} aria-hidden="true"><span /><span /></span>
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} id="primary-navigation" aria-label="Main navigation">
          {navigation.map(([label, id]) => <a href={"#" + id} key={id} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowIcon diagonal /></a>
        </nav>
      </div>
    </header>
  );
}

function SocialLink({ href, children }) {
  return <a className="social-link" href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowIcon diagonal /></a>;
}

function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> SOFTWARE ENGINEERING · BAHIR DAR, ETHIOPIA</p>
        <h1 id="hero-title">Hi, I’m <span>Birtukan Getnet.</span></h1>
        <p className="hero-role">Software Engineering Student <span>|</span> Aspiring Software Developer <span>|</span> Content Creator & Digital Marketer</p>
        <p className="hero-intro">I study Software Engineering at Bahir Dar University and build web projects while developing my software engineering practice. I also work in content creation and digital marketing at DevVoltz Technologies PLC.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View my projects <ArrowIcon /></a>
          <a className="button button-outline" href="#contact">Contact me <ArrowIcon diagonal /></a>
        </div>
        <nav className="hero-socials" aria-label="Social profiles">
          <SocialLink href={profile.github}>GitHub</SocialLink>
          <SocialLink href={profile.linkedin}>LinkedIn</SocialLink>
        </nav>
      </div>
      <div className="hero-portrait">
        <div className="portrait-frame">
          <img src={profilePhoto} alt="Portrait of Birtukan Getnet" width="1103" height="1426" fetchPriority="high" />
          <span className="portrait-corner portrait-corner--top" aria-hidden="true" />
          <span className="portrait-corner portrait-corner--bottom" aria-hidden="true" />
        </div>
        <div className="portrait-caption"><span className="caption-mark" aria-hidden="true">BG</span><span><strong>Birtukan Getnet</strong><small>Student · Developer · Creator</small></span></div>
        <span className="portrait-orbit portrait-orbit--one" aria-hidden="true" />
        <span className="portrait-orbit portrait-orbit--two" aria-hidden="true" />
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowIcon /></a>
    </section>
  );
}

function About() {
  return (
    <section className="section container" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" number="01" eyebrow="ABOUT ME" title="Technology, creativity, and a practical mindset." description="I’m building a career that brings together software development and clear digital communication." />
      <div className="about-layout">
        <p className="about-lead">I’m a Software Engineering student at Bahir Dar Institute of Technology, interested in making useful digital products from thoughtful ideas.</p>
        <div className="about-copy">
          <p>My project work spans responsive frontend interfaces, full-stack web applications, and a Flutter group project. I’m continuing to learn modern web technologies by applying them to practical work and collaborating with others.</p>
          <p>Alongside development, I work as a Content Creator & Digital Marketer at DevVoltz Technologies PLC. That experience adds a creative and communication-focused perspective to the way I approach digital products.</p>
          <a className="text-link" href="#experience">More about my experience <ArrowIcon diagonal /></a>
        </div>
      </div>
      <div className="about-facts" aria-label="Profile details">
        <div><span>01</span><strong>Software Engineering</strong><small>Student at Bahir Dar University</small></div>
        <div><span>02</span><strong>Web development</strong><small>Frontend and full-stack project work</small></div>
        <div><span>03</span><strong>Creative communication</strong><small>Content creation and digital marketing</small></div>
      </div>
    </section>
  );
}

function SkillCard({ group, index }) {
  return (
    <article className="skill-card">
      <div className="skill-card-top"><span className="skill-index">0{index + 1}</span><span className="skill-context">{group.context}</span></div>
      <h3>{group.title}</h3>
      <ul className="skill-tags">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
    </article>
  );
}

function Skills() {
  return (
    <section className="section section-soft" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" number="02" eyebrow="SKILLS & TOOLS" title="A growing toolkit, grounded in project work." description="These are technologies and practices I’ve worked with through projects and professional experience. I’m continuing to build depth as I learn." />
        <div className="skill-grid">{skillGroups.map((group, index) => <SkillCard group={group} index={index} key={group.title} />)}</div>
        <p className="learning-note"><span aria-hidden="true">↗</span> I’m actively learning and applying modern web technologies as I grow my project experience.</p>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={project.featured ? "project-card project-card--featured" : "project-card"}>
      <div className={"project-art project-art--" + project.art} aria-hidden="true">
        <span className="project-art-number">/{project.number}</span><span className="project-art-mark">{project.mark}</span>
        <span className="project-art-label">{project.artLabel}</span><span className="project-art-line project-art-line--one" />
        <span className="project-art-line project-art-line--two" /><span className="project-art-orb" />
      </div>
      <div className="project-body">
        <div className="project-meta"><span>{project.kind}</span><span>{project.number}</span></div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.features ? <ul className="project-features" aria-label="Project areas">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul> : null}
        <ul className="project-tags" aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <a className="project-link" href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={"View " + project.title + " source on GitHub"}>View repository <ArrowIcon diagonal /></a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section container" id="projects" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" number="03" eyebrow="SELECTED PROJECTS" title="Work that helps me learn by building." description="A mix of web application projects and collaborative mobile work. Repository details are linked where available." />
      <div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-soft" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading id="experience-title" number="04" eyebrow="EXPERIENCE" title="Professional work beyond the code." description="My professional experience has strengthened the creative and communication side of my digital work." />
        <article className="experience-card">
          <div className="experience-logo" aria-hidden="true">DV</div>
          <div className="experience-main">
            <p className="experience-label">PROFESSIONAL EXPERIENCE</p>
            <h3>Content Creator & Digital Marketer</h3>
            <p className="experience-company">DevVoltz Technologies PLC <span>·</span> Bahir Dar, Ethiopia</p>
            <p className="experience-description">Create content and contribute to digital marketing work at DevVoltz Technologies PLC.</p>
          </div>
          <p className="experience-period">2024 <span>—</span> Present</p>
        </article>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section container" id="education" aria-labelledby="education-title">
      <SectionHeading id="education-title" number="05" eyebrow="EDUCATION" title="Building a foundation in software engineering." />
      <article className="education-card">
        <div className="education-symbol" aria-hidden="true">BDU</div>
        <div><p className="education-label">CURRENT STUDIES</p><h3>Bahir Dar University</h3><p>Bahir Dar Institute of Technology · Software Engineering</p></div>
        <span className="education-status">Student</span>
      </article>
    </section>
  );
}

function Certificates() {
  const certificates = [
    { title: "Content Creation & Digital Marketing", issuer: "Kibran Creatives", date: "", mark: "CC" },
    { title: "Student Project Exhibition Certificate", issuer: "BIT Career Development Center", date: "April 2025", mark: "BIT" },
  ];

  return (
    <section className="section section-soft" id="certificates" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHeading id="certificates-title" number="06" eyebrow="CERTIFICATES" title="Learning and taking part." description="Professional learning and campus participation." />
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <span className="certificate-mark" aria-hidden="true">{certificate.mark}</span>
              <div><h3>{certificate.title}</h3><p>{certificate.issuer}</p>{certificate.date ? <span className="certificate-date">{certificate.date}</span> : null}</div>
              <span className="certificate-check" aria-hidden="true">✓</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const phoneLink = "tel:" + profile.phone.replace(/\s+/g, "");

  return (
    <section className="section container" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="section-kicker"><span>07</span> / CONTACT</p>
          <h2 id="contact-title">Let’s make something useful.</h2>
          <p>I’m open to conversations about software projects, internships, collaboration, and digital content work.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-method contact-method--primary" href={"mailto:" + profile.email}>
            <span className="contact-method-icon" aria-hidden="true">@</span><span><small>Email me</small><strong>{profile.email}</strong></span><ArrowIcon diagonal />
          </a>
          <a className="contact-method" href={phoneLink}>
            <span className="contact-method-icon" aria-hidden="true">☎</span><span><small>Call me</small><strong>{profile.phone}</strong></span><ArrowIcon diagonal />
          </a>
          <div className="contact-socials"><SocialLink href={profile.github}>GitHub</SocialLink><SocialLink href={profile.linkedin}>LinkedIn</SocialLink></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">BG</span><span className="brand-name">Birtukan Getnet</span></a>
        <p className="footer-tagline">Software engineering, creativity, and continuous learning.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon diagonal /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon diagonal /></a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} Birtukan Getnet · {profile.location}</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main"><Hero /><About /><Skills /><Projects /><Experience /><Education /><Certificates /><Contact /></main>
      <Footer />
    </>
  );
}
