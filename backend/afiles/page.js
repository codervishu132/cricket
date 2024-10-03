'use client';
import '../styles/globals.css';

import React from 'react';
import CustomCarousel from '@/components/Carousel';  // Adjust this path

export default function Home() {
  return (
    <div>
      <h1>Welcome to crekt live</h1>
      <CustomCarousel />
    </div>
  );
}