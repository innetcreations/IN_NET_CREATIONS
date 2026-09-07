'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

/**
 * AdminShell — Shared layout for all admin pages except login.
 * Provides sidebar navigation and logout button.
 * Use this as a wrapper inside each admin page (not as a Next.js layout file)
 * to keep the login page layout separate.
 */

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard', icon: '⊞' },
  { href: '/admin/hero', label: 'Hero Section', icon: '🏠' },
  { href: '/admin/services', label: 'Services', icon: '⚙' },
  { href: '/admin/projects', label: 'Projects', icon: '🗂' },
  { href: '/admin/process', label: 'Process Steps', icon: '📋' },
  { href: '/admin/about', label: 'About / Team', icon: '👥' },
  { href: '/admin/faq', label: 'FAQ', icon: '❓' },
  { href: '/admin/contact', label: 'Contact Info', icon: '📬' },
  { href: '/admin/seo', label: 'SEO Settings', icon: '🔍' },
];

export function AdminShell({ children, title }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading' || !session) {
    return (
      <div className="admin-loading">
        <div className="admin-spinner" />
      </div>
    );
  }

  return (
    <div className="admin-shell">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <span className="admin-sidebar-logo-text">INC</span>
          <span className="admin-sidebar-logo-label">Admin CMS</span>
        </div>

        <nav className="admin-nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`admin-nav-item ${pathname === item.href ? 'active' : ''}`}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-nav-item"
          >
            <span className="admin-nav-icon">🔗</span>
            <span>View Site</span>
          </a>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="admin-nav-item admin-signout-btn"
          >
            <span className="admin-nav-icon">⎋</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1 className="admin-page-title">{title}</h1>
          <span className="admin-header-user">👤 Admin</span>
        </header>
        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
}
