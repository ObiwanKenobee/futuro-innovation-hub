import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-futuro-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-futuro-navy via-futuro-navy/90 to-futuro-blue/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Redefining the Future of{" "}
            <span className="text-futuro-gold">Football</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Where Ancient Wisdom Meets Modern Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-futuro-blue hover:bg-futuro-blue/80 text-white text-lg px-8 py-6">
              Get Started
            </Button>
            <Button variant="outline" className="border-futuro-gold text-futuro-gold hover:bg-futuro-gold/10 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};