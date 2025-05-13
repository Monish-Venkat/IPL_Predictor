
import React, { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { Team, Venue, capHolders, venues, getKeyPlayersByTeamId, getTeamById } from "@/data/teamData";
import { calculateWinProbability } from "@/utils/predictionUtils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import TeamSelector from "@/components/TeamSelector";
import VenueSelector from "@/components/VenueSelector";
import KeyPlayers from "@/components/KeyPlayers";
import WinProbabilityChart from "@/components/WinProbabilityChart";
import CapHolders from "@/components/CapHolders";
import PredictorHeader from "@/components/PredictorHeader";
import TeamRecentForm from "@/components/TeamRecentForm";
import { toast } from "sonner";

const Index = () => {
  const [team1, setTeam1] = useState<Team | null>(null);
  const [team2, setTeam2] = useState<Team | null>(null);
  const [venue, setVenue] = useState<Venue | null>(null);
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  // Auto-select venue based on team1 home venue
  useEffect(() => {
    if (team1 && !venue) {
      const homeVenue = venues.find(v => v.id === team1.homeVenue);
      if (homeVenue) setVenue(homeVenue);
    }
  }, [team1]);

  const handleTeam1Select = (selected: Team) => {
    setTeam1(selected);
    
    // If the same team is selected for both, reset team2
    if (team2 && selected.id === team2.id) {
      setTeam2(null);
    }
  };

  const handleTeam2Select = (selected: Team) => {
    setTeam2(selected);
    
    // If the same team is selected for both, reset team1
    if (team1 && selected.id === team1.id) {
      setTeam1(null);
    }
  };

  const handlePredict = () => {
    if (!team1 || !team2 || !venue) {
      toast.error("Please select both teams and a venue to continue");
      return;
    }
    
    setLoading(true);
    
    // Get key players for both teams
    const team1KeyPlayers = getKeyPlayersByTeamId(team1.id);
    const team2KeyPlayers = getKeyPlayersByTeamId(team2.id);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = calculateWinProbability(
        team1,
        team2,
        venue,
        team1KeyPlayers,
        team2KeyPlayers
      );
      
      setPrediction(result);
      setLoading(false);
      toast.success("Prediction calculated successfully!");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-ipl text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Navigation */}
        <div className="mb-6">
          <NavigationMenu className="bg-slate-900/60 p-4 rounded-lg border border-slate-700">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="text-ipl-accent hover:text-ipl-accent-light px-4 py-2 font-medium">
                    Match Predictor
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/points-table" className="text-white hover:text-ipl-accent px-4 py-2 font-medium">
                    Points Table
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="space-y-8">
          <PredictorHeader />
          
          <Card className="bg-slate-900/60 border-slate-700 p-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ipl-purple/10 to-transparent -z-10"></div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <TeamSelector
                    selectedTeam={team1}
                    onSelectTeam={handleTeam1Select}
                    label="Select Team 1"
                    excludeTeamId={team2?.id}
                  />
                </div>
                
                <div>
                  <TeamSelector
                    selectedTeam={team2}
                    onSelectTeam={handleTeam2Select}
                    label="Select Team 2"
                    excludeTeamId={team1?.id}
                  />
                </div>
              </div>
              
              <div>
                <VenueSelector selectedVenue={venue} onSelectVenue={setVenue} />
              </div>
              
              <div className="flex justify-center pt-2">
                <Button 
                  onClick={handlePredict} 
                  disabled={!team1 || !team2 || !venue || loading}
                  className="bg-ipl-accent hover:bg-ipl-accent-light text-black font-bold px-8 py-6 text-lg"
                >
                  {loading ? "Calculating..." : "Predict Match Outcome"}
                </Button>
              </div>
            </div>
          </Card>
          
          {prediction && (
            <Card className="bg-slate-900/60 border-slate-700 p-6 shadow-xl">
              <WinProbabilityChart
                team1={team1!}
                team2={team2!}
                team1Probability={prediction.team1Probability}
                team2Probability={prediction.team2Probability}
                factorsData={prediction.factors}
              />
            </Card>
          )}
          
          {team1 && team2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/60 border-slate-700 p-6 shadow-xl">
                <KeyPlayers 
                  players={getKeyPlayersByTeamId(team1.id)} 
                  teamName={team1.name} 
                  teamColor={team1.primaryColor} 
                />
              </Card>
              
              <Card className="bg-slate-900/60 border-slate-700 p-6 shadow-xl">
                <KeyPlayers 
                  players={getKeyPlayersByTeamId(team2.id)} 
                  teamName={team2.name} 
                  teamColor={team2.primaryColor} 
                />
              </Card>
            </div>
          )}
          
          {team1 && team2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/60 border-slate-700 p-6 shadow-xl">
                <TeamRecentForm 
                  teamId={team1.id}
                  teamColor={team1.primaryColor}
                />
              </Card>
              
              <Card className="bg-slate-900/60 border-slate-700 p-6 shadow-xl">
                <TeamRecentForm 
                  teamId={team2.id}
                  teamColor={team2.primaryColor}
                />
              </Card>
            </div>
          )}
          
          <Card className="bg-slate-900/60 border-slate-700 p-6 shadow-xl">
            <CapHolders orangeCap={capHolders.orangeCap} purpleCap={capHolders.purpleCap} />
          </Card>
        </div>

        <footer className="text-center text-slate-400 text-sm py-8">
          <p>
            IPL Win Predictor | All team logos and player images © BCCI | 
            Predictions are based on statistical analysis and do not guarantee match outcomes
          </p>
        </footer>
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default Index;
