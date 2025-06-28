import React from 'react';

const PlayerPage = async ({ params }: { params: { name: string } }) => {
  const res = await fetch('http://localhost:3000/api/players', { cache: 'no-store' });
  const players = await res.json();

  const player = players.find(
    (p: any) => p.name.toLowerCase() === params.name.toLowerCase()
  );

  if (!player) return <div className="text-center mt-10 text-red-500">Player not found</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center gap-4">
        <img
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${player.name}`}
          alt={`${player.name}'s Avatar`}
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-3xl font-bold text-blue-700">{player.name}'s Performance</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 text-lg">
        <div className="bg-green-100 p-4 rounded shadow">
          <strong>Overs Bowled:</strong> {player.overs}
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <strong>Wickets:</strong> {player.wickets}
        </div>
        <div className="bg-red-100 p-4 rounded shadow">
          <strong>Runs Given:</strong> {player.runs}
        </div>
        <div className="bg-purple-100 p-4 rounded shadow">
          <strong>Extras:</strong> {player.extras}
        </div>
        <div className="bg-blue-100 p-4 rounded shadow col-span-2 text-center">
          <strong>Runs Scored:</strong> {player.scored}
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;


/* 
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
*/