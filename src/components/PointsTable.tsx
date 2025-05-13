
import React from "react";
import { teams } from "@/data/teamData";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PointsTable: React.FC = () => {
  // Sort teams by points (descending), then by net run rate (descending) if points are equal
  const sortedTeams = [...teams].sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    return b.netRunRate - a.netRunRate;
  });

  // Function to get position indicator
  const getPositionIndicator = (index: number) => {
    if (index < 4) {
      return <ArrowUp className="text-green-500 h-4 w-4" />;
    } else if (index > 7) {
      return <ArrowDown className="text-red-500 h-4 w-4" />;
    }
    return <Minus className="text-slate-400 h-3 w-3" />;
  };

  // Function to get qualifier style
  const getRowStyle = (index: number) => {
    if (index < 4) {
      return "bg-gradient-to-r from-green-950/30 to-transparent border-l-4 border-green-500";
    } else if (index > 7) {
      return "bg-gradient-to-r from-red-950/30 to-transparent border-l-4 border-red-500";
    }
    return "";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="text-sm text-slate-300">Playoff Qualification</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-slate-500 rounded-full"></span>
          <span className="text-sm text-slate-300">Mid Table</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="text-sm text-slate-300">Elimination Zone</span>
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-lg border border-slate-700 shadow-lg">
        <Table className="border-collapse w-full">
          <TableHeader>
            <TableRow className="bg-slate-800">
              <TableHead className="text-white font-semibold">Pos</TableHead>
              <TableHead className="text-white font-semibold">Team</TableHead>
              <TableHead className="text-white text-center font-semibold">P</TableHead>
              <TableHead className="text-white text-center font-semibold">W</TableHead>
              <TableHead className="text-white text-center font-semibold">L</TableHead>
              <TableHead className="text-white text-center font-semibold">NRR</TableHead>
              <TableHead className="text-white text-center font-semibold">Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedTeams.map((team, index) => (
              <TableRow 
                key={team.id} 
                className={`hover:bg-slate-800/60 ${getRowStyle(index)}`}
              >
                <TableCell className="font-medium text-white">
                  <div className="flex items-center gap-1">
                    {getPositionIndicator(index)}
                    {index + 1}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-800 flex items-center justify-center border border-slate-700" style={{ backgroundColor: team.primaryColor + '30' }}>
                      <span className="text-xs font-bold text-white">{team.abbreviation}</span>
                    </div>
                    <span className="font-medium text-white">{team.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white">{team.matchesPlayed}</TableCell>
                <TableCell className="text-center text-white">{team.matchesWon}</TableCell>
                <TableCell className="text-center text-white">{team.matchesLost}</TableCell>
                <TableCell className="text-center text-white">
                  <span className={team.netRunRate >= 0 ? "text-green-400" : "text-red-400"}>
                    {team.netRunRate > 0 ? "+" : ""}{team.netRunRate.toFixed(3)}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className="font-bold text-white bg-slate-800 rounded-full px-2 py-1">
                    {team.points}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PointsTable;
