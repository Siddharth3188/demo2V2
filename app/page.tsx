import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import FadeUp from '@/components/ui/FadeUp';

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '100svh', minHeight: 600, overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85"
          alt="Contemporary interior with warm natural light and minimal furnishings"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(15,15,14,0.45) 0%, rgba(15,15,14,0.2) 60%, rgba(15,15,14,0.5) 100%)',
        }} />

        {/* Content */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(32px, 6vw, 80px)',
          maxWidth: 1400, margin: '0 auto', left: 0, right: 0,
        }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
              marginBottom: 24,
            }}>
              Interior Architecture & Design
            </div>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(44px, 7vw, 88px)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: '#FFFFFF',
              marginBottom: 28,
              letterSpacing: '-0.01em',
            }}>
              Spaces With A<br />Point Of View.
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.7,
              maxWidth: 440,
              marginBottom: 44,
            }}>
              Interior architecture and design shaped around how people live, work and experience space.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/projects" style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                background: '#FFFFFF', color: 'var(--ink)',
                textDecoration: 'none', padding: '14px 32px',
                transition: 'background 0.2s ease',
                display: 'inline-block',
              }}>
                Explore Projects
              </Link>
              <Link href="/studio" style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'transparent', color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.5)',
                textDecoration: 'none', padding: '14px 32px',
                transition: 'border-color 0.2s ease',
                display: 'inline-block',
              }}>
                Our Studio
              </Link>
            </div>
          </div>

          {/* Scroll hint */}
          <div style={{
            position: 'absolute', bottom: 40, right: 'clamp(32px, 6vw, 80px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
            opacity: 0.5,
          }}>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#FFF',
              writingMode: 'vertical-rl', transform: 'rotate(180deg)',
            }}>Scroll</div>
            <div style={{ width: 1, height: 48, background: 'rgba(255,255,255,0.4)' }} />
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)',
        maxWidth: 1400, margin: '0 auto',
      }}>
        <FadeUp>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)',
            gap: '48px 80px',
            alignItems: 'start',
          }} className="intro-grid">
            <div>
              <div style={{
                width: 40, height: 1, background: 'var(--linen)', marginBottom: 20,
              }} />
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--stone)',
              }}>
                About the Studio
              </p>
            </div>
            <div>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 400, lineHeight: 1.15,
                color: 'var(--ink)', marginBottom: 28,
                letterSpacing: '-0.01em',
              }}>
                Designing spaces with intention.
              </h2>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 15,
                color: 'var(--stone)', lineHeight: 1.8, maxWidth: 560,
              }}>
                Atelier approaches each project as a conversation between architecture, material and everyday life. We create interiors that feel considered, personal and quietly distinctive.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{
        padding: '0 clamp(24px, 6vw, 80px) clamp(80px, 12vw, 160px)',
        maxWidth: 1400, margin: '0 auto',
      }}>
        <FadeUp>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 60, flexWrap: 'wrap', gap: 24,
          }}>
            <div>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--stone)', marginBottom: 12,
              }}>Selected Work</p>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 400, lineHeight: 1.1,
                color: 'var(--ink)',
              }}>
                A selection of spaces<br />shaped by material and light.
              </h2>
            </div>
            <Link href="/projects" style={{
              fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--stone)', textDecoration: 'none',
              borderBottom: '1px solid var(--linen)',
              paddingBottom: 3, whiteSpace: 'nowrap',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}>
              View All Projects
            </Link>
          </div>
        </FadeUp>

        {/* Project grid — staggered layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }} className="project-grid">
          {featured.map((project, i) => {
            const isLarge = i === 0 || i === 3;
            const colSpan = isLarge ? 7 : 5;
            const offset = i === 1 ? 'column-start: 8' : i === 2 ? '' : '';
            return (
              <FadeUp key={project.slug} delay={i * 0.08} style={{ gridColumn: `span ${colSpan}` }} className={`project-card-${i}`}>
                <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }} className="project-card">
                  <div style={{
                    overflow: 'hidden',
                    aspectRatio: isLarge ? '4/3' : '3/4',
                    position: 'relative',
                    background: '#E8E3DD',
                  }}>
                    <Image
                      src={project.coverImage}
                      alt={project.name}
                      fill
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.7s ease',
                      }}
                      className="project-img"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div style={{
                      position: 'absolute', top: 16, left: 16,
                      fontFamily: 'Inter, sans-serif', fontSize: 10,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      background: 'rgba(249,247,244,0.92)', color: 'var(--stone)',
                      padding: '6px 12px',
                    }}>
                      {project.status}
                    </div>
                  </div>
                  <div style={{ paddingTop: 20 }}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'flex-start', gap: 16,
                    }}>
                      <div>
                        <p style={{
                          fontFamily: 'Inter, sans-serif', fontSize: 10,
                          letterSpacing: '0.12em', textTransform: 'uppercase',
                          color: 'var(--stone-light)', marginBottom: 6,
                        }}>
                          {project.number} — {project.type}
                        </p>
                        <h3 style={{
                          fontFamily: 'Cormorant Garamond, Georgia, serif',
                          fontSize: 'clamp(18px, 2.2vw, 24px)',
                          fontWeight: 400, color: 'var(--ink)',
                          lineHeight: 1.2, marginBottom: 6,
                        }}>
                          {project.name}
                        </h3>
                        <p style={{
                          fontFamily: 'Inter, sans-serif', fontSize: 12,
                          color: 'var(--stone)', lineHeight: 1.5,
                        }}>
                          {project.location} · {project.year}
                        </p>
                      </div>
                      <div style={{
                        width: 32, height: 32, border: '1px solid var(--linen)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, marginTop: 4,
                        transition: 'background 0.2s ease, border-color 0.2s ease',
                      }} className="project-arrow">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section style={{ background: 'var(--ink-deep)', padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <FadeUp>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px 48px',
            }}>
              <div style={{ gridColumn: 'span 1' }}>
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 300, color: '#FFFFFF',
                  lineHeight: 1.2, marginBottom: 24,
                }}>
                  Designed around the way you live.
                </h2>
                <Link href="/services" style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--linen)', textDecoration: 'none',
                  borderBottom: '1px solid rgba(196,185,172,0.3)',
                  paddingBottom: 3, display: 'inline-block',
                  transition: 'color 0.2s ease',
                }}>
                  View Services
                </Link>
              </div>
              {[
                { n: '01', title: 'Residential Interiors', desc: 'Thoughtful spaces shaped around everyday life and personality.' },
                { n: '02', title: 'Commercial Spaces', desc: 'Distinctive environments designed for identity and function.' },
                { n: '03', title: 'Interior Architecture', desc: 'Spatial planning and material selection as one vision.' },
                { n: '04', title: 'Full-Service Design', desc: 'A complete journey from concept to final detail.' },
              ].map(s => (
                <div key={s.n} style={{ borderTop: '1px solid rgba(196,185,172,0.15)', paddingTop: 24 }}>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 10,
                    letterSpacing: '0.15em', color: 'var(--stone-light)',
                    textTransform: 'uppercase', marginBottom: 12,
                  }}>{s.n}</p>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: 20, fontWeight: 400, color: '#FFFFFF',
                    marginBottom: 10, lineHeight: 1.2,
                  }}>{s.title}</h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 13,
                    color: 'var(--stone-light)', lineHeight: 1.65,
                  }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── JOURNAL PREVIEW ── */}
      <section style={{ padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 12 }}>Journal</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1 }}>
                Notes on design,<br />material and space.
              </h2>
            </div>
            <Link href="/journal" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none', borderBottom: '1px solid var(--linen)', paddingBottom: 3 }}>All Articles</Link>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40 }}>
          {[
            { cat: 'Design Notes', title: 'Why Natural Light Changes A Room', date: 'March 2026', img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=700&q=80', slug: 'natural-light-changes-a-room' },
            { cat: 'Materials', title: 'The Quiet Power Of Natural Materials', date: 'February 2026', img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=700&q=80', slug: 'quiet-power-of-natural-materials' },
            { cat: 'Process', title: 'Finding Balance Between Function And Form', date: 'December 2025', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80', slug: 'balance-between-function-and-form' },
          ].map((j, i) => (
            <FadeUp key={j.slug} delay={i * 0.1}>
              <Link href={`/journal/${j.slug}`} style={{ textDecoration: 'none', display: 'block' }} className="journal-card">
                <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative', background: '#EAE5DF', marginBottom: 20 }}>
                  <Image src={j.img} alt={j.title} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} className="journal-img" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 8 }}>{j.cat}</p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 22, fontWeight: 400, color: 'var(--ink)', lineHeight: 1.25, marginBottom: 10 }}>{j.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--stone-light)' }}>{j.date}</p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section style={{
        padding: 'clamp(80px, 10vw, 130px) clamp(24px, 6vw, 80px)',
        background: 'var(--linen-pale)',
        textAlign: 'center',
      }}>
        <FadeUp>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 20 }}>
            Have A Space In Mind?
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 400, lineHeight: 1.1,
            color: 'var(--ink)', marginBottom: 16,
          }}>
            Let's explore what<br />it could become.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone)', maxWidth: 400, margin: '0 auto 44px' }}>
            Tell us about your space and the possibilities you see in it.
          </p>
          <Link href="/contact" style={{
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            background: 'var(--ink)', color: 'var(--bg)',
            textDecoration: 'none', padding: '16px 48px',
            display: 'inline-block', transition: 'background 0.2s ease',
          }}>
            Start A Conversation
          </Link>
        </FadeUp>
      </section>

      {/* ── HOVER STYLES ── */}
      <style>{`
        .project-card:hover .project-img { transform: scale(1.04); }
        .project-card:hover .project-arrow { background: var(--ink); border-color: var(--ink); color: #fff; }
        .journal-card:hover .journal-img { transform: scale(1.04); }
        @media (max-width: 900px) {
          .project-grid { display: flex !important; flex-direction: column !important; }
          .intro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
