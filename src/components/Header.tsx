import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold gradient-text">frugloo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground-light hover:text-foreground transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('waitlist')}
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
                onClick={() => scrollToSection('features')}
                className="text-left text-foreground-light hover:text-foreground transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('waitlist')}
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