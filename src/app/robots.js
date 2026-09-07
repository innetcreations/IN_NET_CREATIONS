/**
 * robots.js — Dynamic robots.txt generator.
 * Returns a valid robots.txt at /robots.txt
 */

const BASE_URL = 'https://in-net-creations.vercel.app';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block admin area from being indexed
        disallow: ['/admin', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
