'use client';

/**
 * AdminSaveBar — Sticky bottom save bar for CMS editor pages.
 *
 * Props:
 *   onSave  — async function to call on save
 *   status  — 'idle' | 'saving' | 'saved' | 'error'
 *   error   — error message string or null
 */
export function AdminSaveBar({ onSave, status, error }) {
  return (
    <div className="admin-save-bar">
      <div className="admin-save-bar-inner">
        {status === 'saved' && (
          <span className="admin-save-status saved">✓ Changes saved</span>
        )}
        {status === 'error' && error && (
          <span className="admin-save-status error">✕ {error}</span>
        )}
        {status === 'idle' && (
          <span className="admin-save-status idle">Unsaved changes</span>
        )}
        {status === 'saving' && (
          <span className="admin-save-status saving">Saving…</span>
        )}
        {status === 'loading' && (
          <span className="admin-save-status saving">Loading…</span>
        )}
        <button
          className="admin-btn-primary"
          onClick={onSave}
          disabled={status === 'saving' || status === 'loading'}
        >
          {status === 'saving' ? 'Saving…' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
