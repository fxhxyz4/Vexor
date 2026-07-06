export type ConsentCategory = 'necessary' | 'functional' | 'analytics';

export interface ConsentState {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  timestamp: number;
}

const COOKIE_NAME = 'vexor-consent';

export const getConsentCookie = (cookieHeader: string | undefined): ConsentState | null => {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));

  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
};

export const readConsentClient = (): ConsentState | null => {
  try {
    const match = document.cookie.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
    if (!match) return null;

    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
};

export const writeConsentClient = (state: Omit<ConsentState, 'necessary' | 'timestamp'>) => {
  const full: ConsentState = {
    necessary: true,
    functional: state.functional,
    analytics: state.analytics,
    timestamp: Date.now(),
  };
  try {
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
      JSON.stringify(full)
    )}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // skip
  }

  window.dispatchEvent(new CustomEvent('vexor-consent-updated', { detail: full }));
  return full;
};

export const ACCEPT_ALL: Omit<ConsentState, 'necessary' | 'timestamp'> = {
  functional: true,
  analytics: true,
};

export const REJECT_ALL: Omit<ConsentState, 'necessary' | 'timestamp'> = {
  functional: false,
  analytics: false,
};
