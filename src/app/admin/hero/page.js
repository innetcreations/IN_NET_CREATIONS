'use client';

import { AdminShell } from '@/components/admin/AdminShell';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { useCmsSection } from '@/hooks/useCmsSection';

export default function HeroEditor() {
  const { data, setData, save, status, error } = useCmsSection('hero');

  if (!data) {
    return (
      <AdminShell title="Hero Section">
        <div className="admin-loading"><div className="admin-spinner" /></div>
      </AdminShell>
    );
  }

  return (
    <AdminShell title="Hero Section">
      <div className="admin-editor">
        <p className="admin-editor-hint">
          This controls the main hero area on the homepage — the first thing visitors see.
        </p>

        <div className="admin-field-group">
          <label className="admin-label">Badge Text</label>
          <input className="admin-input" value={data.badge || ''}
            onChange={(e) => setData({ badge: e.target.value })}
            placeholder="Digital Studio, Madurai" />
          <span className="admin-hint">Small label above the heading (e.g. &quot;Digital Studio, Madurai&quot;)</span>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Main Heading</label>
          <input className="admin-input" value={data.heading || ''}
            onChange={(e) => setData({ heading: e.target.value })}
            placeholder="We build brands that win online." />
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Subheading</label>
          <textarea className="admin-textarea" rows={3} value={data.subheading || ''}
            onChange={(e) => setData({ subheading: e.target.value })}
            placeholder="Websites, apps, and digital presence..." />
        </div>

        <fieldset className="admin-fieldset">
          <legend className="admin-legend">Primary CTA Button</legend>
          <div className="admin-field-row">
            <div className="admin-field-group">
              <label className="admin-label">Button Text</label>
              <input className="admin-input"
                value={data.ctaPrimary?.text || ''}
                onChange={(e) => setData({ ctaPrimary: { ...data.ctaPrimary, text: e.target.value } })}
                placeholder="Start Your Project" />
            </div>
            <div className="admin-field-group">
              <label className="admin-label">Button Link</label>
              <input className="admin-input"
                value={data.ctaPrimary?.href || ''}
                onChange={(e) => setData({ ctaPrimary: { ...data.ctaPrimary, href: e.target.value } })}
                placeholder="/book-a-call" />
            </div>
          </div>
        </fieldset>

        <fieldset className="admin-fieldset">
          <legend className="admin-legend">Secondary CTA Button</legend>
          <div className="admin-field-row">
            <div className="admin-field-group">
              <label className="admin-label">Button Text</label>
              <input className="admin-input"
                value={data.ctaSecondary?.text || ''}
                onChange={(e) => setData({ ctaSecondary: { ...data.ctaSecondary, text: e.target.value } })}
                placeholder="View Our Work" />
            </div>
            <div className="admin-field-group">
              <label className="admin-label">Button Link</label>
              <input className="admin-input"
                value={data.ctaSecondary?.href || ''}
                onChange={(e) => setData({ ctaSecondary: { ...data.ctaSecondary, href: e.target.value } })}
                placeholder="#showcase" />
            </div>
          </div>
        </fieldset>
      </div>

      <AdminSaveBar onSave={save} status={status} error={error} />
    </AdminShell>
  );
}
