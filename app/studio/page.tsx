import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/ui/FadeUp';

export const metadata: Metadata = {
  title: 'Studio',
  description: 'We believe good interiors emerge from understanding the people, architecture, materials and moments that make a space meaningful.',
};

export default function StudioPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'clamp(120px, 16vw, 200px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        paddingLeft: 'clamp(24px, 6vw, 80px)',
        paddingRight: 'clamp(24px, 6vw, 80px)',
        maxWidth: 1400, margin: '0 auto',
      }}>
        <FadeUp>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 24 }}>The Studio</p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(42px, 6.5vw, 88px)',
            fontWeight: 400, lineHeight: 1.0,
            color: 'var(--ink)', letterSpacing: '-0.01em',
            maxWidth: 800, marginBottom: 0,
          }}>
            An Approach<br />Rooted In<br />Intention.
          </h1>
        </FadeUp>
      </section>

      {/* Hero image + intro */}
      <section style={{ padding: '0 clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ overflow: 'hidden', aspectRatio: '21/9', position: 'relative', marginBottom: 64 }}>
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85"
              alt="Atelier studio — interior design workspace"
              fill style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px 80px', marginBottom: 80 }} className="studio-intro-grid">
          <FadeUp>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 16 }}>Our Belief</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'var(--stone)', lineHeight: 1.85, maxWidth: 620 }}>
              We believe good interiors are not defined by trends alone. They emerge from understanding the people, architecture, materials and moments that make a space meaningful.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Philosophy pillars */}
      <section style={{ background: 'var(--linen-pale)', padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <FadeUp>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 48 }}>Design Philosophy</p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '56px 48px' }}>
            {[
              { title: 'Material', body: 'We work with materials that develop character over time — stone, timber, plaster, linen. Each surface is chosen not only for how it looks but for how it feels, sounds and ages.' },
              { title: 'Light', body: 'Natural light is the primary material of every interior we create. We study how it enters a space, how it moves and how it changes through the day before making any other decision.' },
              { title: 'Function', body: 'A space that is beautiful but difficult to live in has failed at its most important task. We begin with how people move, what they need and how they want to feel in each room.' },
              { title: 'Atmosphere', body: 'The atmosphere of a room is the accumulation of many small decisions — proportion, material, light, scent, temperature, sound. We attend to all of them.' },
            ].map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div style={{ borderTop: '1px solid var(--linen)', paddingTop: 32 }}>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 28, fontWeight: 400, color: 'var(--ink)', marginBottom: 16, lineHeight: 1.15 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone)', lineHeight: 1.8 }}>
                    {p.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 16 }}>How We Work</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, marginBottom: 64 }}>
            From First Thought<br />To Final Detail.
          </h2>
        </FadeUp>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px 32px' }}>
          {[
            { n: '01', label: 'Discover', body: 'We begin by understanding the space, its context and the people who will experience it. This phase is about listening as much as looking.' },
            { n: '02', label: 'Define', body: 'We translate needs and ideas into a clear design direction, material language and spatial strategy that gives the project its identity.' },
            { n: '03', label: 'Develop', body: 'We refine the details through drawings, material boards, proportional studies and visual sequences that reveal how the finished space will feel.' },
            { n: '04', label: 'Deliver', body: 'We bring the design together through careful coordination and close attention to the final details that distinguish a good space from a considered one.' },
          ].map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.1}>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 48, fontWeight: 300, color: 'var(--linen)', lineHeight: 1, marginBottom: 16 }}>{s.n}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 24, fontWeight: 400, color: 'var(--ink)', marginBottom: 12 }}>{s.label}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--stone)', lineHeight: 1.8 }}>{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Second image */}
      <section style={{ padding: '0 clamp(24px, 6vw, 80px) clamp(60px, 8vw, 100px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 16 }} className="studio-images-grid">
            <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
              <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85" alt="Studio interior — minimalist living room" fill style={{ objectFit: 'cover' }} sizes="60vw" />
            </div>
            <div style={{ overflow: 'hidden', aspectRatio: '3/4', position: 'relative' }}>
              <Image src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=85" alt="Material samples — natural textures" fill style={{ objectFit: 'cover' }} sizes="40vw" />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--ink-deep)', padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)', textAlign: 'center' }}>
        <FadeUp>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Have a project in mind?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone-light)', marginBottom: 40, maxWidth: 400, margin: '0 auto 40px' }}>
            We'd welcome the conversation about your space.
          </p>
          <Link href="/contact" style={{
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            background: '#fff', color: 'var(--ink)',
            textDecoration: 'none', padding: '14px 40px', display: 'inline-block',
          }}>
            Start A Conversation
          </Link>
        </FadeUp>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .studio-intro-grid { grid-template-columns: 1fr !important; }
          .studio-images-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
