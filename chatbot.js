/* ══════════════════════════════════════════════════
   Gadgeon.ai — assistant chatbot (self-contained, no backend)
   ══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Knowledge base ── */
  var INTENTS = [
    {
      match: /\b(hi|hello|hey|good (morning|afternoon|evening)|greetings)\b/i,
      reply: "Hello! 👋 I'm the Gadgeon assistant. I can tell you about our AI & platform engineering services, the industries we serve, or connect you with an expert. What would you like to know?",
      chips: ['What do you do?', 'Industries', 'Case studies', 'Talk to an expert']
    },
    {
      match: /(service|solution|what (do|does) (you|gadgeon) do|offering|help with|build)/i,
      reply: "We build what enterprises need across six areas:\n\n• Enterprise Architecture & Platform Strategy\n• Platform Engineering & Software Development\n• Cloud Engineering & Modernization\n• Data Engineering & AI Foundations\n• AI & Intelligent Engineering\n• Quality Engineering & Platform Reliability\n\nWant to dive into any of these?",
      chips: ['AI capabilities', 'Cloud & data', 'Talk to an expert']
    },
    {
      match: /\b(ai|artificial intelligence|genai|gen ai|llm|rag|agentic|agent|ml|machine learning|mlops|predictive)\b/i,
      reply: "AI is at our core 🧠 We cover the full spectrum:\n\n• AI Strategy & Advisory — readiness assessments and roadmaps\n• GenAI Engineering — production-grade GenAI apps\n• Agentic AI Systems — multi-step AI workflows with guardrails\n• Predictive AI & ML — forecasting, anomaly detection, vision\n• LLM Integration & Enterprise RAG\n• AI Operations & MLOps, Responsible AI, and Edge AI\n\nWe partner with Google (Gemini), Anthropic (Claude), NVIDIA, OpenAI, AWS and more.",
      chips: ['Book an AI readiness assessment', 'Case studies']
    },
    {
      match: /\b(cloud|data|kubernetes|migration|modernization|finops|streaming|data lake)\b/i,
      reply: "On cloud & data:\n\n☁️ Cloud Engineering — architecture, migration strategy, Kubernetes, multi-cloud, FinOps. We help you move to cloud without compounding technical debt.\n\n📊 Data Engineering — data platforms, real-time streaming, data lakes, and the foundations that make AI possible. We turn scattered data into a trusted, AI-ready asset.",
      chips: ['AI capabilities', 'Talk to an expert']
    },
    {
      match: /(industr|sector|domain|telecom|iot|healthcare|bfsi|fintech|logistic|manufactur|saas)/i,
      reply: "We navigate the complexities of 8 key industries:\n\n📡 Telecom & Connectivity\n🔌 IoT & Device Ecosystems\n🏥 Healthcare\n💼 Enterprise SaaS Platforms\n🏦 BFSI & Fintech\n🚚 Logistics & Supply Chain\n🏭 Manufacturing\n⚙️ Industry 4.0",
      chips: ['Case studies', 'Talk to an expert']
    },
    {
      match: /(case stud|outcome|result|client|success stor|proof|project)/i,
      reply: "Outcomes that speak 📈\n\n• Scaled a live global IoT platform to 99.95% availability with 99.8% faster APIs — zero downtime\n• Mapped a fragmented tech estate into a unified architecture blueprint, unblocking AI investments\n• Built an AI-powered SRE platform that cut MTTR by 80%\n\nOverall: 15+ years, 90+ enterprise customers, 500+ successful projects.",
      chips: ['Talk to an expert', 'What do you do?']
    },
    {
      match: /(pric|cost|budget|quote|rate|how much)/i,
      reply: "Pricing depends on scope and engagement model. The best next step is a quick conversation with our team — tell us about your platform challenge and we'll tell you how we'd approach it, typically within one business day.",
      chips: ['Talk to an expert']
    },
    {
      match: /\b(contact|reach|email|phone|call|address|location|office|where)\b/i,
      reply: "You can reach us at:\n\n📧 Connect@gadgeon.ai\n📞 +021 3211234567\n📍 Level 12, Innovation T. SF, CA 94105, USA\n\nWe have 5+ offices worldwide (India, USA, Europe, UAE). Or I can open the contact form for you right now.",
      chips: ['Talk to an expert']
    },
    {
      match: /(career|job|hiring|vacanc|work (at|for)|join)/i,
      reply: "We're always looking for great engineers and architects! 🚀 Drop a note via the contact form and mention you're interested in careers — the team will route it to the right people.",
      chips: ['Talk to an expert']
    },
    {
      match: /\b(assessment|readiness|audit|evaluate|start|begin|engage)\b/i,
      reply: "Great starting point! Our AI readiness assessment looks at your data quality, architecture, existing systems, and team readiness — everything that determines whether an AI initiative delivers or stalls. Shall I open the booking form?",
      chips: ['Book an AI readiness assessment']
    },
    {
      match: /\b(thank|thanks|thx|great|awesome|perfect|nice)\b/i,
      reply: "You're welcome! 😊 Anything else I can help you with?",
      chips: ['What do you do?', 'Talk to an expert']
    },
    {
      match: /\b(bye|goodbye|see you|later)\b/i,
      reply: "Goodbye! 👋 Feel free to come back anytime — or leave us a message via the contact form and we'll get back within one business day.",
      chips: ['Talk to an expert']
    }
  ];
  var FALLBACK = {
    reply: "I'm not sure about that one — but our experts will be! I can tell you about our services, industries, and client outcomes, or connect you directly with the team.",
    chips: ['What do you do?', 'Industries', 'Talk to an expert']
  };
  window.__gchatIntents = INTENTS;
  var OPEN_FORM = /talk to an expert|book an ai readiness/i;

  /* ── Widget markup ── */
  var root = document.createElement('div');
  root.id = 'gchat';
  root.innerHTML =
    '<button id="gchatBtn" aria-label="Chat with us" aria-expanded="false">' +
      '<svg class="ic-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>' +
      '<svg class="ic-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
      '<span class="gchat-badge" id="gchatBadge">1</span>' +
    '</button>' +
    '<div id="gchatWin" role="dialog" aria-label="Gadgeon chat assistant" hidden>' +
      '<div class="gchat-head">' +
        '<div class="gchat-avatar">G</div>' +
        '<div><div class="gchat-title">Gadgeon Assistant</div><div class="gchat-status"><span class="dot"></span>Online — instant answers</div></div>' +
      '</div>' +
      '<div class="gchat-msgs" id="gchatMsgs" aria-live="polite"></div>' +
      '<div class="gchat-chips" id="gchatChips"></div>' +
      '<form class="gchat-input" id="gchatForm">' +
        '<input type="text" id="gchatText" placeholder="Type your question…" autocomplete="off" maxlength="500" />' +
        '<button type="submit" aria-label="Send"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>' +
      '</form>' +
      '<div class="gchat-foot">Powered by Gadgeon.ai</div>' +
    '</div>';
  document.body.appendChild(root);

  var btn = document.getElementById('gchatBtn');
  var win = document.getElementById('gchatWin');
  var msgs = document.getElementById('gchatMsgs');
  var chipsEl = document.getElementById('gchatChips');
  var form = document.getElementById('gchatForm');
  var input = document.getElementById('gchatText');
  var badge = document.getElementById('gchatBadge');
  var opened = false;

  /* ── Helpers ── */
  function addMsg(text, who) {
    var m = document.createElement('div');
    m.className = 'gchat-msg ' + who;
    var lines = text.split('\n');
    lines.forEach(function (ln, i) {
      m.appendChild(document.createTextNode(ln));
      if (i < lines.length - 1) m.appendChild(document.createElement('br'));
    });
    msgs.appendChild(m);
    msgs.scrollTop = msgs.scrollHeight;
    return m;
  }
  function setChips(list) {
    chipsEl.innerHTML = '';
    (list || []).forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'gchat-chip'; b.textContent = c;
      b.addEventListener('click', function () { send(c); });
      chipsEl.appendChild(b);
    });
  }
  function typing() {
    var t = document.createElement('div');
    t.className = 'gchat-msg bot gchat-typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(t);
    msgs.scrollTop = msgs.scrollHeight;
    return t;
  }
  function respond(text) {
    var intent = null;
    for (var i = 0; i < INTENTS.length; i++) {
      if (INTENTS[i].match.test(text)) { intent = INTENTS[i]; break; }
    }
    intent = intent || FALLBACK;
    var t = typing();
    setTimeout(function () {
      t.remove();
      addMsg(intent.reply, 'bot');
      setChips(intent.chips);
    }, 500 + Math.random() * 500);
  }
  function send(text) {
    text = (text || '').trim();
    if (!text) return;
    addMsg(text, 'user');
    setChips([]);
    if (OPEN_FORM.test(text)) {
      var t = typing();
      setTimeout(function () {
        t.remove();
        addMsg("Perfect — opening the contact form for you now. Our team gets back within one business day. 📬", 'bot');
        setChips(['What do you do?', 'Case studies']);
        setTimeout(function () {
          if (typeof window.openContactModal === 'function') window.openContactModal();
        }, 700);
      }, 450);
      return;
    }
    respond(text);
  }

  /* ── Open / close ── */
  function toggle(open) {
    var show = open !== undefined ? open : win.hidden;
    win.hidden = !show;
    root.classList.toggle('open', show);
    btn.setAttribute('aria-expanded', String(show));
    if (show) {
      badge.style.display = 'none';
      if (!opened) {
        opened = true;
        addMsg("Hi there! 👋 I'm the Gadgeon assistant.\nAsk me anything about our AI & platform engineering services — or pick a topic below.", 'bot');
        setChips(['What do you do?', 'Industries', 'Case studies', 'Talk to an expert']);
      }
      setTimeout(function () { input.focus(); }, 80);
    }
  }
  btn.addEventListener('click', function () { toggle(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !win.hidden) toggle(false);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    send(input.value);
    input.value = '';
  });
})();
