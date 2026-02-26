'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'DevFlow — Developer Hub',
    description:
      'A full-stack platform for developers to share code snippets, collaborate on projects, and discover open source opportunities. Built with Next.js 14, TypeScript, and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    gradient: 'linear-gradient(135deg, #7c3aed22, #06b6d422)',
    accentColor: '#7c3aed',
    icon: '🚀',
    year: '2024',
  },
  {
    title: 'AiChat — LLM Playground',
    description:
      'An AI-powered chat interface supporting multiple language models. Features real-time streaming, conversation history, model switching, and prompt templates.',
    tags: ['React', 'Node.js', 'OpenAI API', 'WebSocket', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    gradient: 'linear-gradient(135deg, #06b6d422, #7c3aed22)',
    accentColor: '#06b6d4',
    icon: '🤖',
    year: '2024',
  },
  {
    title: 'ShopSmart — E-Commerce',
    description:
      'A modern e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard. Optimized for performance with server-side rendering.',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'AWS S3', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    gradient: 'linear-gradient(135deg, #f59e0b22, #ef444422)',
    accentColor: '#f59e0b',
    icon: '🛍️',
    year: '2023',
  },
  {
    title: 'TaskFlow — PM Tool',
    description:
      'A project management application with kanban boards, time tracking, team collaboration, and analytics. Built with React, GraphQL, and PostgreSQL.',
    tags: ['React', 'GraphQL', 'PostgreSQL', 'Docker', 'Apollo'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    gradient: 'linear-gradient(135deg, #10b98122, #06b6d422)',
    accentColor: '#10b981',
    icon: '📋',
    year: '2023',
  },
  {
    title: 'WeatherNow — Weather App',
    description:
      'A beautiful weather application with location detection, 7-day forecasts, interactive maps, and weather alerts. Uses OpenWeather API.',
    tags: ['React', 'TypeScript', 'OpenWeather API', 'Leaflet'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    gradient: 'linear-gradient(135deg, #3b82f622, #06b6d422)',
    accentColor: '#3b82f6',
    icon: '🌤️',
    year: '2023',
  },
  {
    title: 'CodeSnap — CLI Tool',
    description:
      'A developer CLI tool for creating beautiful code screenshots from the terminal, with syntax highlighting, themes, and multiple export formats.',
    tags: ['Python', 'Click', 'Pygments', 'PIL', 'PyPI'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    gradient: 'linear-gradient(135deg, #8b5cf622, #ec489922)',
    accentColor: '#8b5cf6',
    icon: '📸',
    year: '2022',
  },
];

const filters = ['All', 'Featured', 'Frontend', 'Backend', 'Fullstack'];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === 'Featured'
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: '7rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Portfolio</div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '0 auto' }}>
            A selection of projects I&apos;ve worked on — from side projects to production applications
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '8px 18px',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: activeFilter === filter ? 'var(--accent)' : 'var(--border)',
                background: activeFilter === filter ? 'rgba(124,58,237,0.15)' : 'var(--card)',
                color: activeFilter === filter ? 'var(--accent-light)' : 'var(--muted)',
                fontSize: '0.85rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map((project, i) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                borderRadius: '16px',
                background: 'var(--card)',
                border: '1px solid',
                borderColor: hoveredIdx === i ? project.accentColor + '60' : 'var(--border)',
                overflow: 'hidden',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.3s ease, box-shadow 0.3s ease`,
                boxShadow: hoveredIdx === i ? `0 8px 32px ${project.accentColor}20` : 'none',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Project header */}
              <div style={{
                padding: '1.75rem 1.75rem 1.25rem',
                background: project.gradient,
                borderBottom: '1px solid var(--border)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '2rem' }}>{project.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '2px' }}>{project.title}</h3>
                    <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{project.year}</span>
                  </div>
                </div>
                {project.featured && (
                  <span style={{
                    padding: '3px 10px',
                    borderRadius: '100px',
                    background: 'rgba(124,58,237,0.2)',
                    border: '1px solid rgba(124,58,237,0.4)',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    color: 'var(--accent-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{
                  color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.7',
                  marginBottom: '1.25rem', flex: 1,
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '3px 10px',
                        borderRadius: '4px',
                        background: 'rgba(255,255,255,0.05)',
                        fontSize: '0.72rem',
                        fontWeight: '500',
                        color: 'var(--muted)',
                        fontFamily: 'monospace',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '8px 16px', borderRadius: '8px',
                      border: '1px solid var(--border)',
                      background: 'transparent',
                      color: 'var(--muted)',
                      textDecoration: 'none',
                      fontSize: '0.8rem', fontWeight: '500',
                      transition: 'all 0.2s ease',
                      flex: 1, justifyContent: 'center',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--foreground)';
                      e.currentTarget.style.color = 'var(--foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.color = 'var(--muted)';
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '8px 16px', borderRadius: '8px',
                      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '0.8rem', fontWeight: '600',
                      transition: 'opacity 0.2s ease',
                      flex: 1, justifyContent: 'center',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/soyongdol"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 28px', borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--card)',
              color: 'var(--foreground)',
              textDecoration: 'none',
              fontWeight: '600', fontSize: '0.9rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
