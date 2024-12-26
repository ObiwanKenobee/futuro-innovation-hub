import { Button } from "@/components/ui/button";
import { Users, Trophy, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-futuro-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-futuro-navy via-futuro-navy/90 to-futuro-blue/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Empowering Football's{" "}
            <span className="text-futuro-gold">Future</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Where Ancient Wisdom Meets Modern Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-futuro-blue hover:bg-futuro-blue/80 text-white">
              Explore Features
            </Button>
            <Button size="lg" variant="outline" className="border-futuro-gold text-futuro-gold hover:bg-futuro-gold/10">
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-futuro-gold" />
              <span className="text-gray-300">10K+ Users Worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-futuro-gold" />
              <span className="text-gray-300">Trusted by Top Clubs</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-futuro-gold" />
              <span className="text-gray-300">Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};