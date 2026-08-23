/**
 * projects.js — Central data store for all portfolio projects.
 * Each project now has an `images` array (for carousel + lightbox)
 * as well as the legacy `image` field (first image, for backward compat).
 */
export const projectsData = [
  {
    id: 'suriya-pipes',
    name: 'Sri Suriya Pipes',
    title: 'Digital Presence for a 20+ Year Manufacturer',
    description:
      'A full business website for a trusted Madurai PVC pipe manufacturer — product catalog, size charts, WhatsApp ordering, UPI payments, and a built-in chat assistant.',
    category: 'web',
    tag: 'Web (Client Project)',
    image: '/assets/projects/suriya-pipes/1.png',
    images: [
      '/assets/projects/suriya-pipes/1.png',
      '/assets/projects/suriya-pipes/2.png',
      '/assets/projects/suriya-pipes/3.png',
    ],
    altPrefix: 'Sri Suriya Pipes website screenshot',
    link: 'https://www.suriyapipe.com',
    featured: true,
    featuredSubtitle: 'Digital Presence for a 20+ Year Manufacturer',
    featuredTag: 'Featured Client Project',
    stats: [
      { label: 'Manufacturer Experience', value: '20+ Yrs' },
      { label: 'Ordering Integration', value: 'WhatsApp & UPI' },
    ],
  },
  {
    id: 'trustmenot',
    name: 'TrustMeNot',
    title: 'Find Out Who Really Knows You',
    description:
      'A social quiz platform where users build personality quizzes, share them with friends, and see who guesses correctly — with leaderboards and shareable links.',
    category: 'app',
    tag: 'App',
    image: '/assets/projects/trustmenot/1.png',
    images: [
      '/assets/projects/trustmenot/1.png',
      '/assets/projects/trustmenot/2.png',
      '/assets/projects/trustmenot/3.png',
    ],
    altPrefix: 'TrustMeNot social quiz platform screenshot',
    link: 'https://trust-analyser.vercel.app/',
  },
  {
    id: 'qr-cracker',
    name: 'QR Cracker',
    title: 'The Ultimate QR & Cipher Suite',
    description:
      'A unified toolkit for generating dynamic QR codes with scan analytics, plus a live cipher playground supporting 15+ encoding formats.',
    category: 'web',
    tag: 'Web',
    image: '/assets/projects/qr-cracker/1.png',
    images: [
      '/assets/projects/qr-cracker/1.png',
      '/assets/projects/qr-cracker/2.png',
      '/assets/projects/qr-cracker/3.png',
      '/assets/projects/qr-cracker/4.png',
    ],
    altPrefix: 'QR Cracker cipher tool screenshot',
    link: 'https://qr-cracker.vercel.app/',
  },
  {
    id: 'kartzone',
    name: 'KartZone',
    title: 'AI-Powered Multi-Vendor Marketplace',
    description:
      'A full e-commerce platform connecting multiple vendors in one AI-enhanced storefront, built for effortless discovery, cart management, and checkout.',
    category: 'web',
    tag: 'Web',
    image: '/assets/projects/kartzone/1.png',
    images: [
      '/assets/projects/kartzone/1.png',
      '/assets/projects/kartzone/2.png',
      '/assets/projects/kartzone/3.png',
      '/assets/projects/kartzone/4.png',
    ],
    altPrefix: 'KartZone multi-vendor marketplace screenshot',
    link: 'https://kartzone-two.vercel.app/',
  },
  {
    id: 'ai-chatbox',
    name: 'Interactive AI Chatbox',
    title: 'Conversational AI, Reimagined',
    description:
      'An interactive AI-powered chat interface built for natural, real-time conversations.',
    category: 'app',
    tag: 'App',
    image: '/assets/projects/ai-chatbox/1.png',
    images: [
      '/assets/projects/ai-chatbox/1.png',
      '/assets/projects/ai-chatbox/2.png',
      '/assets/projects/ai-chatbox/3.png',
    ],
    altPrefix: 'Interactive AI Chatbox interface screenshot',
    link: 'https://interative-ai-chatbox.vercel.app/',
  },
  {
    id: 'rahonam-mdds',
    name: 'RAHONAM Multi-Disease Diagnostic Portal',
    title: 'AI Health Screening, Made Accessible',
    description:
      'A machine-learning-powered diagnostic system screening for heart disease, diabetes, brain tumors, kidney disease, and liver disease — free, private, built with Flask, scikit-learn, and TensorFlow.',
    category: 'app',
    tag: 'App',
    image: '/assets/projects/rahonam-mdds/1.png',
    images: [
      '/assets/projects/rahonam-mdds/1.png',
      '/assets/projects/rahonam-mdds/2.png',
      '/assets/projects/rahonam-mdds/3.png',
      '/assets/projects/rahonam-mdds/4.png',
    ],
    altPrefix: 'RAHONAM multi-disease diagnostic portal screenshot',
    link: 'https://mdds-new-rnrp.vercel.app/',
  },
  {
    id: 'crack-code',
    name: 'Crack Code',
    title: 'Encode Your Secrets. Decode the Unknown.',
    description:
      'A cyber-intelligence platform for secret communication — 15+ ciphers, AI-powered cipher detection, live camera scanner, and custom cipher builder.',
    category: 'web',
    tag: 'Web',
    image: '/assets/projects/crack-code/1.png',
    images: [
      '/assets/projects/crack-code/1.png',
      '/assets/projects/crack-code/2.png',
      '/assets/projects/crack-code/3.png',
    ],
    altPrefix: 'Crack Code cipher encoding platform screenshot',
    link: 'https://crack-code-nn1t.vercel.app/',
  },
  {
    id: 'manohar-portfolio',
    name: "Manohar's Portfolio",
    title: 'An Immersive 3D Developer Portfolio',
    description:
      'A personal portfolio built with 3D interactive elements to showcase projects, skills, and achievements.',
    category: 'branding',
    tag: 'Branding',
    image: '/assets/projects/manohar-portfolio/1.png',
    images: [
      '/assets/projects/manohar-portfolio/1.png',
      '/assets/projects/manohar-portfolio/2.png',
      '/assets/projects/manohar-portfolio/3.png',
      '/assets/projects/manohar-portfolio/4.png',
    ],
    altPrefix: "Manohar's 3D developer portfolio screenshot",
    link: 'https://manohar-portfolio-gray.vercel.app/',
  },
];

export const featuredProject = projectsData.find((p) => p.featured);
