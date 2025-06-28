import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 text-center px-4">
      <h1 className="text-4xl font-extrabold mb-4 text-green-700">🏏 Welcome to CricGang</h1>
      <p className="text-lg mb-8 max-w-xl text-gray-700">
        CricGang is the analytics hub for our UWB Cricket Club. 
        Track player stats, game performance, and more!
      </p>
      <Link
        href="/players"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow"
      >
        View Player Stats
      </Link>
    </div>
  );
};

export default HomePage;

/* Previous simpler version:
/*
import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <p className="text-2xl font-bold text-center mt-10">
          Welcome to the Home Page!
      </p>
    </div>
  )
}

export default HomePage
*/

