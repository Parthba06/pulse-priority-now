
import React from "react";
import { AlertTriangle, Hospital, Navigation } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Hospital = {
  id: string;
  name: string;
  distance: number;
  availableBeds: number;
  specialties: string[];
  contactNumber: string;
  address: string;
};

// Mock data for available hospitals (in a real app, this would come from an API)
const availableHospitals: Hospital[] = [
  {
    id: "h1",
    name: "Central Medical Center",
    distance: 12.5,
    availableBeds: 3,
    specialties: ["Emergency Care", "Trauma Center", "Critical Care"],
    contactNumber: "1-800-555-0123",
    address: "123 Medical Drive",
  },
  {
    id: "h2",
    name: "Regional Hospital",
    distance: 15.8,
    availableBeds: 5,
    specialties: ["Emergency Care", "Cardiac Care"],
    contactNumber: "1-800-555-0124",
    address: "456 Health Avenue",
  },
];

const HospitalCapacityAlert = () => {
  return (
    <div className="space-y-4">
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Critical Capacity Alert</AlertTitle>
        <AlertDescription>
          All hospitals within 10km are at capacity. Emergency redirect protocol activated.
        </AlertDescription>
      </Alert>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" className="w-full">
            View Available Hospitals
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Emergency Hospital Redirect</DialogTitle>
            <DialogDescription>
              The following hospitals have confirmed availability for critical patients:
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            {availableHospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="border rounded-lg p-4 space-y-2 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold flex items-center">
                      <Hospital className="h-4 w-4 mr-2 text-medical-blue" />
                      {hospital.name}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      <Navigation className="h-4 w-4 mr-1" />
                      {hospital.distance} km away • {hospital.availableBeds} beds available
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="text-medical-blue border-medical-blue">
                    Contact
                  </Button>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p>{hospital.address}</p>
                  <p>Emergency: {hospital.contactNumber}</p>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {hospital.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-medical-blue/10 text-medical-blue rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HospitalCapacityAlert;
