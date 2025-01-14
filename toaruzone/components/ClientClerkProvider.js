'use client';

import { ClerkProvider } from '@clerk/nextjs';

export default function ClientClerkProvider({ children }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}