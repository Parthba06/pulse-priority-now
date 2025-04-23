
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HospitalCapacityAlert from "../HospitalCapacityAlert";
import PatientCard from "../PatientCard";

type DashboardContentProps = {
  mockPatients: any[];
  onViewDetails: (id: string) => void;
  onOverride: (id: string) => void;
};

const DashboardContent = ({ mockPatients, onViewDetails, onOverride }: DashboardContentProps) => {
  return (
    <div className="p-4">
      <Tabs defaultValue="patients">
        <TabsList className="mb-4">
          <TabsTrigger value="patients">Patient Queue</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="capacity">Capacity Planning</TabsTrigger>
        </TabsList>
        
        <TabsContent value="patients">
          <div className="mb-4">
            <HospitalCapacityAlert />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mockPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onViewDetails={onViewDetails}
                onOverride={onOverride}
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
  );
};

export default DashboardContent;
