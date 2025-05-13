
import { Team, Player, Venue, Match, getRecentMatchesByTeamId, getHeadToHeadMatches, getVenueMatchesByTeamId } from "../data/teamData";

// Weights for different factors in the prediction
const WEIGHTS = {
  OVERALL_TEAM_STRENGTH: 0.25,
  HEAD_TO_HEAD: 0.20,
  RECENT_FORM: 0.25,
  VENUE_PERFORMANCE: 0.18,
  KEY_PLAYERS_FORM: 0.12,
};

// Calculate team strength based on points table and net run rate
const calculateTeamStrength = (team: Team): number => {
  const winPercentage = team.matchesWon / team.matchesPlayed;
  const normalizedNRR = (team.netRunRate + 2) / 4; // Normalize NRR to 0-1 range (assuming NRR ranges from -2 to +2)
  
  return (winPercentage * 0.7) + (normalizedNRR * 0.3);
};

// Calculate head-to-head advantage
const calculateHeadToHead = (team1Id: string, team2Id: string): number => {
  const matches = getHeadToHeadMatches(team1Id, team2Id);
  if (matches.length === 0) return 0.5; // Neutral if no matches
  
  const team1Wins = matches.filter(match => match.result.winnerId === team1Id).length;
  return team1Wins / matches.length;
};

// Calculate recent form (last 5 matches)
const calculateRecentForm = (teamId: string): number => {
  const matches = getRecentMatchesByTeamId(teamId);
  if (matches.length === 0) return 0.5; // Neutral if no matches
  
  const recentWins = matches.filter(match => match.result.winnerId === teamId).length;
  
  // Give more weight to more recent matches
  let weightedScore = 0;
  let totalWeight = 0;
  
  matches.forEach((match, index) => {
    const weight = 5 - index; // 5 for most recent, 1 for oldest
    totalWeight += weight;
    if (match.result.winnerId === teamId) {
      weightedScore += weight;
    }
  });
  
  return weightedScore / totalWeight;
};

// Calculate venue performance
const calculateVenuePerformance = (teamId: string, venueId: string): number => {
  const matches = getVenueMatchesByTeamId(venueId, teamId);
  if (matches.length === 0) return 0.5; // Neutral if no matches at venue
  
  const wins = matches.filter(match => match.result.winnerId === teamId).length;
  return wins / matches.length;
};

// Calculate key players form contribution
const calculateKeyPlayersContribution = (team1KeyPlayers: Player[], team2KeyPlayers: Player[]): number => {
  // Calculate batting impact
  const team1BattingImpact = team1KeyPlayers
    .filter(p => p.role === "Batsman" || p.role === "All-rounder" || p.role === "Wicket-keeper")
    .reduce((sum, player) => {
      const average = player.battingAverage || 0;
      const strikeRate = player.strikeRate || 0;
      return sum + (average * strikeRate / 100);
    }, 0);
  
  const team2BattingImpact = team2KeyPlayers
    .filter(p => p.role === "Batsman" || p.role === "All-rounder" || p.role === "Wicket-keeper")
    .reduce((sum, player) => {
      const average = player.battingAverage || 0;
      const strikeRate = player.strikeRate || 0;
      return sum + (average * strikeRate / 100);
    }, 0);
  
  // Calculate bowling impact
  const team1BowlingImpact = team1KeyPlayers
    .filter(p => p.role === "Bowler" || p.role === "All-rounder")
    .reduce((sum, player) => {
      const economy = player.economy || 12;
      const average = player.bowlingAverage || 40;
      // Lower economy and average are better for bowlers
      return sum + (200 / (economy * average));
    }, 0);
  
  const team2BowlingImpact = team2KeyPlayers
    .filter(p => p.role === "Bowler" || p.role === "All-rounder")
    .reduce((sum, player) => {
      const economy = player.economy || 12;
      const average = player.bowlingAverage || 40;
      return sum + (200 / (economy * average));
    }, 0);
    
  const team1Impact = team1BattingImpact + team1BowlingImpact;
  const team2Impact = team2BattingImpact + team2BowlingImpact;
  
  // Convert to probability
  return team1Impact / (team1Impact + team2Impact);
};

// Calculate final prediction
export const calculateWinProbability = (
  team1: Team,
  team2: Team,
  venue: Venue,
  team1KeyPlayers: Player[],
  team2KeyPlayers: Player[]
): { team1Probability: number, team2Probability: number, factors: any } => {
  // Calculate individual factors
  const team1Strength = calculateTeamStrength(team1);
  const team2Strength = calculateTeamStrength(team2);
  const strengthFactor = team1Strength / (team1Strength + team2Strength);
  
  const headToHeadFactor = calculateHeadToHead(team1.id, team2.id);
  
  const team1RecentForm = calculateRecentForm(team1.id);
  const team2RecentForm = calculateRecentForm(team2.id);
  const recentFormFactor = team1RecentForm / (team1RecentForm + team2RecentForm);
  
  const team1VenuePerformance = calculateVenuePerformance(team1.id, venue.id);
  const team2VenuePerformance = calculateVenuePerformance(team2.id, venue.id);
  const venuePerformanceFactor = team1VenuePerformance / (team1VenuePerformance + team2VenuePerformance) || 0.5;
  
  const keyPlayersFactor = calculateKeyPlayersContribution(team1KeyPlayers, team2KeyPlayers);
  
  // Calculate weighted probability
  const team1Probability = (
    (WEIGHTS.OVERALL_TEAM_STRENGTH * strengthFactor) +
    (WEIGHTS.HEAD_TO_HEAD * headToHeadFactor) +
    (WEIGHTS.RECENT_FORM * recentFormFactor) +
    (WEIGHTS.VENUE_PERFORMANCE * venuePerformanceFactor) +
    (WEIGHTS.KEY_PLAYERS_FORM * keyPlayersFactor)
  );
  
  // Add randomness factor to simulate real-life uncertainty
  const randomFactor = (Math.random() * 0.06) - 0.03; // Random adjustment between -3% and +3%
  const adjustedTeam1Probability = Math.min(Math.max(team1Probability + randomFactor, 0.05), 0.95);
  
  return {
    team1Probability: parseFloat(adjustedTeam1Probability.toFixed(4)),
    team2Probability: parseFloat((1 - adjustedTeam1Probability).toFixed(4)),
    factors: {
      teamStrength: {
        weight: WEIGHTS.OVERALL_TEAM_STRENGTH,
        team1: parseFloat(team1Strength.toFixed(2)),
        team2: parseFloat(team2Strength.toFixed(2)),
        impact: parseFloat(strengthFactor.toFixed(2))
      },
      headToHead: {
        weight: WEIGHTS.HEAD_TO_HEAD,
        impact: parseFloat(headToHeadFactor.toFixed(2))
      },
      recentForm: {
        weight: WEIGHTS.RECENT_FORM,
        team1: parseFloat(team1RecentForm.toFixed(2)),
        team2: parseFloat(team2RecentForm.toFixed(2)),
        impact: parseFloat(recentFormFactor.toFixed(2))
      },
      venuePerformance: {
        weight: WEIGHTS.VENUE_PERFORMANCE,
        team1: parseFloat(team1VenuePerformance.toFixed(2)),
        team2: parseFloat(team2VenuePerformance.toFixed(2)),
        impact: parseFloat(venuePerformanceFactor.toFixed(2))
      },
      keyPlayers: {
        weight: WEIGHTS.KEY_PLAYERS_FORM,
        impact: parseFloat(keyPlayersFactor.toFixed(2))
      }
    }
  };
};
