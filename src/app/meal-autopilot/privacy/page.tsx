import Link from "next/link";
import { supportEmail } from "@/lib/site-content";

export const metadata = {
  title: "Meal Autopilot Privacy Policy",
  description:
    "Privacy policy for the Meal Autopilot service operated by metyatech.",
};

export default function MealAutopilotPrivacyPage() {
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
            <Link href="/meal-autopilot/terms">Terms</Link>
          </nav>
        </div>
      </header>

      <main className="page-container">
        <section className="detail-hero">
          <span className="eyebrow">Policy</span>
          <h1>Privacy Policy</h1>
          <p className="lead">
            This policy explains how metyatech handles information related to
            the Meal Autopilot service.
          </p>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>1. Information we collect</h2>
            <ul className="stack-list">
              <li>
                Account details such as email address and authentication
                identifiers.
              </li>
              <li>
                Pantry items, meal logs, and product usage information entered
                by users.
              </li>
              <li>
                Operational records needed to provide the service, such as
                support messages.
              </li>
              <li>
                Payment-related records handled through payment processors.
              </li>
            </ul>
          </article>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>2. How we use information</h2>
            <ul className="stack-list">
              <li>To provide and maintain Meal Autopilot.</li>
              <li>
                To process subscriptions, customer support, and service-related
                notices.
              </li>
              <li>To improve product quality, reliability, and safety.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
          </article>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>3. Third-party services</h2>
            <p>
              We may use third-party providers for hosting, infrastructure,
              payment processing, authentication, and AI processing where
              necessary to operate the service.
            </p>
          </article>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>4. Contact</h2>
            <p>
              Privacy questions can be sent to{" "}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
