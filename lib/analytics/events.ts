export const trackEvent = (name: string) => {
  window.gtag?.("event", name);
};