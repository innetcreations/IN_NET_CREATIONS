'use client';

import { AdminShell } from '@/components/admin/AdminShell';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { useCmsSection } from '@/hooks/useCmsSection';

export default function AboutEditor() {
  const { data, setData, save, status, error } = useCmsSection('about');

  if (!data) {
    return (
      <AdminShell title="About / Team">
        <div className="admin-loading"><div className="admin-spinner" /></div>
      </AdminShell>
    );
  }

  const updateStat = (index, field, value) => {
    const updated = [...(data.stats || [])];
    updated[index] = { ...updated[index], [field]: value };
    setData({ stats: updated });
  };

  const updateMember = (index, field, value) => {
    const updated = [...(data.teamMembers || [])];
    updated[index] = { ...updated[index], [field]: value };
    setData({ teamMembers: updated });
  };

  return (
    <AdminShell title="About / Team">
      <div className="admin-editor">
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

        <div className="admin-field-group">
          <label className="admin-label">About Body Text</label>
          <textarea className="admin-textarea" rows={6} value={data.body || ''}
            onChange={(e) => setData({ body: e.target.value })} />
          <span className="admin-hint">Use \n\n for paragraph breaks.</span>
        </div>

        <fieldset className="admin-fieldset">
          <legend className="admin-legend">Stats</legend>
          {(data.stats || []).map((stat, i) => (
            <div key={i} className="admin-field-row">
              <div className="admin-field-group">
                <label className="admin-label">Value</label>
                <input className="admin-input" value={stat.value || ''}
                  onChange={(e) => updateStat(i, 'value', e.target.value)} placeholder="50+" />
              </div>
              <div className="admin-field-group">
                <label className="admin-label">Label</label>
                <input className="admin-input" value={stat.label || ''}
                  onChange={(e) => updateStat(i, 'label', e.target.value)} placeholder="Projects Delivered" />
              </div>
            </div>
          ))}
        </fieldset>

        <fieldset className="admin-fieldset">
          <legend className="admin-legend">Team Members</legend>
          {(data.teamMembers || []).map((member, i) => (
            <div key={i} className="admin-field-row" style={{ alignItems: 'flex-start' }}>
              <div className="admin-field-group">
                <label className="admin-label">Name</label>
                <input className="admin-input" value={member.name || ''}
                  onChange={(e) => updateMember(i, 'name', e.target.value)} />
              </div>
              <div className="admin-field-group">
                <label className="admin-label">Role</label>
                <input className="admin-input" value={member.role || ''}
                  onChange={(e) => updateMember(i, 'role', e.target.value)} />
              </div>
              <div className="admin-field-group">
                <label className="admin-label">Photo URL</label>
                <input className="admin-input" value={member.image || ''}
                  onChange={(e) => updateMember(i, 'image', e.target.value)}
                  placeholder="/uploads/photo.jpg" />
              </div>
            </div>
          ))}
        </fieldset>
      </div>

      <AdminSaveBar onSave={save} status={status} error={error} />
    </AdminShell>
  );
}
