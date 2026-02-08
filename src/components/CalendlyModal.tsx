import { useCallback } from 'react';

const CALENDLY_URL = 'https://calendly.com/joan-getcleanledger/30min';

export function useOpenCalendly() {
  return useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  }, []);
}
