import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const SITE_URL = 'https://in-net-creations.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'IN NET CREATIONS — Premium Digital Studio | Web, App, SEO & Creative Services',
    template: '%s | IN NET CREATIONS',
  },
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
    'digital studio Madurai',
  ],
  authors: [{ name: 'IN NET CREATIONS', url: SITE_URL }],
  creator: 'IN NET CREATIONS',
  publisher: 'IN NET CREATIONS',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'IN NET CREATIONS — Premium Digital Studio',
    description:
      'Full-service digital studio specializing in web development, app development, SEO, video editing, photo editing, graphic design, social media management, and brand strategy.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IN NET CREATIONS',
    url: SITE_URL,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IN NET CREATIONS — Premium Digital Studio, Madurai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IN NET CREATIONS — Premium Digital Studio',
    description:
      'Full-service digital studio in Madurai — web, app, SEO, video, photo, design, social & strategy.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/assets/T_logo.png',
    shortcut: '/assets/T_logo.png',
    apple: '/assets/T_logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these once you have verification codes
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-code',
  },
};

// JSON-LD Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IN NET CREATIONS',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/T_logo.png`,
  description:
    'Full-service digital studio in Madurai, Tamil Nadu offering website development, app development, SEO, video editing, photo editing, graphic design, social media management, and brand strategy.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'MIG 2/2, TNHB Thoppur',
    addressLocality: 'Madurai',
    addressRegion: 'Tamil Nadu',
    postalCode: '625008',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-95852-66671',
      contactType: 'customer service',
      availableLanguage: ['English', 'Tamil'],
    },
  ],
  sameAs: [
    'https://www.instagram.com/in_net_creations_?stkn=cWxlc3lkbWlpcm9j',
    'https://www.linkedin.com/in/manohar-sudhakar-916a69353/',
  ],
};

// JSON-LD LocalBusiness schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'IN NET CREATIONS',
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: '+919585266671',
  email: 'hello@innetcreations.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'MIG 2/2, TNHB Thoppur',
    addressLocality: 'Madurai',
    addressRegion: 'Tamil Nadu',
    postalCode: '625008',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.9252,
    longitude: 78.1198,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Bank Transfer, UPI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111111" />
        <link rel="icon" href="/assets/T_logo.png" />

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        {/* Vercel Analytics — tracks page views automatically */}
        <Analytics />
      </body>
    </html>
  );
}
