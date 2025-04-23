
import React, { useState } from "react";
import PatientCard from "./PatientCard";
import ExplainabilityCard from "./ExplainabilityCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Bell, List, ChevronDown, RefreshCw, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for the dashboard
const mockPatients = [
  {
    id: "P-001",
    name: "James Wilson",
    age: 65,
    arrival: "10 min ago",
    priority: "critical" as const,
    vitalSigns: {
      heartRate: 125,
      bloodPressure: "160/95",
      oxygenSaturation: 88,
      temperature: 102.3,
    },
    symptoms: ["Chest pain", "Shortness of breath", "Sweating"],
    aiScore: 92,
    factors: [
      {
        name: "Oxygen Saturation",
        value: "88%",
        impact: 3,
        description: "Low oxygen levels indicate respiratory distress requiring immediate intervention.",
      },
      {
        name: "Heart Rate",
        value: "125 bpm",
        impact: 2,
        description: "Elevated heart rate suggests cardiovascular stress.",
      },
      {
        name: "Age & Medical History",
        value: "65 years, Hypertension",
        impact: 1,
        description: "Age and history increase risk for cardiac events.",
      },
      {
        name: "Symptom: Chest Pain",
        value: "Present",
        impact: 3,
        description: "Acute chest pain is a cardinal symptom for potential myocardial infarction.",
      }
    ],
  },
  {
    id: "P-002",
    name: "Emma Thompson",
    age: 34,
    arrival: "15 min ago",
    priority: "medium" as const,
    vitalSigns: {
      heartRate: 95,
      bloodPressure: "130/85",
      oxygenSaturation: 97,
      temperature: 99.8,
    },
    symptoms: ["Abdominal pain", "Nausea"],
    aiScore: 65,
    factors: [
      {
        name: "Abdominal Pain",
        value: "Moderate, Localized",
        impact: 1,
        description: "Localized pain suggests non-emergent condition but requires evaluation.",
      },
      {
        name: "Vital Signs",
        value: "Stable",
        impact: -1,
        description: "Vital signs within normal ranges indicate hemodynamic stability.",
      },
    ],
  },
  {
    id: "P-003",
    name: "Miguel Rodriguez",
    age: 8,
    arrival: "5 min ago",
    priority: "high" as const,
    vitalSigns: {
      heartRate: 110,
      bloodPressure: "100/60",
      oxygenSaturation: 94,
      temperature: 103.5,
    },
    symptoms: ["High fever", "Rash", "Lethargy"],
    aiScore: 78,
    factors: [
      {
        name: "Age",
        value: "8 years",
        impact: 1,
        description: "Pediatric patients with high fever require prompt assessment.",
      },
      {
        name: "Temperature",
        value: "103.5°F",
        impact: 2,
        description: "High fever may indicate serious infection; risk of febrile seizures.",
      },
      {
        name: "Rash & Lethargy",
        value: "Present",
        impact: 2,
        description: "Combination suggests possible meningitis or sepsis requiring urgent evaluation.",
      },
    ],
  },
  {
    id: "P-004",
    name: "Sarah Johnson",
    age: 28,
    arrival: "25 min ago",
    priority: "low" as const,
    vitalSigns: {
      heartRate: 72,
      bloodPressure: "118/75",
      oxygenSaturation: 99,
      temperature: 98.6,
    },
    symptoms: ["Sore throat", "Mild cough"],
    aiScore: 35,
    factors: [
      {
        name: "Symptoms",
        value: "Upper respiratory",
        impact: -2,
        description: "Symptoms consistent with minor viral illness, not requiring emergency care.",
      },
      {
        name: "Vital Signs",
        value: "All normal",
        impact: -2,
        description: "Normal vital signs indicate absence of systemic involvement.",
      },
    ],
  },
];

const DashboardDemo: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [overrideDialogOpen, setOverrideDialogOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState<string>("");

  const handleViewDetails = (patientId: string) => {
    setSelectedPatient(patientId);
    setDialogOpen(true);
  };

  const handleOverride = (patientId: string) => {
    setSelectedPatient(patientId);
    setOverrideDialogOpen(true);
  };

  const patient = selectedPatient 
    ? mockPatients.find(p => p.id === selectedPatient) 
    : null;

  return (
    <div id="demo" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-medical-dark sm:text-4xl">
            Interactive Demo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            See how PulsePriorityNow works in a simulated emergency department
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-medical-dark text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold">Emergency Department Triage Dashboard</h3>
                <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Live Demo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" className="text-white" size="sm">
                  <RefreshCw className="h-4 w-4 mr-1" /> Refresh
                </Button>
                <Button variant="ghost" className="text-white" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Toolbar */}
          <div className="p-4 bg-gray-50 border-b flex flex-wrap gap-3 justify-between">
            <div className="flex flex-wrap gap-2 items-center">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="text" 
                  placeholder="Search patients..." 
                  className="pl-9 w-[200px] h-9"
                />
              </div>
              <Select>
                <SelectTrigger className="w-[160px] h-9">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-1" />
                    <SelectValue placeholder="Filter Priority" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Patients</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">4 Patients Waiting</span>
              <Select>
                <SelectTrigger className="w-[160px] h-9">
                  <div className="flex items-center">
                    <List className="h-4 w-4 mr-1" />
                    <SelectValue placeholder="Sort By" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="priority">Priority (High-Low)</SelectItem>
                  <SelectItem value="arrival">Arrival Time</SelectItem>
                  <SelectItem value="age">Age</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-4">
            <Tabs defaultValue="patients">
              <TabsList className="mb-4">
                <TabsTrigger value="patients">Patient Queue</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="capacity">Capacity Planning</TabsTrigger>
              </TabsList>
              
              <TabsContent value="patients">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {mockPatients.map((patient) => (
                    <PatientCard
                      key={patient.id}
                      patient={patient}
                      onViewDetails={handleViewDetails}
                      onOverride={handleOverride}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="min-h-[400px] flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-500">Real-time analytics and insights would be displayed here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="capacity" className="min-h-[400px] flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Capacity Planning</h3>
                  <p className="text-gray-500">ED capacity forecasting based on current trends would appear here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Explainability Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>AI Decision Explanation</DialogTitle>
              <DialogDescription>
                Understanding how the AI prioritized this patient
              </DialogDescription>
            </DialogHeader>
            
            {patient && (
              <ExplainabilityCard
                patientId={patient.id}
                patientName={patient.name}
                priority={patient.priority}
                aiScore={patient.aiScore}
                factors={patient.factors}
              />
            )}
          </DialogContent>
        </Dialog>
        
        {/* Override Priority Dialog */}
        <Dialog open={overrideDialogOpen} onOpenChange={setOverrideDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Override AI Priority</DialogTitle>
              <DialogDescription>
                Use clinical judgment to adjust the priority level
              </DialogDescription>
            </DialogHeader>
            
            {patient && (
              <div className="space-y-4 pt-2">
                <div>
                  <p className="text-sm font-medium mb-1">Current Priority:</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                    ${patient.priority === "critical" ? "bg-medical-red text-white" : 
                      patient.priority === "high" ? "bg-medical-orange text-white" :
                      patient.priority === "medium" ? "bg-medical-yellow text-white" : 
                      "bg-medical-green text-white"}`}>
                    {patient.priority === "critical" ? "Critical" : 
                      patient.priority === "high" ? "High Priority" :
                      patient.priority === "medium" ? "Medium Priority" : 
                      "Low Priority"}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1">Select New Priority:</p>
                  <Select onValueChange={setSelectedPriority}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1">Reason for Override:</p>
                  <Input placeholder="Enter clinical reasoning..." />
                </div>
                
                <div className="flex justify-end space-x-2 pt-2">
                  <Button variant="outline" onClick={() => setOverrideDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button 
                    disabled={!selectedPriority}
                    onClick={() => {
                      // In a real app, this would update the patient's priority
                      setOverrideDialogOpen(false);
                      setSelectedPriority("");
                    }}
                  >
                    Confirm Override
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DashboardDemo;
