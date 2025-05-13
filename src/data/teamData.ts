
export interface Team {
  id: string;
  name: string;
  abbreviation: string;
  primaryColor: string;
  secondaryColor: string;
  logo: string;
  currentRanking: number;
  matchesPlayed: number;
  matchesWon: number;
  matchesLost: number;
  netRunRate: number;
  points: number;
  homeVenue: string;
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicket-keeper";
  battingAverage?: number;
  strikeRate?: number;
  bowlingAverage?: number;
  economy?: number;
  wickets?: number;
  runs?: number;
  matches: number;
  isKeyCap?: boolean;
  description: string;
  image: string;
}

export interface Match {
  id: string;
  team1Id: string;
  team2Id: string;
  venue: string;
  date: string;
  result: {
    winnerId: string;
    margin: string;
  };
}

export interface Venue {
  id: string;
  name: string;
  city: string;
  avgFirstInningsScore: number;
  avgSecondInningsScore: number;
  highestChaseAchieved: number;
}

export const teams: Team[] = [
  {
    id: "csk",
    name: "Chennai Super Kings",
    abbreviation: "CSK",
    primaryColor: "#FFFF3C",
    secondaryColor: "#0081CF",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    currentRanking: 4,
    matchesPlayed: 7,
    matchesWon: 4,
    matchesLost: 3,
    netRunRate: 0.529,
    points: 8,
    homeVenue: "chepauk"
  },
  {
    id: "mi",
    name: "Mumbai Indians",
    abbreviation: "MI",
    primaryColor: "#004BA0",
    secondaryColor: "#D1AB3E",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    currentRanking: 9,
    matchesPlayed: 7,
    matchesWon: 2,
    matchesLost: 5,
    netRunRate: -0.133,
    points: 4,
    homeVenue: "wankhede"
  },
  {
    id: "rcb",
    name: "Royal Challengers Bangalore",
    abbreviation: "RCB",
    primaryColor: "#EC1C24",
    secondaryColor: "#000000",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    currentRanking: 7,
    matchesPlayed: 7,
    matchesWon: 3,
    matchesLost: 4,
    netRunRate: 0.220,
    points: 6,
    homeVenue: "chinnaswamy"
  },
  {
    id: "gt",
    name: "Gujarat Titans",
    abbreviation: "GT",
    primaryColor: "#1B2133",
    secondaryColor: "#99CAFF",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    currentRanking: 5,
    matchesPlayed: 7,
    matchesWon: 4,
    matchesLost: 3,
    netRunRate: 0.383,
    points: 8,
    homeVenue: "narendra_modi_stadium"
  },
  {
    id: "lsg",
    name: "Lucknow Super Giants",
    abbreviation: "LSG",
    primaryColor: "#A2DDFD",
    secondaryColor: "#0A5684",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    currentRanking: 3,
    matchesPlayed: 6,
    matchesWon: 4,
    matchesLost: 2,
    netRunRate: 0.775,
    points: 8,
    homeVenue: "ekana_cricket_stadium"
  },
  {
    id: "srh",
    name: "Sunrisers Hyderabad",
    abbreviation: "SRH",
    primaryColor: "#F26522",
    secondaryColor: "#000000",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    currentRanking: 6,
    matchesPlayed: 6,
    matchesWon: 3,
    matchesLost: 3,
    netRunRate: 0.409,
    points: 6,
    homeVenue: "rajiv_gandhi_international_stadium"
  },
  {
    id: "kkr",
    name: "Kolkata Knight Riders",
    abbreviation: "KKR",
    primaryColor: "#3A225D",
    secondaryColor: "#B3A123",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    currentRanking: 1,
    matchesPlayed: 6,
    matchesWon: 5,
    matchesLost: 1,
    netRunRate: 1.345,
    points: 10,
    homeVenue: "eden_gardens"
  },
  {
    id: "rr",
    name: "Rajasthan Royals",
    abbreviation: "RR",
    primaryColor: "#EA1A85",
    secondaryColor: "#254AA5",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    currentRanking: 2,
    matchesPlayed: 6,
    matchesWon: 5,
    matchesLost: 1,
    netRunRate: 0.767,
    points: 10,
    homeVenue: "sawai_mansingh_stadium"
  },
  {
    id: "dc",
    name: "Delhi Capitals",
    abbreviation: "DC",
    primaryColor: "#0078BC",
    secondaryColor: "#EF1B23",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    currentRanking: 8,
    matchesPlayed: 8,
    matchesWon: 3,
    matchesLost: 5,
    netRunRate: -0.386,
    points: 6,
    homeVenue: "arun_jaitley_stadium"
  },
  {
    id: "pbks",
    name: "Punjab Kings",
    abbreviation: "PBKS",
    primaryColor: "#ED1B24",
    secondaryColor: "#A2A5A6",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    currentRanking: 10,
    matchesPlayed: 7,
    matchesWon: 2,
    matchesLost: 5,
    netRunRate: -0.472,
    points: 4,
    homeVenue: "inderjit_singh_bindra_stadium"
  }
];

export const venues: Venue[] = [
  {
    id: "chepauk",
    name: "MA Chidambaram Stadium",
    city: "Chennai",
    avgFirstInningsScore: 175,
    avgSecondInningsScore: 160, 
    highestChaseAchieved: 208
  },
  {
    id: "wankhede",
    name: "Wankhede Stadium",
    city: "Mumbai",
    avgFirstInningsScore: 182,
    avgSecondInningsScore: 170,
    highestChaseAchieved: 214
  },
  {
    id: "chinnaswamy",
    name: "M. Chinnaswamy Stadium",
    city: "Bangalore",
    avgFirstInningsScore: 190,
    avgSecondInningsScore: 176,
    highestChaseAchieved: 226
  },
  {
    id: "eden_gardens",
    name: "Eden Gardens",
    city: "Kolkata",
    avgFirstInningsScore: 178,
    avgSecondInningsScore: 165,
    highestChaseAchieved: 213
  },
  {
    id: "arun_jaitley_stadium",
    name: "Arun Jaitley Stadium",
    city: "Delhi",
    avgFirstInningsScore: 180,
    avgSecondInningsScore: 168,
    highestChaseAchieved: 219
  },
  {
    id: "rajiv_gandhi_international_stadium",
    name: "Rajiv Gandhi International Stadium",
    city: "Hyderabad",
    avgFirstInningsScore: 172,
    avgSecondInningsScore: 158,
    highestChaseAchieved: 209
  },
  {
    id: "sawai_mansingh_stadium",
    name: "Sawai Mansingh Stadium",
    city: "Jaipur",
    avgFirstInningsScore: 177,
    avgSecondInningsScore: 162, 
    highestChaseAchieved: 197
  },
  {
    id: "narendra_modi_stadium",
    name: "Narendra Modi Stadium",
    city: "Ahmedabad",
    avgFirstInningsScore: 185,
    avgSecondInningsScore: 170,
    highestChaseAchieved: 207
  },
  {
    id: "ekana_cricket_stadium",
    name: "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
    city: "Lucknow",
    avgFirstInningsScore: 168,
    avgSecondInningsScore: 156,
    highestChaseAchieved: 187
  },
  {
    id: "inderjit_singh_bindra_stadium",
    name: "Inderjit Singh Bindra Stadium",
    city: "Mohali",
    avgFirstInningsScore: 183,
    avgSecondInningsScore: 171,
    highestChaseAchieved: 211
  }
];

export const players: Player[] = [
  // CSK
  {
    id: "p1",
    name: "MS Dhoni",
    teamId: "csk",
    role: "Wicket-keeper",
    battingAverage: 38.2,
    strikeRate: 148.7,
    runs: 123,
    matches: 7,
    isKeyCap: true,
    description: "Legendary finisher and captain, known for his lightning-fast stumping and cool demeanor in pressure situations.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png"
  },
  {
    id: "p2",
    name: "Ruturaj Gaikwad",
    teamId: "csk",
    role: "Batsman",
    battingAverage: 42.5,
    strikeRate: 139.8,
    runs: 349,
    matches: 7,
    isKeyCap: true,
    description: "Elegant opener with excellent timing and ability to play anchor innings.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/102.png"
  },
  {
    id: "p3",
    name: "Ravindra Jadeja",
    teamId: "csk",
    role: "All-rounder",
    battingAverage: 26.7,
    strikeRate: 142.3,
    bowlingAverage: 24.6,
    economy: 7.8,
    wickets: 8,
    runs: 157,
    matches: 7,
    isKeyCap: true,
    description: "Elite all-rounder known for his accurate bowling, explosive batting, and outstanding fielding.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png"
  },
  
  // MI
  {
    id: "p4",
    name: "Rohit Sharma",
    teamId: "mi",
    role: "Batsman",
    battingAverage: 29.4,
    strikeRate: 143.8,
    runs: 261,
    matches: 7,
    isKeyCap: true,
    description: "Explosive opener and experienced captain with ability to change the game in powerplay.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png"
  },
  {
    id: "p5",
    name: "Jasprit Bumrah",
    teamId: "mi",
    role: "Bowler",
    bowlingAverage: 21.2,
    economy: 6.4,
    wickets: 14,
    matches: 7,
    isKeyCap: true,
    description: "Elite fast bowler with unorthodox action, deadly yorkers, and ability to bowl in any phase.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1.png"
  },
  {
    id: "p6",
    name: "Suryakumar Yadav",
    teamId: "mi",
    role: "Batsman",
    battingAverage: 36.2,
    strikeRate: 175.4,
    runs: 156,
    matches: 5,
    isKeyCap: true,
    description: "360-degree player with innovative shots and ability to accelerate innings rapidly.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png"
  },
  
  // RCB
  {
    id: "p7",
    name: "Virat Kohli",
    teamId: "rcb",
    role: "Batsman",
    battingAverage: 49.2,
    strikeRate: 147.3,
    runs: 361,
    matches: 7,
    isKeyCap: true,
    description: "One of the greatest batsmen of modern era with exceptional consistency and run-chasing ability.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png"
  },
  {
    id: "p8",
    name: "Glenn Maxwell",
    teamId: "rcb",
    role: "All-rounder",
    battingAverage: 31.8,
    strikeRate: 182.6,
    bowlingAverage: 28.4,
    economy: 8.2,
    wickets: 2,
    runs: 136,
    matches: 5,
    isKeyCap: true,
    description: "X-factor player capable of explosive batting and useful off-spin bowling.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/282.png"
  },
  {
    id: "p9",
    name: "Mohammed Siraj",
    teamId: "rcb",
    role: "Bowler",
    bowlingAverage: 26.8,
    economy: 8.7,
    wickets: 9,
    matches: 7,
    isKeyCap: true,
    description: "Skillful fast bowler with ability to swing the new ball and execute yorkers at death.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/63.png"
  },
  
  // KKR
  {
    id: "p10",
    name: "Shreyas Iyer",
    teamId: "kkr",
    role: "Batsman",
    battingAverage: 35.7,
    strikeRate: 136.8,
    runs: 203,
    matches: 6,
    isKeyCap: true,
    description: "Stylish middle-order batsman and tactically astute captain.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/41.png"
  },
  {
    id: "p11",
    name: "Sunil Narine",
    teamId: "kkr",
    role: "All-rounder",
    battingAverage: 20.5,
    strikeRate: 185.2,
    bowlingAverage: 23.4,
    economy: 6.9,
    wickets: 10,
    runs: 276,
    matches: 6,
    isKeyCap: true,
    description: "Mystery spinner who has evolved into a dangerous opening batsman with big-hitting ability.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/156.png"
  },
  {
    id: "p12",
    name: "Andre Russell",
    teamId: "kkr",
    role: "All-rounder",
    battingAverage: 28.9,
    strikeRate: 179.8,
    bowlingAverage: 24.6,
    economy: 9.8,
    wickets: 5,
    runs: 118,
    matches: 6,
    isKeyCap: true,
    description: "Powerhouse finisher and effective death bowler with match-winning capabilities.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png"
  },
  
  // LSG
  {
    id: "p13",
    name: "KL Rahul",
    teamId: "lsg",
    role: "Batsman",
    battingAverage: 47.2,
    strikeRate: 134.8,
    runs: 302,
    matches: 6,
    isKeyCap: true,
    description: "Technically sound opener and captain with ability to anchor innings and accelerate when needed.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png"
  },
  {
    id: "p14",
    name: "Nicholas Pooran",
    teamId: "lsg",
    role: "Wicket-keeper",
    battingAverage: 33.6,
    strikeRate: 165.2,
    runs: 218,
    matches: 6,
    isKeyCap: true,
    description: "Hard-hitting middle-order batsman with exceptional six-hitting ability.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/136.png"
  },
  {
    id: "p15",
    name: "Ravi Bishnoi",
    teamId: "lsg",
    role: "Bowler",
    bowlingAverage: 23.8,
    economy: 7.6,
    wickets: 7,
    matches: 6,
    isKeyCap: true,
    description: "Young leg-spinner with deceptive googlies and excellent control.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/520.png"
  },

  // SRH  
  {
    id: "p16",
    name: "Pat Cummins",
    teamId: "srh",
    role: "Bowler",
    bowlingAverage: 26.4,
    economy: 8.5,
    wickets: 10,
    matches: 6,
    isKeyCap: true,
    description: "World-class fast bowler and captain with ability to take wickets in all phases.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/482.png"
  },
  {
    id: "p17",
    name: "Heinrich Klaasen",
    teamId: "srh",
    role: "Wicket-keeper",
    battingAverage: 45.2,
    strikeRate: 175.6,
    runs: 253,
    matches: 6,
    isKeyCap: true,
    description: "Explosive middle-order batsman with exceptional ability against spin.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/202.png"
  },
  {
    id: "p18",
    name: "Abhishek Sharma",
    teamId: "srh",
    role: "All-rounder",
    battingAverage: 35.8,
    strikeRate: 164.9,
    runs: 211,
    matches: 6,
    isKeyCap: true,
    description: "Young left-handed opener with aggressive intent and part-time spin bowling ability.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/212.png"
  },

  // GT
  {
    id: "p19",
    name: "Shubman Gill",
    teamId: "gt",
    role: "Batsman",
    battingAverage: 48.6,
    strikeRate: 151.2,
    runs: 318,
    matches: 7,
    isKeyCap: true,
    description: "Elegant opener with classical technique and ability to play all around the wicket.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png"
  },
  {
    id: "p20",
    name: "Rashid Khan",
    teamId: "gt",
    role: "Bowler",
    bowlingAverage: 21.8,
    economy: 7.1,
    wickets: 12,
    matches: 7,
    isKeyCap: true,
    description: "World's premier T20 spinner with exceptional control, variations, and lower-order batting ability.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/218.png"
  },
  {
    id: "p21",
    name: "Mohammed Shami",
    teamId: "gt",
    role: "Bowler",
    bowlingAverage: 23.6,
    economy: 7.9,
    wickets: 9,
    matches: 7,
    isKeyCap: true,
    description: "Skillful fast bowler with exceptional seam position and ability to swing the ball both ways.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/47.png"
  },

  // RR
  {
    id: "p22",
    name: "Sanju Samson",
    teamId: "rr",
    role: "Wicket-keeper",
    battingAverage: 42.8,
    strikeRate: 162.4,
    runs: 276,
    matches: 6,
    isKeyCap: true,
    description: "Elegant stroke-maker and captain with exceptional six-hitting ability.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/190.png"
  },
  {
    id: "p23",
    name: "Yuzvendra Chahal",
    teamId: "rr",
    role: "Bowler",
    bowlingAverage: 21.3,
    economy: 8.2,
    wickets: 10,
    matches: 6,
    isKeyCap: true,
    description: "Smart leg-spinner with excellent variations and ability to take wickets in middle overs.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/59.png"
  },
  {
    id: "p24",
    name: "Jos Buttler",
    teamId: "rr",
    role: "Batsman",
    battingAverage: 36.8,
    strikeRate: 159.5,
    runs: 225,
    matches: 6,
    isKeyCap: true,
    description: "Destructive opener with ability to play conventional and unorthodox shots with equal efficiency.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/157.png"
  },

  // DC
  {
    id: "p25",
    name: "Rishabh Pant",
    teamId: "dc",
    role: "Wicket-keeper",
    battingAverage: 41.2,
    strikeRate: 158.7,
    runs: 315,
    matches: 8,
    isKeyCap: true,
    description: "Explosive left-handed batsman and captain with unorthodox batting style.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/17.png"
  },
  {
    id: "p26",
    name: "Axar Patel",
    teamId: "dc",
    role: "All-rounder",
    battingAverage: 27.4,
    strikeRate: 142.8,
    bowlingAverage: 25.6,
    economy: 7.8,
    wickets: 8,
    runs: 132,
    matches: 8,
    isKeyCap: true,
    description: "Consistent all-rounder with economical bowling and emerging batting capabilities.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/16.png"
  },
  {
    id: "p27",
    name: "Kuldeep Yadav",
    teamId: "dc",
    role: "Bowler",
    bowlingAverage: 22.8,
    economy: 8.1,
    wickets: 11,
    matches: 8,
    isKeyCap: true,
    description: "Left-arm wrist spinner with deceptive variations and ability to turn the ball both ways.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/14.png"
  },

  // PBKS
  {
    id: "p28",
    name: "Shikhar Dhawan",
    teamId: "pbks",
    role: "Batsman",
    battingAverage: 42.5,
    strikeRate: 143.8,
    runs: 207,
    matches: 5,
    isKeyCap: true,
    description: "Experienced opener and captain with consistent performances and ability to play long innings.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/11.png"
  },
  {
    id: "p29",
    name: "Sam Curran",
    teamId: "pbks",
    role: "All-rounder",
    battingAverage: 24.6,
    strikeRate: 138.7,
    bowlingAverage: 29.8,
    economy: 9.5,
    wickets: 7,
    runs: 152,
    matches: 7,
    isKeyCap: true,
    description: "Versatile all-rounder capable of batting in any position and bowling in all phases.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/138.png"
  },
  {
    id: "p30",
    name: "Arshdeep Singh",
    teamId: "pbks",
    role: "Bowler",
    bowlingAverage: 25.4,
    economy: 8.8,
    wickets: 10,
    matches: 7,
    isKeyCap: true,
    description: "Left-arm pacer with excellent yorkers and death bowling skills.",
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/125.png"
  },
];

export const matches: Match[] = [
  // CSK Recent Matches
  {
    id: "m1",
    team1Id: "csk",
    team2Id: "mi",
    venue: "chepauk",
    date: "2024-04-14",
    result: {
      winnerId: "csk",
      margin: "20 runs"
    }
  },
  {
    id: "m2",
    team1Id: "csk",
    team2Id: "gt",
    venue: "narendra_modi_stadium",
    date: "2024-04-10",
    result: {
      winnerId: "csk",
      margin: "6 wickets"
    }
  },
  {
    id: "m3",
    team1Id: "rcb",
    team2Id: "csk",
    venue: "chinnaswamy",
    date: "2024-04-06",
    result: {
      winnerId: "rcb",
      margin: "15 runs"
    }
  },
  {
    id: "m4",
    team1Id: "csk",
    team2Id: "kkr",
    venue: "chepauk",
    date: "2024-04-02",
    result: {
      winnerId: "kkr",
      margin: "8 wickets"
    }
  },
  {
    id: "m5",
    team1Id: "dc",
    team2Id: "csk",
    venue: "arun_jaitley_stadium",
    date: "2024-03-29",
    result: {
      winnerId: "csk",
      margin: "12 runs"
    }
  },
  
  // MI Recent Matches
  {
    id: "m6",
    team1Id: "mi",
    team2Id: "pbks",
    venue: "wankhede",
    date: "2024-04-15",
    result: {
      winnerId: "pbks",
      margin: "6 wickets"
    }
  },
  {
    id: "m7",
    team1Id: "mi",
    team2Id: "csk",
    venue: "chepauk",
    date: "2024-04-14",
    result: {
      winnerId: "csk",
      margin: "20 runs"
    }
  },
  {
    id: "m8",
    team1Id: "dc",
    team2Id: "mi",
    venue: "arun_jaitley_stadium",
    date: "2024-04-09",
    result: {
      winnerId: "dc",
      margin: "7 wickets"
    }
  },
  {
    id: "m9",
    team1Id: "mi",
    team2Id: "rcb",
    venue: "wankhede",
    date: "2024-04-05",
    result: {
      winnerId: "mi",
      margin: "4 wickets"
    }
  },
  {
    id: "m10",
    team1Id: "srh",
    team2Id: "mi",
    venue: "rajiv_gandhi_international_stadium",
    date: "2024-04-01",
    result: {
      winnerId: "srh",
      margin: "32 runs"
    }
  },

  // RCB Recent Matches
  {
    id: "m11",
    team1Id: "rcb",
    team2Id: "srh",
    venue: "chinnaswamy",
    date: "2024-04-15",
    result: {
      winnerId: "srh",
      margin: "5 wickets"
    }
  },
  {
    id: "m12",
    team1Id: "rcb",
    team2Id: "pbks",
    venue: "inderjit_singh_bindra_stadium",
    date: "2024-04-11",
    result: {
      winnerId: "rcb",
      margin: "28 runs"
    }
  },
  {
    id: "m13",
    team1Id: "rcb",
    team2Id: "csk",
    venue: "chinnaswamy",
    date: "2024-04-06",
    result: {
      winnerId: "rcb",
      margin: "15 runs"
    }
  },
  {
    id: "m14",
    team1Id: "mi",
    team2Id: "rcb",
    venue: "wankhede",
    date: "2024-04-05",
    result: {
      winnerId: "mi",
      margin: "4 wickets"
    }
  },
  {
    id: "m15",
    team1Id: "lsg",
    team2Id: "rcb",
    venue: "ekana_cricket_stadium",
    date: "2024-04-02",
    result: {
      winnerId: "lsg",
      margin: "8 wickets"
    }
  }
];

export const capHolders = {
  orangeCap: {
    player: players.find(p => p.id === "p7"), // Virat Kohli
    runs: 361
  },
  purpleCap: {
    player: players.find(p => p.id === "p5"), // Jasprit Bumrah
    wickets: 14
  }
};

export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

export const getPlayersByTeamId = (teamId: string): Player[] => {
  return players.filter(player => player.teamId === teamId);
};

export const getKeyPlayersByTeamId = (teamId: string): Player[] => {
  return players.filter(player => player.teamId === teamId && player.isKeyCap);
};

export const getVenueById = (id: string): Venue | undefined => {
  return venues.find(venue => venue.id === id);
};

export const getRecentMatchesByTeamId = (teamId: string, limit: number = 5): Match[] => {
  return matches
    .filter(match => match.team1Id === teamId || match.team2Id === teamId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getHeadToHeadMatches = (team1Id: string, team2Id: string, limit: number = 5): Match[] => {
  return matches
    .filter(
      match => 
        (match.team1Id === team1Id && match.team2Id === team2Id) || 
        (match.team1Id === team2Id && match.team2Id === team1Id)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getVenueMatchesByTeamId = (venueId: string, teamId: string, limit: number = 5): Match[] => {
  return matches
    .filter(
      match => 
        match.venue === venueId && 
        (match.team1Id === teamId || match.team2Id === teamId)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
