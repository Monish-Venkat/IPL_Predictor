
import React from "react";
import { Venue, venues } from "@/data/teamData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VenueSelectorProps {
  selectedVenue: Venue | null;
  onSelectVenue: (venue: Venue) => void;
}

const VenueSelector: React.FC<VenueSelectorProps> = ({ selectedVenue, onSelectVenue }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold text-white">Select Match Venue</h2>
      <Select
        value={selectedVenue?.id || ""}
        onValueChange={(venueId) => {
          const venue = venues.find((v) => v.id === venueId);
          if (venue) onSelectVenue(venue);
        }}
      >
        <SelectTrigger className="w-full bg-card border-slate-700 text-white">
          <SelectValue placeholder="Select a venue" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-700 text-white">
          {venues.map((venue) => (
            <SelectItem key={venue.id} value={venue.id} className="hover:bg-slate-700">
              {venue.name}, {venue.city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {selectedVenue && (
        <div className="mt-2 text-sm text-slate-300 space-y-1">
          <p>Average First Innings: {selectedVenue.avgFirstInningsScore}</p>
          <p>Average Second Innings: {selectedVenue.avgSecondInningsScore}</p>
          <p>Highest Chase: {selectedVenue.highestChaseAchieved}</p>
        </div>
      )}
    </div>
  );
};

export default VenueSelector;
