import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";
import { seoConfig } from "@/lib/seo";

const Footer = () => {
  const twitterHandle = seoConfig.social.twitter?.replace("@", "");
  const instagramHandle = seoConfig.social.instagram?.replace("@", "");

  return (
    <footer
      className="mt-24 border-t border-secondary/20 bg-gradient-to-b from-background to-surface"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src="/logo-wordmark.svg"
                alt="Frugloo wordmark"
                className="h-6 w-auto"
              />
            </div>
            <p className="mt-3 text-sm text-foreground-muted max-w-md">
              Master your money with AI that gets you. Get out of debt faster,
              save more effortlessly, and build wealth.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href={`https://twitter.com/${twitterHandle}`}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="Frugloo on Twitter"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="Frugloo on Instagram"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/company/frugloo"
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="Frugloo on LinkedIn"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="mailto:info@frugloo.com"
                aria-label="Email Frugloo"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
            <p className="mt-3 text-xs text-foreground-muted">
              Prefer a call? We can add a phone number later.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground-muted">
            © {new Date().getFullYear()} Frugloo. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="#features"
              className="text-foreground-light hover:text-secondary transition-colors"
            >
              Features
            </a>
            <a
              href="#waitlist"
              className="text-foreground-light hover:text-secondary transition-colors"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
