import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Navbar from '../components/Navbar';
const socket = io('http://localhost:4000'); // Replace with your backend URL

export default function LiveScoreboard() {
  const [score, setScore] = useState(null);

  useEffect(() => {
    socket.on('scoreUpdate', (data) => {
      setScore(data);
    });

    return () => {
      socket.off('scoreUpdate');
    };
  }, []);

  return (
    <div>
      
      <h2>Live Scoreboard</h2>
      {score ? (
        <div>
          <p>Team A: {score.teamA}</p>
          <p>Team B: {score.teamB}</p>
        </div>
      ) : (
        <p>No score updates yet.</p>
      )}
    </div>
  );
}
