'use client';

import { useState } from 'react';
import { AdminShell } from '@/components/admin/AdminShell';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { useCmsSection } from '@/hooks/useCmsSection';

export default function ProjectsEditor() {
  const { data, setData, save, status, error } = useCmsSection('projects');
  const [uploadStatus, setUploadStatus] = useState({});

  if (data === null) {
    // First load — projects section may not exist yet, show empty state
    if (status === 'error') {
      return (
        <AdminShell title="Projects">
          <div className="admin-editor">
            <p className="admin-editor-hint">
              The projects CMS file doesn&apos;t exist yet. Projects are currently managed in <code>src/data/projects.js</code>.
              To use the CMS for projects, click &quot;Initialize&quot; below.
            </p>
            <button className="admin-btn-primary" onClick={() => setData({ projects: [] })}>
              Initialize Projects CMS
            </button>
          </div>
        </AdminShell>
      );
    }
    return (
      <AdminShell title="Projects">
        <div className="admin-loading"><div className="admin-spinner" /></div>
      </AdminShell>
    );
  }

  const projects = data?.projects || [];

  const updateProject = (index, field, value) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    setData({ projects: updated });
  };

  const addProject = () => {
    setData({
      projects: [...projects, {
        id: `project-${Date.now()}`,
        name: '', title: '', description: '',
        category: 'web', tag: 'WEBSITE',
        image: '', link: '', featured: false,
      }],
    });
  };

  const removeProject = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setData({ projects: updated });
  };

  const handleImageUpload = async (index, file) => {
    setUploadStatus((prev) => ({ ...prev, [index]: 'uploading' }));
    const fd = new FormData();
    fd.append('file', file);
    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Upload failed');
      updateProject(index, 'image', json.url);
      setUploadStatus((prev) => ({ ...prev, [index]: 'done' }));
    } catch (err) {
      setUploadStatus((prev) => ({ ...prev, [index]: `Error: ${err.message}` }));
    }
  };

  return (
    <AdminShell title="Projects">
      <div className="admin-editor">
        <p className="admin-editor-hint">
          Manage portfolio projects. These appear in the &quot;Selected Projects&quot; grid on the homepage and the Portfolio page.
        </p>

        {projects.map((proj, i) => (
          <fieldset key={proj.id || i} className="admin-fieldset">
            <legend className="admin-legend">
              {proj.name || `Project ${i + 1}`}
              <button type="button" className="admin-btn-danger-sm"
                onClick={() => removeProject(i)} style={{ marginLeft: '1rem' }}>
                Remove
              </button>
            </legend>

            <div className="admin-field-row">
              <div className="admin-field-group">
                <label className="admin-label">Project Name</label>
                <input className="admin-input" value={proj.name || ''}
                  onChange={(e) => updateProject(i, 'name', e.target.value)} placeholder="Sri Suriya Pipes" />
              </div>
              <div className="admin-field-group">
                <label className="admin-label">Subtitle / Category Label</label>
                <input className="admin-input" value={proj.title || ''}
                  onChange={(e) => updateProject(i, 'title', e.target.value)} placeholder="Business Website" />
              </div>
            </div>

            <div className="admin-field-group">
              <label className="admin-label">Description</label>
              <textarea className="admin-textarea" rows={3} value={proj.description || ''}
                onChange={(e) => updateProject(i, 'description', e.target.value)} />
            </div>

            <div className="admin-field-row">
              <div className="admin-field-group">
                <label className="admin-label">Category (web/app/branding)</label>
                <input className="admin-input" value={proj.category || ''}
                  onChange={(e) => updateProject(i, 'category', e.target.value)} placeholder="web" />
              </div>
              <div className="admin-field-group">
                <label className="admin-label">Tag Label</label>
                <input className="admin-input" value={proj.tag || ''}
                  onChange={(e) => updateProject(i, 'tag', e.target.value)} placeholder="WEBSITE" />
              </div>
              <div className="admin-field-group">
                <label className="admin-label">Live URL</label>
                <input className="admin-input" value={proj.link || ''}
                  onChange={(e) => updateProject(i, 'link', e.target.value)} placeholder="https://..." />
              </div>
            </div>

            <div className="admin-field-group">
              <label className="admin-label">Screenshot Image</label>
              <div className="admin-upload-row">
                <input className="admin-input" value={proj.image || ''}
                  onChange={(e) => updateProject(i, 'image', e.target.value)}
                  placeholder="/assets/projects/project-name/screenshot.jpg" />
                <label className="admin-btn-secondary admin-upload-label">
                  Upload
                  <input type="file" accept="image/*" style={{ display: 'none' }}
                    onChange={(e) => e.target.files[0] && handleImageUpload(i, e.target.files[0])} />
                </label>
              </div>
              {uploadStatus[i] && (
                <span className="admin-hint">{uploadStatus[i]}</span>
              )}
              {proj.image && (
                <img src={proj.image} alt={proj.name} className="admin-image-preview" />
              )}
            </div>

            <div className="admin-field-group">
              <label className="admin-checkbox-label">
                <input type="checkbox" checked={!!proj.featured}
                  onChange={(e) => updateProject(i, 'featured', e.target.checked)} />
                Featured on homepage
              </label>
            </div>
          </fieldset>
        ))}

        <button type="button" className="admin-btn-secondary" onClick={addProject}>
          + Add Project
        </button>
      </div>

      <AdminSaveBar onSave={save} status={status} error={error} />
    </AdminShell>
  );
}
