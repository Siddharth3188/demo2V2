import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { journalEntries } from '@/data/journal';
import FadeUp from '@/components/ui/FadeUp';

export function generateStaticParams() {
  return journalEntries.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = journalEntries.find(e => e.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.description };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = journalEntries.find(e => e.slug === slug);
  if (!entry) notFound();

  const currentIdx = journalEntries.findIndex(e => e.slug === slug);
  const nextEntry = journalEntries[(currentIdx + 1) % journalEntries.length];

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'clamp(120px, 16vw, 180px)',
        paddingLeft: 'clamp(24px, 6vw, 80px)',
        paddingRight: 'clamp(24px, 6vw, 80px)',
        maxWidth: 1400, margin: '0 auto',
        paddingBottom: 'clamp(40px, 5vw, 64px)',
      }}>
        <FadeUp>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 20 }}>
              {entry.category} · {entry.date} · {entry.readTime}
            </p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(36px, 5.5vw, 66px)',
              fontWeight: 400, lineHeight: 1.1,
              color: 'var(--ink)', marginBottom: 24,
              letterSpacing: '-0.01em',
            }}>
              {entry.title}
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'var(--stone)', lineHeight: 1.75 }}>
              {entry.description}
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Hero image */}
      <section style={{ padding: '0 clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto 0' }}>
        <FadeUp>
          <div style={{ overflow: 'hidden', aspectRatio: '16/9', position: 'relative' }}>
            <Image src={entry.image} alt={entry.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1400px) 100vw, 1400px" priority />
          </div>
        </FadeUp>
      </section>

      {/* Article body */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0 80px' }} className="article-layout">
          {/* Sidebar */}
          <aside>
            <div style={{ position: 'sticky', top: 100 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 12 }}>Category</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--stone)', marginBottom: 32 }}>{entry.category}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 12 }}>Published</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--stone)', marginBottom: 32 }}>{entry.date}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 12 }}>Read time</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--stone)', marginBottom: 48 }}>{entry.readTime}</p>
              <Link href="/journal" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none', borderBottom: '1px solid var(--linen)', paddingBottom: 2 }}>
                ← All Articles
              </Link>
            </div>
          </aside>

          {/* Body text */}
          <article>
            {entry.body.map((paragraph, i) => (
              <p key={i} style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                color: 'var(--stone)',
                lineHeight: 1.9,
                marginBottom: 28,
              }}>
                {paragraph}
              </p>
            ))}

            {/* Pull quote */}
            <blockquote style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(22px, 2.8vw, 32px)',
              fontWeight: 400, lineHeight: 1.4,
              color: 'var(--ink)',
              borderLeft: '3px solid var(--linen)',
              paddingLeft: 32,
              margin: '48px 0',
            }}>
              "The best interiors are not noticed. They are simply felt."
            </blockquote>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'var(--stone)', lineHeight: 1.9, marginBottom: 28 }}>
              This is an editorial perspective from the Atelier studio — a fictional concept for a premium interior design portfolio demonstration.
            </p>
          </article>
        </div>
      </section>

      {/* Next article */}
      <section style={{ borderTop: '1px solid var(--linen-pale)', padding: 'clamp(48px, 6vw, 80px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 20 }}>Next Article</p>
        <Link href={`/journal/${nextEntry.slug}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }} className="next-article-link">
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 8 }}>{nextEntry.category}</p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1 }}>
              {nextEntry.title}
            </h3>
          </div>
          <div style={{ width: 48, height: 48, border: '1px solid var(--linen)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s ease' }} className="next-arrow">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M11 4l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </section>

      <style>{`
        .next-article-link:hover .next-arrow { background: var(--ink); border-color: var(--ink); color: #fff; }
        @media (max-width: 768px) {
          .article-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
