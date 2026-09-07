/**
 * sitemap.js — Dynamic sitemap generator.
 * Returns a valid XML sitemap at /sitemap.xml
 * All canonical URLs use the production base URL.
 */

const BASE_URL = 'https://in-net-creations.vercel.app';

export default function sitemap() {
  const now = new Date().toISOString();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/book-a-call`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
