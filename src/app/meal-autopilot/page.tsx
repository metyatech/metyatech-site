import Link from "next/link";
import { appUrl, mealAutopilot, supportEmail } from "@/lib/site-content";

export const metadata = {
  title: "Meal Autopilot",
  description:
    "Meal Autopilot is subscription software for AI-guided meal planning, pantry tracking, and nutrition-focused lunch and dinner suggestions.",
};

export default function MealAutopilotPage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand-mark" href="/">
            <span className="brand-mark__glyph">M</span>
            <span>metyatech</span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/meal-autopilot/support">Support</Link>
            <Link href="/meal-autopilot/privacy">Privacy</Link>
            <Link href="/meal-autopilot/terms">Terms</Link>
          </nav>
        </div>
      </header>

      <main className="page-container">
        <section className="detail-hero">
          <span className="eyebrow">Software product</span>
          <h1>{mealAutopilot.name}</h1>
          <p className="lead">
            {mealAutopilot.subtitle} The service is designed for users who want
            structured food choices without cooking-heavy workflows.
          </p>
          <div className="cta-row">
            <a
              className="button-primary"
              href={appUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open the web app
            </a>
            <Link className="button-secondary" href="/meal-autopilot/support">
              Contact support
            </Link>
          </div>
        </section>

        <section className="page-section">
          <div className="detail-grid">
            <article className="product-card">
              <h3>What the service does</h3>
              <p>{mealAutopilot.summary}</p>
              <ul className="stack-list">
                {mealAutopilot.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>

            <aside className="pricing-card">
              <h3>Plan</h3>
              <div className="product-card__price">{mealAutopilot.price}</div>
              <p>
                Subscription access to the web application, including meal
                suggestion and pantry tracking features for a single user
                account.
              </p>
              <div className="cta-row" style={{ marginTop: "18px" }}>
                <a className="button-primary" href={`mailto:${supportEmail}`}>
                  Ask a question
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-title">How people typically use it</h2>
          <div className="three-column">
            <article className="info-card">
              <h3>1. Keep pantry state simple</h3>
              <p>
                Users add packaged foods, frozen meals, and shelf-stable items
                so the service can reason from what is already available.
              </p>
            </article>
            <article className="info-card">
              <h3>2. Get lunch and dinner suggestions</h3>
              <p>
                The service proposes meal combinations that fit convenience
                constraints and nutrition goals.
              </p>
            </article>
            <article className="info-card">
              <h3>3. Reduce repeated decisions</h3>
              <p>
                The value is less about logging everything manually and more
                about removing the daily burden of deciding what to eat.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
