// import mongoose from 'mongoose';

// const playerSchema = new mongoose.Schema({
//     name:stringifyCookie,
//     runs:Number,
//     wickets:Number,
// });

// const  matchSchema = new mongoose.Schema({
//     team1:{ name:String, players: [playerSchema]},
//     team2:{ name:String, players: [playerSchema]},
//     status:{type:String,enum: ['upcoming','ongoing', 'finished'], default: 'upcoming'},
//     date:{ type:Date, required:true},
// });

// export default mongoose.model('Match',matchSchema);

import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  teamA: {
    type: String,
    required: true,
  },
  teamB: {
    type: String,
    required: true,
  },
//   matchDate: {
//     type: Date,
//     required: true,
//   },
//   venue: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['upcoming', 'ongoing', 'completed'],
//     default: 'upcoming',
//   },
createdBy: {
    type: mongoose.Schema.Types.ObjectId,
     ref: 'User',  // Referencing the Score model
   },
  winner: {
    type: String,
  },
});

const Match = mongoose.model('Match', matchSchema);

export default Match;
