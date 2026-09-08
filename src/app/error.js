'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/**
 * Root Error Boundary for Next.js App Router
 * Catches client-side exceptions and displays a user-friendly recovery UI
 * instead of the default white application error screen.
 */
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log error details for diagnostics
    console.error('Unhandled client exception caught by Root Error Boundary:', error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      backgroundColor: '#0a0a0a',
      color: '#f5f5f5',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '480px',
        width: '100%',
        padding: '40px 32px',
        borderRadius: '16px',
        backgroundColor: '#141414',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          margin: '0 auto 20px',
          borderRadius: '50%',
          backgroundColor: 'rgba(239, 68, 68, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f87171',
          fontSize: '24px',
        }}>
          ⚠️
        </div>

        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '12px',
          letterSpacing: '-0.02em',
          color: '#ffffff',
        }}>
          Something went wrong
        </h1>

        <p style={{
          fontSize: '0.95rem',
          color: '#a3a3a3',
          lineHeight: 1.6,
          marginBottom: '28px',
        }}>
          A temporary issue occurred while loading this page. Please try again or return to the homepage.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <button
            onClick={() => reset()}
            style={{
              width: '100%',
              padding: '12px 20px',
              borderRadius: '8px',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
          >
            Try Again
          </button>

          <Link
            href="/"
            style={{
              display: 'inline-block',
              width: '100%',
              padding: '12px 20px',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              color: '#a3a3a3',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              boxSizing: 'border-box',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#a3a3a3';
            }}
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
