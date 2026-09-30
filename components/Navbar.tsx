'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/studio', label: 'Studio' },
  { href: '/services', label: 'Services' },
  { href: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(249,247,244,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid #EAE5DF' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto',
          padding: '0 32px', height: 72,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/" style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 22, fontWeight: 500, letterSpacing: '0.12em',
            color: 'var(--ink)', textDecoration: 'none',
          }}>
            ATELIER
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link" style={{
                fontFamily: 'Inter, sans-serif', fontSize: 12,
                fontWeight: 500, letterSpacing: '0.08em',
                color: pathname === link.href ? 'var(--ink)' : 'var(--stone)',
                textDecoration: 'none', textTransform: 'uppercase',
                borderBottom: pathname === link.href ? '1px solid var(--ink)' : '1px solid transparent',
                paddingBottom: 2,
              }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta" style={{
              fontFamily: 'Inter, sans-serif', fontSize: 11,
              fontWeight: 500, letterSpacing: '0.1em',
              color: 'var(--bg)', background: 'var(--ink)',
              textDecoration: 'none', textTransform: 'uppercase',
              padding: '10px 22px', marginLeft: 8,
            }}>
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-nav-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'none', flexDirection: 'column', gap: 5, padding: 8,
            }}
          >
            <span style={{
              display: 'block', width: 24, height: 1, background: 'var(--ink)',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 24, height: 1, background: 'var(--ink)',
              transition: 'opacity 0.2s ease', opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 24, height: 1, background: 'var(--ink)',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 90,
        background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '0 48px',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
      }}>
        <div style={{ marginBottom: 8, color: 'var(--stone-light)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
          Navigation
        </div>
        {[...navLinks, { href: '/contact', label: 'Contact' }].map((link, i) => (
          <Link key={link.href} href={link.href} style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(36px, 8vw, 56px)',
            fontWeight: 300, color: 'var(--ink)',
            textDecoration: 'none', lineHeight: 1.15,
            borderBottom: i < navLinks.length ? '1px solid var(--linen-pale)' : 'none',
            paddingBottom: 16, paddingTop: 16, display: 'block',
            transition: `opacity 0.3s ease ${i * 0.05}s`,
            opacity: menuOpen ? 1 : 0,
          }} className="mobile-nav-link">
            {link.label}
          </Link>
        ))}
        <div style={{ marginTop: 48, fontSize: 12, color: 'var(--stone)', fontFamily: 'Inter, sans-serif' }}>
          hello@atelier.example · Chennai, India
        </div>
      </div>

      <style>{`
        .nav-link:hover { color: var(--ink) !important; }
        .nav-cta:hover { background: var(--brown) !important; }
        .mobile-nav-link:hover { opacity: 0.6 !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
