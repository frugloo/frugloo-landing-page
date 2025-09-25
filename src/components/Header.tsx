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
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-secondary/20 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center hover:opacity-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-2 hover:bg-primary/5"
            aria-label="Frugloo - Go to home"
          >
            <img
              src="/logo-eclipse.svg"
              alt="Frugloo"
              className="h-14 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground-light hover:text-secondary transition-colors duration-300 font-medium text-lg relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("waitlist")}
              className="btn-secondary text-lg px-6 py-3"
            >
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="md:hidden mt-4 pb-4 border-t border-secondary/20 animate-slide-up">
            <nav className="flex flex-col space-y-4 pt-4">
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
