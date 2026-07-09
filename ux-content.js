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

  whyPillars: [
    { key: 'financial', icon: 'dollar', title: 'Direct Financial Impacts',
      items: [
        { icon: 'userplus', title: 'Lower customer acquisition cost',
          body: 'Intuitive design lets users self-onboard, cutting reliance on costly high-touch sales demos.' },
        { icon: 'heart', title: 'Higher customer lifetime value',
          body: 'Frictionless products embed into daily workflows, making customers resistant to switching.' },
        { icon: 'headset', title: 'Reduced operational costs',
          body: 'Clear navigation and error-prevention cut support tickets and engineering overhead.' }
      ] },
    { key: 'workforce', icon: 'briefcase', title: 'Workforce & Operational Efficiency',
      items: [
        { icon: 'bulb', title: 'Zero-training onboarding',
          body: 'Predictive, self-explanatory interfaces remove the employee training bottleneck.' },
        { icon: 'shieldcheck', title: 'Minimized human error',
          body: 'Smart input fields and visual guardrails protect data integrity across the org.' },
        { icon: 'clock', title: 'Accelerated task completion',
          body: 'Optimized workflows shave seconds off repetitive tasks, unlocking thousands of hours at scale.' }
      ] },
    { key: 'strategic', icon: 'target', title: 'Core Strategic Advantages in 2026',
      items: [
        { icon: 'chart', title: 'Data-driven agility',
          body: 'Clean UX drives accurate data entry, giving leaders reliable analytics for fast decisions.' },
        { icon: 'devices', title: 'Seamless multi-platform continuity',
          body: 'Fluid experience across mobile, desktop, and tablet prevents drop-off when users switch screens.' },
        { icon: 'badge', title: 'Immediate brand trust',
          body: 'Visual polish and predictable interactions signal security, earning credibility with tech-savvy buyers.' }
      ] }
  ],

  whyCompare: {
    bad: {
      title: 'The Cost of Poor UX',
      items: [
        '88% of users never return after a bad experience',
        'Up to 70% of enterprise software goes under-adopted when UX is an afterthought',
        'Fixing a usability problem after development costs up to 100x more',
        'Half of engineering time burns on avoidable rework'
      ]
    },
    good: {
      title: 'The Return on Great UX',
      items: [
        'Design-led companies grow revenue 2x faster than industry peers',
        '$100 returned for every $1 invested in UX',
        'CX leaders outperform laggards by ~80% on key business KPIs',
        '415% ROI from embedding usability research early'
      ]
    }
  },

  roiCalc: {
    heading: 'What could better UX be worth to you?',
    sub: 'A conservative estimate — studies report 200–400% conversion lifts from well-designed interfaces. We model just +25%.',
    lift: 0.25,
    fields: [
      { key: 'visitors', label: 'Monthly visitors / users', value: 50000, min: 100 },
      { key: 'conv',     label: 'Conversion rate (%)',      value: 2,     min: 0.1, step: 0.1 },
      { key: 'value',    label: 'Avg value per conversion ($)', value: 150, min: 1 }
    ],
    resultLabel: 'Potential additional revenue per year',
    disclaimer: 'Illustrative estimate, not a guarantee — talk to us for a model based on your real funnel.'
  },

  whyFootnote: '¹ Forrester (≈9,900% ROI) · ² Forrester Total Economic Impact · Other benchmarks: McKinsey Design Index, IBM Systems Sciences, Amazon/Econsultancy CX research',

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
    dollar:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
    briefcase:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
    target:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    userplus:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>',
    heart:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
    headset:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>',
    bulb:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0012 2z"/></svg>',
    shieldcheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    clock:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    chart:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    devices:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="14" height="11" rx="2"/><path d="M9 19h4"/><rect x="17" y="9" width="5" height="10" rx="1.5"/></svg>',
    badge:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8l1.2 2.4 2.8.4-2 2 .5 2.7-2.5-1.3-2.5 1.3.5-2.7-2-2 2.8-.4z"/></svg>'
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
  /* Impact pillars — 3 color-coded categories */
  var wp = document.getElementById('uxWhyPillars');
  if (wp && C.whyPillars) C.whyPillars.forEach(function (p) {
    var col = el('article', 'uxp ' + p.key + ' reveal');
    var head = el('div', 'uxp-head');
    head.appendChild(el('span', 'uxp-ico', ICONS[p.icon] || ''));
    head.appendChild(el('h3', null, esc(p.title)));
    col.appendChild(head);
    p.items.forEach(function (it) {
      var card = el('div', 'uxp-item');
      card.appendChild(el('span', 'uxp-item-ico', ICONS[it.icon] || ''));
      var txt = el('div', 'uxp-item-txt');
      txt.appendChild(el('h4', null, esc(it.title)));
      txt.appendChild(el('p', null, esc(it.body)));
      card.appendChild(txt);
      col.appendChild(card);
    });
    wp.appendChild(col);
  });
  /* Poor vs Great UX comparison */
  var cmp = document.getElementById('uxWhyCompare');
  if (cmp && C.whyCompare) {
    [['bad', C.whyCompare.bad], ['good', C.whyCompare.good]].forEach(function (pair) {
      var kind = pair[0], data = pair[1];
      var card = el('article', 'uxcmp ' + kind + ' reveal');
      card.appendChild(el('h3', null, esc(data.title)));
      var ul = el('ul');
      data.items.forEach(function (it) {
        var li = el('li');
        li.appendChild(el('span', 'uxcmp-mark', kind === 'bad'
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'));
        li.appendChild(el('span', null, esc(it)));
        ul.appendChild(li);
      });
      card.appendChild(ul);
      cmp.appendChild(card);
    });
  }

  /* ROI mini-calculator */
  var calc = document.getElementById('uxRoiCalc');
  if (calc && C.roiCalc) {
    var R = C.roiCalc;
    calc.appendChild(el('h3', 'uxroi-h', esc(R.heading)));
    calc.appendChild(el('p', 'uxroi-sub', esc(R.sub)));
    var row = el('div', 'uxroi-row');
    var inputs = {};
    R.fields.forEach(function (f) {
      var fld = el('label', 'uxroi-field');
      fld.appendChild(el('span', null, esc(f.label)));
      var inp = document.createElement('input');
      inp.type = 'number'; inp.value = f.value; inp.min = f.min;
      if (f.step) inp.step = f.step;
      inputs[f.key] = inp;
      fld.appendChild(inp);
      row.appendChild(fld);
    });
    calc.appendChild(row);
    var out = el('div', 'uxroi-out');
    out.appendChild(el('div', 'uxroi-out-l', esc(R.resultLabel)));
    var val = el('div', 'uxroi-out-v grad-txt', '$0');
    out.appendChild(val);
    calc.appendChild(out);
    calc.appendChild(el('p', 'uxroi-note', esc(R.disclaimer)));
    function compute() {
      var v = parseFloat(inputs.visitors.value) || 0;
      var c = (parseFloat(inputs.conv.value) || 0) / 100;
      var a = parseFloat(inputs.value.value) || 0;
      var extra = v * 12 * c * a * R.lift;
      val.textContent = '+$' + Math.round(extra).toLocaleString('en-US') + ' / year';
    }
    Object.keys(inputs).forEach(function (k) { inputs[k].addEventListener('input', compute); });
    compute();
  }

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
