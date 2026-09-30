import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { journalEntries } from '@/data/journal';
import FadeUp from '@/components/ui/FadeUp';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Notes on design, material and space from the Atelier studio.',
};

export default function JournalPage() {
  const [featured, ...rest] = journalEntries;

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'clamp(120px, 16vw, 200px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        paddingLeft: 'clamp(24px, 6vw, 80px)',
        paddingRight: 'clamp(24px, 6vw, 80px)',
        maxWidth: 1400, margin: '0 auto',
        borderBottom: '1px solid var(--linen-pale)',
      }}>
        <FadeUp>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 20 }}>Journal</p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(42px, 6vw, 80px)',
            fontWeight: 400, lineHeight: 1.0,
            color: 'var(--ink)', letterSpacing: '-0.01em', maxWidth: 700,
          }}>
            Notes on design,<br />material and space.
          </h1>
        </FadeUp>
      </section>

      {/* Featured article */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <Link href={`/journal/${featured.slug}`} style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 80px', alignItems: 'center' }} className="featured-article">
            <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative', background: '#EAE5DF' }}>
              <Image src={featured.image} alt={featured.title} fill style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }} className="featured-img" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 16 }}>
                {featured.category} · {featured.date}
              </p>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 400, color: 'var(--ink)',
                lineHeight: 1.15, marginBottom: 20,
              }}>
                {featured.title}
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone)', lineHeight: 1.8, marginBottom: 32, maxWidth: 420 }}>
                {featured.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: 2 }}>Read Article</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--stone-light)' }}>{featured.readTime}</span>
              </div>
            </div>
          </Link>
        </FadeUp>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--linen-pale)', margin: '0 clamp(24px, 6vw, 80px)' }} />

      {/* Article grid */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '56px 40px' }}>
          {rest.map((entry, i) => (
            <FadeUp key={entry.slug} delay={i * 0.08}>
              <Link href={`/journal/${entry.slug}`} style={{ textDecoration: 'none', display: 'block' }} className="article-card">
                <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative', background: '#EAE5DF', marginBottom: 24 }}>
                  <Image src={entry.image} alt={entry.title} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} className="article-img" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 10 }}>
                  {entry.category} · {entry.date}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 26, fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 12 }}>
                  {entry.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--stone)', lineHeight: 1.75, marginBottom: 20 }}>
                  {entry.description}
                </p>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.08em', color: 'var(--stone)', borderBottom: '1px solid var(--linen)', paddingBottom: 2 }}>
                  {entry.readTime}
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      <style>{`
        .featured-article { cursor: pointer; }
        .featured-article:hover .featured-img { transform: scale(1.04); }
        .article-card:hover .article-img { transform: scale(1.04); }
        @media (max-width: 768px) {
          .featured-article { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
