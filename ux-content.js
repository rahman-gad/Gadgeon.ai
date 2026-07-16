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

  /* One headline metric + two supporting stats per pillar — no prose. */
  whyPillars: [
    { key: 'financial', icon: 'dollar', kicker: 'Financial Impact',
      subtitle: 'UX that shows up on the balance sheet.',
      items: [
        { metric: '+2.4x', mlabel: 'Customer lifetime value' },
        { metric: '-34%',  mlabel: 'Acquisition cost' },
        { metric: '-58%',  mlabel: 'Support volume' }
      ] },
    { key: 'workforce', icon: 'briefcase', kicker: 'Workforce Efficiency',
      subtitle: 'Less friction for the people who use it daily.',
      items: [
        { metric: '-80%',   mlabel: 'Onboarding time' },
        { metric: '-61%',   mlabel: 'Input errors' },
        { metric: '3,200+', mlabel: 'Hours saved / year' }
      ] },
    { key: 'strategic', icon: 'target', kicker: 'Strategic Advantage',
      subtitle: 'Advantages competitors can’t easily copy.',
      items: [
        { metric: '4.7x',  mlabel: 'Decision speed' },
        { metric: '+41%',  mlabel: 'Brand trust' },
        { metric: '99.2%', mlabel: 'Cross-device continuity' }
      ] }
  ],

  /* Benefits for users — why people stay and come back */
  userBenefits: [
    { icon: 'clock',       title: 'Saves time',           body: 'Complete tasks faster and more efficiently.' },
    { icon: 'smile',       title: 'Reduces frustration',  body: 'Clear flows and guidance cut confusion and errors.' },
    { icon: 'shieldcheck', title: 'Builds confidence',    body: 'Users always know what to do and what happens next.' },
    { icon: 'devices',     title: 'Improves accessibility', body: 'Works for everyone, on any device, anytime.' },
    { icon: 'star',        title: 'Creates delight',      body: 'Thoughtful details make the experience enjoyable.' }
  ],

  /* Closing investment band — UX is not an expense */
  investment: {
    heading: "UX is not an expense.",
    headingAccent: "It's an investment that drives growth.",
    sub: 'Recognize UX as a core driver of digital transformation — and a competitive edge.',
    cards: [
      { icon: 'dollar',    title: 'More revenue',      body: 'Increase conversions and sales.' },
      { icon: 'heart',     title: 'Happier users',     body: 'Better experiences build loyalty.' },
      { icon: 'headset',   title: 'Lower costs',       body: 'Reduce support and development costs.' },
      { icon: 'briefcase', title: 'Stronger business', body: 'Sustainable growth and a competitive edge.' }
    ]
  },

  /* ── AI-Driven UX Process — scroll timeline ── */
  process: [
    { phase: 'Phase 01', title: 'Kickoff & Discovery',
      duration: '3–5 days',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><line x1="12" y1="2.5" x2="12" y2="5.5"/><line x1="12" y1="18.5" x2="12" y2="21.5"/><line x1="2.5" y1="12" x2="5.5" y2="12"/><line x1="18.5" y1="12" x2="21.5" y2="12"/></svg>',
      body: 'We align on your vision, goals, and constraints through focused working sessions — and let AI mine your existing analytics, tickets, and reviews for signals before day one ends.',
      ai: 'AI digests months of support logs & analytics overnight',
      deliverables: ['Stakeholder brief', 'Success metrics', 'Project roadmap'],
      outcome: 'A shared definition of success, in days not weeks',
      team: 'UX Strategist · Product Manager · AI Research Agent' },
    { phase: 'Phase 02', title: 'AI-Accelerated Research',
      duration: '1–2 weeks',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/><path d="M8 12l2-2 2 2 2.5-3.5"/></svg>',
      body: 'Market scans, competitor teardowns, and user interviews — synthesized by AI in hours instead of weeks, then pressure-tested by our researchers for what actually matters.',
      ai: 'Interview synthesis & pattern detection in hours',
      deliverables: ['User personas', 'Competitive teardown', 'Insight report'],
      outcome: 'Evidence-backed direction before a single pixel is drawn',
      team: 'UX Researchers · Data Analyst · AI Synthesis Engine' },
    { phase: 'Phase 03', title: 'Flows & Experience Architecture',
      duration: '1–2 weeks',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="5" rx="1.5"/><rect x="2.5" y="16.5" width="6" height="5" rx="1.5"/><rect x="15.5" y="16.5" width="6" height="5" rx="1.5"/><path d="M12 7.5v4M5.5 16.5v-2.5h13v2.5M12 11.5v2.5"/></svg>',
      body: 'We map every journey and decision point, simulate drop-off risks with AI-assisted flow analysis, and refine interactions until the path of least resistance is the product.',
      ai: 'Flow simulations flag drop-off risks pre-build',
      deliverables: ['Journey maps', 'User flows', 'IA sitemap'],
      outcome: 'Friction found on the whiteboard, not in production',
      team: 'Interaction Designer · IA Lead · AI Flow Simulator' },
    { phase: 'Phase 04', title: 'Design & Validation',
      duration: '2–4 weeks',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2.5 2.5 7.5 12 12.5 21.5 7.5 12 2.5"/><polyline points="2.5 12.5 12 17.5 21.5 12.5"/></svg>',
      body: 'From low-fidelity wireframes to a cohesive design system to polished hi-fi interfaces — with AI-generated variants tested against real users at every gate.',
      ai: 'Variant generation & rapid preference testing',
      deliverables: ['Wireframe sets', 'Design system', 'Hi-fi prototypes'],
      outcome: 'Validated designs engineering can trust',
      team: 'Product Designers · Design Systems Lead · AI Variant Engine' },
    { phase: 'Phase 05', title: 'Handover & Continuous Learning',
      duration: 'Ongoing',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.78-.66.79-2.02.05-2.94a2 2 0 0 0-3.05-.06z"/><path d="M12 15l-3-3a22 22 0 0 1 8-10c2 1 4 3 5 5a22 22 0 0 1-10 8z"/><path d="M9 12H5s.5-2.8 2-4c1.5-1 5 0 5 0"/><path d="M12 15v4s2.8-.5 4-2c1-1.5 0-5 0-5"/></svg>',
      body: 'Production-ready files, specs, and documentation for a seamless build — plus instrumented feedback loops so the experience keeps improving after launch.',
      ai: 'Post-launch signal monitoring feeds the next iteration',
      deliverables: ['Design files', 'Dev-ready specs', 'Handoff docs'],
      outcome: 'Zero-ambiguity handoff, measurable after launch',
      team: 'Design Ops · Engineering Liaison · AI Signal Monitor' }
  ],

  /* ── Case studies — one per industry (filterable) ── */
  caseFilters: ['All', 'Telecom', 'IoT', 'Healthcare', 'Enterprise SaaS', 'BFSI', 'Logistics', 'Manufacturing', 'Industry 4.0'],
  cases: [
    { industry: 'Telecom', img: 'assets/case1.jpg', slug: 'telecom',
      title: 'Self-service portal redesign for a global connectivity provider',
      body: 'Rebuilt the SIM lifecycle and billing journeys around task-first IA, with AI-summarized diagnostics for support teams.',
      metric: '43% fewer support tickets',
      detail: {
        subtitle: 'Turning a support-heavy SIM &amp; billing portal into a product customers can actually run themselves.',
        duration: '14 weeks', team: '5 designers + AI research pod', year: '2025',
        challenge: 'Support lines were drowning. More than 60% of tickets were “how do I…” questions the portal should have answered on its own. The legacy information architecture mirrored the org chart — not the three jobs customers actually came to do: activate a SIM, understand a bill, and fix a connection.',
        approach: [
          'Rebuilt the IA around task-first journeys instead of internal product silos, so activation, billing, and diagnostics each had a clear front door.',
          'Applied progressive disclosure and plain-language microcopy to strip jargon out of every critical step.',
          'Surfaced AI-summarized diagnostics inline, so both customers and agents saw a plain-English read of the connection state before acting.'
        ],
        aiEdge: [
          'AI clustered 90 days of support transcripts into the 12 real customer intents — overnight, not over a quarter.',
          'Synthetic user testing pre-screened flows before we spent a rupee recruiting real participants.',
          'Generative variants let us pressure-test five IA structures in the time one usually takes.'
        ],
        results: [
          { v: '43%', l: 'fewer support tickets' },
          { v: '2.1x', l: 'self-serve task completion' },
          { v: '31%', l: 'lower average handle time' },
          { v: '+18', l: 'NPS after launch' }
        ],
        scope: ['IA &amp; sitemap', '40+ responsive screens', 'Design tokens &amp; components', 'Support-agent console'],
        stack: ['Figma', 'AI transcript clustering', 'Maze', 'Dovetail'],
        quote: { text: 'The redesign paid for itself in deflected tickets within the first quarter.', name: 'Director of Digital', role: 'Global Connectivity Provider' }
      } },
    { industry: 'IoT', img: 'assets/ux-case2.jpg', slug: 'iot',
      title: 'Smart home app that families actually finish setting up',
      body: 'Redesigned onboarding, device pairing, and automation builder around progressive disclosure and plain language.',
      metric: '58% higher onboarding completion',
      detail: {
        subtitle: 'An onboarding families finish on the first try — without a call to support or a one-star review.',
        duration: '10 weeks', team: '3 designers + AI content pod', year: '2025',
        challenge: 'Two in five users abandoned setup at device pairing, and pairing errors were the single biggest driver of product returns. The automation builder — the feature that created loyalty — was buried behind a wall of jargon most people never reached.',
        approach: [
          'Rebuilt pairing as a resilient, forgiving flow with proactive error recovery instead of dead-end failure states.',
          'Replaced feature-speak with plain language and reframed “automations” as ready-to-use templates.',
          'Used progressive disclosure so first-run showed the one next step, not the whole control panel.'
        ],
        aiEdge: [
          'AI generated 30+ microcopy variants that we A/B tested to find the phrasing that reduced hesitation.',
          'Flow simulation predicted the exact steps where users would stall — before a single build.',
          'Vision models auto-labelled device states so error messages could say what was actually wrong.'
        ],
        results: [
          { v: '58%', l: 'higher onboarding completion' },
          { v: '46%', l: 'fewer pairing-related returns' },
          { v: '4.6★', l: 'app-store rating (up from 3.1)' },
          { v: '2.4x', l: 'automations created per user' }
        ],
        scope: ['Onboarding &amp; pairing flows', 'Automation builder', 'Error &amp; empty states', 'Microcopy system'],
        stack: ['Figma', 'AI copy variants', 'UsabilityHub', 'Lottie'],
        quote: null
      } },
    { industry: 'Healthcare', img: 'assets/case2.jpg', slug: 'healthcare',
      title: 'Clinician dashboard for remote patient monitoring',
      body: 'Prioritized alarms, trend-first vitals, and one-glance patient context — validated with 40+ clinicians before build.',
      metric: '37% faster time-to-decision',
      detail: {
        subtitle: 'One-glance patient context that cuts through alarm fatigue in remote monitoring.',
        duration: '16 weeks', team: '4 designers + clinical advisors + AI triage', year: '2026',
        challenge: 'Clinicians were scanning six disconnected systems per patient, and a flood of non-actionable alerts had bred alarm fatigue — the real risk being a genuine deterioration lost in the noise. Every second of hesitation carries clinical weight here.',
        approach: [
          'Designed a one-glance patient context card: trend-first vitals, current risk, and the single most relevant action.',
          'Re-ranked alarms by clinical priority so what needs a human now sits at the top.',
          'Validated every critical screen with 40+ clinicians before engineering committed a line of code.'
        ],
        aiEdge: [
          'AI triaged alert noise, collapsing repetitive signals into a single actionable event.',
          'A risk model surfaced deteriorating patients early — always with a confidence cue, never a black box.',
          'Research synthesis across clinician interviews took hours, keeping busy advisors in the loop.'
        ],
        results: [
          { v: '37%', l: 'faster time-to-decision' },
          { v: '52%', l: 'fewer non-actionable alerts' },
          { v: '40+', l: 'clinicians in validation' },
          { v: '0', l: 'critical alerts missed in pilot' }
        ],
        scope: ['Clinician dashboard', 'Alarm prioritization model UX', 'Patient context card', 'HIPAA-aware patterns'],
        stack: ['Figma', 'AI alert triage', 'Dovetail', 'Clinical usability testing'],
        quote: { text: 'The AI-assisted research compressed months of discovery into two weeks — and the insights held up in production.', name: 'VP of Product', role: 'Remote Patient Monitoring Platform' }
      } },
    { industry: 'Enterprise SaaS', img: 'assets/ux-case1.jpg', slug: 'enterprise-saas',
      title: 'Design system unifying a fragmented 12-product suite',
      body: 'One component library, one interaction language, and migration guides — adopted by 9 teams in two quarters.',
      metric: '2x faster feature delivery',
      detail: {
        subtitle: 'One design language across twelve products — and the governance to keep it that way.',
        duration: '6 months', team: '6 designers + AI audit tooling', year: '2025',
        challenge: 'Twelve products meant twelve button styles, four date pickers, and endless duplicated work. The inconsistency wasn’t just ugly — it eroded user trust and slowed every team down, because nobody could safely reuse anyone else’s work.',
        approach: [
          'Built one token-driven component library with a shared interaction language across all twelve products.',
          'Shipped migration guides and codemods so teams could adopt without stalling their roadmaps.',
          'Stood up a lightweight governance model so the system evolves instead of fossilizing.'
        ],
        aiEdge: [
          'AI audited twelve codebases to map component drift and quantify the true scale of the debt.',
          'Auto-generated migration diffs turned a scary rewrite into a reviewable pull request.',
          'Usage analytics fed an AI model that flagged which patterns were quietly being forked.'
        ],
        results: [
          { v: '2x', l: 'faster feature delivery' },
          { v: '9', l: 'teams adopted in 2 quarters' },
          { v: '60%', l: 'fewer design-debt tickets' },
          { v: '1', l: 'source of truth (was 12)' }
        ],
        scope: ['Component library', 'Design tokens', 'Migration guides &amp; codemods', 'Governance model'],
        stack: ['Figma', 'Storybook', 'AI code audit', 'Design tokens (W3C)'],
        quote: null
      } },
    { industry: 'BFSI', icon: 'assets/ic-bfsi.svg', slug: 'bfsi',
      title: 'Investing app UX that turns sign-ups into active traders',
      body: 'Reworked KYC, first-trade flows, and portfolio insights with behaviour-based nudges and radical clarity on risk.',
      metric: '64% higher activation rate',
      detail: {
        subtitle: 'Closing the gap between a sign-up and a confident first trade.',
        duration: '12 weeks', team: '4 designers + AI personalization', year: '2026',
        challenge: 'Sign-ups were strong but activation was weak: users stalled in KYC, hesitated on their first trade, and churned before they ever felt the product’s value. Anxiety about risk — not lack of intent — was the quiet killer.',
        approach: [
          'Streamlined KYC into a progressive, trust-building flow with clear stakes at each step.',
          'Guided the first trade with radical clarity on risk, so confidence — not fear — drove the tap.',
          'Turned portfolio insights into behaviour-based nudges that reward the right next action.'
        ],
        aiEdge: [
          'AI personalized nudges to each user’s behaviour, not a one-size-fits-all funnel.',
          'A churn-risk model triggered re-engagement at the moment intent was slipping.',
          'Preference testing on AI-generated variants found the risk framing users trusted most.'
        ],
        results: [
          { v: '64%', l: 'higher activation rate' },
          { v: '38%', l: 'lower KYC abandonment' },
          { v: '2.3x', l: '30-day retention' },
          { v: '1.9x', l: 'first-week trades' }
        ],
        scope: ['KYC &amp; onboarding', 'First-trade flow', 'Portfolio insights', 'Nudge &amp; notification system'],
        stack: ['Figma', 'AI personalization', 'Amplitude', 'Maze'],
        quote: { text: 'We’d highlight the team because they knew what they were doing.', name: 'Shubham Rawal', role: 'Founder &amp; CEO, StockPe' }
      } },
    { industry: 'Logistics', icon: 'assets/ic-logistics.svg', slug: 'logistics',
      title: 'Control-tower UX for a multi-modal supply chain',
      body: 'Exception-first dashboards that surface what needs a human now — and let AI route the rest automatically.',
      metric: '45% faster exception resolution',
      detail: {
        subtitle: 'An exception-first control tower that shows the 5% that needs a human — and automates the rest.',
        duration: '18 weeks', team: '5 designers + AI ops modelling', year: '2025',
        challenge: 'Operators stared at oceans of green dashboards where everything looked equally important. The 5% of shipments that actually needed attention was lost in the noise, and by the time someone noticed, the exception had become a crisis.',
        approach: [
          'Inverted the dashboard: exceptions first, ranked by business impact, with the routine collapsed away.',
          'Designed a human-in-the-loop model where AI recommends and the operator confirms high-stakes routing.',
          'Let AI auto-resolve routine flow entirely, freeing operators for judgment calls.'
        ],
        aiEdge: [
          'AI ranks exceptions by cost and downstream impact, so the worst problem is always on top.',
          'Recommended actions come with a rationale, keeping the operator in control, not out of the loop.',
          'Routine re-routing runs automatically, with a full audit trail for trust and compliance.'
        ],
        results: [
          { v: '45%', l: 'faster exception resolution' },
          { v: '70%', l: 'less dashboard scanning time' },
          { v: '3x', l: 'more exceptions handled per shift' },
          { v: '99.2%', l: 'auto-routing accuracy' }
        ],
        scope: ['Control-tower dashboard', 'Exception queue &amp; triage', 'AI recommendation UX', 'Audit &amp; trace views'],
        stack: ['Figma', 'AI ops model', 'Mapbox', 'Real-time data viz'],
        quote: null
      } },
    { industry: 'Manufacturing', img: 'assets/case3.jpg', slug: 'manufacturing',
      title: 'Operator HMI redesign for high-mix production lines',
      body: 'Replaced 14 legacy screens with role-based views, glove-friendly targets, and error-proofed workflows.',
      metric: '52% fewer operator errors',
      detail: {
        subtitle: 'A glove-friendly HMI that makes the right action the easy one on a high-mix line.',
        duration: '20 weeks', team: '4 designers + on-floor research + AI variants', year: '2025',
        challenge: 'Fourteen legacy screens, dense with controls designed for engineers rather than operators, made errors frequent and training long. On a high-mix line where the product changes hourly, every misread screen costs scrap and time.',
        approach: [
          'Collapsed 14 screens into role-based views showing only what each operator needs for the current run.',
          'Designed glove-friendly targets and high-contrast states legible under harsh floor lighting.',
          'Error-proofed critical workflows with confirmation and recovery built into the happy path.'
        ],
        aiEdge: [
          'AI generated role-based view variants we could test with operators in a single afternoon.',
          'Simulated error scenarios exposed the risky taps before they reached the floor.',
          'Vision-assisted checks flagged wrong-part risk at the point of action.'
        ],
        results: [
          { v: '52%', l: 'fewer operator errors' },
          { v: '40%', l: 'less training time' },
          { v: '14 → 4', l: 'screens per workflow' },
          { v: '28%', l: 'higher throughput on changeovers' }
        ],
        scope: ['Operator HMI', 'Role-based views', 'Error-proofed workflows', 'On-floor usability testing'],
        stack: ['Figma', 'AI variant generation', 'On-site research', 'Industrial UI patterns'],
        quote: { text: 'Our operators stopped calling the control room. The new interface just makes sense on the floor.', name: 'Digital Transformation Lead', role: 'Global Manufacturing Group' }
      } },
    { industry: 'Industry 4.0', icon: 'assets/ic-industry40.svg', slug: 'industry-40',
      title: 'Predictive maintenance analytics people actually use',
      body: 'Translated model outputs into plain-language work orders with confidence cues and one-tap scheduling.',
      metric: '3x adoption among technicians',
      detail: {
        subtitle: 'Turning predictive-maintenance model output into work orders technicians trust and act on.',
        duration: '14 weeks', team: '3 designers + data scientists + AI UX', year: '2026',
        challenge: 'The prediction models were accurate, but technicians ignored them. Raw scores and probability curves meant nothing at 6am on the floor — and without a clear action, a black-box alert is just noise you learn to dismiss.',
        approach: [
          'Translated model outputs into plain-language work orders: what, where, why, and by when.',
          'Communicated confidence as an honest cue, so technicians could calibrate their own judgment.',
          'Added one-tap scheduling so an insight became an action without leaving the screen.'
        ],
        aiEdge: [
          'Model probabilities were reframed into human-readable risk and recommended actions.',
          'Confidence communication was designed with data scientists so it never over- or under-claimed.',
          'Feedback from technicians’ actions fed back to improve the model’s usefulness over time.'
        ],
        results: [
          { v: '3x', l: 'adoption among technicians' },
          { v: '28%', l: 'less unplanned downtime' },
          { v: '2.5x', l: 'work orders acted on' },
          { v: '91%', l: 'technicians trust the alerts' }
        ],
        scope: ['Predictive-maintenance UX', 'Work-order generation', 'Confidence &amp; explainability UI', 'Scheduling flow'],
        stack: ['Figma', 'Explainable AI patterns', 'Data-viz system', 'Field testing'],
        quote: null
      } }
  ],

  blogs: [
    { img: 'assets/ux-blog1.jpg', tag: 'Process', slug: 'ux-design-process',
      title: 'UI/UX Design Process Steps: A 10-Step Actionable Guide to Craft Winning Designs',
      author: 'Fathima Mohammed', date: 'March 10, 2026', read: '21 mins read',
      detail: {
        excerpt: 'A repeatable design process is what separates lucky launches from reliable ones. Here’s the 10-step method our team runs on every engagement — and exactly where AI now earns its seat at the table.',
        sections: [
          { h: 'Why process matters more in the AI era, not less', p: [
            'It’s tempting to think generative tools make process optional — that you can prompt your way to a product. In practice the opposite is true: when execution gets cheap, judgment becomes the bottleneck. A clear process is what turns a flood of AI-generated options into decisions you can defend to a stakeholder.',
            'Process is also how you keep AI honest. Every generated artifact — a persona, a flow, a variant — is a hypothesis, not a fact. The steps below are the gates where a human decides what’s real.'
          ] },
          { h: 'The 10 steps, grouped into four moves', p: [
            'Discover (1. Stakeholder alignment, 2. User research, 3. Competitive analysis): define success, learn the user, and map the landscape. AI compresses synthesis from weeks to hours here — but researchers still decide what matters.',
            'Define (4. Insight framing, 5. Information architecture): turn evidence into a point of view and a structure. This is the highest-leverage, most human step in the whole process.',
            'Design (6. User flows, 7. Wireframes, 8. Visual &amp; prototype): move from low to high fidelity, generating variants fast and testing at every gate.',
            'Deliver (9. Validation, 10. Handover &amp; measurement): prove it with users, hand off with zero ambiguity, and instrument it so you learn after launch.'
          ] },
          { h: 'Where AI plugs into each step', p: [
            'Use AI for breadth — mining transcripts, generating variants, drafting microcopy, simulating flows. Reserve humans for depth — empathy, strategic IA calls, and the final quality bar.',
            'The teams winning right now aren’t the ones using the most AI. They’re the ones who’ve been deliberate about which decisions stay human.'
          ] },
          { h: 'Common pitfalls to avoid', p: [
            'Skipping the Define step because design tools make it easy to jump straight to screens. Prototyping fidelity without validation. And treating AI output as a deliverable rather than a draft. Each one feels faster in the moment and costs you a re-do later.'
          ] }
        ],
        takeaways: [
          'A documented process turns AI’s speed into an advantage instead of a firehose of untested options.',
          'Discovery and Define are where humans add the most value — protect them.',
          'Every AI artifact is a hypothesis; keep a human gate at each step.',
          'Instrument the product at handover so the process keeps learning after launch.'
        ]
      } },
    { img: 'assets/ux-blog2.jpg', tag: 'Dashboards', slug: 'dashboard-principles-2026',
      title: 'Best Dashboard UI/UX Design Principles You Must Know in 2026',
      author: 'Vijesh TV', date: 'February 25, 2026', read: '32 mins read',
      detail: {
        excerpt: 'Dashboards have quietly become the primary interface of enterprise software. In 2026 the best ones don’t just show data — they surface decisions. Here are the principles that separate a dashboard people rely on from one they ignore.',
        sections: [
          { h: 'The real job of a dashboard', p: [
            'A dashboard’s job is not to display data — it’s to shorten the distance between a question and a confident action. If a user has to export to a spreadsheet to make a decision, the dashboard has failed at its only job.',
            'Start every dashboard by writing down the three questions it must answer in five seconds. Everything that doesn’t serve those questions is a candidate for a secondary view.'
          ] },
          { h: 'Principles that still hold', p: [
            'Glanceability first: the most important number should be readable from across the room. Progressive disclosure: summary up top, detail on demand. Visual hierarchy: size, weight, and colour should map to importance, not decoration.',
            'Respect the data-ink ratio — every gridline, border, and gradient should earn its place. And design the empty, loading, and error states as carefully as the happy path; that’s where trust is won or lost.'
          ] },
          { h: 'What’s new: AI-native dashboards', p: [
            'The 2026 shift is from dashboards that show data to dashboards that surface insight. Instead of making users hunt through charts, an AI-native dashboard leads with “here’s what changed and why it matters,” with the chart as supporting evidence.',
            'This raises the design bar for trust. Every AI-surfaced insight needs a confidence cue and a path to the underlying data. Explainability isn’t a feature — it’s the price of letting a model speak first.'
          ] },
          { h: 'Accessibility &amp; performance are UX', p: [
            'A dashboard that fails WCAG colour contrast or takes eight seconds to load is a bad dashboard, full stop. Colour must never be the only signal, keyboard navigation must work, and perceived performance (skeletons, streaming) matters as much as raw speed.'
          ] }
        ],
        takeaways: [
          'Design around the three questions the dashboard must answer in five seconds.',
          'Lead with insight and decisions; keep raw charts as supporting evidence.',
          'Every AI-surfaced insight needs a confidence cue and a route to the source data.',
          'Empty, loading, and error states are where dashboard trust is made or broken.'
        ]
      } },
    { img: 'assets/ux-blog3.jpg', tag: 'Conversion', slug: 'filters-ui-best-practices',
      title: '11 Best Practices on Filters UI Design to Enhance UX & Conversions',
      author: 'Fazmeena', date: 'December 29, 2025', read: '17 mins read',
      detail: {
        excerpt: 'Filters are where intent meets inventory. Get them right and users find what they want in seconds; get them wrong and they bounce. Here are 11 practices — plus how AI-assisted search is reshaping the pattern.',
        sections: [
          { h: 'Why filters quietly decide conversion', p: [
            'On any catalogue of real size, filters are the difference between a sale and a bounce. A user with intent who can’t narrow results fast will assume you don’t have what they want — even when you do.',
            'Filters are also a rare UX surface where the business impact is directly measurable: filtered sessions almost always convert at multiples of unfiltered ones.'
          ] },
          { h: 'The 11 practices, grouped', p: [
            'Clarity (1. Show applied filters as removable chips, 2. Keep labels in the user’s language, 3. Show result counts before and after): never make users guess what a filter will do.',
            'Control (4. Make clearing easy, 5. Don’t auto-collapse what users just set, 6. Preserve state on back-navigation): respect the effort users put into narrowing.',
            'Speed (7. Apply instantly where possible, 8. Avoid full-page reloads, 9. Debounce and stream results): every extra second of latency erodes intent.',
            'Mobile (10. Use a dedicated filter sheet, not cramped inline controls, 11. Make primary filters reachable with a thumb): mobile filtering is its own discipline, not a squeezed desktop layout.'
          ] },
          { h: 'AI-assisted filtering and semantic search', p: [
            'The frontier is letting users describe what they want in natural language — “waterproof hiking boots under ₹8,000” — and translating that into structured filters they can then refine. AI closes the gap between how people think and how catalogues are structured.',
            'Design this as an assist, not a replacement: always show the structured filters the AI applied, and let users adjust them. Interpretation should be transparent and correctable.'
          ] },
          { h: 'Mobile-first filter patterns', p: [
            'On mobile, the winning pattern is a full-height filter sheet triggered by a persistent button, with an always-visible apply/clear bar and a live result count. It keeps the user oriented and one thumb-tap from their results.'
          ] }
        ],
        takeaways: [
          'Filtered sessions convert far higher — treat filters as a revenue surface, not a utility.',
          'Show applied filters as removable chips and always surface result counts.',
          'On mobile, use a dedicated filter sheet with a live count and a thumb-reachable apply bar.',
          'Let AI translate natural language into filters, but keep the structured result visible and editable.'
        ]
      } }
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
    badge:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8l1.2 2.4 2.8.4-2 2 .5 2.7-2.5-1.3-2.5 1.3.5-2.7-2-2 2.8-.4z"/></svg>',
    smile:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    star:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.1 8.6 22 9.3 17 14.1 18.2 21 12 17.6 5.8 21 7 14.1 2 9.3 8.9 8.6"/></svg>'
  };

  /* Hero stats (hero untouched otherwise) */
  var hs = document.getElementById('uxHeroStats');
  if (hs) C.heroStats.forEach(function (s) {
    var d = el('div', 'uxh-stat');
    d.appendChild(el('div', 'uxh-stat-v', esc(s.value)));
    d.appendChild(el('div', 'uxh-stat-l', esc(s.label)));
    hs.appendChild(d);
  });

  /* Why UX Matters — impact pillars (3 color-coded categories, animated metrics) */
  var wp = document.getElementById('uxWhyPillars');
  if (wp && C.whyPillars) {
    function stat(it, cls) {
      var s = el('div', cls);
      var v = el('span', 'uxp-metric-v', esc(it.metric));
      v.setAttribute('data-metric', it.metric);
      s.appendChild(v);
      s.appendChild(el('span', 'uxp-metric-l', esc(it.mlabel)));
      return s;
    }
    C.whyPillars.forEach(function (p) {
      var col = el('article', 'uxp ' + p.key + ' reveal');
      var head = el('div', 'uxp-head');
      head.appendChild(el('span', 'uxp-ico', ICONS[p.icon] || ''));
      var ht = el('div', 'uxp-head-txt');
      ht.appendChild(el('span', 'uxp-kicker', esc(p.kicker)));
      ht.appendChild(el('h3', null, esc(p.subtitle)));
      head.appendChild(ht);
      col.appendChild(head);
      col.appendChild(stat(p.items[0], 'uxp-hero'));
      var mini = el('div', 'uxp-mini');
      p.items.slice(1).forEach(function (it) { mini.appendChild(stat(it, 'uxp-stat')); });
      col.appendChild(mini);
      wp.appendChild(col);
    });

    /* Metric count-up: parses "+2.4x", "-58%", "3,200+", "99.2%" */
    function animateMetric(elm) {
      var raw = elm.getAttribute('data-metric');
      var m = raw.match(/^([+\-]?)([\d,]+(?:\.\d+)?)(.*)$/);
      if (!m) return;
      var sign = m[1], suffix = m[3];
      var target = parseFloat(m[2].replace(/,/g, ''));
      var decimals = (m[2].split('.')[1] || '').length;
      var grouped = m[2].indexOf(',') > -1;
      var dur = 1300, start = null;
      function fmt(n) {
        var s = n.toFixed(decimals);
        if (grouped) s = Number(s).toLocaleString('en-US', { minimumFractionDigits: decimals });
        return sign + s + suffix;
      }
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elm.textContent = fmt(target);
        return;
      }
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        elm.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      // Guarantee the exact final value even if rAF is throttled/suspended.
      setTimeout(function () { elm.textContent = fmt(target); }, dur + 300);
    }
    var metricEls = wp.querySelectorAll('.uxp-metric-v');
    if ('IntersectionObserver' in window) {
      var mo = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { animateMetric(en.target); obs.unobserve(en.target); }
        });
      }, { threshold: 0.5 });
      metricEls.forEach(function (e) { mo.observe(e); });
    }
  }

  /* Benefits for users */
  var ub = document.getElementById('uxUserBenefits');
  if (ub && C.userBenefits) C.userBenefits.forEach(function (b) {
    var card = el('div', 'uxu-item reveal');
    card.appendChild(el('span', 'uxu-ico', ICONS[b.icon] || ''));
    var txt = el('div', 'uxu-txt');
    txt.appendChild(el('h4', null, esc(b.title)));
    txt.appendChild(el('p', null, esc(b.body)));
    card.appendChild(txt);
    ub.appendChild(card);
  });

  /* Closing investment band */
  var inv = document.getElementById('uxInvestment');
  if (inv && C.investment) {
    var I = C.investment;
    var grid = el('div', 'uxinv-grid');
    I.cards.forEach(function (c) {
      var card = el('div', 'uxinv-card reveal');
      card.appendChild(el('span', 'uxinv-ico', ICONS[c.icon] || ''));
      card.appendChild(el('h4', null, esc(c.title)));
      card.appendChild(el('p', null, esc(c.body)));
      grid.appendChild(card);
    });
    inv.appendChild(grid);
  }

  /* Process timeline */
  var tl = document.getElementById('uxTimeline');
  if (tl) {
    C.process.forEach(function (p, i) {
      var step = el('div', 'tl-step reveal' + (i % 2 ? ' flip' : ''));

      var node = el('div', 'tl-node');
      node.appendChild(el('span', 'tl-ring'));
      node.appendChild(el('div', 'tl-dot', (p.icon || '') + '<span class="tl-num">' + (i + 1) + '</span>'));

      var card = el('article', 'tl-card');
      var head = el('div', 'tl-head');
      head.appendChild(el('span', 'tl-phase grad-txt', esc(p.phase)));
      if (p.duration) head.appendChild(el('span', 'tl-dur',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg><span>' + esc(p.duration) + '</span>'));
      card.appendChild(head);
      card.appendChild(el('h3', null, esc(p.title)));
      card.appendChild(el('p', 'tl-body', esc(p.body)));
      card.appendChild(el('div', 'tl-ai',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg><span>' + esc(p.ai) + '</span>'));
      var dl = el('div', 'ux-pills');
      p.deliverables.forEach(function (x, j) {
        var pill = el('span', 'ux-pill dark', esc(x));
        pill.style.transitionDelay = (0.15 + j * 0.08) + 's';
        dl.appendChild(pill);
      });
      card.appendChild(dl);
      card.appendChild(el('p', 'tl-outcome', '&rarr;&nbsp; ' + esc(p.outcome)));
      if (p.team) card.appendChild(el('p', 'tl-team',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20"/><circle cx="11" cy="8" r="3.2"/><path d="M19 20v-1.3a3.2 3.2 0 0 0-2.4-3.1"/></svg><span>' + esc(p.team) + '</span>'));

      step.appendChild(node);
      step.appendChild(card);
      tl.appendChild(step);
    });

    /* Scroll-driven gradient line + node lighting + active card */
    var fill = document.getElementById('tlFill');
    var nodes = tl.querySelectorAll('.tl-node');
    var steps = tl.querySelectorAll('.tl-step');
    var ticking = false;
    function paint() {
      ticking = false;
      var r = tl.getBoundingClientRect();
      var mid = window.innerHeight * 0.52;
      var p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      if (fill) fill.style.height = (p * 100) + '%';
      var active = -1;
      nodes.forEach(function (d, idx) {
        var lit = d.getBoundingClientRect().top < mid;
        d.classList.toggle('lit', lit);
        if (lit) active = idx;
      });
      steps.forEach(function (s, idx) { s.classList.toggle('active', idx === active); });
    }
    function onScroll() {
      if (!ticking) { ticking = true; window.requestAnimationFrame(paint); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    paint();
  }

  /* Case studies + industry filter */
  var filtersEl = document.getElementById('uxFilters');
  var casesEl = document.getElementById('uxCases');
  if (filtersEl && casesEl) {
    C.cases.forEach(function (c) {
      var d = el('article', 'uxc-card reveal');
      d.setAttribute('data-industry', c.industry);
      if (c.detail) {
        d.classList.add('is-clickable');
        d.setAttribute('role', 'button');
        d.setAttribute('tabindex', '0');
        d.setAttribute('aria-label', 'Read case study: ' + c.title);
        var open = function () { location.hash = 'case/' + c.slug; };
        d.addEventListener('click', open);
        d.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });
      }
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
      if (c.detail) bd.appendChild(el('span', 'uxc-more', 'View case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'));
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
  if (bl) C.blogs.forEach(function (b, bi) {
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
    var url = b.detail ? ('blog.html?post=' + encodeURIComponent(b.slug || String(bi))) : null;
    var link = el('a', 'uxb-link', 'Read article &rarr;');
    if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener'; }
    bd.appendChild(link);
    d.appendChild(bd);
    bl.appendChild(d);
    if (url) {
      /* Whole card opens the full article in a new tab (light-theme page). */
      d.classList.add('is-clickable');
      d.setAttribute('role', 'link');
      d.setAttribute('tabindex', '0');
      d.setAttribute('aria-label', 'Read article (opens in new tab): ' + b.title);
      var openB = function () { window.open(url, '_blank', 'noopener'); };
      d.addEventListener('click', function (e) { if (!e.target.closest('a')) openB(); });
      d.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openB(); }
      });
    }
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

  /* ══ Detail overlay — case studies & blog articles ══
     One responsive component: centered reading panel on web, full-screen
     sheet on mobile. Driven by URL hash (#case/<slug>, #blog/<slug>) so it
     is deep-linkable and the browser Back button closes it. */
  (function () {
    var dx = document.getElementById('uxDetail');
    if (!dx) return;
    var dxPanel = dx.querySelector('.dx-panel');
    var dxScroll = document.getElementById('dxScroll');
    var dxProgress = document.getElementById('dxProgress');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var lastFocus = null, isOpen = false, hideTimer = null;
    var SPARK = '<svg class="dx-spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>';

    function caseBySlug(s) {
      for (var i = 0; i < C.cases.length; i++) if (C.cases[i].detail && C.cases[i].slug === s) return C.cases[i];
      return null;
    }
    function blogBySlug(s) {
      for (var i = 0; i < C.blogs.length; i++) { var b = C.blogs[i]; if (b.detail && (b.slug || String(i)) === s) return b; }
      return null;
    }
    function list(items, cls) { return items.map(function (x) { return '<li>' + x + '</li>'; }).join(''); }
    function chips(items) { return items.map(function (x) { return '<span class="dx-chip">' + x + '</span>'; }).join(''); }
    function meta(k, v) { return '<div class="dx-meta-i"><span class="dx-meta-k">' + k + '</span><span class="dx-meta-v">' + v + '</span></div>'; }
    function block(title, inner, extra) { return '<section class="dx-block reveal ' + (extra || '') + '"><h2>' + title + '</h2>' + inner + '</section>'; }
    function heroMedia(src) { return src ? '<div class="dx-hero-media reveal"><img src="' + src + '" alt="" loading="lazy"><span class="dx-hero-ov"></span></div>' : ''; }
    function endCTA() {
      return '<div class="dx-endcta reveal"><div class="dx-endcta-glow"></div><h3>Have a challenge like this?</h3>'
        + '<p>Put our AI-native UX practice to work on your next product.</p>'
        + '<a class="btn btn-grad dx-endcta-btn" href="#contact">Start a project <span class="btn-ar">&rarr;</span></a></div>';
    }
    function initials(name) { return name.split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join('').toUpperCase(); }

    function buildCase(c) {
      var t = c.detail;
      var results = t.results.map(function (r) {
        return '<div class="dx-stat"><span class="dx-stat-v" data-count="' + r.v + '">' + r.v + '</span><span class="dx-stat-l">' + r.l + '</span></div>';
      }).join('');
      var quote = t.quote ? ('<figure class="dx-quote reveal"><div class="dx-quote-mark">&ldquo;</div><blockquote>' + t.quote.text + '</blockquote>'
        + '<figcaption><strong>' + t.quote.name + '</strong><span>' + t.quote.role + '</span></figcaption></figure>') : '';
      return '<header class="dx-hero">'
        + '<div class="dx-hero-copy reveal"><span class="dx-eyebrow">' + SPARK + 'Case Study · ' + esc(c.industry) + '</span>'
        + '<h1 id="dxTitle">' + esc(c.title) + '</h1><p class="dx-sub">' + t.subtitle + '</p>'
        + '<div class="dx-meta">' + meta('Industry', esc(c.industry)) + meta('Timeline', esc(t.duration)) + meta('Team', esc(t.team)) + (t.year ? meta('Year', esc(t.year)) : '') + '</div></div>'
        + heroMedia(c.img) + '</header>'
        + '<div class="dx-stats reveal">' + results + '</div>'
        + block('The challenge', '<p>' + t.challenge + '</p>')
        + block('Our approach', '<ul class="dx-list">' + list(t.approach) + '</ul>')
        + block('The AI edge', '<ul class="dx-list dx-list-ai">' + list(t.aiEdge) + '</ul>', 'dx-ai-block')
        + quote
        + '<div class="dx-cols">' + block('Scope', '<div class="dx-chips">' + chips(t.scope) + '</div>') + block('Tools & stack', '<div class="dx-chips">' + chips(t.stack) + '</div>') + '</div>'
        + endCTA();
    }

    function buildBlog(b) {
      var t = b.detail;
      var secs = t.sections.map(function (s) {
        return '<section class="dx-block reveal"><h2>' + s.h + '</h2>' + s.p.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</section>';
      }).join('');
      return '<header class="dx-hero dx-hero-blog">'
        + '<div class="dx-hero-copy reveal"><span class="dx-eyebrow">' + SPARK + esc(b.tag) + ' · Insight</span>'
        + '<h1 id="dxTitle">' + esc(b.title) + '</h1>'
        + '<div class="dx-byline"><span class="dx-avatar">' + initials(b.author) + '</span><div><strong>' + esc(b.author) + '</strong><span>' + esc(b.date) + ' · ' + esc(b.read) + '</span></div></div></div>'
        + heroMedia(b.img) + '</header>'
        + '<p class="dx-excerpt reveal">' + t.excerpt + '</p>'
        + secs
        + '<section class="dx-block dx-takeaways reveal"><h2>Key takeaways</h2><ul class="dx-list">' + list(t.takeaways) + '</ul></section>'
        + endCTA();
    }

    function revealIn(container) {
      var nodes = container.querySelectorAll('.reveal');
      if (reduce) { nodes.forEach(function (n) { n.classList.add('in'); }); return; }
      nodes.forEach(function (n, i) { n.style.transitionDelay = Math.min(i, 12) * 0.05 + 's'; });
      var show = function () { nodes.forEach(function (n) { n.classList.add('in'); }); };
      requestAnimationFrame(function () { requestAnimationFrame(show); });
      /* fallback so content is never stuck hidden if rAF is throttled */
      setTimeout(show, 400);
    }
    function countUp(container) {
      container.querySelectorAll('[data-count]').forEach(function (elm) {
        var raw = elm.getAttribute('data-count');
        var m = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
        if (reduce || !m || /\d/.test(m[3])) { elm.textContent = raw; return; }
        var prefix = m[1], num = parseFloat(m[2]), suffix = m[3], dec = (m[2].split('.')[1] || '').length, start = null, dur = 1100, done = false;
        elm.textContent = prefix + (0).toFixed(dec) + suffix;
        function finish() { if (!done) { done = true; elm.textContent = raw; } }
        function step(ts) {
          if (done) return;
          if (!start) start = ts;
          var p = Math.min(1, (ts - start) / dur), e = 1 - Math.pow(1 - p, 3);
          elm.textContent = prefix + (num * e).toFixed(dec) + suffix;
          if (p < 1) requestAnimationFrame(step); else finish();
        }
        requestAnimationFrame(step);
        /* Guarantee the final value even if rAF is throttled (e.g. background tab). */
        setTimeout(finish, dur + 500);
      });
    }

    function open(kind, slug) {
      var item = kind === 'case' ? caseBySlug(slug) : blogBySlug(slug);
      if (!item) { return false; }
      if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      dxScroll.innerHTML = kind === 'case' ? buildCase(item) : buildBlog(item);
      dxScroll.scrollTop = 0;
      dx.hidden = false; dx.setAttribute('aria-hidden', 'false');
      dxPanel.classList.toggle('dx-panel-blog', kind === 'blog');
      if (dxProgress) dxProgress.style.width = '0%';
      void dx.offsetWidth;
      dx.classList.add('open');
      document.body.classList.add('dx-lock');
      if (!isOpen) lastFocus = document.activeElement;
      isOpen = true;
      dxPanel.focus();
      revealIn(dxScroll);
      countUp(dxScroll);
      return true;
    }
    function hide() {
      if (!isOpen) return;
      isOpen = false;
      dx.classList.remove('open');
      document.body.classList.remove('dx-lock');
      hideTimer = setTimeout(function () {
        if (!isOpen) { dx.hidden = true; dx.setAttribute('aria-hidden', 'true'); dxScroll.innerHTML = ''; }
      }, 380);
      if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
    }
    function requestClose() { location.hash = 'cases'; }

    function route() {
      /* Case studies only — blogs open as a separate page (blog.html). */
      var m = location.hash.match(/^#\/?case\/(.+)$/);
      if (m) { if (!open('case', m[1])) requestClose(); }
      else { hide(); }
    }

    dx.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('[data-dx-close]') : null;
      if (t) { e.preventDefault(); requestClose(); }
    });
    document.addEventListener('keydown', function (e) {
      if (!isOpen) return;
      if (e.key === 'Escape') { e.preventDefault(); requestClose(); return; }
      if (e.key === 'Tab') {
        var f = dxPanel.querySelectorAll('a[href],button:not([disabled])');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    if (dxScroll && dxProgress) {
      dxScroll.addEventListener('scroll', function () {
        var max = dxScroll.scrollHeight - dxScroll.clientHeight;
        dxProgress.style.width = (max > 0 ? (dxScroll.scrollTop / max * 100) : 0) + '%';
      }, { passive: true });
    }
    window.addEventListener('hashchange', route);
    route();
  })();

  /* Reveal-on-scroll for dynamically injected content.
     script.js wires its observer before this file runs, so the elements we
     just created are never picked up — observe them here. */
  var injected = document.querySelectorAll('.reveal:not(.in)');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    injected.forEach(function (n) { n.classList.add('in'); });
  } else {
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var node = en.target;
        var sibs = Array.prototype.slice.call(node.parentElement.children)
          .filter(function (c) { return c.classList.contains('reveal'); });
        node.style.transitionDelay = Math.min(sibs.indexOf(node), 6) * 0.07 + 's';
        node.classList.add('in');
        obs.unobserve(node);
      });
    }, { threshold: 0.12 });
    injected.forEach(function (n) { ro.observe(n); });
  }
})();
