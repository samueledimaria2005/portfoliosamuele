/* =============================================
   SAMUELE DI MARIA — Portfolio 2026 — Script
   ============================================= */

// ===== LOADER =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 700);
  }, 800);
});

// ===== CUSTOM CURSOR =====
const dot  = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Ring follows with lag
  function animRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  // Hover effect
  document.querySelectorAll('a, button, .pcard, .servizio-card, .recensione-card, .radio-opt, .btn-submit').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}

// ===== NAV SCROLL STYLE =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ===== HAMBURGER =====
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  '.servizio-card, .pcard, .recensione-card, .stat-item, .perche-item, .hero-eyebrow, .hero-title, .hero-sub, .hero-actions, .section-header, .preventivo-inner'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger cards in a row
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Add stagger delays to grid children
document.querySelectorAll('.portfolio-grid, .recensioni-grid, .servizi-grid, .perche-right, .stats-inner').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.dataset.delay = i * 80;
  });
});

revealEls.forEach(el => observer.observe(el));

// ===== SMOOTH ANCHOR SCROLL with offset =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 20;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

// ===== FORM: WhatsApp fallback =====
// Uncomment below to redirect to WhatsApp instead of email:
/*
document.getElementById('quiz-form').addEventListener('submit', e => {
  e.preventDefault();
  const f   = new FormData(e.target);
  const msg = `Ciao Samuele! Sono ${f.get('nome')}. Settore: ${f.get('settore')}. Obiettivo: ${f.get('obiettivo')}. ${f.get('messaggio')}`;
  window.open(`https://wa.me/393393881640?text=${encodeURIComponent(msg)}`, '_blank');
});
*/

// ===== FORM SUBMIT FEEDBACK =====
const form = document.getElementById('quiz-form');
if (form) {
  form.addEventListener('submit', () => {
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Inviato! Ti rispondo entro 24h.';
    btn.disabled = true;
    btn.style.opacity = '0.7';
  });
}