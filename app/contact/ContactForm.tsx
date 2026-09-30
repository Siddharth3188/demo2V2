'use client';
import { useState } from 'react';

const inputStyle: React.CSSProperties = {
  width: '100%',
  fontFamily: 'Inter, sans-serif',
  fontSize: 14,
  color: 'var(--ink)',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--linen)',
  padding: '12px 0',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  appearance: 'none',
  borderRadius: 0,
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 10,
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: 'var(--stone-light)',
  display: 'block',
  marginBottom: 6,
  marginTop: 32,
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    projectType: '', location: '', area: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Please describe your project.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderBottomColor: focused === field ? 'var(--ink)' : errors[field] ? '#c0392b' : 'var(--linen)',
  });

  if (submitted) {
    return (
      <div style={{ padding: 'clamp(48px, 6vw, 80px) 0', textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, border: '1px solid var(--linen)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 36, fontWeight: 400, color: 'var(--ink)', marginBottom: 16, lineHeight: 1.2 }}>
          Thank you. Your project enquiry has been received.
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--stone)', marginBottom: 8, lineHeight: 1.7 }}>
          We'll be in touch within two working days.
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'var(--stone-light)', letterSpacing: '0.05em' }}>
          Demo form — no real message was sent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }} className="form-grid">
        <div>
          <label htmlFor="name" style={labelStyle}>Name *</label>
          <input id="name" type="text" value={form.name} placeholder="Your name"
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
            style={focusStyle('name')} />
          {errors.name && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#c0392b', marginTop: 6 }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input id="email" type="email" value={form.email} placeholder="your@email.com"
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
            style={focusStyle('email')} />
          {errors.email && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#c0392b', marginTop: 6 }}>{errors.email}</p>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }} className="form-grid">
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone</label>
          <input id="phone" type="tel" value={form.phone} placeholder="+91 XXXXX XXXXX"
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
            style={focusStyle('phone')} />
        </div>
        <div>
          <label htmlFor="location" style={labelStyle}>Project Location</label>
          <input id="location" type="text" value={form.location} placeholder="City, Country"
            onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
            onFocus={() => setFocused('location')} onBlur={() => setFocused(null)}
            style={focusStyle('location')} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }} className="form-grid">
        <div>
          <label htmlFor="projectType" style={labelStyle}>Project Type</label>
          <select id="projectType" value={form.projectType}
            onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))}
            onFocus={() => setFocused('projectType')} onBlur={() => setFocused(null)}
            style={{ ...focusStyle('projectType'), cursor: 'pointer', backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%237A7570' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 4px center', paddingRight: 24 }}>
            <option value="">Select type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="area" style={labelStyle}>Approximate Project Size</label>
          <input id="area" type="text" value={form.area} placeholder="e.g. 2,000 sq ft"
            onChange={e => setForm(f => ({ ...f, area: e.target.value }))}
            onFocus={() => setFocused('area')} onBlur={() => setFocused(null)}
            style={focusStyle('area')} />
        </div>
      </div>

      <div>
        <label htmlFor="budget" style={labelStyle}>Budget Range</label>
        <select id="budget" value={form.budget}
          onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
          onFocus={() => setFocused('budget')} onBlur={() => setFocused(null)}
          style={{ ...focusStyle('budget'), cursor: 'pointer', backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%237A7570' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 4px center', paddingRight: 24 }}>
          <option value="">Prefer not to say</option>
          <option value="under10">Under ₹10L</option>
          <option value="10-25">₹10L – ₹25L</option>
          <option value="25-50">₹25L – ₹50L</option>
          <option value="50plus">₹50L+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>About Your Project *</label>
        <textarea id="message" value={form.message} placeholder="Tell us about the space, what you'd like it to become and anything else that would help us understand the project."
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
          rows={5}
          style={{
            ...focusStyle('message'),
            resize: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            lineHeight: 1.7,
          }} />
        {errors.message && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#c0392b', marginTop: 6 }}>{errors.message}</p>}
      </div>

      <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <button type="submit" style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          background: 'var(--ink)', color: 'var(--bg)',
          border: 'none', padding: '16px 48px', cursor: 'pointer',
          transition: 'background 0.2s ease',
        }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--brown)'; }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = 'var(--ink)'; }}
        >
          Start A Conversation
        </button>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'var(--stone-light)' }}>
          Demo form — no real message is sent.
        </p>
      </div>

      <style>{`
        .form-grid { margin-top: 0; }
        input::placeholder, textarea::placeholder { color: var(--stone-light); }
        select option { background: var(--bg); color: var(--ink); }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
