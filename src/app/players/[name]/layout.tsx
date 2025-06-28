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
        <div className="flex justify-center gap-8 text-lg">
            <Link href="/players">Back to PLayers</Link>
        </div>
    </>
  );
}
