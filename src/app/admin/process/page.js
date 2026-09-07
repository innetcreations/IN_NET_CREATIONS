'use client';

import { AdminShell } from '@/components/admin/AdminShell';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { useCmsSection } from '@/hooks/useCmsSection';

export default function ProcessEditor() {
  const { data, setData, save, status, error } = useCmsSection('process');

  if (!data) {
    return (
      <AdminShell title="Process Steps">
        <div className="admin-loading"><div className="admin-spinner" /></div>
      </AdminShell>
    );
  }

  const updateStep = (index, field, value) => {
    const updated = [...(data.steps || [])];
    updated[index] = { ...updated[index], [field]: value };
    setData({ steps: updated });
  };

  return (
    <AdminShell title="Process Steps">
      <div className="admin-editor">
        <p className="admin-editor-hint">
          Edit the 4-step &quot;How We Work&quot; section on the homepage.
        </p>

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

        {(data.steps || []).map((step, i) => (
          <fieldset key={i} className="admin-fieldset">
            <legend className="admin-legend">Step {step.number}</legend>
            <div className="admin-field-row">
              <div className="admin-field-group">
                <label className="admin-label">Step Number</label>
                <input className="admin-input" value={step.number || ''}
                  onChange={(e) => updateStep(i, 'number', e.target.value)}
                  placeholder="01" style={{ maxWidth: 80 }} />
              </div>
              <div className="admin-field-group" style={{ flex: 2 }}>
                <label className="admin-label">Title</label>
                <input className="admin-input" value={step.title || ''}
                  onChange={(e) => updateStep(i, 'title', e.target.value)} />
              </div>
            </div>
            <div className="admin-field-group">
              <label className="admin-label">Description</label>
              <textarea className="admin-textarea" rows={3} value={step.description || ''}
                onChange={(e) => updateStep(i, 'description', e.target.value)} />
            </div>
          </fieldset>
        ))}
      </div>

      <AdminSaveBar onSave={save} status={status} error={error} />
    </AdminShell>
  );
}
