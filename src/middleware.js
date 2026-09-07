export { default } from 'next-auth/middleware';

/**
 * Next.js Middleware — Route Protection for Admin CMS
 *
 * Any request to /admin/* or /api/admin/* (except /admin/login)
 * is intercepted here. If the user doesn't have a valid NextAuth session,
 * they're redirected to /admin/login.
 *
 * The API routes (/api/admin/*) return 401 JSON instead of redirecting.
 */
export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
  ],
};
