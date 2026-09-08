import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

/**
 * Next.js Middleware — Route Protection for Admin CMS
 *
 * Protects /admin/* (except /admin/login) and /api/admin/*.
 * Unauthenticated users are redirected to /admin/login.
 */
export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    secret: process.env.NEXTAUTH_SECRET || 'innet-creations-admin-super-secret-key-2024-madurai',
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/admin/login',
    },
  }
);

export const config = {
  matcher: [
    '/admin/((?!login).*)',
    '/api/admin/:path*',
  ],
};
