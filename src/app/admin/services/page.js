'use client';

import { AdminShell } from '@/components/admin/AdminShell';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { useCmsSection } from '@/hooks/useCmsSection';

export default function ServicesEditor() {
  const { data, setData, save, status, error } = useCmsSection('services');

  if (!data) {
    return (
      <AdminShell title="Services">
        <div className="admin-loading"><div className="admin-spinner" /></div>
      </AdminShell>
    );
  }

  const updateService = (index, field, value) => {
    const updated = [...(data.services || [])];
    updated[index] = { ...updated[index], [field]: value };
    setData({ services: updated });
  };

  const updateFeature = (svcIndex, featIndex, value) => {
    const updated = [...(data.services || [])];
    const features = [...(updated[svcIndex].features || [])];
    features[featIndex] = value;
    updated[svcIndex] = { ...updated[svcIndex], features };
    setData({ services: updated });
  };

  return (
    <AdminShell title="Services">
      <div className="admin-editor">
        <p className="admin-editor-hint">Edit service cards shown on the homepage and services page.</p>

        <div className="admin-field-row">
          <div className="admin-field-group">
            <label className="admin-label">Section Label</label>
            <input className="admin-input" value={data.sectionLabel || ''}
              onChange={(e) => setData({ sectionLabel: e.target.value })} />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Section Heading</label>
            <input className="admin-input" value={data.sectionHeading || ''}
              onChange={(e) => setData({ sectionHeading: e.target.value })} />
          </div>
        </div>

        {(data.services || []).map((svc, i) => (
          <fieldset key={svc.id || i} className="admin-fieldset">
            <legend className="admin-legend">{svc.title || `Service ${i + 1}`}</legend>
            <div className="admin-field-row">
              <div className="admin-field-group">
                <label className="admin-label">Title</label>
                <input className="admin-input" value={svc.title || ''}
                  onChange={(e) => updateService(i, 'title', e.target.value)} />
              </div>
              <div className="admin-field-group">
                <label className="admin-label">Starting Price</label>
                <input className="admin-input" value={svc.priceFrom || ''}
                  onChange={(e) => updateService(i, 'priceFrom', e.target.value)}
                  placeholder="₹15,000" style={{ maxWidth: 150 }} />
              </div>
            </div>
            <div className="admin-field-group">
              <label className="admin-label">Description</label>
              <textarea className="admin-textarea" rows={3} value={svc.description || ''}
                onChange={(e) => updateService(i, 'description', e.target.value)} />
            </div>
            <div className="admin-field-group">
              <label className="admin-label">Features (one per line)</label>
              <textarea className="admin-textarea" rows={4}
                value={(svc.features || []).join('\n')}
                onChange={(e) => updateService(i, 'features', e.target.value.split('\n'))} />
            </div>
          </fieldset>
        ))}
      </div>

      <AdminSaveBar onSave={save} status={status} error={error} />
    </AdminShell>
  );
}
