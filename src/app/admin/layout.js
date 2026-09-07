'use client';

import { SessionProvider } from 'next-auth/react';

/**
 * Admin layout — wraps all /admin/* pages in the NextAuth SessionProvider.
 * Individual pages handle their own auth checks.
 */
export default function AdminLayout({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
