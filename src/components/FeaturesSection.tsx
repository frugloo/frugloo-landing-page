import { Brain, Target, Heart, Bell, Receipt, PiggyBank } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Debt Clarity",
      description: "Stop wondering where your money went every month.",
      detail:
        "Finally see the complete picture of your debts and spending in one simple dashboard that actually makes sense.",
    },
    {
      icon: Brain,
      title: "AI-Driven Decisions",
      description: "Get smart advice that fits your real lifestyle.",
      detail:
        "Our AI learns how you spend and suggests realistic changes you can actually stick to without feeling deprived.",
    },
    {
      icon: Heart,
      title: "Fun Mentor Buddy",
      description: "Your personal cheerleader for financial wins.",
      detail:
        "Meet your friendly money mentor who celebrates every small victory and gently nudges you back on track when you slip.",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never get caught off guard by bills again.",
      detail:
        "Intelligent alerts that learn your patterns and remind you about payments before they're due, not after.",
    },
    {
      icon: Receipt,
      title: "Smart Expense Tracking",
      description: "Automatic categorization that actually works.",
      detail:
        "Watch your expenses organize themselves while you focus on living, not bookkeeping or manual data entry.",
    },
    {
      icon: PiggyBank,
      title: "Budget Planning",
      description: "Create budgets you'll want to follow.",
      detail:
        "Build realistic spending plans that work with your income and goals, not against your human nature.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-surface to-background"
      role="region"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-5xl font-bold mb-6">
            <span className="gradient-text">AI-powered features</span>
            <br />
            <span className="text-foreground">
              that transform your finances
            </span>
          </h2>
          <p className="text-xl text-foreground-light max-w-2xl mx-auto leading-relaxed">
            Revolutionary artificial intelligence meets personal finance. Get
            intelligent insights, automated tracking, and personalized guidance
            that actually works.
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
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-lg text-foreground-light mb-4">
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
              More features coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
