'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: string[];
  projectName: string;
}

export default function Gallery({ images, projectName }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null), [images.length]);
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % images.length : null), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            aria-label={`View ${projectName} image ${i + 1}`}
            style={{
              border: 'none', background: 'none', cursor: 'zoom-in',
              padding: 0, display: 'block',
              overflow: 'hidden', aspectRatio: '4/3',
              position: 'relative',
            }}
            className="gallery-thumb"
          >
            <Image
              src={src}
              alt={`${projectName} — image ${i + 1}`}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
              className="gallery-img"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${projectName}`}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(15,15,14,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onClick={close}
        >
          {/* Image */}
          <div
            style={{ position: 'relative', width: '90vw', height: '85vh', maxWidth: 1200 }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`${projectName} — image ${lightbox + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="90vw"
            />
          </div>

          {/* Controls */}
          <button
            onClick={e => { e.stopPropagation(); close(); }}
            aria-label="Close lightbox"
            style={{
              position: 'fixed', top: 24, right: 24,
              background: 'none', border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff', cursor: 'pointer',
              width: 44, height: 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            style={{
              position: 'fixed', left: 24, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff', cursor: 'pointer',
              width: 48, height: 48,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            style={{
              position: 'fixed', right: 24, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff', cursor: 'pointer',
              width: 48, height: 48,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Counter */}
          <div style={{
            position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
            fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.1em',
          }}>
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}

      <style>{`
        .gallery-thumb:hover .gallery-img { transform: scale(1.05); }
      `}</style>
    </>
  );
}
