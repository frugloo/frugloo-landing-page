import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (gaId && gaId !== "GA_MEASUREMENT_ID") {
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", gaId);

      // Load GA script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
