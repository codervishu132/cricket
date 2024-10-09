// src/app/layout.js
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path to your Navbar component
import './globals.css'; // Global styles

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* This will ensure the Navbar is on every page */}
        {children} {/* This will render the specific page content */}
      </body>
    </html>
  );
};

export default RootLayout;
