
import React from "react";
import { RefreshCw, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  return (
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
  );
};

export default DashboardHeader;
