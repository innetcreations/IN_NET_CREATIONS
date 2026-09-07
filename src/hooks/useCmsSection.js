'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * useCmsSection — Data fetching + save hook for admin CMS editors.
 *
 * Usage:
 *   const { data, setData, save, status } = useCmsSection('hero');
 *
 * Returns:
 *   data    — current content object (null while loading)
 *   setData — update function (partial updates merged automatically)
 *   save    — async function that PUTs to /api/admin/content/:section
 *   status  — 'idle' | 'loading' | 'saving' | 'saved' | 'error'
 *   error   — error message string or null
 */
export function useCmsSection(section) {
  const [data, setDataRaw] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    setError(null);

    fetch(`/api/admin/content/${section}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        if (!cancelled) {
          setDataRaw(json);
          setStatus('idle');
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setStatus('error');
        }
      });

    return () => { cancelled = true; };
  }, [section]);

  // Supports both full replacement and partial updates
  const setData = useCallback((updater) => {
    setDataRaw((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      return typeof next === 'object' && !Array.isArray(next) ? { ...prev, ...next } : next;
    });
  }, []);

  const save = useCallback(async () => {
    setStatus('saving');
    setError(null);
    try {
      const res = await fetch(`/api/admin/content/${section}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `HTTP ${res.status}`);
      }
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2500);
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }, [section, data]);

  return { data, setData, save, status, error };
}
