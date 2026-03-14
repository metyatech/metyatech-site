import Link from "next/link";
import {
  appUrl,
  company,
  mealAutopilot,
  siteUrl,
  supportEmail,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand-mark" href="/">
            <span className="brand-mark__glyph">M</span>
            <span>metyatech</span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <Link href="/meal-autopilot">Meal Autopilot</Link>
            <Link href="/meal-autopilot/support">Support</Link>
            <Link href="/meal-autopilot/privacy">Privacy</Link>
            <Link href="/meal-autopilot/terms">Terms</Link>
          </nav>
        </div>
      </header>

      <main className="page-container">
        <section className="hero">
          <span className="eyebrow">Practical software products</span>
          <div className="hero__content">
            <div className="stack-list">
              <h1>{company.name}</h1>
              <p className="lead">{company.summary}</p>
              <div className="cta-row">
                <Link className="button-primary" href="/meal-autopilot">
                  View Meal Autopilot
                </Link>
                <a
                  className="button-secondary"
                  href={appUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open the web app
                </a>
              </div>
              <div className="chip-row">
                <span className="chip">AI meal planning</span>
                <span className="chip">Pantry tracking</span>
                <span className="chip">Microwave-friendly workflow</span>
              </div>
            </div>

            <aside className="hero-card" aria-label="Product snapshot">
              <div className="hero-card__row">
                <span className="hero-card__label">Featured product</span>
                <span className="hero-card__value">{mealAutopilot.name}</span>
              </div>
              <div className="hero-card__row">
                <span className="hero-card__label">Current access</span>
                <span className="hero-card__value">Web app</span>
              </div>
              <div className="hero-card__row">
                <span className="hero-card__label">Plan</span>
                <span className="hero-card__value">{mealAutopilot.price}</span>
              </div>
              <div className="hero-card__row">
                <span className="hero-card__label">Support</span>
                <a className="hero-card__value" href={`mailto:${supportEmail}`}>
                  {supportEmail}
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="page-section" aria-labelledby="what-we-build">
          <h2 className="section-title" id="what-we-build">
            What we build
          </h2>
          <p className="section-copy">
            We focus on small, durable software that reduces decision fatigue
            and operational overhead. The goal is simple: less friction, more
            clarity, and interfaces that make the next action obvious.
          </p>
          <div className="three-column">
            <article className="info-card">
              <h3>Clear first use</h3>
              <p>
                Products are designed so users can understand the flow without
                needing a tutorial or a long onboarding sequence.
              </p>
            </article>
            <article className="info-card">
              <h3>Low-ceremony automation</h3>
              <p>
                We prefer workflows that remove repeated manual work instead of
                adding more tracking burden.
              </p>
            </article>
            <article className="info-card">
              <h3>Maintainable systems</h3>
              <p>
                We optimize for software that can stay understandable,
                supportable, and adaptable as requirements evolve.
              </p>
            </article>
          </div>
        </section>

        <section className="page-section" aria-labelledby="featured-product">
          <h2 className="section-title" id="featured-product">
            Featured product
          </h2>
          <p className="section-copy">{mealAutopilot.summary}</p>
          <div className="two-column">
            <article className="product-card">
              <h3>{mealAutopilot.name}</h3>
              <p>{mealAutopilot.subtitle}</p>
              <ul className="stack-list">
                {mealAutopilot.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="cta-row" style={{ marginTop: "18px" }}>
                <Link className="button-primary" href="/meal-autopilot">
                  Product details
                </Link>
                <a
                  className="button-secondary"
                  href={appUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open app
                </a>
              </div>
            </article>
            <aside className="pricing-card">
              <h3>Commercial summary</h3>
              <p>
                Meal Autopilot is sold as subscription software for individual
                users who want help choosing lunch and dinner from pantry
                inventory and packaged foods.
              </p>
              <div className="product-card__price">{mealAutopilot.price}</div>
              <p>
                The service is provided online. Product information, policies,
                and support links are available on this site.
              </p>
            </aside>
          </div>
        </section>

        <section className="page-section" aria-labelledby="contact">
          <h2 className="section-title" id="contact">
            Contact
          </h2>
          <div className="two-column">
            <article className="support-card">
              <h3>General contact</h3>
              <p>
                For product, billing, or policy inquiries, contact us by email.
                Include the service name and the email address you used when
                contacting us.
              </p>
              <div className="cta-row" style={{ marginTop: "18px" }}>
                <a className="button-primary" href={`mailto:${supportEmail}`}>
                  {supportEmail}
                </a>
              </div>
            </article>
            <article className="support-card">
              <h3>Operator and links</h3>
              <p>
                Operator: {company.operator}
                <br />
                Region: {company.location}
              </p>
              <ul className="stack-list">
                <li>
                  <Link href="/meal-autopilot/support">
                    Meal Autopilot support page
                  </Link>
                </li>
                <li>
                  <Link href="/meal-autopilot/privacy">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/meal-autopilot/terms">Terms of service</Link>
                </li>
                <li>
                  <a href={siteUrl}>{siteUrl}</a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>© 2026 metyatech. All rights reserved.</p>
          <div className="site-footer__links">
            <Link href="/meal-autopilot">Meal Autopilot</Link>
            <Link href="/meal-autopilot/support">Support</Link>
            <Link href="/meal-autopilot/privacy">Privacy</Link>
            <Link href="/meal-autopilot/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
