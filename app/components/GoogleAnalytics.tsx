'use client';

import { useConsent } from '../lib/hooks/useConsent';
import { useReportWebVitals } from 'next/web-vitals';
import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const GoogleAnalytics = () => {
  const { hasAnalytics } = useConsent();

  useReportWebVitals(metric => {
    if (!hasAnalytics || !GA_ID || typeof window.gtag === 'undefined') return;

    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  });

  if (!hasAnalytics || !GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
};
