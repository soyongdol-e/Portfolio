'use client';

import { useEffect, useState } from 'react';

const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Open Source Contributor'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 1.5rem 4rem',
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '10%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '100px',
            border: '1px solid rgba(124,58,237,0.3)',
            background: 'rgba(124,58,237,0.08)',
            marginBottom: '2rem',
            fontSize: '0.8rem', fontWeight: '500', color: 'var(--accent-light)',
            opacity: 0,
            animation: 'fadeInUp 0.7s ease 0.1s forwards',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'blink 1.5s infinite' }} />
          Available for work
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: '800',
            lineHeight: '1.05',
            marginBottom: '1.5rem',
            opacity: 0,
            animation: 'fadeInUp 0.7s ease 0.2s forwards',
            letterSpacing: '-0.03em',
          }}
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">Soyong Dol</span>
        </h1>

        {/* Typewriter */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: '400',
            color: 'var(--muted)',
            marginBottom: '1rem',
            minHeight: '2.2rem',
            opacity: 0,
            animation: 'fadeInUp 0.7s ease 0.3s forwards',
          }}
        >
          <span style={{ color: 'var(--foreground)', fontWeight: '500' }}>{displayed}</span>
          <span style={{ animation: 'blink 1s infinite', color: 'var(--accent-light)', fontWeight: '300' }}>|</span>
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'var(--muted)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.8',
            opacity: 0,
            animation: 'fadeInUp 0.7s ease 0.4s forwards',
          }}
        >
          I craft beautiful, performant web experiences with modern technologies.
          Passionate about clean code, great design, and meaningful products.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
            marginBottom: '4rem',
            opacity: 0,
            animation: 'fadeInUp 0.7s ease 0.5s forwards',
          }}
        >
          <a
            href="#projects"
            style={{
              padding: '14px 32px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 24px rgba(124,58,237,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(124,58,237,0.3)';
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              padding: '14px 32px',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--card)',
              color: 'var(--foreground)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-light)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div
          style={{
            display: 'flex', gap: '1.25rem', justifyContent: 'center',
            opacity: 0,
            animation: 'fadeInUp 0.7s ease 0.6s forwards',
          }}
        >
          {[
            { label: 'GitHub', href: 'https://github.com/soyongdol', icon: <GitHubIcon /> },
            { label: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
            { label: 'Email', href: 'mailto:hello@soyongdol.dev', icon: <EmailIcon /> },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px', borderRadius: '10px',
                border: '1px solid var(--border)',
                background: 'var(--card)',
                color: 'var(--muted)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--muted)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: '5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
            color: 'var(--muted)', fontSize: '0.75rem',
            opacity: 0, animation: 'fadeIn 1s ease 1.5s forwards',
          }}
        >
          <span>Scroll to explore</span>
          <div style={{
            width: '24px', height: '36px', borderRadius: '12px',
            border: '2px solid var(--border)',
            display: 'flex', justifyContent: 'center', paddingTop: '6px',
          }}>
            <div style={{
              width: '3px', height: '8px', borderRadius: '2px',
              background: 'var(--accent-light)',
              animation: 'float 1.5s ease-in-out infinite',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
