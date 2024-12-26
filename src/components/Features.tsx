import { Brain, Shield, Users, Zap } from "lucide-react";

const features = [
  {
    title: "FuturoInsight",
    description: "AI-powered analytics for real-time player performance and health management",
    icon: Brain,
  },
  {
    title: "FuturoContract",
    description: "Secure blockchain solutions for transparent contract management",
    icon: Shield,
  },
  {
    title: "FuturoCoach",
    description: "Advanced tactical simulations powered by legendary coaching philosophies",
    icon: Zap,
  },
  {
    title: "FuturoCommunity",
    description: "Immersive fan experiences through cutting-edge technology",
    icon: Users,
  },
];

export const Features = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-futuro-navy mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600">
            Transforming football through innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-gray-200 hover:border-futuro-blue transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-futuro-blue mb-4" />
              <h3 className="text-xl font-semibold text-futuro-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};