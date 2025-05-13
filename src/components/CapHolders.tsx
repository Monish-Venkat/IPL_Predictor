
import React from "react";
import { Player } from "@/data/teamData";
import { Card } from "@/components/ui/card";

interface CapHoldersProps {
  orangeCap: {
    player: Player | undefined;
    runs: number;
  };
  purpleCap: {
    player: Player | undefined;
    wickets: number;
  };
}

const CapHolders: React.FC<CapHoldersProps> = ({ orangeCap, purpleCap }) => {
  if (!orangeCap.player || !purpleCap.player) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center text-white">Current Tournament Leaders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-ipl-cap-orange/20 to-black border-ipl-cap-orange/30 p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-ipl-cap-orange/10 -mr-8 -mt-8 z-0"></div>
          <div className="relative z-10 space-y-2">
            <div className="flex items-center mb-1">
              <span className="bg-ipl-cap-orange text-white text-xs px-2 py-0.5 rounded-full mr-2">
                Orange Cap
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">{orangeCap.player.name}</h3>
            <p className="text-sm text-slate-300">{orangeCap.player.teamId.toUpperCase()}</p>
            <p className="text-2xl font-bold text-ipl-cap-orange mt-1">{orangeCap.runs} Runs</p>
            <p className="text-xs text-slate-400">
              Avg: {orangeCap.player.battingAverage} | SR: {orangeCap.player.strikeRate}
            </p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-ipl-cap-purple/20 to-black border-ipl-cap-purple/30 p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-ipl-cap-purple/10 -mr-8 -mt-8 z-0"></div>
          <div className="relative z-10 space-y-2">
            <div className="flex items-center mb-1">
              <span className="bg-ipl-cap-purple text-white text-xs px-2 py-0.5 rounded-full mr-2">
                Purple Cap
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">{purpleCap.player.name}</h3>
            <p className="text-sm text-slate-300">{purpleCap.player.teamId.toUpperCase()}</p>
            <p className="text-2xl font-bold text-ipl-cap-purple mt-1">{purpleCap.wickets} Wickets</p>
            <p className="text-xs text-slate-400">
              Econ: {purpleCap.player.economy} | Avg: {purpleCap.player.bowlingAverage}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CapHolders;
