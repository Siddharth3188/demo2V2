import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--ink-deep)',
      color: 'var(--linen-pale)',
      padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px) 48px',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px 64px',
          marginBottom: 80,
          paddingBottom: 64,
          borderBottom: '1px solid rgba(196,185,172,0.2)',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 26, fontWeight: 500,
              letterSpacing: '0.1em', marginBottom: 16,
              color: '#FFFFFF',
            }}>
              ATELIER
            </div>
            <p style={{ fontSize: 13, color: 'var(--stone-light)', lineHeight: 1.6, maxWidth: 240, fontFamily: 'Inter, sans-serif' }}>
              Spaces With A Point Of View.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 24, fontFamily: 'Inter, sans-serif' }}>
              Pages
            </div>
            {([['/', 'Home'], ['/projects', 'Projects'], ['/studio', 'Studio'], ['/services', 'Services'], ['/journal', 'Journal'], ['/contact', 'Contact']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} className="footer-link" style={{
                display: 'block', fontSize: 13,
                color: 'var(--linen)', textDecoration: 'none',
                marginBottom: 12, fontFamily: 'Inter, sans-serif',
              }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 24, fontFamily: 'Inter, sans-serif' }}>
              Studio
            </div>
            <p style={{ fontSize: 13, color: 'var(--linen)', marginBottom: 8, fontFamily: 'Inter, sans-serif' }}>
              hello@atelier.example
            </p>
            <p style={{ fontSize: 13, color: 'var(--linen)', marginBottom: 32, lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
              Chennai, India
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Instagram', 'Pinterest'].map(s => (
                <span key={s} style={{
                  fontSize: 12, color: 'var(--stone-light)',
                  fontFamily: 'Inter, sans-serif',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontSize: 12, color: 'var(--stone-light)', fontFamily: 'Inter, sans-serif' }}>
            © 2026 Atelier. Concept project.
          </p>
          <p style={{ fontSize: 12, color: 'var(--stone-light)', opacity: 0.5, fontFamily: 'Inter, sans-serif' }}>
            Demo website — fictional brand
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #ffffff !important; }
      `}</style>
    </footer>
  );
}
