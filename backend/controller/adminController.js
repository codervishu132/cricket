import Match from '../model/matchSchema.js';  // Adjust the path as per your folder structure

import Score from '../model/scoreSchema.js';

// Controller to allow admin to create a new match
export const adminCreateMatch = async (req, res) => {
    const { teamA, teamB } = req.body;
    console.log('User:', req.user);
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access Denied: Admins only' });
    }
    try {
      const match = new Match({
        teamA,
        teamB,
        createdBy: req.user.id, // The admin who created the match
      });
  
      await match.save();
      res.status(201).json({ message: 'Match created successfully', match });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating match' });
    }
  };
  

  


// Controller to allow admin to update live match scores
export const updateScore = async (req, res) => {
  const { matchId, teamA, teamB, playerPerformance } = req.body;

  try {
    let score = await Score.findOne({ match: matchId });

    // If no score exists, create a new score entry
    if (!score) {
      score = new Score({
        match: matchId,
        teamA,
        teamB,
        playerPerformance,
      });
      await score.save();
      res.status(201).json({ message: 'Score created successfully', score });
    } else {
      // If score exists, update the entry
      score.teamA = teamA;
      score.teamB = teamB;
      score.playerPerformance = playerPerformance;

      await score.save();
      res.status(200).json({ message: 'Score updated successfully', score });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating score' });
  }
};

// Controller to allow admin to end a match
export const endMatch = async (req, res) => {
  const { matchId } = req.params;

  try {
    const match = await Match.findById(matchId);

    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }

    match.endTime = new Date(); // Set the end time of the match
    await match.save();

    res.status(200).json({ message: 'Match ended successfully', match });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error ending the match' });
  }
};

// Controller to get all matches (for admin dashboard)
export const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find().populate('createdBy', 'name');
    res.status(200).json(matches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching matches' });
  }
};
