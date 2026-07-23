'use client';

import { useState } from 'react';

/**
 * AnnouncementBar — Slim dismissible strip at the top of the page.
 * Dismissed state persists for the session via in-memory state (not localStorage).
 */
export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="announcement-bar" role="banner">
      {/* TODO: Update announcement copy as needed */}
      <span>Now booking new clients for August — limited availability</span>
      <button
        className="announcement-bar-close"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
      >
        ×
      </button>
    </div>
  );
}
