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

  // Function to encode form data for Netlify
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

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
      // Submit to Netlify forms
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "waitlist",
          email: email,
        }),
      });

      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Frugloo is ready.",
      });
    } catch (error) {
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
                Welcome to the waitlist!
              </h2>
              <p className="text-xl text-foreground-light leading-relaxed">
                You'll be among the first to know when Frugloo launches. Get
                ready to transform your financial life!
              </p>
            </div>

            <div className="flex justify-center items-center space-x-6 text-foreground-muted">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Early access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium">Exclusive features</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                <span className="text-sm font-medium">Special pricing</span>
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
              <span className="gradient-text">Join the</span>
              <br />
              <span className="text-foreground">waitlist</span>
            </h2>
            <p className="text-xl text-foreground-light leading-relaxed">
              Be the first to experience the future of personal finance. Get
              early access and exclusive updates on our launch.
            </p>
          </div>

          {/* Email Form - Netlify Forms Integration */}
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Hidden field for Netlify form identification */}
            <input type="hidden" name="form-name" value="waitlist" />

            {/* Hidden honeypot field for spam protection */}
            <div style={{ display: "none" }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>

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
                {isSubmitting ? "Joining..." : "Join Waitlist"}
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
              <span className="font-medium">Unsubscribe anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <span className="font-medium">Privacy protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
