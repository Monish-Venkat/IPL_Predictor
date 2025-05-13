
import React from "react";
import { Toaster } from "sonner";
import { Card } from "@/components/ui/card";
import PointsTable from "@/components/PointsTable";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const PointsTablePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-ipl text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Navigation */}
        <div className="mb-6">
          <NavigationMenu className="bg-slate-900/60 p-4 rounded-lg border border-slate-700">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="text-white hover:text-ipl-accent px-4 py-2 font-medium">
                    Match Predictor
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/points-table" className="text-ipl-accent hover:text-ipl-accent-light px-4 py-2 font-medium">
                    Points Table
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Card className="bg-slate-900/60 border-slate-700 p-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ipl-purple/10 to-transparent -z-10"></div>
          
          <div className="mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ipl-accent to-ipl-accent-light inline-block">
              IPL 2024 Points Table
            </h1>
            <p className="text-slate-300 mt-2">
              Track your favorite team's position in the tournament
            </p>
          </div>

          <PointsTable />
        </Card>

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

export default PointsTablePage;
