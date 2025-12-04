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
          <span>Custom software & product development</span>
        </div>
        <h1 className="hero-title">Where wisdom powers modern software.</h1>
        <p className="hero-subtitle">
          Medhā Labs is a software development studio that designs, builds, and
          maintains robust web and cloud applications. From idea to production,
          we turn complex problems into reliable digital products.
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
          <span>Cloud-native apps</span>
        </div>
      </div>

      <aside className="hero-card">
        <div className="hero-card-header">
          <div>
            <div className="hero-chip">Live project snapshot</div>
            <div style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
              Medhā Labs Delivery Dashboard
            </div>
          </div>
          <span style={{ fontSize: "0.9rem" }}>● ● ●</span>
        </div>
        <div className="hero-stat-row">
          <div className="hero-stat">
            <div className="hero-stat-label">Active projects</div>
            <div className="hero-stat-value">5 in development</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">Release cadence</div>
            <div className="hero-stat-value">Weekly sprints</div>
          </div>
        </div>
        <div className="hero-stat-row">
          <div className="hero-stat">
            <div className="hero-stat-label">Stack</div>
            <div className="hero-stat-value">
              React · TypeScript · Node · Python
            </div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">Engagement</div>
            <div className="hero-stat-value">End‑to‑end delivery</div>
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
        approach. We validate ideas quickly, ship dependable software, and stay
        engaged as your product evolves.
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
          Frontend, backend, APIs, databases and integrations — one team that
          can design and deliver the complete solution.
        </p>
      </div>

      <div className="card">
        <div className="card-icon">🤝</div>
        <h3 className="card-title">Long‑term partnership</h3>
        <p className="card-body">
          We stay after launch: monitoring, improving, and extending your
          systems as your business grows.
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
            Founder & Software Engineer, Medhā Labs
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)" }}>
            With a background in building real‑world products for businesses,
            {` `}
            <strong>Pavan Raj K G</strong> started Medhā Labs to help companies turn
            ideas into reliable software. The focus is on clean architecture,
            clear communication, and shipping value in small, continuous steps.
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
              <li>Understanding the business before writing features.</li>
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


// const About: React.FC = () => (
//   <section className="section" id="about">
//     <div className="section-header">
//       <div className="section-kicker">ABOUT MEDHĀ LABS</div>
//       <h2 className="section-title">Software studio with a lab mindset.</h2>
//       <p className="section-subtitle">
//         Medhā Labs combines disciplined engineering with an experimental
//         approach. We validate ideas quickly, ship dependable software, and stay
//         engaged as your product evolves.
//       </p>
//     </div>

//     <div className="grid-3">
//       <div className="card">
//         <div className="card-icon">🎯</div>
//         <h3 className="card-title">Product‑oriented thinking</h3>
//         <p className="card-body">
//           We focus on outcomes, not just tickets. Every feature is tied to a
//           clear user or business goal so you build what truly matters.
//         </p>
//       </div>

//       <div className="card">
//         <div className="card-icon">🧩</div>
//         <h3 className="card-title">Full‑stack capability</h3>
//         <p className="card-body">
//           Frontend, backend, APIs, databases and integrations — one team that
//           can design and deliver the complete solution.
//         </p>
//       </div>

//       <div className="card">
//         <div className="card-icon">🤝</div>
//         <h3 className="card-title">Long‑term partnership</h3>
//         <p className="card-body">
//           We stay after launch: monitoring, improving, and extending your
//           systems as your business grows.
//         </p>
//       </div>
//     </div>
//   </section>
// );

const Services: React.FC = () => (
  <section className="section" id="services">
    <div className="section-header">
      <div className="section-kicker">SERVICES</div>
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

const Contact: React.FC = () => (
  <section className="section" id="contact">
    <div className="section-header">
      <div className="section-kicker">CONTACT</div>
      <h2 className="section-title">Let’s talk about your project.</h2>
      <p className="section-subtitle">
        Share a brief about what you want to build, and we will respond with
        timelines, approach and ballpark estimates.
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
          <a href="mailto:hello@medhalabs.com">hello@medhalabs.com</a>.
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
          Software development & innovation studio helping businesses ship
          reliable web and cloud applications.
        </p>
      </div>
      <div>
        <div className="footer-column-title">Company</div>
        <div className="footer-link">About</div>
        <div className="footer-link">Services</div>
      </div>
      <div>
        <div className="footer-column-title">Connect</div>
        <a className="footer-link" href="mailto:medhalabs04@gmail.com">
          hello@medhalabs.com
        </a>
        <div className="footer-link">LinkedIn · GitHub</div>
      </div>
    </div>
    <div className="footer-bottom">
      © {new Date().getFullYear()} Medhā Labs - Intelligence.Innovation.Impact.
    </div>
  </footer>
);

export default App;
