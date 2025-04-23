
import React from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SearchFilters = () => {
  return (
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
  );
};

export default SearchFilters;
