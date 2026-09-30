import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects, getProjectBySlug } from '@/data/projects';
import FadeUp from '@/components/ui/FadeUp';
import Gallery from '@/components/Gallery';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '90vh', minHeight: 560, overflow: 'hidden' }}>
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,15,14,0.65) 0%, rgba(15,15,14,0.1) 60%)' }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: 'clamp(32px, 5vw, 64px)',
          maxWidth: 1400, margin: '0 auto',
        }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>
            {project.number} — {project.status}
          </p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(38px, 6vw, 72px)',
            fontWeight: 400, lineHeight: 1.05,
            color: '#FFFFFF', marginBottom: 12,
            letterSpacing: '-0.01em',
          }}>
            {project.name}
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
            {project.location} · {project.type} · {project.year}
          </p>
        </div>
      </section>

      {/* Project meta strip */}
      <section style={{ background: 'var(--linen-pale)', padding: '0 clamp(24px, 6vw, 80px)' }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto',
          display: 'flex', flexWrap: 'wrap',
          borderBottom: '1px solid var(--linen)',
        }}>
          {[
            ['Project', project.name],
            ['Location', project.location],
            ['Type', project.type],
            ['Status', project.status],
            ['Year', project.year],
            ['Area', project.area],
          ].map(([label, value]) => (
            <div key={label} style={{
              padding: '24px 32px 24px 0',
              marginRight: 32, borderRight: '1px solid var(--linen)',
              minWidth: 120,
            }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 4 }}>{label}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--ink)', fontWeight: 500 }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project intro */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 100px', alignItems: 'start' }} className="detail-grid">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 20 }}>Project Overview</p>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.45 }}>
                "{project.tagline}"
              </p>
            </div>
            <div style={{ paddingTop: 8 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone)', lineHeight: 1.85 }}>
                {project.overview}
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* First image */}
      <section style={{ padding: '0 clamp(24px, 6vw, 80px) clamp(40px, 5vw, 60px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ overflow: 'hidden', aspectRatio: '16/9', position: 'relative' }}>
            <Image src={project.images[0]} alt={`${project.name} interior`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1400px) 100vw, 1400px" />
          </div>
        </FadeUp>
      </section>

      {/* Design approach */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 80px', alignItems: 'start' }} className="detail-grid">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 20 }}>Design Approach</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone)', lineHeight: 1.85 }}>
                {project.approach}
              </p>
            </div>
            <div style={{ overflow: 'hidden', aspectRatio: '3/4', position: 'relative', background: '#EAE5DF' }}>
              <Image src={project.images[1]} alt={`${project.name} detail`} fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Large editorial statement */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)', background: 'var(--linen-pale)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <FadeUp>
            <blockquote style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 300, lineHeight: 1.3,
              color: 'var(--ink)', maxWidth: 860,
              borderLeft: '3px solid var(--linen)',
              paddingLeft: 40,
            }}>
              "{project.materialLight}"
            </blockquote>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginTop: 20, paddingLeft: 40 }}>
              Material & Light
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Two-image composition */}
      <section style={{ padding: 'clamp(40px, 5vw, 60px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 16 }} className="two-image-grid">
            <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative', background: '#EAE5DF' }}>
              <Image src={project.images[2]} alt={`${project.name} space`} fill style={{ objectFit: 'cover' }} sizes="60vw" />
            </div>
            <div style={{ overflow: 'hidden', aspectRatio: '4/5', position: 'relative', background: '#EAE5DF' }}>
              <Image src={project.images[3]} alt={`${project.name} detail`} fill style={{ objectFit: 'cover' }} sizes="40vw" />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Gallery */}
      <section style={{ padding: 'clamp(40px, 5vw, 80px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 32 }}>Gallery</p>
          <Gallery images={project.images} projectName={project.name} />
        </FadeUp>
      </section>

      {/* Next project */}
      <section style={{ padding: '0 clamp(24px, 6vw, 80px) clamp(80px, 10vw, 120px)', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ borderTop: '1px solid var(--linen-pale)', paddingTop: 48 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 20 }}>Next Project</p>
          <Link href={`/projects/${nextProject.slug}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }} className="next-project-link">
            <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1 }}>
              {nextProject.name}
            </h3>
            <div style={{ width: 48, height: 48, border: '1px solid var(--linen)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s ease' }} className="next-arrow">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M11 4l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>
      </section>

      <style>{`
        .next-project-link:hover .next-arrow { background: var(--ink); border-color: var(--ink); color: #fff; }
        @media (max-width: 768px) {
          .detail-grid { grid-template-columns: 1fr !important; }
          .two-image-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
