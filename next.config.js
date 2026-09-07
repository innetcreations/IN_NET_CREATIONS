/** @type {import('next').NextConfig} */
const nextConfig = {
  // Switched from static export ('export') to server mode so that API routes
  // work for the Admin CMS (Part 4) and EmailJS server validation.
  // Deploy to Vercel (recommended) or Netlify with SSR support.
  // NOTE: Remove this comment and the 'output: export' line below if you ever
  //       need to revert to pure static hosting.
  images: {
    // Allow local upload images from /uploads/ and remote project images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Keep unoptimized for self-hosted images in public/
    unoptimized: false,
  },
  devIndicators: false,
};

module.exports = nextConfig;
