'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '10+', label: 'Happy Clients' },
  { value: '5k+', label: 'GitHub Commits' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '7rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Left: Image/Visual */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '380px' }}>
            {/* Avatar card */}
            <div style={{
              borderRadius: '20px',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Gradient top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
              }} />

              {/* Avatar placeholder */}
              <div style={{
                width: '120px', height: '120px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c3aed22, #06b6d422)',
                border: '3px solid rgba(124,58,237,0.3)',
                margin: '0 auto 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem',
              }}>
                👨‍💻
              </div>

              <h3 style={{ fontWeight: '700', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Soyong Dol</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Full-Stack Developer</p>

              {/* Info rows */}
              {[
                { icon: '📍', label: 'Location', value: 'Seoul, South Korea' },
                { icon: '🎓', label: 'Education', value: 'Computer Science' },
                { icon: '💼', label: 'Status', value: 'Open to Opportunities' },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 0',
                  borderTop: '1px solid var(--border)',
                  textAlign: 'left',
                }}>
                  <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: '-16px', right: '-16px',
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '12px 16px',
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '0.8rem', fontWeight: '600',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}>
              <span style={{ color: '#4ade80' }}>✓</span> Available for work
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          <div className="section-label" style={{ marginBottom: '1rem' }}>About Me</div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Building digital products<br />
            <span className="gradient-text">people love to use</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            <p>
              I&apos;m a passionate full-stack developer with a strong eye for design and a love for building
              clean, user-centered applications. I thrive at the intersection of engineering and creativity.
            </p>
            <p>
              From crafting pixel-perfect UIs to architecting scalable back-end systems, I bring ideas to life
              with modern technology stacks. I&apos;m particularly interested in React, TypeScript, and cloud-native
              development.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me contributing to open source, writing about web development,
              or exploring new tools and frameworks.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                }}
              >
                <div style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '4px' }} className="gradient-text">
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px',
              borderRadius: '10px',
              border: '1px solid rgba(124,58,237,0.4)',
              background: 'rgba(124,58,237,0.08)',
              color: 'var(--accent-light)',
              textDecoration: 'none',
              fontWeight: '600', fontSize: '0.875rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(124,58,237,0.15)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(124,58,237,0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
