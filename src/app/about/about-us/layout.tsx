// src/app/about/about-us/layout.tsx
import Footer from '@/app/about/about-us/Footer'; // or '../Footer' if alias doesn't work
import React from 'react';

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
