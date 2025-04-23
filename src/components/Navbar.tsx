
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Activity className="h-8 w-8 text-medical-blue" />
              <span className="ml-2 text-xl font-bold text-medical-dark">PulsePriority<span className="text-medical-blue">Now</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-medical-dark hover:text-medical-blue">
              Home
            </Link>
            <a href="#features" className="px-3 py-2 text-medical-dark hover:text-medical-blue">
              Features
            </a>
            <a href="#demo" className="px-3 py-2 text-medical-dark hover:text-medical-blue">
              Demo
            </a>
            <a href="#about" className="px-3 py-2 text-medical-dark hover:text-medical-blue">
              About
            </a>
            <Button variant="default" className="ml-4 bg-medical-blue hover:bg-medical-blue/90">
              Request Demo
            </Button>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-medical-dark hover:text-medical-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-medical-dark hover:text-medical-blue">
              Home
            </Link>
            <a href="#features" className="block px-3 py-2 text-medical-dark hover:text-medical-blue">
              Features
            </a>
            <a href="#demo" className="block px-3 py-2 text-medical-dark hover:text-medical-blue">
              Demo
            </a>
            <a href="#about" className="block px-3 py-2 text-medical-dark hover:text-medical-blue">
              About
            </a>
            <Button variant="default" className="w-full mt-3 bg-medical-blue hover:bg-medical-blue/90">
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
