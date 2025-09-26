import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Formspree
      const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;
      if (!formspreeUrl) {
        throw new Error("Formspree form ID not configured");
      }

      const response = await fetch(`${formspreeUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New Waitlist Signup - Frugloo",
          _replyto: email,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Form submission failed: ${response.status} - ${errorText}`,
        );
      }

      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Frugloo is ready.",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="waitlist"
        className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 animate-fade-scale">
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">
                You're in! 🎉
              </h2>
              <p className="text-xl text-foreground-light leading-relaxed">
                Welcome to the Frugloo family! You'll be the first to know when
                we launch and get exclusive early access to features that will
                transform your money game.
              </p>
            </div>

            <div className="flex justify-center items-center space-x-6 text-foreground-muted">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">First access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium">Exclusive features</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                <span className="text-sm font-medium">Launch pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-fade-scale">
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Get early access</span>
              <br />
              <span className="text-foreground">to Frugloo</span>
            </h2>
            <p className="text-xl text-foreground-light leading-relaxed">
              Join thousands of people who are ready to finally take control of
              their money. Get early access, exclusive features, and special
              launch pricing.
            </p>
          </div>

          {/* Email Form - Formspree Integration */}
          <form
            onSubmit={handleSubmit}
            className="animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground-muted w-5 h-5" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="pl-12 py-4 text-lg border-2 border-border/50 focus:border-primary rounded-xl"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero py-4 px-8 text-lg"
              >
                {isSubmitting ? "Getting Access..." : "Get Early Access"}
              </Button>
            </div>
          </form>

          {/* Trust Badges */}
          <div
            className="mt-12 flex justify-center items-center space-x-8 text-sm text-foreground-muted animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="font-medium">No spam, ever</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <span className="font-medium">100% secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
