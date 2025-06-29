// src/app/about/about-us/layout.tsx
import React from 'react';
import Link from 'next/link';

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="grid place-items-center">
        <Link href="/players" className="justify-center bg-white hover:bg-purple-700 hover:text-white font-semibold py-1 px-5 rounded-lg shadow text-center">
          Back to All Players 
        </Link>
      </div>
    </>
  );
}
