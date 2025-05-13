
import React from 'react';
import { Team } from '@/data/teamData';
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface WinProbabilityChartProps {
  team1: Team;
  team2: Team;
  team1Probability: number;
  team2Probability: number;
  factorsData: any;
}

const WinProbabilityChart: React.FC<WinProbabilityChartProps> = ({
  team1,
  team2, 
  team1Probability,
  team2Probability,
  factorsData
}) => {
  const data = [
    { name: team1.name, value: team1Probability * 100 },
    { name: team2.name, value: team2Probability * 100 },
  ];

  const COLORS = [team1.primaryColor, team2.primaryColor];

  const factors = [
    { name: "Team Strength", value: factorsData.teamStrength.impact, weight: factorsData.teamStrength.weight },
    { name: "Head to Head", value: factorsData.headToHead.impact, weight: factorsData.headToHead.weight },
    { name: "Recent Form", value: factorsData.recentForm.impact, weight: factorsData.recentForm.weight },
    { name: "Venue Performance", value: factorsData.venuePerformance.impact, weight: factorsData.venuePerformance.weight },
    { name: "Key Players", value: factorsData.keyPlayers.impact, weight: factorsData.keyPlayers.weight },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 p-2 border border-slate-700 rounded-md shadow-lg">
          <p className="font-semibold">{`${payload[0].name}`}</p>
          <p className="text-ipl-accent">{`Win Probability: ${payload[0].value.toFixed(1)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center text-white">Win Probability</h2>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  percent,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      {`${data[index].name} ${(percent * 100).toFixed(1)}%`}
                    </text>
                  );
                }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-center text-slate-200">Influencing Factors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {factors.map((factor, index) => {
          const favoringTeam = factor.value >= 0.5 ? team1 : team2;
          const favorValue = factor.value >= 0.5 ? factor.value : 1 - factor.value;
          
          return (
            <Card key={index} className="bg-slate-800/70 border-slate-700 p-3">
              <div className="text-center">
                <p className="text-sm text-slate-300">{factor.name}</p>
                <p className="text-xl font-bold" style={{ color: favoringTeam.primaryColor }}>
                  {(favorValue * 100).toFixed(0)}%
                </p>
                <p className="text-xs text-slate-400">
                  Favoring {favoringTeam.abbreviation}
                </p>
                <div className="text-xs text-slate-500 mt-1">
                  Weight: {(factor.weight * 100).toFixed(0)}%
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default WinProbabilityChart;
