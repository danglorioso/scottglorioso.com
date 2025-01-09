'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-400 text-center p-4 w-full">
      <p>
        Website created by{" "}
        <a
          href="https://danglorioso.com"
          target="_blank" // Open in new tab
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-700"
        >
          Dan Glorioso
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer
