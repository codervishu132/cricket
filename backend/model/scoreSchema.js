import mongoose from 'mongoose';

const playerPerformanceSchema = new mongoose.Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player', // Assuming there's a Player model for storing player details
    required: true,
  },
  runs: {
    type: Number,
    default: 0,
  },
  wickets: {
    type: Number,
    default: 0,
  },
  catches: {
    type: Number,
    default: 0,
  },
  // You can add other statistics like balls faced, overs bowled, etc.
});

const scoreSchema = new mongoose.Schema({
  match: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Match', // Refers to the Match model
    required: true,
  },
  teamA: {
    runs: {
      type: Number,
      default: 0,
    },
    wickets: {
      type: Number,
      default: 0,
    },
    overs: {
      type: Number,
      default: 0,
    },
  },
  teamB: {
    runs: {
      type: Number,
      default: 0,
    },
    wickets: {
      type: Number,
      default: 0,
    },
    overs: {
      type: Number,
      default: 0,
    },
  },
  playerPerformance: [playerPerformanceSchema], // Array of player performance for this match
});

const Score = mongoose.model('Score', scoreSchema);

export default Score;
