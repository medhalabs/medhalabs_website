import React, { useEffect, useRef } from "react";
import "./index.css";
import Loader from "./Loader";
import logo from "./assets/medhalabs_logo.png";
import client1 from "./assets/tsilogo.png";
import client2 from "./assets/Nesara_Organicslogo.png";
import client3 from "./assets/purnayai_organicslogo.png";
import client4 from "./assets/Adimalogo.png";
import client5 from "./assets/medhalabs_logo.png";
import client6 from "./assets/encoresheetmetallogo.svg";

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    if (loading) return;
    const observerOptions = {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={`app-shell${loading ? " app-shell--loading" : ""}`}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Services />
      <Projects />
      <Differentiators />
      <Clients />
      <Founder />
      <Contact />
      <Footer />
    </div>
    </>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#home" className="nav-brand" onClick={() => scrollTo("home")}>
          <img
            src={logo}
            alt="Medhā Labs"
            className="nav-logo-img"
            loading="eager"
          />
          <span className="nav-logo-text">
            <span className="accent">medhā</span>labs.
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" className="nav-link" onClick={() => scrollTo("about")}>
            About
          </a>
          <a href="#services" className="nav-link" onClick={() => scrollTo("services")}>
            Services
          </a>
          <a href="#projects" className="nav-link" onClick={() => scrollTo("projects")}>
            Projects
          </a>
          <a href="#contact" className="nav-link" onClick={() => scrollTo("contact")}>
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
        >
          Start Your Project
        </a>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

const HERO_ORBITS = [
  {
    num: "01",
    label: "Billinator",
    cls: "orbit-sphere-1",
    pos: "orbit-pos-a",
    link: "https://www.billinator.in/",
  },
  {
    num: "02",
    label: "Medha Inbrix",
    cls: "orbit-sphere-3",
    pos: "orbit-pos-b",
    link: "/Medha_Inbrix_Presentation.html",
  },
];

const Hero: React.FC = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-kicker">
            Intelligence · Innovation · Impact
          </div>
          <div className="hero-headline">
            <div className="hero-line-lead">We build</div>
            <div className="hero-line-solid">Products that sell.</div>
          </div>
          <p className="hero-subtitle">
            We don't just write code — we ship it. Software development, digital
            marketing, and brand strategy that turns complex problems into
            reliable products with real market presence.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo("contact")}>
              Start Your Project <span>→</span>
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("projects")}>
              See Work
            </button>
          </div>
        </div>

        <div className="hero-orbit">
          <div className="orbit-lines">
            <svg viewBox="0 0 400 500" fill="none">
              <ellipse cx="200" cy="250" rx="160" ry="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <ellipse cx="200" cy="250" rx="120" ry="160" stroke="rgba(255,255,255,0.04)" strokeWidth="1" transform="rotate(20 200 250)" />
            </svg>
          </div>
          {HERO_ORBITS.map((item) => (
            <a
              key={item.num}
              href={item.link}
              className={`orbit-item ${item.pos}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`orbit-sphere ${item.cls}`} />
              <span className="orbit-num">{item.num}</span>
              <span className="orbit-label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Marquee: React.FC = () => {
  const items = [
    "MEDHALABS.COM",
    "SOFTWARE STUDIO",
    "DIGITAL MARKETING",
    "BRAND STRATEGY",
    "FULL-STACK DELIVERY",
    "REACT · PYTHON · SEO",
  ];

  const track = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="star">★</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => (
  <section className="section" id="about">
    <div className="about-grid">
      <div>
        <div className="section-badge">More Than A Studio</div>
        <h2 className="about-pitch-title">
          We are your <em>in-house</em> product & growth team.
        </h2>
        <p className="about-pitch-text">
          Medhā Labs combines disciplined engineering with an experimental
          approach. We validate ideas quickly, ship dependable software, and build
          strong brand presence to ensure your product reaches the right audience.
        </p>
        <div className="about-links">
          <a href="#services" className="btn-primary">
            Our Services →
          </a>
          <a href="#about-founder" className="btn-ghost">
            Meet the Founder
          </a>
        </div>
      </div>
      <div className="about-stats">
        <div className="stat-card">
          <div className="stat-number">7+</div>
          <div className="stat-label">Projects Delivered</div>
          <div className="stat-context">Software & marketing</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2022</div>
          <div className="stat-label">Founded</div>
          <div className="stat-context">Bangalore, India</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2</div>
          <div className="stat-label">Core Disciplines</div>
          <div className="stat-context">Dev + Marketing</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">E2E</div>
          <div className="stat-label">Delivery Model</div>
          <div className="stat-context">Idea to production</div>
        </div>
      </div>
    </div>
  </section>
);

const Stats: React.FC = () => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="section-header section-header-center">
      <div className="section-badge">Real Results</div>
      <h2 className="section-title">What we've</h2>
      <h2 className="section-title section-title-outline">delivered.</h2>
    </div>
    <div className="about-stats" style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div className="stat-card">
        <div className="stat-number">GST</div>
        <div className="stat-label">Billing Platform</div>
        <div className="stat-context">Billinator — open source</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">AI</div>
        <div className="stat-label">Shared Inbox</div>
        <div className="stat-context">Medha Inbrix product</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">5+</div>
        <div className="stat-label">Brands Supported</div>
        <div className="stat-context">Marketing & web dev</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">100%</div>
        <div className="stat-label">End-to-End</div>
        <div className="stat-context">Code + brand + growth</div>
      </div>
    </div>
  </section>
);

type Service = {
  num: string;
  icon: string;
  title: string;
  body: string;
  accent: string;
};

const ALL_SERVICES: Service[] = [
  {
    num: "01",
    icon: "💻",
    title: "Web Applications",
    body: "Responsive, maintainable web apps built with React and TypeScript, backed by robust APIs.",
    accent: "purple",
  },
  {
    num: "02",
    icon: "🔌",
    title: "APIs & Integrations",
    body: "REST/GraphQL APIs, third-party integrations, and internal tools that connect your systems.",
    accent: "pink",
  },
  {
    num: "03",
    icon: "☁️",
    title: "Cloud Backends",
    body: "Scalable backends on AWS, Azure or other cloud providers, with CI/CD and monitoring in place.",
    accent: "orange",
  },
  {
    num: "04",
    icon: "🎨",
    title: "Brand Strategy",
    body: "Logo, color palette, brand guidelines, and visual identity that communicate your product's value.",
    accent: "blue",
  },
  {
    num: "05",
    icon: "📝",
    title: "Content & SEO",
    body: "Website copy, blog articles, landing pages, and SEO optimization to attract organic traffic.",
    accent: "green",
  },
  {
    num: "06",
    icon: "📱",
    title: "Social & Growth",
    body: "LinkedIn strategy, social campaigns, and digital advertising to build community and drive leads.",
    accent: "lime",
  },
  {
    num: "07",
    icon: "🧪",
    title: "Prototypes & MVPs",
    body: "Launch quickly with well-structured MVPs you can iterate on, not throw away.",
    accent: "purple",
  },
  {
    num: "08",
    icon: "📊",
    title: "Analytics",
    body: "Performance tracking, user behavior analysis, and data-driven recommendations for growth.",
    accent: "pink",
  },
  {
    num: "09",
    icon: "🛠️",
    title: "Ongoing Dev",
    body: "Dedicated capacity for continuous improvements, new features and maintenance.",
    accent: "orange",
  },
];

const Services: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);
  const visible = showAll ? ALL_SERVICES : ALL_SERVICES.slice(0, 6);

  return (
    <section className="section" id="services">
      <div className="section-header section-header-center">
        <div className="section-badge">Services</div>
        <h2 className="section-title">What we do.</h2>
        <p className="section-subtitle">
          Hover any card to see what we do — click to flip and explore the full
          service.
        </p>
      </div>

      <div className="services-grid">
        {visible.map((service) => (
          <FlipCard key={service.num} service={service} />
        ))}
      </div>

      {!showAll && (
        <button className="show-more-btn" onClick={() => setShowAll(true)}>
          Show {ALL_SERVICES.length - 6} More Services
        </button>
      )}
    </section>
  );
};

const FlipCard: React.FC<{ service: Service }> = ({ service }) => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      data-accent={service.accent}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flip-card-top">
            <div className="flip-icon">{service.icon}</div>
            <div className="flip-badge">↻ flip</div>
          </div>
          <div>
            <div className="flip-num">{service.num}</div>
            <div className="flip-title">{service.title}</div>
          </div>
          <div className="flip-card-bottom">
            <span />
            <div className="flip-arrow">→</div>
          </div>
        </div>
        <div className="flip-card-back">
          <div>
            <div className="flip-num">{service.num}</div>
            <div className="flip-title">{service.title}</div>
          </div>
          <p className="flip-body">{service.body}</p>
          <div className="flip-card-bottom">
            <span />
            <div className="flip-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  link: string;
  presentation: string | null;
  featured: boolean;
  metric: string;
  metricLabel: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Billinator",
    description:
      "Open source GST billing and stock management with inventory, CRM, and automated tax compliance.",
    tech: ["Open Source", "GST Billing", "Inventory", "CRM"],
    category: "Software Development",
    link: "https://www.billinator.in/",
    presentation: null,
    featured: true,
    metric: "GST",
    metricLabel: "Billing platform",
  },
  {
    id: 3,
    title: "Nesara & Purnayi Organics",
    description:
      "Complete brand identity and marketing strategy for organic product companies.",
    tech: ["Branding", "Marketing", "Digital", "Identity"],
    category: "Marketing & Branding",
    link: "#",
    presentation: null,
    featured: false,
    metric: "0→1",
    metricLabel: "Brand built",
  },
  {
    id: 4,
    title: "Medha Inbrix",
    description:
      "AI-powered shared inbox. Route, assign, and resolve customer conversations with AI assistance.",
    tech: ["Shared Inbox", "AI-ready", "Teams", "Routing"],
    category: "Software Development",
    link: "#",
    presentation: "/Medha_Inbrix_Presentation.html",
    featured: false,
    metric: "AI",
    metricLabel: "Powered inbox",
  },
  {
    id: 5,
    title: "Nesara Organics Website",
    description:
      "Responsive, SEO-optimized website with ongoing maintenance and performance monitoring.",
    tech: ["Web Dev", "SEO", "CMS", "Maintenance"],
    category: "Web Development",
    link: "#",
    presentation: null,
    featured: false,
    metric: "SEO",
    metricLabel: "Optimized site",
  },
  {
    id: 6,
    title: "Technosys India",
    description:
      "Digital marketing strategy, campaign management, and lead generation optimization.",
    tech: ["Digital Marketing", "SEO", "Campaigns", "Leads"],
    category: "Marketing & Branding",
    link: "https://www.technosysindiabangalore.com/",
    presentation: null,
    featured: false,
    metric: "Leads",
    metricLabel: "Generated",
  },
  {
    id: 8,
    title: "Encore AI Drawing Matcher",
    description:
      "Upload a photo of a handwritten roofing or flashing profile — the AI analyzes the shape, matches it against a master catalog, extracts measurements, and fills the production JSON template automatically.",
    tech: ["AI/ML", "Computer Vision", "JSON Automation", "Real-time Pipeline"],
    category: "AI Development",
    link: "https://www.encoresheetmetal.com.au/",
    presentation: null,
    featured: true,
    metric: "AI",
    metricLabel: "Drawing matcher",
  },
  {
    id: 7,
    title: "Adima Cultural Center",
    description:
      "Modern responsive website showcasing cultural programs, events, and heritage initiatives.",
    tech: ["Web Dev", "Responsive", "CMS", "Heritage"],
    category: "Web Development",
    link: "https://adimaculturalcentre.in/",
    presentation: null,
    featured: false,
    metric: "Web",
    metricLabel: "Full redesign",
  },
];

const Projects: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const slideWidth = 340 + 20;
      const index = Math.round(track.scrollLeft / slideWidth);
      setActiveIndex(Math.min(index, PROJECTS.length - 1));
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.pageX - track.offsetLeft;
    scrollLeft.current = track.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft =
      scrollLeft.current - (x - startX.current) * 1.5;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="section" id="projects">
      <div className="section-header">
        <div className="section-badge">Portfolio · {PROJECTS.length} Projects</div>
        <h2 className="section-title">Check out</h2>
        <h2 className="section-title section-title-outline">our work.</h2>
        <p className="section-subtitle">
          Drag to explore projects we've built for clients across software,
          marketing, and web development.
        </p>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p className="projects-scroll-hint">drag to explore →</p>
        <div
          ref={trackRef}
          className="projects-track"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`project-slide ${project.featured ? "featured" : ""}`}
            >
              {project.featured && (
                <span className="project-badge">Featured</span>
              )}
              <div className="project-slide-num">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="project-metric">{project.metric}</div>
              <div className="project-metric-label">{project.metricLabel}</div>
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              {project.presentation && (
                <a
                  href={project.presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Presentation →
                </a>
              )}
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ marginTop: "0.5rem", display: "block" }}
                >
                  Visit Website →
                </a>
              )}
            </article>
          ))}
        </div>
        <div className="projects-counter">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(PROJECTS.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
};

const DIFFERENTIATORS = [
  {
    stat: "E2E",
    title: "End-to-End Delivery",
    body: "From discovery to deployment to marketing — one team handles the complete product lifecycle.",
  },
  {
    stat: "Full-Stack",
    title: "Code + Brand + Growth",
    body: "Software and marketing under one roof so your messaging aligns with technical capabilities.",
  },
  {
    stat: "MVP",
    title: "Ship Fast, Iterate Smart",
    body: "Well-structured MVPs you can build on — not throwaway prototypes.",
  },
  {
    stat: "24/7",
    title: "Long-Term Partnership",
    body: "We stay after launch: monitoring, improving, and growing your user base.",
  },
  {
    stat: "Clean",
    title: "Maintainable Architecture",
    body: "Simple, maintainable code over clever hacks. Built to scale with your business.",
  },
];

const Differentiators: React.FC = () => {
  const items = [...DIFFERENTIATORS, ...DIFFERENTIATORS];

  return (
    <section className="section">
      <div className="section-header section-header-center">
        <div className="section-badge">Launch Sequence</div>
        <h2 className="section-title">What makes</h2>
        <h2 className="section-title section-title-outline">us different?</h2>
      </div>
      <div className="diff-track">
        <div className="diff-scroll">
          {items.map((item, i) => (
            <div key={i} className="diff-card">
              <div className="diff-stat">{item.stat}</div>
              <div className="diff-title">{item.title}</div>
              <p className="diff-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clients: React.FC = () => {
  const logos = [client1, client2, client3, client4, client5, client6];

  return (
    <section className="section" id="clients">
      <div className="section-header section-header-center">
        <div className="section-badge">Trusted By</div>
        <h2 className="section-title">Brands that trust</h2>
        <h2 className="section-title section-title-outline">Medhā Labs.</h2>
      </div>
      <div className="clients-strip-wrapper">
        <div className="clients-strip">
          {[...logos, ...logos, ...logos, ...logos].map((logoSrc, idx) => (
            <div className="client-logo" key={idx}>
              <img src={logoSrc} alt={`Client ${(idx % logos.length) + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Founder: React.FC = () => (
  <section className="section" id="about-founder">
    <div className="founder-block">
      <div className="founder-header">
        <div className="founder-badge">Founder & Lead</div>
        <h3 className="founder-name">Pavan Raj K G</h3>
        <p className="founder-role">
          Founder & Full-Stack Developer, Medhā Labs
        </p>
      </div>
      <div className="founder-grid">
        <div>
          <p className="founder-text">
            With a background in building real-world products and growing digital
            presence for businesses, <strong>Pavan Raj K G</strong> started Medhā
            Labs in 2022 to help companies turn ideas into reliable software that
            sells. The focus is on clean architecture, clear communication, smart
            marketing, and shipping value in small, continuous steps.
          </p>
          <div className="founder-mini-stats">
            <div className="stat-card">
              <div className="stat-number">2022</div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
        </div>
        <div>
          <div className="founder-sidebar-block">
            <h4 className="founder-sidebar-title">Core Principles</h4>
            <ul className="beliefs-list">
              <li>Simple, maintainable code over clever hacks</li>
              <li>Understanding business goals before writing features</li>
              <li>Smart branding that communicates product value</li>
              <li>Building long-term relationships, not one-off projects</li>
            </ul>
          </div>
          <div className="founder-sidebar-block">
            <h4 className="founder-sidebar-title">Connect</h4>
            <div className="connect-links">
              <a
                href="mailto:medhalabs04@gmail.com"
                className="connect-link"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/pavanrajkg/"
                className="connect-link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/medhalabs04@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-cta-section" id="contact">
      <p className="contact-cta-kicker">Ready to build?</p>
      <h2 className="contact-cta-title">Let's build something.</h2>

      <div className="contact-form-wrap">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="_subject"
            value="New enquiry from Medhā Labs website"
          />
          <input type="hidden" name="_captcha" value="false" />
          <div className="form-grid">
            <div className="form-field">
              <label>Name</label>
              <input name="name" required placeholder="Your name" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </div>
            <div className="form-field">
              <label>Company</label>
              <input name="company" placeholder="Company or project name" />
            </div>
            <div className="form-field">
              <label>What do you need?</label>
              <select name="need" required defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="software">Software Development</option>
                <option value="marketing">Digital Marketing & Branding</option>
                <option value="both">Both (Software + Marketing)</option>
                <option value="other">Other / Not sure</option>
              </select>
            </div>
            <div className="form-field">
              <label>Project brief</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us what you want to build, your goals and timeline."
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{ marginTop: "1.25rem", width: "100%", justifyContent: "center" }}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Enquiry →"}
          </button>
          {status === "success" && (
            <p className="form-status-success">
              Thanks! Your enquiry has been sent. We'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-status-error">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
          <p className="form-note">
            Prefer email? Write to{" "}
            <a href="mailto:medhalabs04@gmail.com">medhalabs04@gmail.com</a>.
          </p>
        </form>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div>
        <div className="footer-logo">
          <span className="accent">medhā</span>labs.
        </div>
        <p className="footer-brand-text">
          Software development, digital marketing & branding studio helping
          businesses ship reliable products with strong market presence.
        </p>
      </div>
      <div>
        <div className="footer-column-title">Services</div>
        <div className="footer-links">
          <a className="footer-link" href="#services">
            Software Development
          </a>
          <a className="footer-link" href="#services">
            Web Applications
          </a>
          <a className="footer-link" href="#services">
            APIs & Integrations
          </a>
          <a className="footer-link" href="#services">
            Digital Marketing
          </a>
          <a className="footer-link" href="#services">
            Brand Strategy
          </a>
        </div>
      </div>
      <div>
        <div className="footer-column-title">Company</div>
        <div className="footer-links">
          <a className="footer-link" href="#projects">
            Portfolio
          </a>
          <a className="footer-link" href="#about-founder">
            Team
          </a>
          <a className="footer-link" href="#about">
            About
          </a>
          <a className="footer-link" href="#clients">
            Clients
          </a>
          <a className="footer-link" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <div>
        <div className="footer-column-title">Contact</div>
        <div className="footer-links">
          <a className="footer-link" href="mailto:medhalabs04@gmail.com">
            medhalabs04@gmail.com
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/pavanrajkg/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span className="footer-link">Bangalore, India</span>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span className="footer-bottom-text">
        © {new Date().getFullYear()} Medhā Labs — Intelligence.Innovation.Impact.
      </span>
      <div className="footer-bottom-links">
        <a href="#contact">Get Started</a>
        <a href="mailto:medhalabs04@gmail.com">Email Us</a>
      </div>
    </div>
  </footer>
);

export default App;
