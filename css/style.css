@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100..900;1,100..900&display=swap');

/* ==========================================================================
   DESIGN TOKENS & VARIABLES
   ========================================================================== */
:root {
  --bg-primary: #0F0F0F;
  --bg-secondary: #161616;
  --bg-tertiary: #1F1F1F;
  --gold: #D4AF37;
  --gold-rgb: 212, 175, 55;
  --gold-hover: #E8C553;
  --orange: #FF6B00;
  --orange-rgb: 255, 107, 0;
  --white: #FFFFFF;
  --white-dim: #E0E0E0;
  --gray: #999999;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Poppins', Helvetica, Arial, sans-serif;
  --transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  --border-radius-sm: 8px;
  --border-radius-md: 16px;
  --border-radius-lg: 30px;
  --glass-bg: rgba(22, 22, 22, 0.65);
  --glass-border: rgba(212, 175, 55, 0.12);
  --glass-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  --glow-orange: 0 0 25px rgba(255, 107, 0, 0.3);
  --glow-gold: 0 0 25px rgba(212, 175, 55, 0.3);
}

/* ==========================================================================
   RESET & SYSTEM STYLES
   ========================================================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  overflow-x: hidden;
  background-color: var(--bg-primary);
  color: var(--white);
  font-family: var(--font-sans);
  scroll-behavior: auto; /* Managed by Lenis smooth scroll */
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.3;
}

/* Logo Enhancements */
.logo-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  font-size: 1.5rem;
  color: var(--gold);
  filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.4));
  animation: emberPulse 1.8s infinite alternate ease-in-out;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

/* Language Selector */
.lang-selector {
  display: flex;
  gap: 8px;
  margin-right: 15px;
}

.lang-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--white-dim);
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition-fast);
}

.lang-btn:hover, .lang-btn.active {
  color: var(--gold);
  border-color: var(--gold);
  background: rgba(212, 175, 55, 0.05);
  box-shadow: 0 0 8px rgba(212, 175, 55, 0.12);
}

@media (max-width: 768px) {
  .lang-selector {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-primary);
}
::-webkit-scrollbar-thumb {
  background: var(--bg-tertiary);
  border-radius: 4px;
  border: 2px solid var(--bg-primary);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--gold);
}

::selection {
  background-color: var(--gold);
  color: var(--bg-primary);
}

/* ==========================================================================
   CUSTOM CURSOR & SCROLL INDICATOR
   ========================================================================== */
.custom-cursor {
  width: 8px;
  height: 8px;
  background: var(--gold);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, background-color 0.2s;
}

.custom-cursor-follower {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(212, 175, 55, 0.4);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.08s cubic-bezier(0.25, 1, 0.5, 1), width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s;
}

/* Hover effects for cursor */
body.hovering-interactive .custom-cursor {
  width: 12px;
  height: 12px;
  background: var(--orange);
}

body.hovering-interactive .custom-cursor-follower {
  width: 48px;
  height: 48px;
  border-color: var(--orange);
  background-color: rgba(255, 107, 0, 0.05);
}

@media (max-width: 1024px) {
  .custom-cursor, .custom-cursor-follower {
    display: none !important;
  }
}

/* Scroll Progress Bar */
.scroll-progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 9998;
  pointer-events: none;
}

.scroll-progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--orange), var(--gold));
  box-shadow: 0 0 10px rgba(255, 107, 0, 0.5);
}

/* ==========================================================================
   PRELOADER
   ========================================================================== */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #050505;
  z-index: 10100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 1s cubic-bezier(0.85, 0, 0.15, 1);
}

.preloader.fade-out {
  transform: translateY(-100%);
}

.preloader-logo {
  font-family: var(--font-serif);
  font-size: 3rem;
  color: var(--gold);
  letter-spacing: 4px;
  margin-bottom: 20px;
  position: relative;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  animation: preloaderReveal 1s forwards 0.3s;
}

.preloader-logo span {
  display: block;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--white-dim);
  letter-spacing: 6px;
  margin-top: 10px;
}

.preloader-loader {
  width: 120px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  border-radius: 2px;
}

.preloader-loader-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--orange), var(--gold));
  animation: loadingProgress 2.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.preloader-embers {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  pointer-events: none;
  opacity: 0.6;
}

@keyframes preloaderReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes loadingProgress {
  0% { width: 0%; }
  30% { width: 40%; }
  70% { width: 85%; }
  100% { width: 100%; }
}

/* ==========================================================================
   PARTICLES BACKDROP
   ========================================================================== */
.particles-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}

/* ==========================================================================
   STICKY NAVBAR
   ========================================================================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 8%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding 0.5s var(--transition-smooth), background-color 0.5s var(--transition-smooth), backdrop-filter 0.5s var(--transition-smooth), border-bottom 0.5s var(--transition-smooth);
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  padding: 15px 8%;
  background-color: var(--glass-bg);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white);
  text-decoration: none;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
}

.nav-logo span {
  font-size: 0.65rem;
  font-family: var(--font-sans);
  color: var(--gold);
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 2px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 35px;
}

.nav-links a {
  color: var(--white-dim);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  padding: 8px 0;
  transition: var(--transition-fast);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: var(--gold);
  transition: var(--transition-smooth);
}

.nav-links a:hover {
  color: var(--gold);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-cta {
  background: linear-gradient(135deg, var(--gold), #B38F1E);
  color: var(--bg-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: var(--border-radius-sm);
  border: 1px solid transparent;
  transition: var(--transition-smooth);
  letter-spacing: 1px;
}

.nav-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
  background: linear-gradient(135deg, #B38F1E, var(--gold));
  color: var(--white);
  border-color: var(--gold);
}

/* Mobile Menu Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.mobile-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--white);
  transition: var(--transition-smooth);
}

/* ==========================================================================
   HERO SECTION
   ========================================================================== */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  z-index: 1;
}

.hero-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  animation: zoomBg 20s infinite alternate ease-in-out;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(15, 15, 15, 0.2) 0%, rgba(15, 15, 15, 0.9) 80%),
              linear-gradient(to bottom, rgba(15,15,15,0.4) 0%, rgba(15,15,15,1) 95%);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-subtitle {
  color: var(--gold);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(20px);
  animation: heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.5s;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 25px;
  opacity: 0;
  transform: translateY(40px);
  animation: heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.7s;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
}

.hero-description {
  font-size: 1.1rem;
  color: var(--white-dim);
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 650px;
  opacity: 0;
  transform: translateY(30px);
  animation: heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.9s;
}

.hero-btns {
  display: flex;
  gap: 20px;
  opacity: 0;
  transform: translateY(30px);
  animation: heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.1s;
}

.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 16px 36px;
  border-radius: var(--border-radius-sm);
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 1px;
  transition: var(--transition-smooth);
}

.btn-primary {
  background: linear-gradient(135deg, var(--gold), #B38F1E);
  color: var(--bg-primary);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: var(--glow-gold);
  color: var(--white);
}

.btn-secondary {
  background: transparent;
  color: var(--white);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
}

.btn-secondary:hover {
  transform: translateY(-4px);
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(212, 175, 55, 0.05);
}

@keyframes heroReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomBg {
  from { transform: scale(1.05); }
  to { transform: scale(1.15); }
}

/* ==========================================================================
   LAYOUT STRUCTURE
   ========================================================================== */
section {
  position: relative;
  padding: 120px 8%;
  z-index: 2;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(50px);
  transition: var(--transition-smooth);
}

.section-header.in-view {
  opacity: 1;
  transform: translateY(0);
}

.sub-title {
  color: var(--gold);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 12px;
  display: block;
}

.main-title {
  font-family: var(--font-serif);
  font-size: 3.2rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.main-title::after {
  content: '🔥';
  font-size: 1.5rem;
  position: absolute;
  top: -15px;
  right: -30px;
  animation: emberPulse 1.5s infinite alternate ease-in-out;
}

@keyframes emberPulse {
  from { transform: scale(0.9) rotate(-10deg); opacity: 0.8; }
  to { transform: scale(1.1) rotate(10deg); opacity: 1; filter: drop-shadow(0 0 5px var(--orange)); }
}

/* ==========================================================================
   ABOUT SECTION
   ========================================================================== */
.about-container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 70px;
  align-items: center;
}

.about-img-box {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--glass-shadow);
  opacity: 0;
  transform: translateX(-60px);
  transition: opacity 1s, transform 1s;
}

.about-img-box.in-view {
  opacity: 1;
  transform: translateX(0);
}

.about-img-box img {
  width: 100%;
  height: 550px;
  object-fit: cover;
  transition: var(--transition-smooth);
}

.about-img-box:hover img {
  transform: scale(1.03);
}

.about-img-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(15,15,15,0.4), transparent);
  z-index: 1;
  pointer-events: none;
}

.about-badge {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  padding: 20px 30px;
  border-radius: var(--border-radius-md);
  text-align: center;
  box-shadow: var(--glass-shadow);
  z-index: 2;
}

.about-badge h3 {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  color: var(--gold);
}

.about-badge p {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--white);
}

.about-content {
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 1s, transform 1s;
}

.about-content.in-view {
  opacity: 1;
  transform: translateX(0);
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--white-dim);
  margin-bottom: 30px;
}

.about-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.about-feat-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.about-feat-icon {
  font-size: 1.6rem;
  color: var(--orange);
  background: rgba(255, 107, 0, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 107, 0, 0.2);
}

.about-feat-text h4 {
  font-size: 1.05rem;
  margin-bottom: 6px;
  color: var(--gold);
}

.about-feat-text p {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.5;
}

/* ==========================================================================
   SIGNATURE DISHES (GLASS CARDS WITH HOVER GLOW)
   ========================================================================== */
.dishes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.dishes-container > *:nth-child(4),
.dishes-container > *:nth-child(5) {
  grid-column: span 1;
}

/* For symmetric look on 5 cards, center the last two */
.dishes-container {
  grid-template-areas: 
    "card1 card2 card3"
    "space1 card4 card5";
}

.dish-card {
  background-color: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--glass-shadow);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s, box-shadow 0.5s;
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s, transform 0.8s, border-color 0.4s, box-shadow 0.4s;
}

.dish-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.dish-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(212, 175, 55, 0.4);
  box-shadow: 0 15px 40px rgba(255, 107, 0, 0.15);
}

.dish-img-box {
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
}

.dish-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.dish-card:hover .dish-img-box img {
  transform: scale(1.08);
}

.dish-fire-tag {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(15, 15, 15, 0.8);
  border: 1px solid var(--orange);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--orange);
  font-size: 1rem;
  box-shadow: var(--glow-orange);
  z-index: 2;
}

.dish-info {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dish-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
}

.dish-title {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--white);
  transition: var(--transition-fast);
}

.dish-card:hover .dish-title {
  color: var(--gold);
}

.dish-price {
  font-family: var(--font-sans);
  color: var(--gold);
  font-weight: 600;
  font-size: 1.2rem;
}

.dish-desc {
  font-size: 0.88rem;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 20px;
}

.dish-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dish-origin {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--gold);
  background: rgba(212, 175, 55, 0.08);
  padding: 4px 10px;
  border-radius: 4px;
}

.dish-order-btn {
  background: transparent;
  border: none;
  color: var(--white);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition-fast);
}

.dish-order-btn span {
  transition: transform 0.3s;
}

.dish-card:hover .dish-order-btn {
  color: var(--orange);
}

.dish-card:hover .dish-order-btn span {
  transform: translateX(5px);
}

/* Specific Grid Placements for the 5 cards */
.dish-card:nth-child(1) { grid-area: card1; }
.dish-card:nth-child(2) { grid-area: card2; }
.dish-card:nth-child(3) { grid-area: card3; }
.dish-card:nth-child(4) { grid-area: card4; }
.dish-card:nth-child(5) { grid-area: card5; }

/* ==========================================================================
   WHY CHOOSE US (PREMIUM ICONS GRID)
   ========================================================================== */
.why-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.why-card {
  background-color: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  padding: 45px 35px;
  border-radius: var(--border-radius-md);
  text-align: center;
  transition: var(--transition-smooth);
  box-shadow: var(--glass-shadow);
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.8s, transform 0.8s, border-color 0.4s, box-shadow 0.4s;
}

.why-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.why-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 107, 0, 0.3);
  box-shadow: 0 15px 35px rgba(255, 107, 0, 0.08);
}

.why-icon {
  font-size: 2.8rem;
  margin-bottom: 25px;
  display: inline-block;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.why-card:hover .why-icon {
  transform: scale(1.18) rotate(5deg);
  filter: drop-shadow(0 0 10px rgba(255, 107, 0, 0.4));
}

.why-card h3 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--white);
}

.why-card p {
  font-size: 0.9rem;
  color: var(--gray);
  line-height: 1.7;
}

/* ==========================================================================
   GALLERY (LUXURY MASONRY GRID & LIGHTBOX)
   ========================================================================== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 150px;
  gap: 20px;
}

.gallery-item {
  position: relative;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--glass-shadow);
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.8s, transform 0.8s;
}

.gallery-item.in-view {
  opacity: 1;
  transform: scale(1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 15, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s;
  z-index: 2;
  backdrop-filter: blur(3px);
}

.gallery-overlay-icon {
  width: 50px;
  height: 50px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  color: var(--gold);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  transform: translateY(20px);
  transition: var(--transition-smooth);
}

.gallery-overlay h4 {
  font-family: var(--font-serif);
  color: var(--white);
  font-size: 1.3rem;
  margin-top: 15px;
  transform: translateY(20px);
  transition: var(--transition-smooth) 0.1s;
}

.gallery-item:hover img {
  transform: scale(1.06);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .gallery-overlay-icon,
.gallery-item:hover .gallery-overlay h4 {
  transform: translateY(0);
}

/* Grid Layout Customizations */
.gallery-item.col-6-row-3 { grid-column: span 6; grid-row: span 3; }
.gallery-item.col-6-row-2 { grid-column: span 6; grid-row: span 2; }
.gallery-item.col-4-row-2 { grid-column: span 4; grid-row: span 2; }
.gallery-item.col-4-row-3 { grid-column: span 4; grid-row: span 3; }
.gallery-item.col-8-row-3 { grid-column: span 8; grid-row: span 3; }

/* Lightbox Modal */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(15px);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;
}

.lightbox.active {
  opacity: 1;
  pointer-events: auto;
}

.lightbox-content {
  max-width: 80%;
  max-height: 80%;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--glass-border);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
  transform: scale(0.9);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  object-fit: contain;
}

.lightbox.active .lightbox-content {
  transform: scale(1);
}

.lightbox-close {
  position: absolute;
  top: 40px;
  right: 40px;
  color: var(--white-dim);
  font-size: 2rem;
  cursor: pointer;
  transition: var(--transition-fast);
}

.lightbox-close:hover {
  color: var(--gold);
}

/* ==========================================================================
   REVIEWS (LUXURY TESTIMONIAL SLIDER)
   ========================================================================== */
.reviews-slider-container {
  max-width: 850px;
  margin: 0 auto;
  position: relative;
}

.reviews-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.reviews-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
}

.review-slide {
  min-width: 100%;
  box-sizing: border-box;
  padding: 15px;
}

.review-card {
  background-color: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-md);
  padding: 50px 60px;
  box-shadow: var(--glass-shadow);
  text-align: center;
  position: relative;
}

.review-card::before {
  content: '“';
  font-family: var(--font-serif);
  font-size: 6rem;
  color: rgba(212, 175, 55, 0.1);
  position: absolute;
  top: 15px;
  left: 40px;
  line-height: 1;
}

.review-stars {
  color: var(--gold);
  font-size: 1.1rem;
  margin-bottom: 25px;
  letter-spacing: 2px;
}

.review-text {
  font-size: 1.15rem;
  line-height: 1.8;
  font-style: italic;
  color: var(--white-dim);
  margin-bottom: 30px;
}

.review-author {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
}

.review-author span {
  display: block;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  color: var(--gold);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 5px;
}

/* Slider Dots */
.reviews-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 35px;
}

.review-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: var(--transition-smooth);
}

.review-dot.active {
  background: var(--gold);
  transform: scale(1.3);
  box-shadow: var(--glow-gold);
}

/* ==========================================================================
   RESERVATION SECTION
   ========================================================================== */
.reservation-container {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: center;
}

.reservation-info h3 {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.reservation-info p {
  color: var(--white-dim);
  line-height: 1.8;
  margin-bottom: 40px;
}

.res-details {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.res-detail-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.res-detail-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid var(--glass-border);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gold);
  font-size: 1.2rem;
}

.res-detail-text p {
  margin-bottom: 0;
  font-size: 0.82rem;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.res-detail-text h4 {
  font-size: 1.1rem;
  color: var(--white);
}

/* Reservation Glass Form */
.reservation-form-box {
  background-color: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  padding: 50px;
  box-shadow: var(--glass-shadow);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s, transform 1s;
}

.reservation-form-box.in-view {
  opacity: 1;
  transform: translateY(0);
}

.reservation-form-box::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 107, 0, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.reservation-form {
  position: relative;
  z-index: 1;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px 20px;
  margin-bottom: 30px;
}

.form-group-full {
  grid-column: span 2;
}

.form-group {
  position: relative;
}

.form-input {
  width: 100%;
  background: rgba(10, 10, 10, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--border-radius-sm);
  padding: 16px 20px;
  color: var(--white);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  transition: var(--transition-fast);
  outline: none;
}

.form-input:focus {
  border-color: var(--gold);
  box-shadow: var(--glow-gold);
  background: rgba(10, 10, 10, 0.8);
}

.form-group label {
  position: absolute;
  top: 18px;
  left: 20px;
  color: var(--gray);
  font-size: 0.95rem;
  pointer-events: none;
  transition: var(--transition-smooth);
}

/* Floating Label Logic */
.form-input:focus ~ label,
.form-input:not(:placeholder-shown) ~ label {
  top: -10px;
  left: 12px;
  font-size: 0.78rem;
  color: var(--gold);
  background-color: #121212;
  padding: 0 6px;
  border-radius: 4px;
}

/* Specific styling for select and datetime */
select.form-input {
  cursor: pointer;
  appearance: none;
}

.form-group::after {
  /* custom arrow for select */
  content: '';
  position: absolute;
  right: 20px;
  top: 24px;
  pointer-events: none;
}

.form-group-select::after {
  content: '▼';
  font-size: 0.7rem;
  color: var(--gray);
}

.form-group-select.focused::after {
  color: var(--gold);
}

.form-submit-btn {
  width: 100%;
  background: linear-gradient(135deg, var(--gold), #B38F1E);
  color: var(--bg-primary);
  border: none;
  padding: 16px;
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--transition-smooth);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
}

.form-submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--glow-gold);
  color: var(--white);
}

/* Toast Message */
.toast-notification {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--gold);
  border-radius: var(--border-radius-md);
  padding: 20px 30px;
  box-shadow: var(--glass-shadow);
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 10005;
  transform: translateY(100px);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s;
}

.toast-notification.active {
  transform: translateY(0);
  opacity: 1;
}

.toast-icon {
  font-size: 1.5rem;
  color: var(--gold);
}

.toast-text h4 {
  font-size: 1rem;
  color: var(--white);
  margin-bottom: 2px;
}

.toast-text p {
  font-size: 0.8rem;
  color: var(--gray);
}

/* ==========================================================================
   CONTACT SECTION (INFO, LINKS, AND MAPS)
   ========================================================================== */
.contact-container {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 70px;
}

.contact-info-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-card-box {
  background-color: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  padding: 40px;
  border-radius: var(--border-radius-md);
  box-shadow: var(--glass-shadow);
}

.contact-card-box h3 {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  color: var(--gold);
  margin-bottom: 25px;
}

.contact-links-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact-link-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  text-decoration: none;
  color: var(--white-dim);
  transition: var(--transition-fast);
}

.contact-link-item:hover {
  color: var(--gold);
}

.contact-link-icon {
  font-size: 1.4rem;
  color: var(--orange);
  background: rgba(255, 107, 0, 0.08);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 107, 0, 0.15);
  flex-shrink: 0;
}

.contact-link-text h4 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.contact-link-text p {
  font-size: 0.88rem;
  color: var(--gray);
  line-height: 1.5;
}

/* Social Media list */
.social-medias {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-icon-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--white-dim);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  text-decoration: none;
  transition: var(--transition-smooth);
}

.social-icon-btn:hover {
  background: var(--gold);
  color: var(--bg-primary);
  transform: translateY(-5px);
  box-shadow: var(--glow-gold);
  border-color: var(--gold);
}

/* Quick Calls Row */
.quick-calls-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.call-action-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: var(--border-radius-sm);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  transition: var(--transition-smooth);
}

.call-action-btn.tel-btn {
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid var(--gold);
  color: var(--gold);
}

.call-action-btn.tel-btn:hover {
  background: var(--gold);
  color: var(--bg-primary);
  transform: translateY(-3px);
  box-shadow: var(--glow-gold);
}

.call-action-btn.wp-btn {
  background: rgba(37, 211, 102, 0.1);
  border: 1px solid #25D366;
  color: #25D366;
}

.call-action-btn.wp-btn:hover {
  background: #25D366;
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
}

/* Maps container */
.maps-container {
  border-radius: var(--border-radius-md);
  overflow: hidden;
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  height: 100%;
  min-height: 450px;
}

.maps-container iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(1) invert(0.92) contrast(1.1); /* Elegant dark map effect */
}

/* ==========================================================================
   FOOTER
   ========================================================================== */
.footer {
  background-color: #050505;
  border-top: 1px solid var(--glass-border);
  padding: 80px 8% 40px;
  z-index: 2;
  position: relative;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand h2 {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  color: var(--gold);
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.footer-brand p {
  color: var(--gray);
  font-size: 0.9rem;
  line-height: 1.7;
}

.footer-title {
  color: var(--white);
  font-family: var(--font-sans);
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 25px;
  letter-spacing: 1px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-links a {
  color: var(--gray);
  text-decoration: none;
  font-size: 0.92rem;
  transition: var(--transition-fast);
}

.footer-links a:hover {
  color: var(--gold);
  padding-left: 5px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-info p {
  color: var(--gray);
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-info span {
  color: var(--gold);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-bottom p {
  font-size: 0.85rem;
  color: var(--gray);
}

/* ==========================================================================
   EXTRA UTILITY CLASSES (FLOATS, BACK TO TOP, PAGE TRANSITIONS)
   ========================================================================== */
/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 46px;
  height: 46px;
  background-color: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 50%;
  color: var(--gold);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: var(--glass-shadow);
  z-index: 999;
  opacity: 0;
  transform: translateY(20px);
  transition: var(--transition-smooth);
}

.back-to-top.active {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  background-color: var(--gold);
  color: var(--bg-primary);
  border-color: var(--gold);
  box-shadow: var(--glow-gold);
  transform: translateY(-5px);
}

/* Floating Reservation Sticky Button */
.floating-res-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, var(--orange), #E04F00);
  color: var(--white);
  padding: 14px 24px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(255, 107, 0, 0.35);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 998;
  opacity: 0;
  transform: translateY(20px);
  transition: var(--transition-smooth);
  animation: floatingPulse 2s infinite alternate ease-in-out;
}

.floating-res-btn.active {
  opacity: 1;
  transform: translateY(0);
}

.floating-res-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 30px rgba(255, 107, 0, 0.5);
  background: linear-gradient(135deg, #E04F00, var(--orange));
}

@keyframes floatingPulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.03); }
}

/* Responsive Styles */
@media (max-width: 1200px) {
  section {
    padding: 100px 5%;
  }
  .navbar {
    padding: 25px 5%;
  }
  .navbar.scrolled {
    padding: 12px 5%;
  }
  .hero-title {
    font-size: 4rem;
  }
  .about-container {
    gap: 40px;
  }
}

@media (max-width: 1024px) {
  .dishes-container {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "card1 card2"
      "card3 card4"
      "card5 card5";
  }
  .why-container {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .reservation-container {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .contact-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 20px 5%;
  }
  .nav-links {
    display: none; /* Will be toggled via JS mobile drawer class */
  }
  
  /* Mobile Menu Drawer style (toggled by .nav-active) */
  .navbar.nav-active .nav-links {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100vh;
    background-color: #0b0b0b;
    border-left: 1px solid var(--glass-border);
    justify-content: center;
    align-items: center;
    gap: 30px;
    z-index: 999;
    box-shadow: -15px 0 35px rgba(0,0,0,0.8);
    animation: drawerSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  
  @keyframes drawerSlide {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  .mobile-toggle {
    display: flex;
    z-index: 1001;
  }
  
  /* Hamburger to X conversion */
  .navbar.nav-active .mobile-toggle span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  .navbar.nav-active .mobile-toggle span:nth-child(2) {
    opacity: 0;
  }
  .navbar.nav-active .mobile-toggle span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  .nav-cta {
    display: none; /* Hide on mobile navbar, put in hero/drawer */
  }
  .navbar.nav-active .nav-links::after {
    /* Put CTA inside drawer */
    content: 'Masa Rezervasyonu';
    display: inline-block;
    padding: 12px 28px;
    border-radius: var(--border-radius-sm);
    background: linear-gradient(135deg, var(--gold), #B38F1E);
    color: var(--bg-primary);
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: 20px;
    cursor: pointer;
  }

  .hero-title {
    font-size: 3rem;
  }
  .hero-subtitle {
    font-size: 0.9rem;
    letter-spacing: 4px;
  }
  .hero-description {
    font-size: 0.95rem;
  }
  
  .about-container {
    grid-template-columns: 1fr;
  }
  .about-img-box img {
    height: 380px;
  }

  .dishes-container {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "card1"
      "card2"
      "card3"
      "card4"
      "card5";
  }

  .why-container {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-auto-rows: 100px;
    gap: 10px;
  }
  .gallery-item.col-6-row-3 { grid-column: span 6; grid-row: span 2; }
  .gallery-item.col-6-row-2 { grid-column: span 6; grid-row: span 2; }
  .gallery-item.col-4-row-2 { grid-column: span 6; grid-row: span 2; }
  .gallery-item.col-4-row-3 { grid-column: span 6; grid-row: span 2; }
  .gallery-item.col-8-row-3 { grid-column: span 12; grid-row: span 2; }

  .review-card {
    padding: 30px 20px;
  }
  .review-text {
    font-size: 0.95rem;
  }

  .reservation-form-box {
    padding: 30px 20px;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .form-group-full {
    grid-column: span 1;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .quick-calls-row {
    grid-template-columns: 1fr;
  }
}
