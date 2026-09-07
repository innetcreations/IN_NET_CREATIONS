'use client';

import { AdminShell } from '@/components/admin/AdminShell';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { useCmsSection } from '@/hooks/useCmsSection';

export default function ContactEditor() {
  const { data, setData, save, status, error } = useCmsSection('contact');

  if (!data) {
    return (
      <AdminShell title="Contact Info">
        <div className="admin-loading"><div className="admin-spinner" /></div>
      </AdminShell>
    );
  }

  const updateAddress = (field, value) => {
    setData({ address: { ...data.address, [field]: value } });
  };
  const updateSocials = (field, value) => {
    setData({ socialLinks: { ...data.socialLinks, [field]: value } });
  };

  return (
    <AdminShell title="Contact Info">
      <div className="admin-editor">
        <p className="admin-editor-hint">
          Update your studio contact details. Changes apply across the website footer, contact page, and WhatsApp button.
        </p>

        <div className="admin-field-row">
          <div className="admin-field-group">
            <label className="admin-label">Phone 1</label>
            <input className="admin-input" value={data.phone1 || ''}
              onChange={(e) => setData({ phone1: e.target.value })} placeholder="95852 66671" />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Phone 2</label>
            <input className="admin-input" value={data.phone2 || ''}
              onChange={(e) => setData({ phone2: e.target.value })} placeholder="63690 36210" />
          </div>
        </div>

        <div className="admin-field-row">
          <div className="admin-field-group">
            <label className="admin-label">Email Address</label>
            <input className="admin-input" type="email" value={data.email || ''}
              onChange={(e) => setData({ email: e.target.value })} placeholder="hello@innetcreations.in" />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">WhatsApp URL</label>
            <input className="admin-input" value={data.whatsapp || ''}
              onChange={(e) => setData({ whatsapp: e.target.value })} placeholder="https://wa.me/916369036210" />
          </div>
        </div>

        <fieldset className="admin-fieldset">
          <legend className="admin-legend">Address</legend>
          <div className="admin-field-group">
            <label className="admin-label">Line 1</label>
            <input className="admin-input" value={data.address?.line1 || ''}
              onChange={(e) => updateAddress('line1', e.target.value)} placeholder="MIG 2/2, TNHB Thoppur" />
          </div>
          <div className="admin-field-row">
            <div className="admin-field-group">
              <label className="admin-label">City</label>
              <input className="admin-input" value={data.address?.city || ''}
                onChange={(e) => updateAddress('city', e.target.value)} placeholder="Madurai" />
            </div>
            <div className="admin-field-group">
              <label className="admin-label">State</label>
              <input className="admin-input" value={data.address?.state || ''}
                onChange={(e) => updateAddress('state', e.target.value)} placeholder="Tamil Nadu" />
            </div>
            <div className="admin-field-group">
              <label className="admin-label">Pincode</label>
              <input className="admin-input" value={data.address?.pincode || ''}
                onChange={(e) => updateAddress('pincode', e.target.value)} placeholder="625008" />
            </div>
          </div>
        </fieldset>

        <fieldset className="admin-fieldset">
          <legend className="admin-legend">Announcement Bar</legend>
          <div className="admin-field-group">
            <label className="admin-label">Announcement Text</label>
            <input className="admin-input" value={data.announcementBarText || ''}
              onChange={(e) => setData({ announcementBarText: e.target.value })}
              placeholder="🚀 Free 20-min strategy call — Book your slot today" />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Announcement Link</label>
            <input className="admin-input" value={data.announcementBarLink || ''}
              onChange={(e) => setData({ announcementBarLink: e.target.value })}
              placeholder="/book-a-call" />
          </div>
        </fieldset>

        <fieldset className="admin-fieldset">
          <legend className="admin-legend">Social Media Links</legend>
          {['instagram', 'linkedin', 'youtube'].map((platform) => (
            <div className="admin-field-group" key={platform}>
              <label className="admin-label" style={{ textTransform: 'capitalize' }}>{platform}</label>
              <input className="admin-input"
                value={data.socialLinks?.[platform] || ''}
                onChange={(e) => updateSocials(platform, e.target.value)}
                placeholder={`https://${platform}.com/yourpage`} />
            </div>
          ))}
        </fieldset>
      </div>

      <AdminSaveBar onSave={save} status={status} error={error} />
    </AdminShell>
  );
}
