import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  type: 'cyan' | 'dark' | 'dual' | 'ambient';
  baseOpacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // High-DPI handling
    const setupCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setupCanvasSize();

    // Determine particle count based on screen width
    const particleCount = width < 640 ? 32 : width < 1024 ? 48 : 65;

    // Initialize particles
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Type distribution:
      // ~40% cyan spots, ~35% dark spots, ~15% dual (cyan halo + dark center), ~10% ambient soft spots
      const rand = Math.random();
      let type: Particle['type'] = 'cyan';
      if (rand < 0.4) {
        type = 'cyan';
      } else if (rand < 0.75) {
        type = 'dark';
      } else if (rand < 0.9) {
        type = 'dual';
      } else {
        type = 'ambient';
      }

      // Radius based on type
      let radius = 2.2;
      let baseOpacity = 0.5;

      if (type === 'cyan') {
        radius = 1.6 + Math.random() * 1.8; // 1.6 - 3.4px
        baseOpacity = 0.45 + Math.random() * 0.35;
      } else if (type === 'dark') {
        radius = 1.4 + Math.random() * 1.6; // 1.4 - 3.0px
        baseOpacity = 0.4 + Math.random() * 0.3;
      } else if (type === 'dual') {
        radius = 2.4 + Math.random() * 1.6; // 2.4 - 4.0px
        baseOpacity = 0.55 + Math.random() * 0.3;
      } else {
        radius = 5.0 + Math.random() * 4.0; // 5.0 - 9.0px ambient glow spot
        baseOpacity = 0.18 + Math.random() * 0.15;
      }

      // Velocities: gentle organic drifting (running particles)
      const speed = prefersReducedMotion ? 0.05 : 0.25 + Math.random() * 0.35;
      const angle = Math.random() * Math.PI * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx,
        vy,
        radius,
        baseRadius: radius,
        type,
        baseOpacity,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
      });
    }

    // Mouse interaction tracking
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      setupCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';

      // 1. Draw subtle connection micro-lines between nearby particles
      const maxDistance = 75;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const factor = 1 - dist / maxDistance;
            const lineAlpha = factor * (isDark ? 0.15 : 0.12);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (isDark) {
              ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
            } else {
              if (p1.type === 'cyan' && p2.type === 'cyan') {
                ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha * 1.5})`;
              } else if (p1.type === 'dark' && p2.type === 'dark') {
                ctx.strokeStyle = `rgba(15, 23, 42, ${lineAlpha * 0.8})`;
              } else {
                ctx.strokeStyle = `rgba(8, 145, 178, ${lineAlpha})`;
              }
            }
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 2. Update and draw each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxRepelDist = 110;

        if (dist < maxRepelDist && dist > 0) {
          const force = ((maxRepelDist - dist) / maxRepelDist) * 0.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Screen boundary wrapping
        const margin = 20;
        if (p.x < -margin) p.x = width + margin;
        else if (p.x > width + margin) p.x = -margin;
        if (p.y < -margin) p.y = height + margin;
        else if (p.y > height + margin) p.y = -margin;

        // Pulse opacity
        p.pulsePhase += p.pulseSpeed;
        const opacity = p.baseOpacity * (0.75 + 0.25 * Math.sin(p.pulsePhase));

        // Draw particle based on type & theme
        ctx.save();

        if (isDark) {
          // ================= DARK THEME =================
          if (p.type === 'cyan') {
            // Neon cyan spot with bright aura
            ctx.shadowColor = 'rgba(34, 211, 238, 0.75)';
            ctx.shadowBlur = 8;
            ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.type === 'dark') {
            // Elegant silver-slate micro star dot in dark mode
            ctx.fillStyle = `rgba(148, 163, 184, ${opacity * 0.7})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 0.9, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.type === 'dual') {
            // Electric cyan core with subtle violet/cyan glow halo
            ctx.shadowColor = 'rgba(6, 182, 212, 0.8)';
            ctx.shadowBlur = 10;
            ctx.fillStyle = `rgba(6, 182, 212, ${opacity * 0.4})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(224, 242, 254, ${opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Ambient glowing nebula bokeh
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
            grad.addColorStop(0, `rgba(34, 211, 238, ${opacity * 0.4})`);
            grad.addColorStop(0.6, `rgba(168, 85, 247, ${opacity * 0.15})`);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          // ================= LIGHT THEME =================
          // Specifically fulfilling: "particle cyan dark sportလေးတွေပြေးနေတဲ့ background"
          if (p.type === 'cyan') {
            // Vibrant Cyan Spot with luminous cyan aura
            ctx.shadowColor = 'rgba(6, 182, 212, 0.55)';
            ctx.shadowBlur = 6;
            ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.type === 'dark') {
            // Crisp Dark Slate/Charcoal Spot
            ctx.fillStyle = `rgba(15, 23, 42, ${opacity * 0.85})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.type === 'dual') {
            // "Cyan Dark Spot" — Crisp dark center spot enveloped in glowing cyan halo!
            ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
            ctx.shadowBlur = 7;
            // Cyan halo
            ctx.fillStyle = `rgba(6, 182, 212, ${opacity * 0.45})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 1.9, 0, Math.PI * 2);
            ctx.fill();

            // Dark center spot
            ctx.fillStyle = `rgba(15, 23, 42, ${opacity * 0.9})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Soft floating ambient cyan bokeh spot
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
            grad.addColorStop(0, `rgba(6, 182, 212, ${opacity * 0.35})`);
            grad.addColorStop(0.6, `rgba(14, 165, 233, ${opacity * 0.12})`);
            grad.addColorStop(1, 'rgba(6, 182, 212, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
      style={{
        opacity: theme === 'dark' ? 0.85 : 0.95,
      }}
    />
  );
};

export default BackgroundParticles;
