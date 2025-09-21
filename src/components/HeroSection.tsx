import { Button } from "@/components/ui/button";
import currencyNote from "@/assets/currency-note.png";
import goldCoin from "@/assets/gold-coin.png";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center pt-20">
      {/* Floating Currency Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Currency Notes */}
        <img 
          src={currencyNote} 
          alt="" 
          className="absolute top-20 left-8 w-24 h-16 opacity-20 float-currency"
          style={{ animationDelay: '0s' }}
        />
        <img 
          src={currencyNote} 
          alt="" 
          className="absolute top-40 right-12 w-32 h-20 opacity-15 float-currency"
          style={{ animationDelay: '2s' }}
        />
        <img 
          src={currencyNote} 
          alt="" 
          className="absolute bottom-40 left-16 w-28 h-18 opacity-25 float-currency"
          style={{ animationDelay: '4s' }}
        />
        <img 
          src={currencyNote} 
          alt="" 
          className="absolute bottom-20 right-32 w-20 h-14 opacity-20 float-currency"
          style={{ animationDelay: '6s' }}
        />
        
        {/* Gold Coins */}
        <img 
          src={goldCoin} 
          alt="" 
          className="absolute top-32 right-20 w-16 h-16 opacity-30 float-coin"
          style={{ animationDelay: '1s' }}
        />
        <img 
          src={goldCoin} 
          alt="" 
          className="absolute bottom-32 right-8 w-20 h-20 opacity-25 float-coin"
          style={{ animationDelay: '3s' }}
        />
        <img 
          src={goldCoin} 
          alt="" 
          className="absolute top-60 left-32 w-14 h-14 opacity-20 float-coin"
          style={{ animationDelay: '5s' }}
        />
        <img 
          src={goldCoin} 
          alt="" 
          className="absolute top-96 right-48 w-12 h-12 opacity-15 float-coin"
          style={{ animationDelay: '7s' }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-scale">
            <span className="gradient-text">Track your money</span>
            <br />
            <span className="text-foreground">instantly.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-foreground-light mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Debt clarity. AI guidance. Fun buddy to keep you on track.
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToWaitlist}
              className="btn-hero text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Join the Waitlist
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex justify-center items-center space-x-8 text-foreground-muted animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm">Smart Money</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">AI-powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Stresss Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;