import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/ui/FadeUp';

export const metadata: Metadata = {
  title: 'Services',
  description: 'From residential interiors to full-service design — thoughtful work shaped around how people live.',
};

export default function ServicesPage() {
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 80px', alignItems: 'end' }} className="services-hero-grid">
          <FadeUp>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 24 }}>What We Do</p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(42px, 6vw, 80px)',
              fontWeight: 400, lineHeight: 1.0,
              color: 'var(--ink)', letterSpacing: '-0.01em',
            }}>
              Designed Around<br />The Way<br />You Live.
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'var(--stone)', lineHeight: 1.85, maxWidth: 400, alignSelf: 'end' }}>
              Each project is shaped by a single question: how do the people who will use this space actually want to live in it? The answer guides everything else.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services — editorial layout */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
        {[
          {
            n: '01',
            title: 'Residential Interiors',
            subtitle: 'Spaces shaped around everyday life.',
            body: 'Thoughtful interiors shaped around everyday life, personality and the character of each home. We work closely with each client to understand the rhythms of their day, the things they value and the atmosphere they want to wake up to. The result is a home that feels genuinely theirs.',
            details: ['Interior design and concept development', 'Space planning and layout', 'Material and finish selection', 'Lighting design', 'Furniture curation and sourcing', 'Styling and final detailing'],
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85',
            imageAlt: 'Residential interior — warm minimal living space',
            reverse: false,
          },
          {
            n: '02',
            title: 'Commercial Spaces',
            subtitle: 'Environments designed for identity and people.',
            body: 'Distinctive environments designed to support identity, functionality and the people who use them. A well-designed commercial interior communicates something before a word is spoken. We bring the same material intelligence and spatial care to commercial work as we do to residential projects.',
            details: ['Commercial interior concept', 'Workplace and hospitality design', 'Brand integration and spatial identity', 'Material and finish specification', 'Furniture and fitout planning', 'Coordination with project teams'],
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85',
            imageAlt: 'Commercial interior — refined minimal workspace',
            reverse: true,
          },
          {
            n: '03',
            title: 'Interior Architecture',
            subtitle: 'Spatial thinking at every scale.',
            body: 'Spatial planning, material selection and architectural detailing brought together as one considered vision. When a project requires structural thinking — reworking a floor plan, designing built-in joinery, reconsidering the relationship between rooms — we bring architectural rigour to every decision.',
            details: ['Spatial planning and floor plan development', 'Architectural detailing', 'Joinery and built-in design', 'Material specification', 'Technical drawings and coordination', 'Contractor liaison'],
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=85',
            imageAlt: 'Interior architecture — considered material detail',
            reverse: false,
          },
          {
            n: '04',
            title: 'Full-Service Design',
            subtitle: 'From first concept to final detail.',
            body: 'From early concepts to final detailing, a complete design journey shaped around the project. Full-service engagements give us the depth to do our best work — understanding the brief thoroughly, developing the vision carefully and attending to every detail through to completion.',
            details: ['Complete design brief and discovery', 'Concept development and presentation', 'Detailed design and documentation', 'Furniture and material procurement', 'Contractor coordination and site visits', 'Final installation and styling'],
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85',
            imageAlt: 'Full-service interior — completed residential space',
            reverse: true,
          },
        ].map((service, i) => (
          <FadeUp key={service.n} delay={0.05}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: service.reverse ? '1fr 1fr' : '1fr 1fr',
              gap: '40px 80px',
              padding: 'clamp(60px, 8vw, 100px) 0',
              borderBottom: i < 3 ? '1px solid var(--linen-pale)' : 'none',
              alignItems: 'center',
            }} className="service-row">
              {/* Text — conditionally ordered */}
              <div style={{ order: service.reverse ? 2 : 1 }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 20 }}>{service.n}</p>
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(30px, 4vw, 48px)',
                  fontWeight: 400, lineHeight: 1.1,
                  color: 'var(--ink)', marginBottom: 8,
                }}>
                  {service.title}
                </h2>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 18, fontStyle: 'italic', color: 'var(--stone)', marginBottom: 28, lineHeight: 1.4 }}>
                  {service.subtitle}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone)', lineHeight: 1.85, marginBottom: 32, maxWidth: 480 }}>
                  {service.body}
                </p>
                <div style={{ borderTop: '1px solid var(--linen-pale)', paddingTop: 28 }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 16 }}>Includes</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
                    {service.details.map(d => (
                      <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ width: 4, height: 4, background: 'var(--linen)', borderRadius: '50%', marginTop: 7, flexShrink: 0 }} />
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--stone)', lineHeight: 1.6 }}>{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div style={{ order: service.reverse ? 1 : 2, overflow: 'hidden', aspectRatio: '4/5', position: 'relative', background: '#EAE5DF' }}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* Process strip */}
      <section style={{ background: 'var(--linen-pale)', padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px 80px', alignItems: 'start' }} className="process-strip-grid">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 16 }}>Our Process</p>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1 }}>
                  Considered from the first sketch to the final detail.
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px' }}>
                {[
                  { n: '01', label: 'Discover', desc: 'Understanding the space, context and people.' },
                  { n: '02', label: 'Define', desc: 'A clear design direction and material language.' },
                  { n: '03', label: 'Develop', desc: 'Refined through drawings, materials and proportions.' },
                  { n: '04', label: 'Deliver', desc: 'Brought together with attention to every detail.' },
                ].map(s => (
                  <div key={s.n} style={{ borderTop: '1px solid var(--linen)', paddingTop: 20 }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 8 }}>{s.n}</p>
                    <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 20, fontWeight: 400, color: 'var(--ink)', marginBottom: 8 }}>{s.label}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--stone)', lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 130px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        <FadeUp>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 20 }}>Start A Project</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, marginBottom: 16 }}>
            Have a space in mind?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone)', maxWidth: 360, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Tell us about your project and what you'd like it to become.
          </p>
          <Link href="/contact" style={{
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            background: 'var(--ink)', color: 'var(--bg)',
            textDecoration: 'none', padding: '16px 48px', display: 'inline-block',
          }}>
            Start A Conversation
          </Link>
        </FadeUp>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .services-hero-grid { grid-template-columns: 1fr !important; }
          .service-row { grid-template-columns: 1fr !important; }
          .service-row > div { order: unset !important; }
          .process-strip-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
