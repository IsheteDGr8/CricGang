'use client';

import { motion } from 'framer-motion';
import React from 'react';

const AnimatedPlayerStats = ({ player }: { player: any }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center gap-4">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${player.name}`}
          alt={`${player.name}'s Avatar`}
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-3xl font-bold text-yellow-200">{player.name}'s Performance</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 text-lg">
        {Object.entries({
          'Overs Bowled': player.overs,
          'Wickets': player.wickets,
          'Runs Given': player.runs,
          'Extras': player.extras,
          'Runs Scored': player.scored,
        }).map(([label, value], idx) => (
          <motion.div
            key={label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-yellow-100 p-4 rounded shadow border-l-9 border-purple-900"
          >
            <strong>{label}:</strong> {value}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedPlayerStats;
