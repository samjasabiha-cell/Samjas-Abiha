/* ═══════════════════════════════════════════════════════
   Samjas & Abiha — Wedding Invitation
   script.js
   ═══════════════════════════════════════════════════════ */
/* ── Scroll Restore ── */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

/* ── LOADER ── */
document.addEventListener("DOMContentLoaded", () => {

    window.scrollTo(0, 0);

    const loader = document.getElementById("loader");
    const svg = document.getElementById("loader-svg");

    if (svg) {
        svg.data = "assets/save-the-date.svg?v=" + Date.now();
    }

    if (loader) {
        loader.classList.remove("hidden");

        setTimeout(() => {
            loader.classList.add("hidden");
        }, 1700);
    }

});

function updateCountdown() {
  const weddingDate = new Date("2026-07-26T12:00:00+05:30");
  const now = new Date();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  const el = document.getElementById('countdown');

  if (el) {
    el.innerText = `${days} Days • ${hours} Hours • ${mins} Min`;
  }
}

updateCountdown();
setInterval(updateCountdown, 60000);

/* ── PARALLAX HERO ── */
const heroImg = document.getElementById('heroImg');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      if (heroImg) heroImg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });


/* ── SCROLL REVEAL ── */
const ro = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

/* ── IMAGE PARTICLES ──────────────────────────────────────────────
   Two petal PNGs loaded as Image objects so we know their natural
   size before we start spawning. Particles begin above the viewport
   (canvas top = -200px) so there's no visible "pop-in" at the top.
──────────────────────────────────────────────────────────────────── */
(function initParticles() {
  const canvas  = document.getElementById('pcanvas');
  if (!canvas) return;

  const URLS = [
  './assets/heart1.webp',
  './assets/heart1.webp'
];

  /* Inject keyframe once — translateY starts at -200px (= canvas offset)
     so the particle is already above the fold when opacity reaches 0 */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes petalDrift {
      0%   { opacity: 0;    transform: translateX(0px)         translateY(-200px) rotate(0deg); }
      6%   { opacity: 0.85; }
      90%  { opacity: 0.4;  }
      100% { opacity: 0;    transform: translateX(var(--dx))   translateY(calc(100vh + 200px)) rotate(var(--dr)); }
    }
  `;
  document.head.appendChild(style);

  /* Preload both images so naturalWidth/Height are available */
  const loadedImgs = [];
  let loadedCount  = 0;

  URLS.forEach((url, i) => {
    const img    = new Image();
    img.crossOrigin = 'anonymous';
    img.src      = url;
    img.onload   = () => {
      loadedImgs[i] = img;
      loadedCount++;
      if (loadedCount === URLS.length) startSpawning();
    };
    img.onerror  = () => {
      /* Fall back: use URL string even if image fails */
      loadedImgs[i] = { src: url, naturalWidth: 40, naturalHeight: 40 };
      loadedCount++;
      if (loadedCount === URLS.length) startSpawning();
    };
  });

  function startSpawning() {
    for (let i = 0; i < 22; i++) setTimeout(spawnPetal, i * 320);
  }

  function spawnPetal() {
    const img  = loadedImgs[Math.floor(Math.random() * loadedImgs.length)];

    /* Match the on-screen size of the original particles (4–11px range) */
    const sz = Math.random() * 18 + 12;          // 4–11 px
    const ar   = (img.naturalHeight || 40) / (img.naturalWidth || 40);
    const w    = sz;
    const h    = sz * ar;

    const dur = Math.random() * 18 + 14;          // 12–26 s
    const del  = Math.random() * 5;                // 0–5 s delay
    const dx   = (Math.random() - 0.5) * 220;
    const dr   = Math.random() * 700;

    const p    = document.createElement('div');
    p.className = 'petal';
    p.style.cssText = [
      `left:${Math.random() * 100}vw`,
      /* Start above the canvas top edge so spawn is hidden */
      `top:${-20 - Math.random() * 160}px`,
      `width:${w}px`,
      `height:${h}px`,
      `background-image:url('${img.src || img}')`,
      `background-size:contain`,
      `background-repeat:no-repeat`,
      `background-position:center`,
      `--dx:${dx}px`,
      `--dr:${dr}deg`,
      `animation:petalDrift ${dur}s ${del}s linear forwards`,
    ].join(';');

    canvas.appendChild(p);

    /* Remove and respawn after animation ends */
    setTimeout(() => {
      p.remove();
      setTimeout(spawnPetal, Math.random() * 2800 + 400);
    }, (dur + del) * 1000 + 300);
  }
})();
