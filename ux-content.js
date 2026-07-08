/* ══════════════════════════════════════════════════
   Gadgeon UX Practice — page content (config-driven)
   Non-engineers: edit text here; layout lives in ux.html/ux.css.
   ══════════════════════════════════════════════════ */
window.UX_CONTENT = {

  heroStats: [
    { value: '200+', label: 'UX Projects Delivered' },
    { value: '10+',  label: 'AI-native UX innovations' },
    { value: '8+',   label: 'Industries' }
  ],

  whyStats: [
    { value: '$100',     label: 'Returned for every $1 invested in UX¹' },
    { value: '200–400%', label: 'Conversion lift from well-designed interfaces' },
    { value: '50%',      label: 'Less dev rework when usability is validated early' },
    { value: '10.8%',    label: 'Higher 3-year revenue retention from continuous research²' }
  ],

  whyNarrative: "Design isn't just how it looks — it's how the business performs. McKinsey research shows design-led companies deliver 2x the revenue growth of industry peers, while poor usability drives 88% of users away for good — often before they ever reach checkout. At Gadgeon, we treat UX as a measurable investment: catching friction before it ships, validating flows before engineering commits, and tying every design decision back to conversion, retention, and cost.",

  whyCards: [
    { icon: 'speed', title: 'Faster Time-to-Value',
      body: 'Usability testing catches friction before code is written, cutting rework costs by up to half and shortening dev cycles.',
      tags: ['Research', 'Validation', 'Speed'] },
    { icon: 'growth', title: 'Higher Conversion, Lower Churn',
      body: 'Improving customer experience can raise KPIs by over 80%, turning existing traffic into more sales without added spend.',
      tags: ['Conversion', 'Retention', 'Revenue'] },
    { icon: 'shield', title: 'Design as Risk Mitigation',
      body: 'Embedding usability research early can return 415% ROI and avoid millions in downstream rework.',
      tags: ['Risk Reduction', 'Cost Savings', 'ROI'] }
  ],

  whyFootnote: '¹ Forrester (≈9,900% ROI) · ² Forrester Total Economic Impact · Growth benchmark: McKinsey Design Index',

  /* ── AI-Driven UX Process — scroll timeline ── */
  process: [
    { phase: 'Phase 01', title: 'Kickoff & Discovery',
      body: 'We align on your vision, goals, and constraints through focused working sessions — and let AI mine your existing analytics, tickets, and reviews for signals before day one ends.',
      ai: 'AI digests months of support logs & analytics overnight',
      deliverables: ['Stakeholder brief', 'Success metrics', 'Project roadmap'],
      outcome: 'A shared definition of success, in days not weeks' },
    { phase: 'Phase 02', title: 'AI-Accelerated Research',
      body: 'Market scans, competitor teardowns, and user interviews — synthesized by AI in hours instead of weeks, then pressure-tested by our researchers for what actually matters.',
      ai: 'Interview synthesis & pattern detection in hours',
      deliverables: ['User personas', 'Competitive teardown', 'Insight report'],
      outcome: 'Evidence-backed direction before a single pixel is drawn' },
    { phase: 'Phase 03', title: 'Flows & Experience Architecture',
      body: 'We map every journey and decision point, simulate drop-off risks with AI-assisted flow analysis, and refine interactions until the path of least resistance is the product.',
      ai: 'Flow simulations flag drop-off risks pre-build',
      deliverables: ['Journey maps', 'User flows', 'IA sitemap'],
      outcome: 'Friction found on the whiteboard, not in production' },
    { phase: 'Phase 04', title: 'Design & Validation',
      body: 'From low-fidelity wireframes to a cohesive design system to polished hi-fi interfaces — with AI-generated variants tested against real users at every gate.',
      ai: 'Variant generation & rapid preference testing',
      deliverables: ['Wireframe sets', 'Design system', 'Hi-fi prototypes'],
      outcome: 'Validated designs engineering can trust' },
    { phase: 'Phase 05', title: 'Handover & Continuous Learning',
      body: 'Production-ready files, specs, and documentation for a seamless build — plus instrumented feedback loops so the experience keeps improving after launch.',
      ai: 'Post-launch signal monitoring feeds the next iteration',
      deliverables: ['Design files', 'Dev-ready specs', 'Handoff docs'],
      outcome: 'Zero-ambiguity handoff, measurable after launch' }
  ],

  /* ── Case studies — one per industry (filterable) ── */
  caseFilters: ['All', 'Telecom', 'IoT', 'Healthcare', 'Enterprise SaaS', 'BFSI', 'Logistics', 'Manufacturing', 'Industry 4.0'],
  cases: [
    { industry: 'Telecom', img: 'assets/case1.jpg',
      title: 'Self-service portal redesign for a global connectivity provider',
      body: 'Rebuilt the SIM lifecycle and billing journeys around task-first IA, with AI-summarized diagnostics for support teams.',
      metric: '43% fewer support tickets' },
    { industry: 'IoT', img: 'assets/ux-case2.jpg',
      title: 'Smart home app that families actually finish setting up',
      body: 'Redesigned onboarding, device pairing, and automation builder around progressive disclosure and plain language.',
      metric: '58% higher onboarding completion' },
    { industry: 'Healthcare', img: 'assets/case2.jpg',
      title: 'Clinician dashboard for remote patient monitoring',
      body: 'Prioritized alarms, trend-first vitals, and one-glance patient context — validated with 40+ clinicians before build.',
      metric: '37% faster time-to-decision' },
    { industry: 'Enterprise SaaS', img: 'assets/ux-case1.jpg',
      title: 'Design system unifying a fragmented 12-product suite',
      body: 'One component library, one interaction language, and migration guides — adopted by 9 teams in two quarters.',
      metric: '2x faster feature delivery' },
    { industry: 'BFSI', icon: 'assets/ic-bfsi.svg',
      title: 'Investing app UX that turns sign-ups into active traders',
      body: 'Reworked KYC, first-trade flows, and portfolio insights with behaviour-based nudges and radical clarity on risk.',
      metric: '64% higher activation rate' },
    { industry: 'Logistics', icon: 'assets/ic-logistics.svg',
      title: 'Control-tower UX for a multi-modal supply chain',
      body: 'Exception-first dashboards that surface what needs a human now — and let AI route the rest automatically.',
      metric: '45% faster exception resolution' },
    { industry: 'Manufacturing', img: 'assets/case3.jpg',
      title: 'Operator HMI redesign for high-mix production lines',
      body: 'Replaced 14 legacy screens with role-based views, glove-friendly targets, and error-proofed workflows.',
      metric: '52% fewer operator errors' },
    { industry: 'Industry 4.0', icon: 'assets/ic-industry40.svg',
      title: 'Predictive maintenance analytics people actually use',
      body: 'Translated model outputs into plain-language work orders with confidence cues and one-tap scheduling.',
      metric: '3x adoption among technicians' }
  ],

  blogs: [
    { img: 'assets/ux-blog1.jpg', tag: 'Process',
      title: 'UI/UX Design Process Steps: A 10-Step Actionable Guide to Craft Winning Designs',
      author: 'Fathima Mohammed', date: 'March 10, 2026', read: '21 mins read' },
    { img: 'assets/ux-blog2.jpg', tag: 'Dashboards',
      title: 'Best Dashboard UI/UX Design Principles You Must Know in 2026',
      author: 'Vijesh TV', date: 'February 25, 2026', read: '32 mins read' },
    { img: 'assets/ux-blog3.jpg', tag: 'Conversion',
      title: '11 Best Practices on Filters UI Design to Enhance UX & Conversions',
      author: 'Fazmeena', date: 'December 29, 2025', read: '17 mins read' }
  ],

  testimonials: [
    { quote: 'We’d highlight the team because they knew what they were doing.',
      name: 'Shubham Rawal', role: 'Founder & CEO, StockPe', industry: 'Financial Services' },
    { quote: 'The AI-assisted research compressed months of discovery into two weeks — and the insights held up in production.',
      name: 'VP of Product', role: 'Remote Patient Monitoring Platform', industry: 'Healthcare' },
    { quote: 'Our operators stopped calling the control room. The new interface just makes sense on the floor.',
      name: 'Digital Transformation Lead', role: 'Global Manufacturing Group', industry: 'Manufacturing' }
  ]
};

/* ══════════════════════════════════════════════════
   Renderers — tiny & dependency-free
   ══════════════════════════════════════════════════ */
(function () {
  'use strict';
  var C = window.UX_CONTENT;
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  var ICONS = {
    speed:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    growth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'
  };

  /* Hero stats (hero untouched otherwise) */
  var hs = document.getElementById('uxHeroStats');
  if (hs) C.heroStats.forEach(function (s) {
    var d = el('div', 'uxh-stat');
    d.appendChild(el('div', 'uxh-stat-v', esc(s.value)));
    d.appendChild(el('div', 'uxh-stat-l', esc(s.label)));
    hs.appendChild(d);
  });

  /* Why UX Matters */
  var ws = document.getElementById('uxWhyStats');
  if (ws) C.whyStats.forEach(function (s) {
    var d = el('div', 'uxw-stat reveal');
    d.appendChild(el('div', 'uxw-stat-v grad-txt', esc(s.value)));
    d.appendChild(el('div', 'uxw-stat-l', esc(s.label)));
    ws.appendChild(d);
  });
  var wn = document.getElementById('uxWhyNarrative');
  if (wn) wn.textContent = C.whyNarrative;
  var wc = document.getElementById('uxWhyCards');
  if (wc) C.whyCards.forEach(function (c) {
    var d = el('article', 'uxw-card reveal');
    d.appendChild(el('div', 'uxw-ico', ICONS[c.icon] || ''));
    d.appendChild(el('h3', null, esc(c.title)));
    d.appendChild(el('p', null, esc(c.body)));
    var row = el('div', 'ux-pills');
    c.tags.forEach(function (t) { row.appendChild(el('span', 'ux-pill', esc(t))); });
    d.appendChild(row);
    wc.appendChild(d);
  });
  var wf = document.getElementById('uxWhyFootnote');
  if (wf) wf.textContent = C.whyFootnote;

  /* Process timeline */
  var tl = document.getElementById('uxTimeline');
  if (tl) {
    C.process.forEach(function (p, i) {
      var step = el('div', 'tl-step reveal' + (i % 2 ? ' flip' : ''));
      var dot = el('div', 'tl-dot', '<span>' + (i + 1) + '</span>');
      var card = el('article', 'tl-card');
      card.appendChild(el('div', 'tl-phase grad-txt', esc(p.phase)));
      card.appendChild(el('h3', null, esc(p.title)));
      card.appendChild(el('p', 'tl-body', esc(p.body)));
      card.appendChild(el('div', 'tl-ai',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg><span>' + esc(p.ai) + '</span>'));
      var dl = el('div', 'ux-pills');
      p.deliverables.forEach(function (x) { dl.appendChild(el('span', 'ux-pill dark', esc(x))); });
      card.appendChild(dl);
      card.appendChild(el('p', 'tl-outcome', '&rarr;&nbsp; ' + esc(p.outcome)));
      step.appendChild(dot);
      step.appendChild(card);
      tl.appendChild(step);
    });

    /* Scroll-driven gradient line + dot lighting */
    var fill = document.getElementById('tlFill');
    var dots = tl.querySelectorAll('.tl-dot');
    function onScroll() {
      var r = tl.getBoundingClientRect();
      var mid = window.innerHeight * 0.55;
      var p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      if (fill) fill.style.height = (p * 100) + '%';
      dots.forEach(function (d) {
        d.classList.toggle('lit', d.getBoundingClientRect().top < mid);
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Case studies + industry filter */
  var filtersEl = document.getElementById('uxFilters');
  var casesEl = document.getElementById('uxCases');
  if (filtersEl && casesEl) {
    C.cases.forEach(function (c) {
      var d = el('article', 'uxc-card reveal');
      d.setAttribute('data-industry', c.industry);
      var im = el('div', 'uxc-img' + (c.icon ? ' ico' : ''));
      if (c.img) {
        var img = document.createElement('img');
        img.src = c.img; img.alt = c.title; img.loading = 'lazy';
        im.appendChild(img);
        im.appendChild(el('div', 'grad-ov'));
      } else {
        var ic = document.createElement('img');
        ic.src = c.icon; ic.alt = ''; ic.loading = 'lazy';
        im.appendChild(ic);
      }
      im.appendChild(el('span', 'ctag', esc(c.industry)));
      d.appendChild(im);
      var bd = el('div', 'uxc-body');
      bd.appendChild(el('h3', null, esc(c.title)));
      bd.appendChild(el('p', null, esc(c.body)));
      bd.appendChild(el('span', 'metric', esc(c.metric)));
      d.appendChild(bd);
      casesEl.appendChild(d);
    });
    C.caseFilters.forEach(function (f, i) {
      var b = el('button', 'ux-filter' + (i === 0 ? ' on' : ''), esc(f));
      b.type = 'button';
      b.addEventListener('click', function () {
        filtersEl.querySelectorAll('.ux-filter').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        casesEl.querySelectorAll('.uxc-card').forEach(function (card) {
          var show = f === 'All' || card.getAttribute('data-industry') === f;
          card.style.display = show ? '' : 'none';
        });
      });
      filtersEl.appendChild(b);
    });
  }

  /* Blogs */
  var bl = document.getElementById('uxBlogs');
  if (bl) C.blogs.forEach(function (b) {
    var d = el('article', 'uxb-card reveal');
    var im = el('div', 'uxb-img');
    var img = document.createElement('img');
    img.src = b.img; img.alt = b.title; img.loading = 'lazy';
    im.appendChild(img);
    im.appendChild(el('span', 'ctag', esc(b.tag)));
    d.appendChild(im);
    var bd = el('div', 'uxb-body');
    bd.appendChild(el('h3', null, esc(b.title)));
    bd.appendChild(el('p', 'uxb-by', 'By ' + esc(b.author)));
    bd.appendChild(el('p', 'uxb-meta', esc(b.date) + ' &nbsp;•&nbsp; ' + esc(b.read)));
    bd.appendChild(el('a', 'uxb-link', 'Read more &rarr;'));
    d.appendChild(bd);
    bl.appendChild(d);
  });

  /* Testimonials */
  var ts = document.getElementById('uxTestimonial');
  if (ts) C.testimonials.forEach(function (t) {
    var d = el('article', 'uxt-card reveal');
    d.appendChild(el('div', 'uxt-quote-mark grad-txt', '&ldquo;'));
    d.appendChild(el('p', 'uxt-quote', esc(t.quote)));
    var foot = el('div', 'uxt-foot');
    foot.appendChild(el('p', 'uxt-name', esc(t.name)));
    foot.appendChild(el('p', 'uxt-role', esc(t.role)));
    d.appendChild(foot);
    d.appendChild(el('span', 'itag', esc(t.industry)));
    ts.appendChild(d);
  });
})();
