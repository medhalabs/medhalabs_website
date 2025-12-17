import React, { useEffect, useRef } from "react";
import "./index.css";
import logo from "./assets/medhalabs_logo.png";
import client1 from "./assets/tsilogo.png";
import client2 from "./assets/Nesara_Organicslogo.png";
import client3 from "./assets/pūrṇāyai_organicslogo.png";
import client4 from "./assets/Adimalogo.png";
import client5 from "./assets/medhalabs_logo.png";
import founderImage from "./assets/founder_image.jpeg";

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(".section, .hero, .card, .project-card");
    sections.forEach((section) => observer.observe(section));

    // Scroll progress indicator
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="animated-background"></div>
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Marketing />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <div className="nav-left">
          <span className="nav-logo-wrapper">
            <img src={logo} alt="Medhā Labs Logo" className="nav-logo-img" loading="eager" />
          </span>
          <div>
            <div className="nav-logo">Medhā Labs</div>
            <div className="nav-tagline">Intelligence.Innovation.Impact</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#marketing" className="nav-link">Marketing</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-gradient" style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 184, 28, 0.1), transparent 50%)`
      }}></div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge animate-slide-down">
            <span>⚙️ Medhā Labs</span>
            <span>Software, Marketing & Brand Strategy</span>
          </div>
          <h1 className="hero-title animate-fade-in-up">Where wisdom powers modern software.</h1>
          <p className="hero-subtitle animate-fade-in-up-delay">
            Medhā Labs is a software development & digital marketing studio that
            designs, builds, and promotes robust web applications. From idea to
            production to market presence, we turn complex problems into reliable
            digital products with strong brand visibility.
          </p>
          <div className="hero-cta animate-fade-in-up-delay-2">
            <button
              className="btn btn-primary btn-animated"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Start a project</span>
              <span className="btn-arrow">→</span>
            </button>
            <button
              className="btn btn-outline btn-animated"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View services
            </button>
          </div>
          <div className="hero-pill animate-fade-in-up-delay-3">
            <span className="pill-item">Web & API development</span>
            <span className="pill-item">React · TypeScript · Python</span>
            <span className="pill-item">Digital Marketing & Branding</span>
          </div>
        </div>

        <aside className="hero-card animate-scale-in">
        <div className="hero-card-header">
          <div>
            <div className="hero-chip">Full-stack services</div>
            <div style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
              Code + Brand + Growth
            </div>
          </div>
          <span style={{ fontSize: "0.9rem" }}>● ● ●</span>
        </div>
        <div className="hero-stat-row">
          <div className="hero-stat">
            <div className="hero-stat-label">Services</div>
            <div className="hero-stat-value">Software + Marketing</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">Approach</div>
            <div className="hero-stat-value">End‑to‑end delivery</div>
          </div>
        </div>
        <div className="hero-stat-row">
          <div className="hero-stat">
            <div className="hero-stat-label">Stack</div>
            <div className="hero-stat-value">
              React · Python · SEO · Content
            </div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">Result</div>
            <div className="hero-stat-value">Products that sell</div>
          </div>
        </div>
      </aside>
    </div>
  </section>
  );
};

const About: React.FC = () => (
  <section className="section" id="about">
    <div className="section-header">
      <div className="section-kicker">ABOUT MEDHĀ LABS</div>
      <h2 className="section-title">Software studio with a lab mindset.</h2>
      <p className="section-subtitle">
        Medhā Labs combines disciplined engineering with an experimental
        approach. We validate ideas quickly, ship dependable software, and build
        strong brand presence to ensure your product reaches the right audience.
      </p>
    </div>

    {/* Core pillars */}
    <div className="grid-3" style={{ marginBottom: "2.5rem" }}>
      <div className="card">
        <div className="card-icon">🎯</div>
        <h3 className="card-title">Product‑oriented thinking</h3>
        <p className="card-body">
          We focus on outcomes, not just tickets. Every feature is tied to a
          clear user or business goal so you build what truly matters.
        </p>
      </div>

      <div className="card">
        <div className="card-icon">🧩</div>
        <h3 className="card-title">Full‑stack capability</h3>
        <p className="card-body">
          Frontend, backend, APIs, databases, integrations, and marketing — one
          team that can design and deliver the complete solution.
        </p>
      </div>

      <div className="card">
        <div className="card-icon">🤝</div>
        <h3 className="card-title">Long‑term partnership</h3>
        <p className="card-body">
          We stay after launch: monitoring, improving, extending your systems,
          and growing your user base through strategic marketing.
        </p>
      </div>
    </div>

    {/* Founder section - Futuristic Design */}
    <div className="container" style={{ maxWidth: "1000px" }}>
      <div className="founder-section">
        <div className="founder-header">
          <div className="founder-badge">
            <span className="founder-icon">👨‍💻</span>
            <span>FOUNDER & LEAD DEVELOPER</span>
          </div>
          <div className="founder-name-section">
            <div className="founder-image-wrapper">
              <img 
                src={founderImage} 
                alt="Pavan Raj K G - Founder" 
                className="founder-image"
              />
              <div className="founder-image-glow"></div>
            </div>
            <div className="founder-name-content">
              <h3 className="founder-name">
                Pavan Raj K G
              </h3>
              <p className="founder-role">
                Founder & Full‑Stack Developer, Medhā Labs
              </p>
            </div>
          </div>
        </div>

        <div className="founder-content-grid">
          <div className="founder-main">
            <div className="founder-description">
              <p>
                With a background in building real‑world products and growing digital
                presence for businesses, <strong>Pavan Raj K G</strong> started Medhā Labs in 2022 
                to help companies turn ideas into reliable software that sells. The focus is on clean
                architecture, clear communication, smart marketing, and shipping value
                in small, continuous steps.
              </p>
            </div>

            <div className="founder-stats">
              <div className="founder-stat-item">
                <div className="stat-number">2022</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="founder-stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="founder-stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
          </div>

          <div className="founder-sidebar">
            <div className="founder-beliefs">
              <div className="beliefs-header">
                <span className="beliefs-icon">💡</span>
                <h4>Core Principles</h4>
              </div>
              <ul className="beliefs-list">
                <li>
                  <span className="belief-marker">▸</span>
                  <span>Simple, maintainable code over clever hacks</span>
                </li>
                <li>
                  <span className="belief-marker">▸</span>
                  <span>Understanding business goals before writing features</span>
                </li>
                <li>
                  <span className="belief-marker">▸</span>
                  <span>Smart branding that communicates product value clearly</span>
                </li>
                <li>
                  <span className="belief-marker">▸</span>
                  <span>Building long‑term relationships, not one‑off projects</span>
                </li>
              </ul>
            </div>

            <div className="founder-connect">
              <div className="connect-header">
                <span className="connect-icon">🔗</span>
                <h4>Connect</h4>
              </div>
              <div className="connect-links">
                <a
                  href="mailto:hello@medhalabs.com"
                  className="connect-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="link-icon">✉️</span>
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pavanrajkg/"
                  className="connect-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="link-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services: React.FC = () => (
  <section className="section" id="services">
    <div className="section-header">
      <div className="section-kicker">SOFTWARE DEVELOPMENT</div>
      <h2 className="section-title">What Medhā Labs builds for you.</h2>
      <p className="section-subtitle">
        End‑to‑end software development services, from discovery and architecture
        to coding, testing and deployment.
      </p>
    </div>

    <div className="grid-3">
      {[
        { icon: "💻", title: "Web applications", body: "Responsive, maintainable web apps built with React and TypeScript, backed by robust APIs." },
        { icon: "🔌", title: "APIs & integrations", body: "REST/GraphQL APIs, third‑party integrations, and internal tools that connect your systems." },
        { icon: "☁️", title: "Cloud‑ready backends", body: "Scalable backends on AWS, Azure or other cloud providers, with CI/CD and monitoring in place." },
        { icon: "🧪", title: "Prototypes & MVPs", body: "Launch quickly with well‑structured MVPs you can iterate on, not throw away." },
        { icon: "🛠️", title: "Modernisation", body: "Refactor legacy apps, improve performance, and bring older systems to modern stacks." },
        { icon: "📈", title: "Ongoing development", body: "Dedicated capacity for continuous improvements, new features and maintenance." },
      ].map((service, index) => (
        <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          <ServiceCard
            icon={service.icon}
            title={service.title}
            body={service.body}
          />
        </div>
      ))}
    </div>
  </section>
);

const Marketing: React.FC = () => (
  <section className="section" id="marketing" style={{ backgroundColor: "rgba(31, 71, 136, 0.05)" }}>
    <div className="section-header">
      <div className="section-kicker">DIGITAL MARKETING & BRANDING</div>
      <h2 className="section-title">Grow your product with smart marketing.</h2>
      <p className="section-subtitle">
        A great product deserves great visibility. We combine branding, content
        strategy, and digital marketing to help your software reach its audience.
      </p>
    </div>

    <div className="grid-3">
      <ServiceCard
        icon="🎨"
        title="Brand Strategy & Design"
        body="Logo, color palette, brand guidelines, and visual identity that communicate your product's value."
      />
      <ServiceCard
        icon="📝"
        title="Content & SEO"
        body="Website copy, blog articles, landing pages, and SEO optimization to attract organic traffic."
      />
      <ServiceCard
        icon="📱"
        title="Social Media & Growth"
        body="LinkedIn strategy, Twitter campaigns, and social media management to build community and awareness."
      />
      <ServiceCard
        icon="🎯"
        title="Digital Advertising"
        body="Google Ads, Facebook/Instagram ads, and targeted campaigns to drive conversions and leads."
      />
      <ServiceCard
        icon="📊"
        title="Analytics & Insights"
        body="Performance tracking, user behavior analysis, and data-driven recommendations for growth."
      />
      <ServiceCard
        icon="💬"
        title="Email & Messaging"
        body="Email campaigns, newsletters, and messaging strategy to nurture users and build retention."
      />
    </div>

    {/* Marketing + Software synergy */}
    <div
      className="container"
      style={{
        maxWidth: "900px",
        marginTop: "2.5rem",
      }}
    >
      <div className="card" style={{ backgroundColor: "#ffffff" }}>
        <h3 style={{ color: "var(--color-primary)", marginBottom: "0.75rem" }}>
          🚀 Why Medhā Labs for both software & marketing?
        </h3>
        <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)" }}>
          Building great software isn't enough—it needs to reach the right people.
          By combining development and marketing under one roof, we ensure your
          product messaging aligns with its technical capabilities. One cohesive
          team, one vision, one result: <strong>products that work and sell.</strong>
        </p>
      </div>
    </div>
  </section>
);

type ServiceCardProps = {
  icon: string;
  title: string;
  body: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, body }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <article 
      className="card card-animated"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card-icon ${isHovered ? "icon-bounce" : ""}`}>{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
      <div className={`card-hover-effect ${isHovered ? "active" : ""}`}></div>
    </article>
  );
};


const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Billinator",
      description: "Open source GST billing and stock management application with comprehensive inventory management and CRM capabilities. Streamlines business operations with automated invoicing, tax compliance, and customer relationship tracking.",
      tech: ["Open Source", "GST Billing", "Inventory Management", "CRM"],
      category: "Software Development",
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "OStaffSync",
      description: "Open source Human Resource Management System (HRMS) designed to help organizations manage employee data, attendance, payroll, and HR processes efficiently. Built with modern architecture for scalability and ease of use.",
      tech: ["Open Source", "HRMS", "Employee Management", "Payroll"],
      category: "Software Development",
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Nesara Organics & Purnayi Organics",
      description: "Comprehensive branding and marketing support for organic products companies. Delivered complete brand identity, marketing strategy, and digital presence to help these brands connect with their target audience and grow their market share.",
      tech: ["Branding", "Marketing Strategy", "Digital Marketing", "Brand Identity"],
      category: "Marketing & Branding",
      link: "#",
      featured: false,
    },
    {
      id: 4,
      title: "ProMirror",
      description: "A sophisticated crypto copy trading platform that enables users to automatically replicate trades from successful traders. Features real-time trade mirroring, risk management tools, and comprehensive portfolio analytics for cryptocurrency trading.",
      tech: ["Crypto Trading", "Copy Trading", "Real-time", "Portfolio Management"],
      category: "Software Development",
      link: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Nesara Organics Website",
      description: "Complete website development and ongoing maintenance for Nesara Organics. Built a responsive, SEO-optimized website that showcases their organic products and brand story, with continuous updates and performance monitoring.",
      tech: ["Web Development", "SEO", "Website Maintenance", "Content Management"],
      category: "Web Development",
      link: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Technosys India",
      description: "Digital marketing services for Technosys India, including strategy development, campaign management, and performance optimization. Helped increase online visibility and drive qualified leads through targeted digital marketing initiatives.",
      tech: ["Digital Marketing", "SEO", "Campaign Management", "Lead Generation"],
      category: "Marketing & Branding",
      link: "#",
      featured: false,
    },
    {
      id: 7,
      title: "Adima Cultural Center",
      description: "Complete website development for Adima Cultural Center, showcasing their cultural programs, events, and heritage initiatives. Built a modern, responsive website that reflects the center's mission and provides an engaging user experience for visitors and participants.",
      tech: ["Web Development", "Responsive Design", "Content Management", "Cultural Heritage"],
      category: "Web Development",
      link: "#",
      featured: false,
    },
  ];

  const [filter, setFilter] = React.useState<string>("all");
  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section fade-in" 
      id="projects" 
      style={{ backgroundColor: "rgba(31, 71, 136, 0.02)" }}
    >
      <div className="section-header">
        <div className="section-kicker">OUR PROJECTS</div>
        <h2 className="section-title">Work that speaks for itself.</h2>
        <p className="section-subtitle">
          From web applications to brand identities, explore the projects we've built
          for clients across different industries and use cases.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="projects-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  link: string;
  featured: boolean;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article 
      className={`project-card ${project.featured ? "featured" : ""}`}
    >
      <div className="project-content">
        {project.featured && <span className="project-badge">Featured</span>}
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Clients: React.FC = () => {
  const logos = [client1, client2, client3, client4, client5];

  return (
    <section className="section" id="clients">
      <div className="section-header">
        <div className="section-kicker">OUR CLIENTS</div>
        <h2 className="section-title">Brands that trust Medhā Labs.</h2>
        <p className="section-subtitle">
          We partner with startups, small businesses, and growing brands across
          different industries to build products and drive digital growth.
        </p>
      </div>

      <div className="clients-strip-wrapper">
        <div className="clients-strip">
          {[...logos, ...logos].map((logoSrc, idx) => (
            <div className="client-logo" key={idx}>
              <img src={logoSrc} alt={`Client ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Contact: React.FC = () => (
  <section className="section" id="contact">
    <div className="section-header">
      <div className="section-kicker">CONTACT</div>
      <h2 className="section-title">Let's talk about your project.</h2>
      <p className="section-subtitle">
        Share a brief about what you want to build and how you want to grow,
        and we will respond with timelines, approach and ballpark estimates.
      </p>
    </div>

    <div className="container" style={{ maxWidth: "640px" }}>
      <form
        className="card"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This is a demo form. Hook it to your backend or email.");
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "0.9rem",
          }}
        >
          <LabeledInput label="Name" required placeholder="Your name" />
          <LabeledInput
            label="Email"
            type="email"
            required
            placeholder="you@company.com"
          />
          <LabeledInput
            label="Company"
            placeholder="Company or project name"
          />
          <LabeledSelect
            label="What do you need?"
            required
            options={[
              { value: "", label: "Select an option" },
              { value: "software", label: "Software Development" },
              { value: "marketing", label: "Digital Marketing & Branding" },
              { value: "both", label: "Both (Software + Marketing)" },
              { value: "other", label: "Other / Not sure" },
            ]}
          />
          <LabeledTextArea
            label="Project brief"
            required
            placeholder="Tell us what you want to build, your goals and timeline."
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem" }}>
          Send enquiry
        </button>
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--color-text-light)",
            marginTop: "0.75rem",
          }}
        >
          Prefer email? Write to{" "}
          <a href="mailto:medhalabs04@gmail.com">medhalabs04@gmail.com</a>.
        </p>
      </form>
    </div>
  </section>
);

type LabeledInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const LabeledInput: React.FC<LabeledInputProps> = ({ label, ...props }) => (
  <label style={{ fontSize: "0.85rem", display: "block" }}>
    <div style={{ marginBottom: "0.25rem", fontWeight: 500 }}>{label}</div>
    <input
      {...props}
      style={{
        width: "100%",
        borderRadius: "0.5rem",
        border: "1px solid #cbd5e1",
        padding: "0.55rem 0.7rem",
        fontSize: "0.9rem",
      }}
    />
  </label>
);

type LabeledSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[];
};

const LabeledSelect: React.FC<LabeledSelectProps> = ({ label, options, ...props }) => (
  <label style={{ fontSize: "0.85rem", display: "block" }}>
    <div style={{ marginBottom: "0.25rem", fontWeight: 500 }}>{label}</div>
    <select
      {...props}
      style={{
        width: "100%",
        borderRadius: "0.5rem",
        border: "1px solid #cbd5e1",
        padding: "0.55rem 0.7rem",
        fontSize: "0.9rem",
      }}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </label>
);

type LabeledTextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
  };

const LabeledTextArea: React.FC<LabeledTextAreaProps> = ({
  label,
  ...props
}) => (
  <label style={{ fontSize: "0.85rem", display: "block" }}>
    <div style={{ marginBottom: "0.25rem", fontWeight: 500 }}>{label}</div>
    <textarea
      {...props}
      rows={4}
      style={{
        width: "100%",
        borderRadius: "0.5rem",
        border: "1px solid #cbd5e1",
        padding: "0.55rem 0.7rem",
        fontSize: "0.9rem",
        resize: "vertical",
      }}
    />
  </label>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div>
        <div className="footer-brand">Medhā Labs</div>
        <p style={{ fontSize: "0.85rem" }}>
          Software development, digital marketing & branding studio helping
          businesses ship reliable products with strong market presence.
        </p>
      </div>
      <div>
        <div className="footer-column-title">Services</div>
        <a className="footer-link" href="#services"> Software Development</a>,
        <a className="footer-link" href="#marketing"> Marketing & Branding</a> |
        <a className="footer-link" href="#contact"> Get Started</a>
      </div>
      <div>
        <div className="footer-column-title">Connect</div>
        | <a className="footer-link" href="mailto:medhalabs04@gmail.com">
          medhalabs04@gmail.com
        </a> |  
        | <a className="footer-link" href="https://www.linkedin.com/in/pavanrajkg/" target="_blank" rel="noreferrer">
           LinkedIn
        </a> | 
        | <a className="footer-link" href="https://github.com/medhalabs" target="_blank" rel="noreferrer">
           GitHub
        </a> |
      </div>
    </div>
    <div className="footer-bottom">
      © {new Date().getFullYear()} Medhā Labs - Intelligence.Innovation.Impact.
    </div>
  </footer>
);

export default App;
