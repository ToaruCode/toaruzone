'use client';

import { PlayerBar, Lyrics } from "@/components/Player";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.body.style.background = 'black';
    document.body.style.color = '#666';
    document.body.style.textAlign = 'center';

    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.textAlign = '';
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <PlayerBar />
      <Lyrics />
    </div>
  );
}