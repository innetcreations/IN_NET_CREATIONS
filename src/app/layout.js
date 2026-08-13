import './globals.css';

export const metadata = {
  title: 'IN NET CREATIONS — Premium Digital Studio | Web, App, SEO & Creative Services',
  description:
    'IN NET CREATIONS is a full-service digital studio in Madurai, Tamil Nadu offering website development, app development, SEO, video editing, photo editing, graphic design, social media management, and brand strategy. Built to grow your business.',
  keywords: [
    'web development Madurai',
    'app development Tamil Nadu',
    'SEO services India',
    'social media management',
    'graphic design studio',
    'video editing',
    'brand strategy',
    'IN NET CREATIONS',
  ],
  authors: [{ name: 'IN NET CREATIONS' }],
  openGraph: {
    title: 'IN NET CREATIONS — Premium Digital Studio',
    description:
      'Full-service digital studio specializing in web development, app development, SEO, video editing, photo editing, graphic design, social media management, and brand strategy.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IN NET CREATIONS',
    // TODO: Add real OG image URL once available
    // images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630, alt: 'IN NET CREATIONS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IN NET CREATIONS — Premium Digital Studio',
    description:
      'Full-service digital studio in Madurai — web, app, SEO, video, photo, design, social & strategy.',
  },
  icons: {
    icon: '/assets/T_logo.png',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111111" />
        <link rel="icon" href="/assets/T_logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
