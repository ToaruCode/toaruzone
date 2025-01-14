'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="p-4 text-center text-gray-600">
      © {year || 'Loading...'} ToaruZone. All rights reserved.
    </footer>
  );
}