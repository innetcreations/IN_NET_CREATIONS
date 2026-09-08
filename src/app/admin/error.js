'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/**
 * Admin Area Error Boundary
 * Catches client-side errors in the /admin route tree and provides
 * a clean recovery screen with "Try Again" and "Back to Login".
 */
export default function AdminError({ error, reset }) {
  useEffect(() => {
    console.error('Admin area client exception:', error);
  }, [error]);

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <span className="admin-login-logo-text">INC</span>
          <span className="admin-login-logo-label">Admin CMS</span>
        </div>

        <h1 className="admin-login-heading" style={{ color: '#f87171' }}>
          Authentication Error
        </h1>
        <p className="admin-login-sub">
          A temporary error occurred while connecting to the admin service.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
          <button
            onClick={() => reset()}
            className="admin-btn-primary"
            style={{ width: '100%', cursor: 'pointer' }}
          >
            Try Again
          </button>

          <Link
            href="/admin/login"
            className="admin-btn-secondary"
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '10px 16px',
              borderRadius: '6px',
              border: '1px solid var(--admin-border, rgba(255,255,255,0.15))',
              color: 'var(--admin-text, #fff)',
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}
          >
            Go to Sign In
          </Link>
        </div>

        <p className="admin-login-footer">
          <Link href="/" className="admin-login-back">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}
