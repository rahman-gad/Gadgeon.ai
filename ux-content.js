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
    { value: '200–400%', label: 'Increase in conversion from well-designed interfaces' },
    { value: '50%',      label: 'Reduction in dev rework when usability is validated early' },
    { value: '10.8%',    label: 'Higher 3-year revenue retention from continuous UX research²' }
  ],

  whyNarrative: "Design isn't just how it looks — it's how the business performs. McKinsey research shows design-led companies deliver 2x the revenue growth of industry peers, while poor usability drives 88% of users away for good — often before they ever reach checkout. At Gadgeon, we treat UX as a measurable investment: catching friction before it ships, validating flows before engineering commits, and tying every design decision back to conversion, retention, and cost.",

  whyCards: [
    { title: 'Faster Time-to-Value',
      body: 'Usability testing catches friction before code is written, cutting rework costs by up to half and shortening dev cycles.',
      tags: 'RESEARCH  •  VALIDATION  •  SPEED' },
    { title: 'Higher Conversion, Lower Churn',
      body: 'Improving customer experience can raise KPIs by over 80%, turning existing traffic into more sales without added spend.',
      tags: 'CONVERSION  •  RETENTION  •  REVENUE' },
    { title: 'Design as Risk Mitigation',
      body: 'Embedding usability research early can return 415% ROI and avoid millions in downstream rework.',
      tags: 'RISK REDUCTION  •  COST SAVINGS  •  ROI' }
  ],

  whyFootnote: '¹ Forrester (≈9,900% ROI). ² Forrester Total Economic Impact. Additional benchmarks: McKinsey Design Index.',

  process: [
    { title: 'Project Kickoff & Discovery',
      body: 'We align on your vision, goals, and constraints through focused conversations, setting a clear direction from day one.',
      tags: 'STRATEGY  •  GOALS  •  ALIGNMENT',
      deliverables: ['Stakeholder brief', 'Success metrics', 'Project roadmap'] },
    { title: 'Research & Competitive Analysis',
      body: 'We analyze your market, users, and competitors to uncover insights that inform smarter and more differentiated design decisions.',
      tags: 'MARKET RESEARCH  •  COMPETITOR ANALYSIS  •  INSIGHTS',
      deliverables: ['User personas', 'Competitive teardown', 'Insight report'] },
    { title: 'User Flow & UX Refinement',
      body: 'We map user journeys and refine interactions to create intuitive, friction-free experiences across every touchpoint.',
      tags: 'USER FLOWS  •  UX STRATEGY  •  JOURNEY MAPPING',
      deliverables: ['Journey maps', 'User flows', 'IA sitemap'] },
    { title: 'Design',
      body: 'We shape ideas into scalable experiences — starting with low-fidelity wireframes, building a cohesive design system, and evolving into polished, high-fidelity interfaces.',
      tags: 'LOW-FIDELITY  •  DESIGN SYSTEM  •  HIGH-FIDELITY',
      deliverables: ['Wireframe sets', 'Design system', 'Hi-fi prototypes'] },
    { title: 'Project Handover',
      body: 'We deliver production-ready designs, assets, and documentation, ensuring a seamless transition from design to development.',
      tags: 'DESIGN FILES  •  DOCUMENTATION  •  HANDOVER',
      deliverables: ['Design files', 'Dev-ready specs', 'Handoff docs'] }
  ],

  cases: [
    { img: 'assets/ux-case1.jpg', title: 'Wrinsy Brand Identity & Logo Design',
      category: 'Brand Identity', published: 'Jun 25, 2026' },
    { img: 'assets/ux-case2.jpg', title: 'Smart Home Mobile App Design',
      category: 'Mobile App', published: 'Jun 25, 2026' },
    { img: 'assets/ux-case3.jpg', title: 'Wrinsy Brand Identity & Logo Design',
      category: 'Brand Identity', published: 'Jun 25, 2026' }
  ],

  blogs: [
    { img: 'assets/ux-blog1.jpg',
      title: 'UI/UX Design Process Steps: A 10-Step Actionable Guide to Craft Winning Designs (+ Expert Tips)',
      author: 'Fathima Mohammed', date: 'March 10, 2026', read: '21 mins read' },
    { img: 'assets/ux-blog2.jpg',
      title: 'Best Dashboard UI/UX Design Principles You Must Know in 2026',
      author: 'Vijesh TV', date: 'February 25, 2026', read: '32 mins read' },
    { img: 'assets/ux-blog3.jpg',
      title: '11 Best Practices on Filters UI Design to Enhance UX & Conversions',
      author: 'Fazmeena', date: 'December 29, 2025', read: '17 mins read' }
  ],

  testimonials: [
    { quote: '“We’d highlight the team because they knew what they were doing”',
      name: 'Shubham Rawal', role: 'Founder & CEO, StockPe', industry: 'Financial services' }
  ]
};

/* ── Renderers (kept tiny & dependency-free) ── */
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

  // Hero stats
  var hs = document.getElementById('uxHeroStats');
  if (hs) C.heroStats.forEach(function (s) {
    var d = el('div', 'uxh-stat');
    d.appendChild(el('div', 'uxh-stat-v', esc(s.value)));
    d.appendChild(el('div', 'uxh-stat-l', esc(s.label)));
    hs.appendChild(d);
  });

  // Why stats
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
    var d = el('article', 'ux-card reveal');
    d.appendChild(el('h3', 'ux-card-t', esc(c.title)));
    d.appendChild(el('p', 'ux-card-b', esc(c.body)));
    d.appendChild(el('p', 'ux-card-tags', esc(c.tags)));
    wc.appendChild(d);
  });
  var wf = document.getElementById('uxWhyFootnote');
  if (wf) wf.textContent = C.whyFootnote;

  // Process steps
  var pr = document.getElementById('uxProcess');
  if (pr) C.process.forEach(function (p, i) {
    var d = el('article', 'ux-card ux-step reveal');
    d.appendChild(el('div', 'ux-step-n', String(i + 1).padStart(2, '0')));
    d.appendChild(el('h3', 'ux-card-t', esc(p.title)));
    d.appendChild(el('p', 'ux-card-b', esc(p.body)));
    d.appendChild(el('p', 'ux-card-tags', esc(p.tags)));
    var dl = el('ul', 'ux-deliv');
    p.deliverables.forEach(function (x) { dl.appendChild(el('li', null, esc(x))); });
    d.appendChild(dl);
    pr.appendChild(d);
  });

  // Cases
  var cs = document.getElementById('uxCases');
  if (cs) C.cases.forEach(function (c) {
    var d = el('article', 'ux-case reveal');
    var im = el('div', 'ux-case-img');
    var img = document.createElement('img');
    img.src = c.img; img.alt = c.title; img.loading = 'lazy';
    im.appendChild(img); d.appendChild(im);
    d.appendChild(el('h3', 'ux-case-t', esc(c.title)));
    d.appendChild(el('p', 'ux-case-meta', '<span>Category:</span> <strong>' + esc(c.category) + '</strong>'));
    d.appendChild(el('p', 'ux-case-meta', '<span>Published:</span> <strong>' + esc(c.published) + '</strong>'));
    cs.appendChild(d);
  });

  // Blogs
  var bl = document.getElementById('uxBlogs');
  if (bl) C.blogs.forEach(function (b) {
    var d = el('article', 'ux-blog reveal');
    var im = el('div', 'ux-blog-img');
    var img = document.createElement('img');
    img.src = b.img; img.alt = b.title; img.loading = 'lazy';
    im.appendChild(img); d.appendChild(im);
    d.appendChild(el('h3', 'ux-blog-t', esc(b.title)));
    d.appendChild(el('p', 'ux-blog-by', 'By ' + esc(b.author)));
    d.appendChild(el('p', 'ux-blog-meta', esc(b.date) + '  •  ' + esc(b.read)));
    bl.appendChild(d);
  });

  // Testimonials
  var ts = document.getElementById('uxTestimonial');
  if (ts) C.testimonials.forEach(function (t) {
    var d = el('div', 'ux-testi reveal');
    d.appendChild(el('p', 'ux-testi-q', '“&nbsp;&nbsp;”'));
    d.appendChild(el('p', 'ux-testi-quote', esc(t.quote)));
    d.appendChild(el('p', 'ux-testi-name', esc(t.name)));
    d.appendChild(el('p', 'ux-testi-role', esc(t.role)));
    d.appendChild(el('p', 'ux-testi-role', esc(t.industry)));
    ts.appendChild(d);
  });
})();
