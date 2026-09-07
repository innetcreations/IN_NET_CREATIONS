'use client';

import { AdminShell } from '@/components/admin/AdminShell';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { useCmsSection } from '@/hooks/useCmsSection';

export default function SEOEditor() {
  const { data, setData, save, status, error } = useCmsSection('seo');

  if (!data) {
    return (
      <AdminShell title="SEO Settings">
        <div className="admin-loading"><div className="admin-spinner" /></div>
      </AdminShell>
    );
  }

  return (
    <AdminShell title="SEO Settings">
      <div className="admin-editor">
        <p className="admin-editor-hint">
          Global SEO settings that apply to all pages. Per-page metadata is set in each page&apos;s <code>metadata</code> export.
        </p>

        <div className="admin-field-group">
          <label className="admin-label">Site Title</label>
          <input className="admin-input" value={data.siteTitle || ''}
            onChange={(e) => setData({ siteTitle: e.target.value })}
            placeholder="IN NET CREATIONS" />
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Site Description</label>
          <textarea className="admin-textarea" rows={3} value={data.siteDescription || ''}
            onChange={(e) => setData({ siteDescription: e.target.value })}
            placeholder="Madurai's premium digital studio..." />
          <span className="admin-hint">Keep under 160 characters for best SEO results.</span>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Site URL (canonical)</label>
          <input className="admin-input" value={data.siteUrl || ''}
            onChange={(e) => setData({ siteUrl: e.target.value })}
            placeholder="https://in-net-creations.vercel.app" />
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Default OG Image URL</label>
          <input className="admin-input" value={data.ogImage || ''}
            onChange={(e) => setData({ ogImage: e.target.value })}
            placeholder="/og-image.jpg" />
          <span className="admin-hint">Used for social sharing. Recommended: 1200×630px.</span>
        </div>

        <div className="admin-field-row">
          <div className="admin-field-group">
            <label className="admin-label">Twitter/X Handle</label>
            <input className="admin-input" value={data.twitterHandle || ''}
              onChange={(e) => setData({ twitterHandle: e.target.value })}
              placeholder="@innetcreations" />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Google Site Verification</label>
            <input className="admin-input" value={data.googleVerification || ''}
              onChange={(e) => setData({ googleVerification: e.target.value })}
              placeholder="abc123..." />
          </div>
        </div>
      </div>

      <AdminSaveBar onSave={save} status={status} error={error} />
    </AdminShell>
  );
}
