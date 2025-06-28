import Link from 'next/link'
import React from 'react'

const PlayerList = () => {
  const players = ['Ishaan', 'Shivek', 'Subodh'];

  return (
    <div>
      <h2>List of all Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player}>
            <Link href={`/players/${player}`}>{player}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;