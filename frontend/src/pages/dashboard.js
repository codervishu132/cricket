import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
export default function Dashboard() {
  const [matchStats, setMatchStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/matches/stats');
        setMatchStats(response.data);
      } catch (error) {
        console.error('Error fetching match stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      
      <h2>Match Statistics</h2>
      {matchStats ? (
        <div>
          {/* Render match stats */}
          <p>Team A: {matchStats.teamA}</p>
          <p>Team B: {matchStats.teamB}</p>
          {/* Other stats */}
        </div>
      ) : (
        <p>Loading stats...</p>
      )}
    </div>
  );
}
