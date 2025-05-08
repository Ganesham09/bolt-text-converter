import { useEffect, useRef } from 'react';

interface WorldMapBackgroundProps {
  isDark: boolean;
}

export function WorldMapBackground({ isDark }: WorldMapBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const drawMesh = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = isDark ? '#0a0a0f' : '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // Mesh pattern
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.5)' : 'rgba(107, 114, 128, 0.6)';
      ctx.lineWidth = 2;

      // Draw grid
      const gridSize = 30;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Add subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      if (isDark) {
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.08)');
      } else {
        gradient.addColorStop(0, 'rgba(107, 114, 128, 0.25)');
        gradient.addColorStop(1, 'rgba(107, 114, 128, 0.15)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    // Initial setup
    resizeCanvas();
    drawMesh();

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      drawMesh();
    });

    // Theme change observer
    const observer = new MutationObserver(() => {
      drawMesh();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
} 