
import React from "react";

interface PredictorHeaderProps {
  title?: string;
}

const PredictorHeader: React.FC<PredictorHeaderProps> = ({ title = "IPL Win Predictor" }) => {
  return (
    <header className="py-4 text-center">
      <div className="flex items-center justify-center mb-2">
        <img
          src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png"
          alt="IPL Logo"
          className="h-12 md:h-16"
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-white">{title}</h1>
      <p className="text-sm md:text-base text-slate-300 mt-2">
        Statistical analysis to predict match outcomes based on historical data
      </p>
      <div className="flex items-center justify-center mt-4">
        <div className="h-1 w-24 bg-gradient-to-r from-ipl-accent to-ipl-purple"></div>
      </div>
    </header>
  );
};

export default PredictorHeader;
