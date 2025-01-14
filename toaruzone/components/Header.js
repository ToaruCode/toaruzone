'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">ToaruZone</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}