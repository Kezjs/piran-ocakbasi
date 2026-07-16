/**
 * Piran Ocakbaşı - Fire Embers & Smoke Canvas Particles Simulation
 * High-performance 2D Canvas render loop for volumetric atmosphere.
 */

class FireParticles {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = options.maxParticles || 80;
    this.spawnInterval = options.spawnInterval || 100; // ms
    this.lastSpawnTime = 0;
    this.mouse = { x: -1000, y: -1000, active: false };

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    // Mouse interaction for spark repulsion
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });

    // Start render loop
    requestAnimationFrame((t) => this.loop(t));
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.ctx.scale(dpr, dpr);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  spawnParticle() {
    const x = Math.random() * this.width;
    // Spawn primarily from bottom of screen
    const y = this.height + 20;
    const size = Math.random() * 3 + 1.2; // Ember sizes
    const speedX = (Math.random() - 0.5) * 1.5;
    const speedY = -(Math.random() * 1.8 + 0.8);
    const life = Math.random() * 200 + 150; // frames
    
    // Color palette: deep red, fiery orange, warm yellow
    const hue = Math.floor(Math.random() * 25) + 12; // 12 to 37 (red to orange)
    const brightness = Math.floor(Math.random() * 20) + 50;
    const color = `hsla(${hue}, 100%, ${brightness}%, `;

    this.particles.push({
      x, y, size, speedX, speedY, life, maxLife: life, color,
      decay: Math.random() * 0.005 + 0.003,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.03 + 0.01,
      type: 'ember'
    });
  }

  spawnSmoke() {
    // Volumetric smoke particle
    const x = Math.random() * this.width;
    const y = this.height + 50;
    const size = Math.random() * 60 + 40; // Large smoke puffs
    const speedX = (Math.random() - 0.5) * 0.6;
    const speedY = -(Math.random() * 0.8 + 0.4);
    const life = Math.random() * 300 + 200;
    const alpha = Math.random() * 0.07 + 0.03; // Extremely transparent

    this.particles.push({
      x, y, size, speedX, speedY, life, maxLife: life, alpha,
      decay: Math.random() * 0.002 + 0.001,
      type: 'smoke'
    });
  }

  update(currentTime) {
    // Spawning frequency controls
    if (currentTime - this.lastSpawnTime > this.spawnInterval) {
      if (this.particles.filter(p => p.type === 'ember').length < this.maxParticles) {
        this.spawnParticle();
      }
      if (this.particles.filter(p => p.type === 'smoke').length < this.maxParticles * 0.3) {
        this.spawnSmoke();
      }
      this.lastSpawnTime = currentTime;
    }

    // Update and filter particles
    this.particles = this.particles.filter(p => {
      p.life -= 1;
      if (p.life <= 0) return false;

      // Physics
      if (p.type === 'ember') {
        p.swayOffset += p.swaySpeed;
        p.x += p.speedX + Math.sin(p.swayOffset) * 0.4;
        p.y += p.speedY;

        // Interaction with mouse pointer (repulsion)
        if (this.mouse.active) {
          const dx = p.x - this.mouse.x;
          const dy = p.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            p.x += (dx / dist) * force * 3;
            p.y += (dy / dist) * force * 2;
          }
        }
      } else {
        // Smoke physics: slow rising, expanding size
        p.x += p.speedX;
        p.y += p.speedY;
        p.size += 0.15;
      }

      // Keep inside screen bounds horizontally
      if (p.x < -p.size) p.x = this.width + p.size;
      if (p.x > this.width + p.size) p.x = -p.size;

      return p.y > -p.size; // Remove when off top
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      const lifeRatio = p.life / p.maxLife;

      if (p.type === 'ember') {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Add particle glow
        this.ctx.shadowBlur = p.size * 3;
        this.ctx.shadowColor = `rgba(255, 107, 0, ${lifeRatio})`;
        
        this.ctx.fillStyle = p.color + lifeRatio + ')';
        this.ctx.fill();
        this.ctx.restore();
      } else {
        // Draw smoke
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Dynamic smoke fading
        let alpha = p.alpha;
        if (lifeRatio < 0.3) {
          alpha = p.alpha * (lifeRatio / 0.3); // Fade out at end of life
        } else if (lifeRatio > 0.8) {
          alpha = p.alpha * ((1 - lifeRatio) / 0.2); // Fade in at spawn
        }

        // Smoke color is soft warm charcoal gray
        this.ctx.fillStyle = `rgba(35, 30, 28, ${alpha})`;
        this.ctx.fill();
      }
    }
  }

  loop(currentTime) {
    this.update(currentTime);
    this.draw();
    requestAnimationFrame((t) => this.loop(t));
  }
}

// Preloader Specific Ember Particles (Intense, fast, vertical only)
class PreloaderParticles {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.canvas = document.createElement('canvas');
    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.active = true;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    // Spawn initial particles
    for (let i = 0; i < 40; i++) {
      this.spawn(Math.random() * this.height);
    }

    requestAnimationFrame((t) => this.loop(t));
  }

  resize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  spawn(yPos = null) {
    const x = Math.random() * this.width;
    const y = yPos !== null ? yPos : this.height + 10;
    const size = Math.random() * 2 + 1;
    const speedY = -(Math.random() * 3 + 2);
    const life = Math.random() * 100 + 50;
    const hue = Math.floor(Math.random() * 20) + 15;

    this.particles.push({
      x, y, size, speedY, life, maxLife: life, hue
    });
  }

  update() {
    if (!this.active) return;

    if (Math.random() < 0.4 && this.particles.length < 60) {
      this.spawn();
    }

    this.particles = this.particles.filter(p => {
      p.life -= 1;
      p.y += p.speedY;
      p.x += (Math.random() - 0.5) * 1;
      return p.life > 0 && p.y > -10;
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      const ratio = p.life / p.maxLife;
      
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${ratio})`;
      this.ctx.fill();
    }
  }

  loop() {
    if (!this.active) return;
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  stop() {
    this.active = false;
    this.particles = [];
    this.ctx.clearRect(0, 0, this.width, this.height);
    if (this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

// Instantiate particles when loaded
document.addEventListener('DOMContentLoaded', () => {
  window.mainBgParticles = new FireParticles('particlesCanvas', {
    maxParticles: 75,
    spawnInterval: 120
  });

  window.preloaderParticles = new PreloaderParticles('preloaderEmbers');
});
