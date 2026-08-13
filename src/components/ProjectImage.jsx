'use client';

import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

/**
 * ProjectImage — Displays project screenshot with smooth image loading
 * and automatic fallback to styled placeholder if image is missing.
 */
export default function ProjectImage({ src, alt, title, dimensions = '1600×1000', className = '', style = {} }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <PlaceholderImage
        label={title || alt || 'Project screenshot'}
        dimensions={dimensions}
        className={className}
        style={style}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || title || 'Project screenshot'}
      className={`project-img ${className}`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        borderRadius: 'var(--border-radius, 4px)',
        ...style,
      }}
      onError={() => setHasError(true)}
    />
  );
}
