import Link from "next/link";
import { appUrl, mealAutopilot, supportEmail } from "@/lib/site-content";

export const metadata = {
  title: "Meal Autopilot Support",
  description:
    "Support information and contact guidance for Meal Autopilot users.",
};

export default function MealAutopilotSupportPage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand-mark" href="/">
            <span className="brand-mark__glyph">M</span>
            <span>metyatech</span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <Link href="/meal-autopilot">Product</Link>
            <Link href="/meal-autopilot/privacy">Privacy</Link>
            <Link href="/meal-autopilot/terms">Terms</Link>
            <Link href="/meal-autopilot/legal-notice">Legal</Link>
          </nav>
        </div>
      </header>

      <main className="page-container">
        <section className="detail-hero">
          <span className="eyebrow">Support</span>
          <h1>{mealAutopilot.name}</h1>
          <p className="lead">
            Use this page when you need help with access, billing, or service
            behavior.
          </p>
        </section>

        <section className="page-section">
          <div className="two-column">
            <article className="support-card">
              <h3>Contact</h3>
              <p>
                Email support is the primary support channel for this product.
                Please include the account email you used and enough detail to
                reproduce the issue.
              </p>
              <div className="cta-row" style={{ marginTop: "18px" }}>
                <a className="button-primary" href={`mailto:${supportEmail}`}>
                  {supportEmail}
                </a>
                <a
                  className="button-secondary"
                  href={appUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open the app
                </a>
              </div>
            </article>
            <article className="support-card">
              <h3>Billing and cancellation</h3>
              <ul className="stack-list">
                {mealAutopilot.billing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Billing questions, refund requests, and cancellation issues
                should be sent to{" "}
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
              </p>
            </article>
          </div>
        </section>

        <section className="page-section">
          <div className="two-column">
            <article className="support-card">
              <h3>What to include in your message</h3>
              <ul className="stack-list">
                <li>Your account email address</li>
                <li>The product name: Meal Autopilot</li>
                <li>
                  Whether the issue is about billing, login, or product behavior
                </li>
                <li>
                  Any screenshot or short description that helps reproduce the
                  problem
                </li>
              </ul>
            </article>
            <article className="support-card">
              <h3>Operator</h3>
              <p>
                Service operator: metyatech
                <br />
                Operating region: Japan
              </p>
              <p>
                Support channel:{" "}
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
              </p>
            </article>
          </div>
        </section>

        <section className="page-section">
          <div className="three-column">
            {mealAutopilot.support.map((item) => (
              <article className="info-card" key={item}>
                <h3>Support note</h3>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
