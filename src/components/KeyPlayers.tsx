
import React from "react";
import { Player } from "@/data/teamData";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface KeyPlayersProps {
  players: Player[];
  teamName: string;
  teamColor: string;
}

const KeyPlayers: React.FC<KeyPlayersProps> = ({ players, teamName, teamColor }) => {
  // Sort players by role: Batsmen first, then All-rounders, then Bowlers
  const sortedPlayers = [...players].sort((a, b) => {
    const roleOrder = {
      "Batsman": 1,
      "Wicket-keeper": 2,
      "All-rounder": 3,
      "Bowler": 4,
    };
    
    return roleOrder[a.role] - roleOrder[b.role];
  });

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold" style={{ color: teamColor }}>
          {teamName} Key Players
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {sortedPlayers.map((player) => (
          <Card key={player.id} className="bg-slate-800/60 border-slate-700 overflow-hidden">
            <div className="flex items-center p-3 h-full">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 bg-slate-700 flex items-center justify-center" style={{ borderColor: teamColor }}>
                <span className="text-lg font-bold text-white">{player.name.substring(0, 1)}</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-white">{player.name}</h4>
                <div className="flex items-center">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-white">
                    {player.role}
                  </span>
                </div>
                <div className="mt-1 text-xs text-slate-300 space-y-1">
                  {player.role === "Batsman" || player.role === "Wicket-keeper" || player.role === "All-rounder" ? (
                    <p>
                      {player.runs} runs | Avg: {player.battingAverage} | SR: {player.strikeRate}
                    </p>
                  ) : null}
                  
                  {player.role === "Bowler" || player.role === "All-rounder" ? (
                    <p>
                      {player.wickets} wickets | Econ: {player.economy} | Avg: {player.bowlingAverage}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeyPlayers;
