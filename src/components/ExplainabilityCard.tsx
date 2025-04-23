
import React from "react";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Factor = {
  name: string;
  value: string | number;
  impact: number; // -3 to 3 scale
  description: string;
};

type ExplainabilityCardProps = {
  patientId: string;
  patientName: string;
  priority: "critical" | "high" | "medium" | "low";
  aiScore: number;
  factors: Factor[];
};

const ExplainabilityCard: React.FC<ExplainabilityCardProps> = ({
  patientId,
  patientName,
  priority,
  aiScore,
  factors,
}) => {
  const priorityColors = {
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

  const getImpactColor = (impact: number) => {
    if (impact >= 2) return "text-medical-red";
    if (impact >= 1) return "text-medical-orange";
    if (impact >= 0) return "text-medical-yellow";
    if (impact >= -1) return "text-medical-green";
    return "text-medical-blue";
  };

  const getImpactIcon = (impact: number) => {
    if (impact >= 1) return <AlertTriangle className="h-4 w-4" />;
    if (impact <= -1) return <CheckCircle className="h-4 w-4" />;
    return <Info className="h-4 w-4" />;
  };

  const getImpactText = (impact: number) => {
    if (impact >= 2) return "Critical factor";
    if (impact >= 1) return "Major factor";
    if (impact >= 0) return "Relevant factor";
    if (impact >= -1) return "Minor factor";
    return "Neutral factor";
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className={cn("py-3", priorityColors[priority])}>
        <div className="flex justify-between">
          <CardTitle className="text-lg">AI Explanation</CardTitle>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/20">
            {priorityNames[priority]}
          </span>
        </div>
        <CardDescription className="text-gray-100">
          Patient: {patientName} (ID: {patientId})
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-1">AI Severity Score: {aiScore}%</h4>
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div 
              className={cn(
                "h-2 rounded-full", 
                priorityColors[priority].split(" ")[0]
              )}
              style={{ width: `${aiScore}%` }}
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">Key Factors in Decision:</h4>
          
          {factors.map((factor, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className={cn("p-1 rounded-full mr-2", getImpactColor(factor.impact))}>
                    {getImpactIcon(factor.impact)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{factor.name}</p>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Value:</span> {factor.value}
                    </p>
                  </div>
                </div>
                <span className={cn("text-xs px-2 py-0.5 rounded-full", getImpactColor(factor.impact))}>
                  {getImpactText(factor.impact)}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-2">{factor.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExplainabilityCard;
