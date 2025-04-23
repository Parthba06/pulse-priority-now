
import React from "react";
import { Brain, Clock, Activity, Database, Shield, Smartphone } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className={`p-3 rounded-full inline-block ${color}`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mt-4 text-medical-dark">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "AI Triage Engine",
      description: "Processes vital signs and symptoms in milliseconds to score patient urgency with explainable results.",
      color: "bg-medical-blue",
    },
    {
      icon: <Activity className="h-6 w-6 text-white" />,
      title: "Clinician Dashboard",
      description: "Intuitive interface displaying patient data, AI severity ranking, and explanation cards for transparency.",
      color: "bg-medical-purple",
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Data Integration Layer",
      description: "Seamless connectors to hospital systems (EHR, vital-sign monitors) with secure audit logging.",
      color: "bg-medical-green",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Human-in-the-Loop Controls",
      description: "Tools for staff to override AI priorities, with feedback loops for continuous improvement.",
      color: "bg-medical-orange",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Predictive Capacity Planning",
      description: "Forecasts ED load based on current triage trends and nearby incident alerts.",
      color: "bg-medical-yellow",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: "Mobile & Tele-Triage",
      description: "Remote triage interface for ambulance crews and telehealth nurses to pre-sort patients.",
      color: "bg-medical-red",
    },
  ];

  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-medical-dark sm:text-4xl">
            Innovative Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our AI-driven system combines cutting-edge technology with clinical expertise
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
