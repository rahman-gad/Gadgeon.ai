/* ══════════════════════════════════════════════════
   Gadgeon.ai — interactions
   ══════════════════════════════════════════════════ */
(function () {
  'use strict';

  // Signal JS is active so reveal animations engage (content stays visible without JS).
  document.documentElement.classList.add('js');

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var toTop = document.getElementById('toTop');

  /* ── Navbar scroll shadow + back-to-top ── */
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle('scrolled', y > 16);
    toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ── */
  function closeMenu() {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  navToggle.addEventListener('click', function () {
    var open = navToggle.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ── Smooth scroll for in-page anchors (offset for fixed nav) ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id === '#' || a.hasAttribute('data-open-contact')) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── Scrollspy: highlight active nav link ── */
  var sections = ['home', 'solutions', 'industries', 'cases', 'insights']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navMap = {};
  navLinks.querySelectorAll('a[href^="#"]').forEach(function (a) {
    navMap[a.getAttribute('href').slice(1)] = a;
  });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove('active'); });
          var link = navMap[en.target.id];
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ── Reveal on scroll ── */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var el = en.target;
          var sibs = Array.prototype.slice.call(el.parentElement.children).filter(function (c) {
            return c.classList.contains('reveal');
          });
          var i = sibs.indexOf(el);
          el.style.transitionDelay = Math.min(i, 6) * 0.07 + 's';
          el.classList.add('in');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ── Animated stat counters ── */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); obs.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ── Contact modal ── */
  var modal = document.getElementById('contactModal');
  var form = document.getElementById('contactForm');
  var ctBody = document.getElementById('ctBody');
  var ctSuccess = document.getElementById('ctSuccess');
  var lastFocus = null;

  function openModal(e) {
    if (e) e.preventDefault();
    lastFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    ctBody.hidden = false; ctSuccess.hidden = true;
    var f = modal.querySelector('input, textarea');
    if (f) setTimeout(function () { f.focus(); }, 60);
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  document.querySelectorAll('[data-open-contact]').forEach(function (b) {
    b.addEventListener('click', openModal);
  });
  // Allow other widgets (e.g. the chatbot) to open the contact form.
  window.openContactModal = openModal;
  document.querySelectorAll('[data-close-contact]').forEach(function (b) {
    b.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  /* ── Form validation + submit ── */
  function setError(name, msg) {
    var field = form.querySelector('[name="' + name + '"]').closest('.ct-field');
    field.classList.toggle('invalid', !!msg);
    var errEl = form.querySelector('[data-err-for="' + name + '"]');
    if (errEl) errEl.textContent = msg || '';
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var phone = form.phone.value.trim();

    if (!name) { setError('name', 'Please enter your full name.'); ok = false; } else setError('name', '');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('email', 'Enter a valid work email.'); ok = false; } else setError('email', '');
    if (!phone || !/^[0-9 \-()]{6,15}$/.test(phone)) { setError('phone', 'Enter a valid phone number.'); ok = false; } else setError('phone', '');

    if (!ok) return;

    // No backend wired — capture the enquiry and show the success view.
    try {
      window.__gadgeonLastEnquiry = {
        name: name, email: email,
        phone: form.code.value + ' ' + phone,
        message: form.message.value.trim()
      };
    } catch (_) {}

    ctBody.hidden = true;
    ctSuccess.hidden = false;
    form.reset();
  });

  // Clear a field's error as the user corrects it.
  form.querySelectorAll('input, textarea').forEach(function (el) {
    el.addEventListener('input', function () {
      var f = el.closest('.ct-field');
      if (f && f.classList.contains('invalid')) f.classList.remove('invalid');
    });
  });

  // Set footer year dynamically if a placeholder exists.
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
