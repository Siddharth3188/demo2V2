'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import FadeUp from '@/components/ui/FadeUp';

type Filter = 'All' | 'Residential' | 'Commercial';

export default function ProjectsClient() {
  const [filter, setFilter] = useState<Filter>('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'clamp(120px, 16vw, 180px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        paddingLeft: 'clamp(24px, 6vw, 80px)',
        paddingRight: 'clamp(24px, 6vw, 80px)',
        maxWidth: 1400, margin: '0 auto',
        borderBottom: '1px solid var(--linen-pale)',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 80px', alignItems: 'end' }} className="projects-hero-grid">
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 20 }}>Selected Projects</p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(42px, 6vw, 80px)',
              fontWeight: 400, lineHeight: 1.0,
              color: 'var(--ink)', letterSpacing: '-0.01em',
            }}>
              Work shaped<br />by material<br />and atmosphere.
            </h1>
          </div>
          <div style={{ alignSelf: 'end', paddingBottom: 8 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone)', lineHeight: 1.75, maxWidth: 380 }}>
              Spaces developed through a balance of architecture, material and atmosphere. Each project begins with the people who will inhabit it.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: '32px clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'var(--stone-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: 8 }}>Filter:</span>
          {(['All', 'Residential', 'Commercial'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '8px 20px', cursor: 'pointer', border: 'none',
                background: filter === f ? 'var(--ink)' : 'transparent',
                color: filter === f ? 'var(--bg)' : 'var(--stone)',
                outline: '1px solid',
                outlineColor: filter === f ? 'var(--ink)' : 'var(--linen)',
                transition: 'all 0.2s ease',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '24px clamp(24px, 6vw, 80px) clamp(80px, 10vw, 140px)', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 48 }}>
          {filtered.map((project, i) => (
            <FadeUp key={project.slug} delay={i * 0.06}>
              <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }} className="project-card">
                <div style={{ overflow: 'hidden', aspectRatio: '4/5', position: 'relative', background: '#EAE5DF', marginBottom: 24 }}>
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }}
                    className="project-img"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{
                    position: 'absolute', top: 16, left: 16,
                    fontFamily: 'Inter, sans-serif', fontSize: 10,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    background: 'rgba(249,247,244,0.92)', color: 'var(--stone)',
                    padding: '6px 12px',
                  }}>{project.status}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 6 }}>
                      {project.number} — {project.type}
                    </p>
                    <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 26, fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 6 }}>
                      {project.name}
                    </h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--stone)' }}>
                      {project.location} · {project.year}
                    </p>
                  </div>
                  <div style={{
                    width: 36, height: 36, border: '1px solid var(--linen)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 4, transition: 'all 0.2s ease',
                  }} className="project-arrow">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--stone)', fontFamily: 'Cormorant Garamond, serif', fontSize: 24 }}>
            No projects in this category yet.
          </div>
        )}
      </section>

      <style>{`
        .project-card:hover .project-img { transform: scale(1.04); }
        .project-card:hover .project-arrow { background: var(--ink); border-color: var(--ink); color: #fff; }
        @media (max-width: 768px) {
          .projects-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
