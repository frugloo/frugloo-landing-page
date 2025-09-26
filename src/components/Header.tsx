import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  // Focus management for mobile menu
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      const firstFocusableElement = mobileMenuRef.current.querySelector(
        "button",
      ) as HTMLElement;
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  }, [isMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#hero-heading"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        Skip to main content
      </a>
      <header
        className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-secondary/20 shadow-sm"
        role="banner"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center hover:opacity-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-2 hover:bg-primary/5"
              aria-label="Frugloo AI-Powered Personal Finance App - Go to home"
            >
              <img
                src="/logo-eclipse.svg"
                alt="Frugloo - AI-Powered Personal Finance Tracker"
                className="h-12 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              <button
                onClick={() => scrollToSection("features")}
                className="text-foreground-light hover:text-secondary transition-colors duration-300 font-medium text-lg relative group"
                aria-label="View features that help you win with money"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("waitlist")}
                className="btn-secondary text-lg px-6 py-3"
                aria-label="Get early access to Frugloo"
              >
                Get Early Access
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? (
                <X size={24} className="text-secondary" />
              ) : (
                <Menu size={24} className="text-secondary" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              ref={mobileMenuRef}
              id="mobile-navigation"
              className="md:hidden mt-4 pb-4 border-t border-secondary/20 animate-slide-up"
            >
              <nav
                className="flex flex-col space-y-4 pt-4"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-foreground-light hover:text-secondary transition-colors duration-300 font-medium text-lg py-2"
                >
                  Features
                </button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("waitlist")}
                  className="btn-secondary w-full text-lg py-3"
                >
                  Get Early Access
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
