import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-futuro-navy/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-futuro-gold text-2xl font-bold">FUTURO</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-white hover:text-futuro-blue px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#mission" className="text-white hover:text-futuro-blue px-3 py-2 rounded-md text-sm font-medium">Mission</a>
              <a href="#contact" className="text-white hover:text-futuro-blue px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <Button className="bg-futuro-blue hover:bg-futuro-blue/80 text-white">Get Started</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-futuro-blue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-white hover:text-futuro-blue block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#mission" className="text-white hover:text-futuro-blue block px-3 py-2 rounded-md text-base font-medium">Mission</a>
            <a href="#contact" className="text-white hover:text-futuro-blue block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <Button className="w-full bg-futuro-blue hover:bg-futuro-blue/80 text-white mt-4">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};