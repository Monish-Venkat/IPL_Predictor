
import React from "react";
import { Team, teams } from "@/data/teamData";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TeamSelectorProps {
  selectedTeam: Team | null;
  onSelectTeam: (team: Team) => void;
  label: string;
  excludeTeamId?: string;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ 
  selectedTeam, 
  onSelectTeam, 
  label,
  excludeTeamId
}) => {
  const availableTeams = excludeTeamId 
    ? teams.filter(team => team.id !== excludeTeamId)
    : teams;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">{label}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {availableTeams.map((team) => (
          <Card
            key={team.id}
            className={cn(
              "p-3 cursor-pointer hover:bg-slate-800/50 transition-all border-2",
              selectedTeam?.id === team.id 
                ? "border-ipl-accent bg-slate-800/60" 
                : "border-transparent bg-card/60 hover:border-ipl-accent/50"
            )}
            onClick={() => onSelectTeam(team)}
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-16 h-16 relative bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">{team.abbreviation}</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-center">
                {team.abbreviation}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamSelector;
