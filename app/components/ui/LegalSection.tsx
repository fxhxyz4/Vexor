import type { ReactNode } from 'react';

export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
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
      <div className="legal-section-body">{children}</div>
    </section>
  );
};
