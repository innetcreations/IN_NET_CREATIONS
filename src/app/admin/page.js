'use client';

import Link from 'next/link';
import { AdminShell } from '@/components/admin/AdminShell';


const SECTIONS = [
  { href: '/admin/hero',     label: 'Hero Section',  icon: '🏠', desc: 'Badge, heading, subheading, CTAs' },
  { href: '/admin/services', label: 'Services',       icon: '⚙',  desc: 'Service cards, prices, features' },
  { href: '/admin/projects', label: 'Projects',       icon: '🗂',  desc: 'Portfolio project cards' },
  { href: '/admin/process',  label: 'Process Steps',  icon: '📋', desc: '4-step workflow section' },
  { href: '/admin/about',    label: 'About / Team',   icon: '👥', desc: 'Studio story, team members, stats' },
  { href: '/admin/faq',      label: 'FAQ',            icon: '❓', desc: 'Frequently asked questions' },
  { href: '/admin/contact',  label: 'Contact Info',   icon: '📬', desc: 'Phone, email, address, socials' },
  { href: '/admin/seo',      label: 'SEO Settings',   icon: '🔍', desc: 'Meta titles, OG image, site URL' },
];

export default function AdminDashboard() {
  return (
    <AdminShell title="Dashboard">
      <div className="admin-dashboard-intro">
        <p>Welcome to the <strong>IN NET CREATIONS CMS</strong>. Select a section below to edit your website content. Changes are saved instantly to the JSON content store and take effect on the next page load.</p>
      </div>

      <div className="admin-section-grid">
        {SECTIONS.map((section) => (
          <Link key={section.href} href={section.href} className="admin-section-card">
            <span className="admin-section-card-icon">{section.icon}</span>
            <div>
              <div className="admin-section-card-title">{section.label}</div>
              <div className="admin-section-card-desc">{section.desc}</div>
            </div>
            <span className="admin-section-card-arrow">→</span>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
