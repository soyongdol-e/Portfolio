'use client';

import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React', level: 95, color: '#61dafb' },
      { name: 'Next.js', level: 90, color: '#ffffff' },
      { name: 'TypeScript', level: 88, color: '#3178c6' },
      { name: 'Tailwind CSS', level: 92, color: '#38bdf8' },
      { name: 'Vue.js', level: 70, color: '#42b883' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 88, color: '#68a063' },
      { name: 'Python', level: 82, color: '#3572A5' },
      { name: 'PostgreSQL', level: 80, color: '#336791' },
      { name: 'MongoDB', level: 75, color: '#47a248' },
      { name: 'GraphQL', level: 72, color: '#e10098' },
    ],
  },
  {
    title: 'Tools & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Git / GitHub', level: 95, color: '#f05032' },
      { name: 'Docker', level: 78, color: '#2496ed' },
      { name: 'AWS', level: 70, color: '#ff9900' },
      { name: 'Vercel', level: 90, color: '#ffffff' },
      { name: 'Figma', level: 75, color: '#f24e1e' },
    ],
  },
];

const techBadges = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'Docker', 'AWS', 'GraphQL', 'Tailwind', 'Git', 'Redis',
  'Prisma', 'REST APIs', 'CI/CD', 'Jest', 'Figma', 'Linux', 'Vercel',
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: '7rem 1.5rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.03) 50%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Skills & Expertise</div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            My <span className="gradient-text">Technical Stack</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '0 auto' }}>
            Technologies I work with to build modern, scalable applications
          </p>
        </div>

        {/* Skill category cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              style={{
                padding: '1.75rem',
                borderRadius: '16px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${catIdx * 0.15}s, transform 0.6s ease ${catIdx * 0.15}s`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.25rem' }}>{category.icon}</span>
                <h3 style={{ fontWeight: '700', fontSize: '1rem' }}>{category.title}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{skill.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{skill.level}%</span>
                    </div>
                    <div style={{
                      height: '6px', borderRadius: '3px',
                      background: 'rgba(255,255,255,0.08)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        borderRadius: '3px',
                        background: `linear-gradient(90deg, #7c3aed, ${skill.color})`,
                        width: visible ? `${skill.level}%` : '0%',
                        transition: `width 1s ease ${0.4 + catIdx * 0.15 + skillIdx * 0.08}s`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Also familiar with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {techBadges.map((tech, i) => (
              <span
                key={tech}
                style={{
                  padding: '6px 14px',
                  borderRadius: '100px',
                  border: '1px solid var(--border)',
                  background: 'var(--card)',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  color: 'var(--muted)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.8)',
                  transition: `opacity 0.4s ease ${0.5 + i * 0.03}s, transform 0.4s ease ${0.5 + i * 0.03}s`,
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)';
                  e.currentTarget.style.color = 'var(--accent-light)';
                  e.currentTarget.style.background = 'rgba(124,58,237,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--muted)';
                  e.currentTarget.style.background = 'var(--card)';
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
