import Link from "next/link";
import {
  legalNoticeAddress,
  legalNoticeEmail,
  legalNoticePhone,
  mealAutopilot,
} from "@/lib/site-content";

export const metadata = {
  title: "Meal Autopilot Legal Notice",
  description:
    "Specified Commercial Transactions Act disclosure for the Meal Autopilot service operated by metyatech.",
};

export default function MealAutopilotLegalNoticePage() {
  const notice = mealAutopilot.legalNotice;

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
            <Link href="/meal-autopilot/terms">Terms</Link>
          </nav>
        </div>
      </header>

      <main className="page-container">
        <section className="detail-hero">
          <span className="eyebrow">Legal</span>
          <h1>Specified Commercial Transactions Act Notice</h1>
          <p className="lead">
            Public operator and billing disclosure for the Meal Autopilot
            subscription service.
          </p>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>Operator</h2>
            <ul className="stack-list">
              <li>Business name: {notice.operator}</li>
              <li>Representative: {notice.representative}</li>
              <li>
                Contact email:{" "}
                <a href={`mailto:${legalNoticeEmail}`}>{legalNoticeEmail}</a>
              </li>
              <li>Contact phone: {legalNoticePhone}</li>
              <li>Business address: {legalNoticeAddress}</li>
            </ul>
          </article>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>Service and pricing</h2>
            <ul className="stack-list">
              <li>Product: Meal Autopilot</li>
              <li>Price: {notice.price}</li>
              <li>Payment timing: {notice.paymentTiming}</li>
              <li>Delivery timing: {notice.deliveryTiming}</li>
              <li>Payment methods: {notice.paymentMethods}</li>
            </ul>
          </article>
        </section>

        <section className="page-section">
          <article className="legal-card">
            <h2>Cancellation and refunds</h2>
            <ul className="stack-list">
              <li>{notice.cancellation}</li>
              <li>{notice.refunds}</li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
