import User from '../model/userSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Match from '../model/matchSchema.js';  // Assuming you have a match schema
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Register function
export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user instance
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error while registering user' });
  }
};

// Login function
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if password matches
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    // Create a JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

    // Set the token in a cookie
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
       .json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Server error while logging in' });
  }
};

// Admin function to create a match
export const adminCreateMatch = async (req, res) => {
  const { teamA, teamB, players } = req.body;

  try {
    // Check if the user is an admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }

    // Create a new match
    const match = new Match({
      teamA,
      teamB,
      players,
      createdBy: req.user.id,  // Admin who created the match
    });

    // Save match to the database
    await match.save();

    res.status(201).json({ message: 'Match created successfully', match });
  } catch (error) {
    console.error('Error creating match:', error);
    res.status(500).json({ message: 'Server error while creating match' });
  }
};
