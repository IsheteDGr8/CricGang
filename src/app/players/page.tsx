import Link from 'next/link';
import React from 'react';

const players = ['Ishaan', 'Shivek', 'Subodh'];

const PlayerList = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-200">Meet the Players</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((player) => (
          <Link
            key={player}
            href={`/players/${player}`}
            className="bg-yellow-100 border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg text-center"
          >
            <img
              src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${player}`} // placeholder avatar
              alt={`${player} Avatar`}
              className="w-20 h-20 mx-auto rounded-full mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-800">{player}</h3>
          </Link>
        ))}
        <Link href="/" className="bg-white hover:bg-purple-700 hover:text-white font-semibold py-2 px-6 rounded-lg shadow col-span-full text-center"        >
          Back to Home 
        </Link>
      </div>
    </div>
  );
};

export default PlayerList;


/*
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
*/