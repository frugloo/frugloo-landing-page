import { Brain, Target, Heart, Bell, Receipt, PiggyBank } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Debt Clarity",
      description: "See exactly how to get out of debt faster.",
      detail:
        "Get a clear roadmap to debt freedom with personalized payoff strategies that actually work with your income and lifestyle.",
    },
    {
      icon: Brain,
      title: "Smart Money Moves",
      description: "AI that learns your habits and suggests realistic changes.",
      detail:
        "Get personalized advice that works with your actual lifestyle, not against it. No more unrealistic budgets that make you feel guilty.",
    },
    {
      icon: Heart,
      title: "Your Money Coach",
      description:
        "A supportive AI that celebrates wins and keeps you motivated.",
      detail:
        "Get encouragement when you're crushing your goals and gentle guidance when you need it. Finally, a finance app that doesn't judge.",
    },
    {
      icon: Bell,
      title: "Never Miss a Bill",
      description: "Smart alerts that learn your payment patterns.",
      detail:
        "Get reminded about bills before they're due, not after. Our AI learns your schedule so you never pay late fees again.",
    },
    {
      icon: Receipt,
      title: "Auto Expense Tracking",
      description: "Your spending categorizes itself automatically.",
      detail:
        "No more manual data entry or confusing categories. Just snap receipts or connect accounts and watch everything organize itself.",
    },
    {
      icon: PiggyBank,
      title: "Smart Budgets",
      description: "Build budgets that actually work for your life.",
      detail:
        "Create spending plans based on your real habits and income. No more guessing games or impossible restrictions that make you give up.",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-gradient-to-b from-surface to-background"
      role="region"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Everything you need</span>
            <br />
            <span className="text-foreground">to win with money</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground-light max-w-2xl mx-auto leading-relaxed">
            Stop struggling with spreadsheets and confusing apps. Get AI that
            actually understands your money goals and helps you achieve them
            faster.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          role="list"
          aria-label="AI-powered financial features"
        >
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="feature-card group animate-fade-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
              role="listitem"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                  aria-hidden="true"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg text-foreground-light mb-4">
                {feature.description}
              </p>
              <p className="text-foreground-muted leading-relaxed">
                {feature.detail}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            <span className="text-foreground font-medium">
              More powerful features launching soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
