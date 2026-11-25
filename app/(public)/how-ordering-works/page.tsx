// app/(public)/how-ordering-works/page.tsx — "How Ordering Works" Guide
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Sprout, QrCode, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Ordering Works | CRRDC — CLSU Agricultural Products",
  description: "Learn how to order BPI-certified seeds, quality milled rice, and agricultural inputs developed by CLSU researchers in 4 simple steps.",
};

const STEPS = [
  {
    number: 1,
    title: "Explore Certified Products",
    description:
      "Browse BPI-certified seeds, quality milled rice, and organic agricultural inputs developed by CLSU researchers.",
    icon: Sprout,
  },
  {
    number: 2,
    title: "Choose Your Quantity",
    description:
      "Select rice per kilogram or 25-kg sack, and seeds per certified packet. Adjust quantities on each product card.",
    icon: ShoppingBag,
  },
  {
    number: 3,
    title: "Generate Your Order QR Code",
    description:
      "Review your order and proceed to checkout to generate a QR code containing your order ID and total amount due.",
    icon: QrCode,
  },
  {
    number: 4,
    title: "Visit CRRDC and Claim Your Order",
    description:
      "Present your QR code at the CRRDC main office, CLSU. Staff will verify your payment and release your products.",
    icon: Building2,
  },
];

export default function HowOrderingWorksPage() {
  return (
    <main className="how-ordering-page">
      <div className="how-ordering-container">
        {/* Page Title */}
        <header className="page-header">
          <h1 className="page-title">How Ordering Works</h1>
        </header>

        {/* 4 Steps Grid */}
        <section className="steps-container" aria-label="Step by step ordering instructions">
          <div className="steps-grid">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="step-card">
                  <div className="step-header">
                    <div className="step-number-badge" aria-label={`Step ${step.number}`}>
                      <span>{step.number}</span>
                    </div>
                    <div className="step-icon-wrap" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-description">{step.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Action Callout */}
        <div className="cta-wrapper">
          <Link href="/" className="cta-btn">
            <span>Browse Products</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <style>{`
        .how-ordering-page {
          width: 100%;
          min-height: calc(100vh - 68px);
          min-height: calc(100dvh - 68px);
          background-color: var(--color-paper-2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: clamp(16px, 2.5vh, 32px) clamp(16px, 3.5vw, 48px);
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .how-ordering-container {
          width: 100%;
          max-width: 1400px;
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ── Header ── */
        .page-header {
          text-align: center;
          margin-bottom: clamp(16px, 2.8vh, 32px);
        }

        .page-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.4vw, 3rem);
          color: var(--color-primary-dark);
          margin: 0;
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.15;
        }

        /* ── Steps Grid ── */
        .steps-container {
          width: 100%;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(12px, 1.4vw, 20px);
          width: 100%;
          align-items: stretch;
        }

        /* Tablet (640px to 1023px): 2x2 Grid */
        @media (max-width: 1023px) and (min-width: 640px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px 16px;
          }
        }

        /* Mobile (< 640px): Full-Width Stack */
        @media (max-width: 639px) {
          .how-ordering-page {
            justify-content: flex-start;
            padding: 16px 16px 28px;
            min-height: auto;
          }

          .page-header {
            margin-bottom: 16px;
          }

          .page-title {
            font-size: clamp(1.75rem, 6.5vw, 2.2rem);
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        /* ── Step Card ── */
        .step-card {
          background-color: var(--color-paper);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl, 16px);
          padding: clamp(20px, 2.5vh, 30px) clamp(18px, 1.6vw, 26px);
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 2px 8px oklch(0% 0 0 / 0.04);
          box-sizing: border-box;
          transition: border-color var(--dur-fast) var(--ease-out),
                      box-shadow var(--dur-fast) var(--ease-out);
        }

        .step-card:hover {
          border-color: var(--color-border-strong);
          box-shadow: 0 6px 20px oklch(0% 0 0 / 0.08);
        }

        .step-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: clamp(12px, 1.8vh, 18px);
        }

        .step-number-badge {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: var(--radius-full);
          background-color: var(--color-primary-dark);
          color: #facc15;
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px oklch(0% 0 0 / 0.15);
        }

        .step-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          background-color: oklch(from var(--color-primary) l c h / 0.1);
          color: var(--color-primary-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-title {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 1.4vw, 1.45rem);
          font-weight: 700;
          color: var(--color-heading);
          margin: 0 0 10px;
          line-height: 1.28;
          letter-spacing: -0.015em;
        }

        .step-description {
          font-size: clamp(1rem, 1.05vw, 1.125rem);
          color: var(--color-ink-2);
          line-height: 1.55;
          margin: 0;
          flex-grow: 1;
        }

        /* Mobile specific card adjustments */
        @media (max-width: 639px) {
          .step-card {
            padding: 16px 18px;
            border-radius: var(--radius-lg, 12px);
          }

          .step-header {
            margin-bottom: 10px;
          }

          .step-number-badge {
            width: 38px;
            height: 38px;
            min-width: 38px;
            font-size: 1.1rem;
          }

          .step-icon-wrap {
            width: 32px;
            height: 32px;
          }

          .step-title {
            font-size: clamp(1.15rem, 4.5vw, 1.35rem);
            margin-bottom: 6px;
          }

          .step-description {
            font-size: clamp(1rem, 3.8vw, 1.05rem);
            line-height: 1.45;
          }
        }

        /* ── Action Button ── */
        .cta-wrapper {
          display: flex;
          justify-content: center;
          margin-top: clamp(16px, 2.5vh, 28px);
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 46px;
          padding: 0 28px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-primary-dark);
          background-color: var(--color-primary-dark);
          color: var(--color-primary-fg);
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 2px 8px oklch(0% 0 0 / 0.12);
          transition: background-color 160ms ease,
                      border-color 160ms ease,
                      color 160ms ease;
        }

        .cta-btn:hover,
        .cta-btn:focus-visible {
          background-color: #d89700 !important;
          border-color: #d89700 !important;
          color: var(--color-primary-dark) !important;
          transform: none !important;
        }
      `}</style>
    </main>
  );
}
