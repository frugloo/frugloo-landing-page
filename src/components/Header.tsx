import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-1"
            aria-label="Frugloo - Go to home"
          >
            <img
              src="/logo-eclipse.svg"
              alt="Frugloo"
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground-light hover:text-foreground transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("waitlist")}
              className="btn-secondary"
            >
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/30 animate-slide-up">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-foreground-light hover:text-foreground transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("waitlist")}
                className="btn-secondary w-full"
              >
                Join Waitlist
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
