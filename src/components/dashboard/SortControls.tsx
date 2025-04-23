
import React from "react";
import { List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SortControls = () => {
  return (
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
  );
};

export default SortControls;
