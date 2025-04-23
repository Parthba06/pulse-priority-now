
import React from "react";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-medical-blue" />
              <span className="ml-2 text-xl font-bold">PulsePriority<span className="text-medical-blue">Now</span></span>
            </div>
            <p className="text-sm text-gray-300">
              AI-powered emergency department triage system that enhances clinical decision-making and improves patient outcomes.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">Features</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">How it Works</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">Integrations</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">Documentation</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">API Reference</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">Support</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">About Us</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">Careers</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">Contact</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-medical-blue">Press</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-400">© 2025 PulsePriorityNow. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-medical-blue">Privacy Policy</Link></li>
              <li><Link to="/" className="text-sm text-gray-400 hover:text-medical-blue">Terms of Service</Link></li>
              <li><Link to="/" className="text-sm text-gray-400 hover:text-medical-blue">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
