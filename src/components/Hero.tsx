
import React from "react";
import { ArrowRight, Clock, Heart, Activity, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-blue-50 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-medical-dark sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">AI-Powered</span>
              <span className="block text-medical-blue">Emergency Triage</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              PulsePriorityNow uses advanced AI to analyze patient data in milliseconds, 
              prioritizing emergency care based on severity while keeping clinicians in control.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Button className="px-8 py-6 bg-medical-blue hover:bg-medical-blue/90 text-white font-bold">
                  See Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="px-8 py-6 border-medical-blue text-medical-blue hover:bg-medical-blue/10">
                  How It Works
                </Button>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-medical-blue" />
                <span className="ml-2 text-sm text-gray-600">30% Faster Triage</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-medical-blue" />
                <span className="ml-2 text-sm text-gray-600">98% Accuracy</span>
              </div>
              <div className="flex items-center">
                <Activity className="h-6 w-6 text-medical-blue" />
                <span className="ml-2 text-sm text-gray-600">Real-time Analysis</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-medical-blue" />
                <span className="ml-2 text-sm text-gray-600">HIPAA Compliant</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="w-full h-64 bg-medical-blue/10 flex flex-col items-center justify-center p-4">
                  <div className="w-full h-full bg-white rounded-lg shadow-md flex flex-col">
                    <div className="p-4 border-b">
                      <div className="flex justify-between items-center">
                        <div className="font-bold text-lg">Emergency Triage Dashboard</div>
                        <div className="text-sm text-gray-500">Live Demo</div>
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <div className="flex gap-2 mb-2">
                        <span className="px-2 py-1 bg-medical-red text-white text-xs rounded-full">Critical</span>
                        <span className="px-2 py-1 bg-medical-orange text-white text-xs rounded-full">High</span>
                        <span className="px-2 py-1 bg-medical-yellow text-white text-xs rounded-full">Medium</span>
                        <span className="px-2 py-1 bg-medical-green text-white text-xs rounded-full">Low</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
