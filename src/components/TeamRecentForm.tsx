
import React from "react";
import { getTeamById } from "@/data/teamData";
import { Card } from "@/components/ui/card";

interface TeamRecentFormProps {
  teamId: string;
  teamColor: string;
}

const TeamRecentForm: React.FC<TeamRecentFormProps> = ({ teamId, teamColor }) => {
  const team = getTeamById(teamId);

  if (!team) return null;
  
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold" style={{ color: teamColor }}>
        {team.name}
      </h3>
      <Card className="bg-slate-800/60 border-slate-700 p-4">
        <div className="text-center py-2">
          <p className="text-white">Team information</p>
          <p className="text-sm text-slate-300 mt-1">Matches played: {team.matchesPlayed}</p>
          <p className="text-sm text-slate-300">Won: {team.matchesWon} | Lost: {team.matchesLost}</p>
        </div>
      </Card>
    </div>
  );
};

export default TeamRecentForm;
