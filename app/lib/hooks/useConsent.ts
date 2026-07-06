'use client';
import { useCallback, useEffect, useState } from 'react';
import {
  readConsentClient,
  writeConsentClient,
  ACCEPT_ALL,
  REJECT_ALL,
  type ConsentState,
} from '../consent';

export const useConsent = () => {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setConsent(readConsentClient());
    setLoaded(true);

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConsentState>).detail;
      if (detail) setConsent(detail);
    };

    window.addEventListener('vexor-consent-updated', handler);
    return () => window.removeEventListener('vexor-consent-updated', handler);
  }, []);

  const acceptAll = useCallback(() => setConsent(writeConsentClient(ACCEPT_ALL)), []);
  const rejectAll = useCallback(() => setConsent(writeConsentClient(REJECT_ALL)), []);
  const save = useCallback(
    (partial: { functional: boolean; analytics: boolean }) =>
      setConsent(writeConsentClient(partial)),
    []
  );

  return {
    consent,
    loaded,
    hasAnalytics: !!consent?.analytics,
    acceptAll,
    rejectAll,
    save,
  };
};
