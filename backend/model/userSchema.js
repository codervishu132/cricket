// models/userSchema.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    default: 'user',
  },
  total_matches:{
    type:Number,
    default:0,
  },
  total_runs:{
    type:Number,
    default:0,
  },
  total_ball_faced:{
    type:Number,
    default:0,
  },
  total_wickets:{
    type:Number,
    default:0,
  },
  player_type:{
    type:String,
  
  },


  // ... other fields ...

});

const User = mongoose.model('User', userSchema);

export default User;
