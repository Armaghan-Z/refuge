/* The Refuge — main.js */

// ── Scroll progress bar ───────────────────────────────────────────
const bar = document.querySelector('.scroll-progress');
if (bar) {
  const updateBar = () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0';
  };
  window.addEventListener('scroll', updateBar, { passive: true });
}

// ── Nav: solid on scroll ──────────────────────────────────────────
const header = document.getElementById('site-header');
if (header) {
  const sentinel = document.querySelector('.hero, .page-hero');
  if (sentinel) {
    const obs = new IntersectionObserver(
      ([e]) => header.classList.toggle('site-header--solid', !e.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(sentinel);
  } else {
    header.classList.add('site-header--solid');
  }
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) header.classList.add('site-header--solid');
    else if (!document.querySelector('.hero, .page-hero')) header.classList.remove('site-header--solid');
  }, { passive: true });
}

// ── Mobile nav toggle ─────────────────────────────────────────────
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
if (toggle && navLinks) {
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    navLinks.classList.toggle('open', !open);
    document.body.style.overflow = !open ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('click', e => {
    if (header && !header.contains(e.target)) close();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// ── Active nav link ───────────────────────────────────────────────
{
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });
}

// ── Emergency banner dismiss ──────────────────────────────────────
const banner = document.getElementById('emergency-banner');
const bannerBtn = document.getElementById('banner-dismiss');
if (banner && bannerBtn) {
  if (sessionStorage.getItem('refugeBannerDismissed')) {
    banner.style.display = 'none';
  }
  bannerBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    sessionStorage.setItem('refugeBannerDismissed', '1');
  });
}

// ── Scroll reveal ─────────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const ro = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
    }),
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach(el => ro.observe(el));
}

// ── Animated counters ─────────────────────────────────────────────
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1600;
  const start = performance.now();
  const tick = now => {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    el.textContent = Math.round(ease * target).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const co = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
    }),
    { threshold: 0.5 }
  );
  counters.forEach(el => co.observe(el));
}

// ── Job filter ────────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const jobCards = document.querySelectorAll('.job-card');
const jobCount = document.getElementById('job-count');
if (filterBtns.length && jobCards.length) {
  const updateCount = () => {
    if (jobCount) jobCount.textContent = document.querySelectorAll('.job-card:not([hidden])').length;
  };
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      jobCards.forEach(c => { c.hidden = f !== 'all' && c.dataset.category !== f; });
      updateCount();
    });
  });
  updateCount();
}

// ── Contact form ──────────────────────────────────────────────────
const form = document.getElementById('contact-form');
if (form) {
  const success = document.getElementById('form-success');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(f => {
      if (!f.value.trim()) { f.style.borderColor = 'var(--emergency)'; valid = false; }
      else f.style.borderColor = '';
    });
    if (!valid) return;
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="animation:spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Sending…';
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Send Message';
      if (success) { success.style.display = 'flex'; setTimeout(() => success.style.display = 'none', 5000); }
    }, 1400);
  });
  form.querySelectorAll('input, select, textarea').forEach(f => {
    f.addEventListener('input', () => { f.style.borderColor = ''; });
  });
}

// ── Jump link active state (resources page) ───────────────────────
const jumpLinks = document.querySelectorAll('.jump-link[href^="#"]');
const resourceSections = document.querySelectorAll('.resource-section');
if (jumpLinks.length && resourceSections.length) {
  const jo = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          jumpLinks.forEach(l => l.classList.remove('jump-link--active'));
          const active = document.querySelector(`.jump-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('jump-link--active');
        }
      });
    },
    { threshold: 0.4 }
  );
  resourceSections.forEach(s => jo.observe(s));
}

// ── Add CSS animation for spinner ────────────────────────────────
const style = document.createElement('style');
style.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
document.head.appendChild(style);
