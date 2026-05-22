import type { Metadata } from 'next';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Vexor website and Telegram bot.',
  robots: { index: false, follow: true },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 40 }}>
    <h2
      style={{
        fontSize: 18,
        fontWeight: 500,
        color: 'var(--text-primary)',
        marginBottom: 12,
        letterSpacing: -0.3,
      }}
    >
      {title}
    </h2>
    <div style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>{children}</div>
  </section>
);

export default function PrivacyPage() {
  return (
    <>
      <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: 80 }}>
        <article
          style={{
            maxWidth: 720,
            margin: '0 auto',
            padding: 'clamp(40px,6vw,80px) clamp(16px,5vw,48px)',
          }}
        >
          <div style={{ marginBottom: 48 }}>
            <span
              style={{
                fontSize: 11,
                fontFamily: 'Geist Mono, monospace',
                color: 'var(--accent)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 12,
              }}
            >
              // legal
            </span>
            <h1
              style={{
                fontSize: 'clamp(28px,4vw,42px)',
                fontWeight: 700,
                letterSpacing: -1.5,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Privacy Policy
            </h1>
            <p
              style={{
                fontSize: 14,
                color: 'var(--text-muted)',
                fontFamily: 'Geist Mono, monospace',
              }}
            >
              Last updated: June 2025
            </p>
          </div>

          <div style={{ height: 1, background: 'var(--border-c)', marginBottom: 48 }} />

          <Section title="1. Who we are">
            <p>
              Vexor is a software development studio based in Kyiv, Ukraine. We build websites,
              mobile applications, and product designs for clients worldwide.
            </p>
            <p style={{ marginTop: 8 }}>
              Contact:{' '}
              <a href="mailto:hello@vexor.team" style={{ color: 'var(--accent)' }}>
                hello@vexor.team
              </a>
            </p>
          </Section>

          <Section title="2. What data we collect">
            <p>When you interact with us through our website or Telegram bot, we may collect:</p>
            <ul
              style={{
                paddingLeft: 20,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <li>
                <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  Contact form
                </strong>{' '}
                — name, email address or Telegram username, project description, and budget range.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  Telegram bot
                </strong>{' '}
                — Telegram user ID, username or first name, and messages you send voluntarily
                through the bot.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  Website analytics
                </strong>{' '}
                — anonymous usage data (page views, browser type) via privacy-friendly analytics if
                enabled.
              </li>
            </ul>
            <p style={{ marginTop: 12 }}>
              We do not collect passwords, payment details, or sensitive personal data.
            </p>
          </Section>

          <Section title="3. How we use your data">
            <p>We use the information you provide solely to:</p>
            <ul
              style={{
                paddingLeft: 20,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <li>Respond to your project inquiries and questions</li>
              <li>Communicate about ongoing projects</li>
              <li>Improve our services and website</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              We do not use your data for advertising, automated decision-making, or profiling.
            </p>
          </Section>

          <Section title="4. Data storage and retention">
            <p>
              Messages received through our{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                Telegram bot
              </strong>{' '}
              are forwarded to our team chat and stored in Telegram's infrastructure. The bot itself
              does not maintain a persistent database — session data is held in memory only and
              cleared when the bot restarts.
            </p>
            <p style={{ marginTop: 8 }}>
              Data submitted via the{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                contact form
              </strong>{' '}
              on our website is sent to our team inbox and retained for as long as necessary to
              fulfil your inquiry, after which it is deleted.
            </p>
            <p style={{ marginTop: 8 }}>
              We do not sell, rent, or share your personal data with third parties.
            </p>
          </Section>

          <Section title="5. Third-party services">
            <p>Our services rely on the following third-party platforms:</p>
            <ul
              style={{
                paddingLeft: 20,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <li>
                <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Telegram</strong>{' '}
                — bot infrastructure. Subject to{' '}
                <a
                  href="https://telegram.org/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  Telegram's Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Vercel</strong> —
                website hosting. Subject to{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  Vercel's Privacy Policy
                </a>
                .
              </li>
            </ul>
          </Section>

          <Section title="6. Your rights">
            <p>You have the right to:</p>
            <ul
              style={{
                paddingLeft: 20,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              To exercise these rights, contact us at{' '}
              <a href="mailto:hello@vexor.team" style={{ color: 'var(--accent)' }}>
                hello@vexor.team
              </a>
              .
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Our website may use minimal cookies required for basic functionality (theme and
              language preferences stored in localStorage). We do not use tracking or advertising
              cookies.
            </p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>
              We may update this policy occasionally. The date at the top of this page reflects the
              most recent revision. Continued use of our services after changes constitutes
              acceptance of the updated policy.
            </p>
          </Section>

          <div
            style={{ height: 1, background: 'var(--border-c)', marginTop: 48, marginBottom: 32 }}
          />

          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Questions? Reach us at{' '}
            <a href="mailto:hello@vexor.team" style={{ color: 'var(--accent)' }}>
              hello@vexor.team
            </a>{' '}
            or via Telegram{' '}
            <a
              href="https://t.me/vexor_studio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              @vexor_studio
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
