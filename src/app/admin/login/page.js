'use client';

import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (session) router.replace('/admin');
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        password,
        redirect: false,
      });

      setLoading(false);

      if (result?.error) {
        setError('Incorrect password. Please try again.');
        setPassword('');
      } else {
        router.replace('/admin');
      }
    } catch (err) {
      setLoading(false);
      setError('Unable to sign in. Please check your connection and try again.');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <span className="admin-login-logo-text">INC</span>
          <span className="admin-login-logo-label">Admin CMS</span>
        </div>

        <h1 className="admin-login-heading">Sign In</h1>
        <p className="admin-login-sub">Enter your admin password to access the dashboard.</p>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div>
            <label htmlFor="admin-password" className="admin-label">Password</label>
            <input
              id="admin-password"
              type="password"
              className="admin-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="admin-login-error" role="alert">{error}</div>
          )}

          <button
            type="submit"
            className="admin-btn-primary"
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign In →'}
          </button>
        </form>

        <p className="admin-login-footer">
          <Link href="/" className="admin-login-back">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}
