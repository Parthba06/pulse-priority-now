
import React from "react";
import { Clock, Activity, Heart, Thermometer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PatientCardProps = {
  patient: {
    id: string;
    name: string;
    age: number;
    arrival: string;
    priority: "critical" | "high" | "medium" | "low";
    vitalSigns: {
      heartRate: number;
      bloodPressure: string;
      oxygenSaturation: number;
      temperature: number;
    };
    symptoms: string[];
    aiScore: number;
  };
  onViewDetails: (id: string) => void;
  onOverride: (id: string) => void;
};

const priorityClasses = {
  critical: "bg-medical-red text-white",
  high: "bg-medical-orange text-white",
  medium: "bg-medical-yellow text-white",
  low: "bg-medical-green text-white",
};

const priorityNames = {
  critical: "Critical",
  high: "High Priority",
  medium: "Medium Priority",
  low: "Low Priority",
};

const PatientCard: React.FC<PatientCardProps> = ({ patient, onViewDetails, onOverride }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className={cn("py-3", priorityClasses[patient.priority])}>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">{patient.name}, {patient.age}</CardTitle>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/20">
            {priorityNames[patient.priority]}
          </span>
        </div>
        <CardDescription className="text-gray-100 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          Arrived: {patient.arrival}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4 grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <Heart className="h-4 w-4 text-medical-red mr-1" />
            <span className="text-xs text-gray-600">HR: {patient.vitalSigns.heartRate} bpm</span>
          </div>
          <div className="flex items-center">
            <Activity className="h-4 w-4 text-medical-blue mr-1" />
            <span className="text-xs text-gray-600">BP: {patient.vitalSigns.bloodPressure}</span>
          </div>
          <div className="flex items-center">
            <svg className="h-4 w-4 text-medical-blue mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs text-gray-600">O₂: {patient.vitalSigns.oxygenSaturation}%</span>
          </div>
          <div className="flex items-center">
            <Thermometer className="h-4 w-4 text-medical-orange mr-1" />
            <span className="text-xs text-gray-600">Temp: {patient.vitalSigns.temperature}°F</span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-600 mb-1">Symptoms:</p>
          <div className="flex flex-wrap gap-1">
            {patient.symptoms.map((symptom, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-700"
              >
                {symptom}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-xs font-medium text-gray-600 mb-1">AI Severity Score:</p>
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div 
              className={cn(
                "h-2 rounded-full", 
                patient.priority === "critical" ? "bg-medical-red" : 
                patient.priority === "high" ? "bg-medical-orange" :
                patient.priority === "medium" ? "bg-medical-yellow" : "bg-medical-green"
              )}
              style={{ width: `${patient.aiScore}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">0</span>
            <span className="text-xs text-gray-500">100</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 pt-0">
        <Button 
          variant="outline" 
          className="w-full text-xs border-medical-blue text-medical-blue hover:bg-medical-blue/10"
          onClick={() => onViewDetails(patient.id)}
        >
          View Details
        </Button>
        <Button 
          variant="outline" 
          className="w-full text-xs border-medical-orange text-medical-orange hover:bg-medical-orange/10"
          onClick={() => onOverride(patient.id)}
        >
          Override Priority
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PatientCard;
