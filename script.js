// ==========================================================================
// DATA
// ==========================================================================
const skillIcons = {
  py: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2a5 5 0 00-5 5v2h10V6a5 5 0 00-5-4zM7 9H4a2 2 0 00-2 2v3a2 2 0 002 2h3M17 9h3a2 2 0 012 2v3a2 2 0 01-2 2h-3M7 16v2a5 5 0 005 4 5 5 0 005-4v-2"/></svg>',
  pygame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="7" width="20" height="12" rx="3"/><path d="M7 10v6M4.5 13h5M16 12.5h.01M18.5 10.5h.01"/></svg>',
  cpp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 10v4M11 12H7M17 10v4M19 12h-4"/></svg>',
  git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="12" r="2.4"/><path d="M6 8.4V15.6M8.2 6.8C13 8 15.6 9.6 15.9 9.9"/></svg>',
  gl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2z"/><path d="M12 2v20M4 6.5l8 4.5 8-4.5"/></svg>',
  html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 3l1.6 17L12 22l6.4-2L20 3H4z"/><path d="M8 8h8l-.4 6L12 15.5 8.4 14 8.2 12"/></svg>',
  css: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 3l1.6 17L12 22l6.4-2L20 3H4z"/><path d="M7.5 7h9l-.3 3H10l.2 2h6l-.5 5-3.7 1.2L8.3 17"/></svg>',
  js: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 14c0 1.2.8 2 2 2s1.6-.5 1.6-2V9M14.5 15c.4.6 1 1 1.8 1 1.1 0 1.7-.6 1.7-1.4 0-2-3.4-1.3-3.4-3.4 0-.9.7-1.5 1.7-1.5.8 0 1.3.3 1.7.9"/></svg>',
  algo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6.6 7.4L11 16.5M17.4 7.4L13 16.5M7 6h10"/></svg>',
  data: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  graphics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z"/></svg>',
  design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z"/></svg>',
  procedural: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  swe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.34-1.11.62-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .28.18.61.69.5A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>',
  vscode: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16.5 3l-9 8-4-3-2 1.5 4.5 4-4.5 4 2 1.5 4-3 9 8 4.5-2V5L16.5 3z"/><path d="M16.5 3v18"/></svg>',
  puzzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 3h4v3.2a1.8 1.8 0 003.6 0V3H21v5h-3.2a1.8 1.8 0 000 3.6H21v5h-4.4v-3.2a1.8 1.8 0 00-3.6 0V21H9v-5H5.8a1.8 1.8 0 000-3.6H9V3z"/></svg>',
};

const skills = [
  { name:'Python', icon:'py' },
  { name:'C++', icon:'cpp' },
  { name:'Git', icon:'git' },
  { name:'GitHub', icon:'github' },
  { name:'OpenGL', icon:'gl' },
  { name:'Pygame', icon:'pygame' },
  { name:'JavaScript', icon:'js' },
  { name:'HTML', icon:'html' },
  { name:'CSS', icon:'css' },
  { name:'VS Code', icon:'vscode' },
  { name:'Algorithms', icon:'algo' },
  { name:'Problem Solving', icon:'puzzle' },
  { name:'Software Design', icon:'swe' },
];

const projects = [
  {
    title:'Deadwood Creek',
    thumb:'https://img.itch.zone/aW1nLzE4MzYxMzU4LnBuZw==/508x254%23mb/2vV2nJ.png',
    desc:'A ghost-hunting survival game set across a haunted village and eerie plains biome. Slip between the real world and a paranormal dimension to track down restless spirits and confront the village\'s former head.',
    tags:['Python','Pygame','Survival Horror'],
    link:'https://pixelxninja.itch.io/deadwood-creek',
    linkLabel:'Play on itch.io'
  },
  {
    title:'Little Guys',
    thumb:'https://img.itch.zone/aW1nLzI4NTUyMzA1LnBuZw==/508x254%23mb/Z58By3.png',
    desc:'Tiny forest Pixies remember forgotten forms and transform into a sword, shield and gun to help you survive a dangerous woodland adventure.',
    tags:['Python','Pygame','Action'],
    link:'https://pixelxninja.itch.io/little-guys',
    linkLabel:'Play on itch.io'
  },
  {
    title:'Minesweeper 2',
    thumb:'https://img.itch.zone/aW1nLzE5NDM1NTgzLnBuZw==/508x254%23mb/AZVrAK.png',
    desc:'A complete graphics overhaul of the classic Minesweeper — same logic puzzle, rebuilt with cleaner visuals and a more satisfying feel.',
    tags:['Python','Pygame','Puzzle'],
    link:'https://pixelxninja.itch.io/minesweeper-2',
    linkLabel:'Play on itch.io'
  },
  {
    title:'Sine Visualizer',
    thumb:'https://img.itch.zone/aW1nLzE4ODA0ODgwLnBuZw==/508x254%23mb/98ojFl.png',
    desc:'A real-time sum-of-sines visualizer with adjustable amplitude, frequency, phase and speed — inspired by the technique games use to fake moving water.',
    tags:['Python','Pygame','Graphics'],
    link:'https://pixelxninja.itch.io/sine-visualizer',
    linkLabel:'View on itch.io'
  },
];

const achievements = [
  { icon:'🏅', title:'IOQM 2024 Qualified', desc:'Qualified in the Indian Olympiad Qualifier in Mathematics, an early milestone in a growing interest in rigorous problem-solving.' },
  { icon:'🏆', title:'NSEP 2025 State Topper', desc:'Ranked as State Topper in the National Standard Examination in Physics — recognition for depth in physics fundamentals.' },
  { icon:'🌌', title:'NSEA 2025 Qualified', desc:'Qualified in the National Standard Examination in Astronomy, reflecting a broader curiosity that extends past code and into how things work.' },
  { icon:'🎓', title:'Incoming IT Student — IIIT Allahabad', desc:'Starting Information Technology at IIIT Allahabad this year, bringing years of independent building into a formal CS education.' },
];

const ossProjects = [
  {
    title:'Bezier Curve Rendering',
    desc:'An interactive Bézier curve renderer that demonstrates how control points generate smooth mathematical curves — a foundation for animation easing and vector graphics work.',
    link:'https://github.com/10menoscared07/Bezier-curves'
  },
  {
    title:'UI Elements in Pygame',
    desc:'A set of reusable, modern UI components built specifically for Pygame — buttons, panels and interaction patterns most Pygame projects have to hand-roll from scratch.',
    link:'https://github.com/10menoscared07/ui-elements'
  },
  {
    title:'Button Game',
    desc:'A small experimental project exploring how far you can push interactive gameplay built entirely around button mechanics.',
    link:'https://github.com/10menoscared07/button-game'
  },
];

const earlyProjects = [
  { title:'The Shooter', quote:'My first game — where the habit of finishing what I start began.', link:'https://aadikrishnat.itch.io/shooter' },
  { title:'The Darkseekers', quote:'My second game, where I experimented with larger environments and combat.', link:'https://aadikrishnat.itch.io/the-darkseekers' },
  { title:'The Unearthly Creatures', quote:'My third published game, which expanded my understanding of game architecture.', link:'https://aadikrishnat.itch.io/the-unearthly-creatures' },
  { title:"Conway's Game of Life", quote:"A simulation of Conway's famous cellular automaton, exploring emergent behavior.", link:'https://aadikrishnat.itch.io/conways-game-of-life' },
  { title:'Whose That Pokemon', quote:'A fun Pokémon guessing game built to experiment with interfaces and game logic.', link:'https://aadikrishnat.itch.io/whosthatpokemon' },
  { title:'Zombie Attack', quote:'A survival-inspired action game built during my early learning phase.', link:'https://aadikrishnat.itch.io/zombie-attack' },
];

const placeholderIcon = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`;
const externalIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8m9 0v9"/></svg>`;
const githubIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.34-1.11.62-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .28.18.61.69.5A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>`;

// ==========================================================================
// RENDER: SKILLS
// ==========================================================================
const skillsGrid = document.getElementById('skillsGrid');
if (skillsGrid) {
  skills.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card fade-up';
    card.style.setProperty('--delay', `${(i % 5) * 0.05}s`);
    card.innerHTML = `<div class="skill-icon">${skillIcons[s.icon]}</div><span class="skill-name">${s.name}</span>`;
    skillsGrid.appendChild(card);
  });
}

// ==========================================================================
// RENDER: PROJECTS
// ==========================================================================
const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid) {
  projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card fade-up';
    card.style.setProperty('--delay', `${(i % 2) * 0.08}s`);
    card.innerHTML = `
      <div class="project-media"><img src="${p.thumb}" alt="${p.title} screenshot" loading="lazy" class="project-thumb"></div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="badge-pill">${t}</span>`).join('')}</div>
        <a href="${p.link}" target="_blank" rel="noopener" class="project-link">${p.linkLabel} ${externalIcon}</a>
      </div>`;
    projectsGrid.appendChild(card);
  });
}

// ==========================================================================
// RENDER: ACHIEVEMENTS
// ==========================================================================
const achievementsGrid = document.getElementById('achievementsGrid');
if (achievementsGrid) {
  achievements.forEach((a, i) => {
    const card = document.createElement('div');
    card.className = 'achievement-card fade-up';
    card.style.setProperty('--delay', `${(i % 4) * 0.07}s`);
    card.innerHTML = `
      <span class="achievement-icon">${a.icon}</span>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>`;
    achievementsGrid.appendChild(card);
  });
}

// ==========================================================================
// RENDER: OPEN SOURCE
// ==========================================================================
const ossGrid = document.getElementById('ossGrid');
if (ossGrid) {
  ossProjects.forEach((o, i) => {
    const card = document.createElement('div');
    card.className = 'oss-card glass fade-up';
    card.style.setProperty('--delay', `${(i % 3) * 0.07}s`);
    card.innerHTML = `
      <div class="oss-head">${githubIcon}<h3>${o.title}</h3></div>
      <p>${o.desc}</p>
      <a href="${o.link}" target="_blank" rel="noopener" class="project-link">View on GitHub ${externalIcon}</a>`;
    ossGrid.appendChild(card);
  });
}

// ==========================================================================
// RENDER: EARLY PROJECTS TIMELINE
// ==========================================================================
const earlyTimeline = document.getElementById('earlyTimeline');
if (earlyTimeline) {
  earlyProjects.forEach(p => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <h3>${p.title}</h3>
      <p>"${p.quote}"</p>
      <a href="${p.link}" target="_blank" rel="noopener" class="timeline-link">Play on itch.io ${externalIcon}</a>`;
    earlyTimeline.appendChild(item);
  });
}

// ==========================================================================
// NAVBAR SCROLL STATE + SCROLL SPY
// ==========================================================================
const navbar = document.getElementById('navbar');
const navAnchors = document.querySelectorAll('.nav-links a');
const sections = ['home','about','achievements','projects','skills','blogs','contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  if (sections.length > 0) {
    let current = sections[0];
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - window.innerHeight * 0.4) current = sec;
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current.id}`);
    });
  }
}, { passive:true });

// ==========================================================================
// MOBILE NAV
// ==========================================================================
const navToggle = document.getElementById('navToggle');
const mobileNav = document.createElement('nav');
mobileNav.className = 'mobile-nav';
const homeLinkPrefix = document.getElementById('home') ? '' : '../index.html';
mobileNav.innerHTML = `<a href="${homeLinkPrefix}#home">Home</a><a href="${homeLinkPrefix}#about">About</a><a href="${homeLinkPrefix}#achievements">Achievements</a><a href="${homeLinkPrefix}#projects">Projects</a><a href="${homeLinkPrefix}#skills">Skills</a><a href="${homeLinkPrefix}#blogs">Blogs</a><a href="${homeLinkPrefix}#contact">Contact</a>`;
document.body.appendChild(mobileNav);

navToggle.addEventListener('click', () => {
  const open = navToggle.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navToggle.classList.remove('open');
  mobileNav.classList.remove('open');
}));

// ==========================================================================
// SCROLL REVEAL
// ==========================================================================
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('in-view'));
}

// ==========================================================================
// ANIMATED COUNTERS
// ==========================================================================
const counters = document.querySelectorAll('.stat-number');
function runCounter(el){
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      runCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold:0.4 });
  counters.forEach(c => counterObserver.observe(c));
} else {
  counters.forEach(runCounter);
}

// ==========================================================================
// CURSOR GLOW (desktop only)
// ==========================================================================
const cursorGlow = document.getElementById('cursorGlow');
const isTouch = window.matchMedia('(pointer: coarse)').matches;
if (cursorGlow) {
  if (!isTouch) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    });
  } else {
    cursorGlow.style.display = 'none';
  }
}

// ==========================================================================
// MAGNETIC BUTTONS + RIPPLE
// ==========================================================================
document.querySelectorAll('.magnetic').forEach(btn => {
  if (!isTouch) {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  }
  btn.addEventListener('click', () => {
    btn.classList.remove('rippling');
    requestAnimationFrame(() => {
      btn.classList.add('rippling');
      setTimeout(() => btn.classList.remove('rippling'), 500);
    });
  });
});

// ==========================================================================
// BACKGROUND: STARS + FLOATING CUBES (shared, full-page)
// ==========================================================================
const bgStars = document.getElementById('bgStars');
for (let i = 0; i < 70; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = `${Math.random() * 100}%`;
  s.style.top = `${Math.random() * 100}%`;
  s.style.animationDelay = `${Math.random() * 4.5}s`;
  s.style.opacity = Math.random() * 0.6 + 0.15;
  bgStars.appendChild(s);
}

const bgCubes = document.getElementById('bgCubes');
for (let i = 0; i < 14; i++) {
  const c = document.createElement('div');
  c.className = 'cube';
  const size = Math.random() * 20 + 8;
  c.style.width = `${size}px`;
  c.style.height = `${size}px`;
  c.style.left = `${Math.random() * 100}%`;
  c.style.top = `${Math.random() * 100}%`;
  c.style.animationDelay = `${Math.random() * 6}s`;
  c.style.animationDuration = `${8 + Math.random() * 5}s`;
  bgCubes.appendChild(c);
}

// ==========================================================================
// PARTICLE CANVAS (hero only — glowing blue particles drifting upward)
// ==========================================================================
const canvas = document.getElementById('particleCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  const heroEl = document.querySelector('.hero');

  function resizeCanvas(){
    canvas.width = heroEl.offsetWidth;
    canvas.height = heroEl.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function initParticles(){
    const count = window.innerWidth < 700 ? 28 : 50;
    particles = Array.from({ length:count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.6,
      speed: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15,
    }));
  }
  initParticles();
  window.addEventListener('resize', initParticles);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(103,217,255,${p.alpha})`;
      ctx.shadowColor = 'rgba(103,217,255,0.8)';
      ctx.shadowBlur = 6;
      ctx.fill();
      p.y -= p.speed;
      p.x += p.drift;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
    });
    if (!reduceMotion) requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

// ==========================================================================
// CONTACT FORM (front-end only demo submission)
// ==========================================================================
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks — I'll get back to you soon.";
    contactForm.reset();
  });
}

// ==========================================================================
// BACK TO TOP
// ==========================================================================
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
  });
}

// ==========================================================================
// YEAR
// ==========================================================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
