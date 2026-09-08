'use client';

import { SessionProvider } from 'next-auth/react';

/**
 * Admin layout — wraps all /admin/* pages in the NextAuth SessionProvider.
 * Individual pages handle their own auth checks.
 */
export default function AdminLayout({ children }) {
  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  );
}
