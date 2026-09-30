import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import FadeUp from '@/components/ui/FadeUp';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Have a project in mind? Tell us about the space and what you'd like it to become.",
};

export default function ContactPage() {
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 80px', alignItems: 'end' }} className="contact-hero-grid">
          <FadeUp>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 24 }}>Get In Touch</p>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(40px, 6vw, 78px)',
              fontWeight: 400, lineHeight: 1.0,
              color: 'var(--ink)', letterSpacing: '-0.01em',
            }}>
              Let's Talk About<br />Your Space.
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'var(--stone)', lineHeight: 1.85, maxWidth: 400 }}>
              Have a project in mind? Tell us a little about the space, the possibilities and what you would like it to become.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact body */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px 100px', alignItems: 'start' }} className="contact-body-grid">
          {/* Contact info */}
          <FadeUp>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 12 }}>Email</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--ink)', marginBottom: 36 }}>hello@atelier.example</p>

              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 12 }}>Phone</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--ink)', marginBottom: 36 }}>+91 XXXXX XXXXX</p>

              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 12 }}>Studio</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--ink)', marginBottom: 64, lineHeight: 1.7 }}>Chennai, India</p>

              <div style={{ borderTop: '1px solid var(--linen-pale)', paddingTop: 32 }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: 12 }}>Response Time</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--stone)', lineHeight: 1.7 }}>
                  We aim to respond to all enquiries within two working days.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-hero-grid { grid-template-columns: 1fr !important; }
          .contact-body-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
