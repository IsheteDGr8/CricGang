import React from 'react';

const PlayerPage = async ({ params }: { params: { name: string } }) => {
  const res = await fetch('http://localhost:3000/api/players', {
    cache: 'no-store', // Optional: ensures fresh data on each request (SSR)
  });
  const players = await res.json();

  // Match player by name (case-insensitive)
  const player = players.find(
    (p: any) => p.name.toLowerCase() === params.name.toLowerCase()
  );

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{player.name}'s Stats</h2>
      <ul>
        <li>Overs bowled: {player.overs}</li>
        <li>Wickets: {player.wickets}</li>
        <li>Runs given: {player.runs}</li>
        <li>Extras: {player.extras}</li>
        <li>Runs scored: {player.scored}</li>
      </ul>
    </div>
  );
};

export default PlayerPage;
