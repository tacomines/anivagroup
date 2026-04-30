export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const initGA = () => {
  if (!GA_TRACKING_ID) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_TRACKING_ID);
};