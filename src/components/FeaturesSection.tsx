import { Brain, Target, Heart, Bell } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Debt Clarity",
      description: "See exactly where your money goes and what you owe.",
      detail: "Get crystal-clear insights into your spending patterns and debt obligations with intelligent categorization and visual breakdowns."
    },
    {
      icon: Brain,
      title: "AI Guidance",
      description: "Smart recommendations tailored to your financial goals.",
      detail: "Our AI analyzes your spending habits and provides personalized advice to help you make better financial decisions every day."
    },
    {
      icon: Heart,
      title: "Fun Mentor Buddy",
      description: "A friendly companion that makes budgeting enjoyable.",
      detail: "Meet your personal finance buddy who celebrates your wins, guides you through challenges, and keeps you motivated on your journey."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss a payment or budget goal again.",
      detail: "Intelligent notifications that learn your patterns and remind you of important deadlines, goals, and opportunities to save."
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
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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