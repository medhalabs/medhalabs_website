import React from "react";
import "./index.css";
import logo from "./assets/medhalabs_logo.png";

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Marketing />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

const Navbar: React.FC = () => (
  <header className="navbar">
    <div className="container navbar-inner">
      <div className="nav-left">
        <span>
          <img src={logo} alt="Logo" style={{ width: "120px" }} />
        </span>
        <div>
          <div className="nav-logo">Medhā Labs</div>
          <div className="nav-tagline">Intelligence.Innovation.Impact</div>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#marketing" className="nav-link">Marketing</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="hero" id="home">
    <div className="hero-inner">
      <div>
        <div className="hero-badge">
          <span>⚙️ Medhā Labs</span>
          <span>Software, Marketing & Brand Strategy</span>
        </div>
        <h1 className="hero-title">Where wisdom powers modern software.</h1>
        <p className="hero-subtitle">
          Medhā Labs is a software development & digital marketing studio that
          designs, builds, and promotes robust web applications. From idea to
          production to market presence, we turn complex problems into reliable
          digital products with strong brand visibility.
        </p>
        <div className="hero-cta">
          <button
            className="btn btn-primary"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start a project →
          </button>
          <button
            className="btn btn-outline"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View services
          </button>
        </div>
        <div className="hero-pill">
          <span>Web & API development</span>
          <span>React · TypeScript · Python</span>
          <span>Digital Marketing & Branding</span>
        </div>
      </div>

      <aside className="hero-card">
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

    {/* Founder section */}
    <div className="container" style={{ maxWidth: "900px" }}>
      <div
        className="card"
        style={{
          display: "grid",
          gap: "1.2rem",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 2fr)",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-text-light)",
              marginBottom: "0.3rem",
            }}
          >
            FOUNDER
          </div>
          <h3
            style={{
              fontSize: "1.15rem",
              marginBottom: "0.25rem",
              color: "var(--color-primary)",
            }}
          >
            Pavan Raj K G
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--color-text-light)",
              marginBottom: "0.6rem",
            }}
          >
            Founder & Full‑Stack Developer, Medhā Labs
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)" }}>
            With a background in building real‑world products and growing digital
            presence for businesses,{` `}
            <strong>Pavan Raj K G</strong> started Medhā Labs to help companies turn
            ideas into reliable software that sells. The focus is on clean
            architecture, clear communication, smart marketing, and shipping value
            in small, continuous steps.
          </p>
        </div>

        <div
          style={{
            fontSize: "0.85rem",
            color: "var(--color-text-light)",
            display: "grid",
            gap: "0.45rem",
          }}
        >
          <div>
            <strong>What the founder believes in</strong>
            <ul style={{ marginTop: "0.25rem", paddingLeft: "1rem" }}>
              <li>Simple, maintainable code over clever hacks.</li>
              <li>Understanding business goals before writing features.</li>
              <li>Smart branding that communicates product value clearly.</li>
              <li>Building long‑term relationships, not one‑off projects.</li>
            </ul>
          </div>
          <div>
            <strong>Connect</strong>
            <div style={{ marginTop: "0.15rem" }}>
              <a
                href="mailto:hello@medhalabs.com"
                style={{ marginRight: "0.75rem" }}
              >
                Email
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/pavanrajkg/"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "0.75rem" }}
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
      <ServiceCard
        icon="💻"
        title="Web applications"
        body="Responsive, maintainable web apps built with React and TypeScript, backed by robust APIs."
      />
      <ServiceCard
        icon="🔌"
        title="APIs & integrations"
        body="REST/GraphQL APIs, third‑party integrations, and internal tools that connect your systems."
      />
      <ServiceCard
        icon="☁️"
        title="Cloud‑ready backends"
        body="Scalable backends on AWS, Azure or other cloud providers, with CI/CD and monitoring in place."
      />
      <ServiceCard
        icon="🧪"
        title="Prototypes & MVPs"
        body="Launch quickly with well‑structured MVPs you can iterate on, not throw away."
      />
      <ServiceCard
        icon="🛠️"
        title="Modernisation"
        body="Refactor legacy apps, improve performance, and bring older systems to modern stacks."
      />
      <ServiceCard
        icon="📈"
        title="Ongoing development"
        body="Dedicated capacity for continuous improvements, new features and maintenance."
      />
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

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, body }) => (
  <article className="card">
    <div className="card-icon">{icon}</div>
    <h3 className="card-title">{title}</h3>
    <p className="card-body">{body}</p>
  </article>
);

import client1 from "./assets/tsilogo.png";
import client2 from "./assets/Nesara_Organicslogo.png";
import client3 from "./assets/pūrṇāyai_organicslogo.png";
import client4 from "./assets/Adimalogo.png";
import client5 from "./assets/medhalabs_logo.png";

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
              <img src={logoSrc} alt={`Client ${idx + 1}`} />
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
