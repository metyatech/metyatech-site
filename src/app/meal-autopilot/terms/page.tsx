import Link from "next/link";
import { supportEmail } from "@/lib/site-content";

export const metadata = {
  title: "Meal Autopilot Terms of Service",
  description:
    "Terms of service for the Meal Autopilot service operated by metyatech.",
};

export default function MealAutopilotTermsPage() {
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
            <Link href="/meal-autopilot/support">Support</Link>
            <Link href="/meal-autopilot/privacy">Privacy</Link>
          </nav>
        </div>
      </header>

      <main className="page-container">
        <section className="detail-hero">
          <span className="eyebrow">Policy</span>
          <h1>Terms of Service</h1>
          <p className="lead">
            These terms govern the use of Meal Autopilot, a subscription
            software service provided by metyatech.
          </p>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>1. Service scope</h2>
            <p>
              Meal Autopilot provides software features for meal planning,
              pantry tracking, and nutrition-oriented suggestions. The service
              is informational software and not medical advice.
            </p>
          </article>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>2. Subscription and billing</h2>
            <ul className="stack-list">
              <li>Access may require an active paid subscription.</li>
              <li>
                Customers are charged immediately at checkout for a monthly
                recurring subscription.
              </li>
              <li>
                Recurring charges are processed through third-party payment
                providers until the subscription is cancelled.
              </li>
              <li>
                Users are responsible for keeping payment details current.
              </li>
            </ul>
          </article>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>3. Cancellation and refunds</h2>
            <ul className="stack-list">
              <li>
                Customers may request cancellation through the billing portal or
                by contacting support.
              </li>
              <li>
                Cancellation stops future recurring charges but does not
                automatically create a refund for past charges.
              </li>
              <li>
                Refund requests are reviewed individually and may be refused
                unless required by law.
              </li>
            </ul>
          </article>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>4. Acceptable use</h2>
            <ul className="stack-list">
              <li>
                Do not misuse the service or attempt to access data that is not
                yours.
              </li>
              <li>
                Do not interfere with service operation or abuse support
                channels.
              </li>
              <li>
                Do not rely on the service as a substitute for professional
                medical guidance.
              </li>
            </ul>
          </article>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>5. Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
