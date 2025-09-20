import { Brain, Target, Heart, Bell, Receipt, PiggyBank } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Debt Clarity",
      description: "Stop wondering where your money went every month.",
      detail: "Finally see the complete picture of your debts and spending in one simple dashboard that actually makes sense."
    },
    {
      icon: Brain,
      title: "AI-Driven Decisions",
      description: "Get smart advice that fits your real lifestyle.",
      detail: "Our AI learns how you spend and suggests realistic changes you can actually stick to without feeling deprived."
    },
    {
      icon: Heart,
      title: "Fun Mentor Buddy",
      description: "Your personal cheerleader for financial wins.",
      detail: "Meet your friendly money mentor who celebrates every small victory and gently nudges you back on track when you slip."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never get caught off guard by bills again.",
      detail: "Intelligent alerts that learn your patterns and remind you about payments before they're due, not after."
    },
    {
      icon: Receipt,
      title: "Smart Expense Tracking",
      description: "Automatic categorization that actually works.",
      detail: "Watch your expenses organize themselves while you focus on living, not bookkeeping or manual data entry."
    },
    {
      icon: PiggyBank,
      title: "Budget Planning",
      description: "Create budgets you'll want to follow.",
      detail: "Build realistic spending plans that work with your income and goals, not against your human nature."
    }
  ];

  return (
    <section id="features" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Features that</span>
            <br />
            <span className="text-foreground">make budgeting simple</span>
          </h2>
          <p className="text-xl text-foreground-light max-w-2xl mx-auto">
            Everything you need to take control of your finances in one beautiful, easy-to-use app.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card group animate-fade-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-accent/10 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent font-medium">More features coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;