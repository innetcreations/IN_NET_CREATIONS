'use client';

import { AdminShell } from '@/components/admin/AdminShell';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { useCmsSection } from '@/hooks/useCmsSection';

export default function FAQEditor() {
  const { data, setData, save, status, error } = useCmsSection('faq');

  if (!data) {
    return (
      <AdminShell title="FAQ">
        <div className="admin-loading"><div className="admin-spinner" /></div>
      </AdminShell>
    );
  }

  const updateFaq = (index, field, value) => {
    const updated = [...(data.faqs || [])];
    updated[index] = { ...updated[index], [field]: value };
    setData({ faqs: updated });
  };

  const addFaq = () => {
    setData({ faqs: [...(data.faqs || []), { id: `faq-${Date.now()}`, question: '', answer: '' }] });
  };

  const removeFaq = (index) => {
    const updated = [...(data.faqs || [])];
    updated.splice(index, 1);
    setData({ faqs: updated });
  };

  return (
    <AdminShell title="FAQ">
      <div className="admin-editor">
        <p className="admin-editor-hint">
          Edit your frequently asked questions. Add, remove, or reorder as needed.
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

        {(data.faqs || []).map((faq, i) => (
          <fieldset key={faq.id || i} className="admin-fieldset">
            <legend className="admin-legend">
              Q{i + 1}
              <button
                type="button"
                className="admin-btn-danger-sm"
                onClick={() => removeFaq(i)}
                style={{ marginLeft: '1rem' }}
              >
                Remove
              </button>
            </legend>
            <div className="admin-field-group">
              <label className="admin-label">Question</label>
              <input className="admin-input" value={faq.question || ''}
                onChange={(e) => updateFaq(i, 'question', e.target.value)} />
            </div>
            <div className="admin-field-group">
              <label className="admin-label">Answer</label>
              <textarea className="admin-textarea" rows={4} value={faq.answer || ''}
                onChange={(e) => updateFaq(i, 'answer', e.target.value)} />
            </div>
          </fieldset>
        ))}

        <button type="button" className="admin-btn-secondary" onClick={addFaq}>
          + Add FAQ
        </button>
      </div>

      <AdminSaveBar onSave={save} status={status} error={error} />
    </AdminShell>
  );
}
