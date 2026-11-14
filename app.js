const email = 'heditrabelsi07@gmail.com';

const drinksInitialState = [
  { name: 'Pilsner', price: 2.8 },
  { name: 'Tripel', price: 3.7 },
  { name: 'IPA', price: 4.1 },
  { name: 'Cider', price: 3.3 }
];

const projects = [
  {
    title: 'EUDIS Defence Hackathon — Solar Eye',
    category: ['ai'],
    description:
      'Lightweight, foldable autonomous drone swarm platform concept for European defence and reconnaissance challenges (with Rainers).',
    tags: ['Aeronautics', 'Swarm Systems', 'Defence Tech'],
    meta: 'Oct 2025'
  },
  {
    title: 'Smart Bike Security System',
    category: ['systems', 'ai'],
    description:
      'Embedded anti-theft platform integrating ESP32, Raspberry Pi 5, IMU, GPS, SX1262 LoRaWAN, audio alarms, and a FastAPI + 2FA dashboard.',
    tags: ['ESP32', 'Raspberry Pi 5', 'LoRaWAN', 'FastAPI', 'Python'],
    meta: 'Embedded Systems'
  },
  {
    title: '9antra (Multi-Agent FinTech Architecture)',
    category: ['systems', 'ai'],
    description:
      '6-agent sequential AI pipeline with security validation, product classification, financial installment logic, and immutable audit logging.',
    tags: ['Multi-Agent AI', 'Python', 'Security'],
    meta: 'FinTech'
  },
  {
    title: 'Custom Single-Cycle Processor & Reduced ISA',
    category: ['ai'],
    description:
      'Designed a custom datapath and reduced ISA optimized for hardware Hamming Distance computation.',
    tags: ['HDL', 'Computer Architecture', 'Assembly'],
    meta: 'Hardware Architecture'
  },
  {
    title: 'IPv4 Stateful Firewall & Reliable Data Transfer',
    category: ['systems'],
    description:
      'Custom stateful packet filter supporting CIDR rules, port knocking, and automated IP banning alongside TCP Reno RDT with selective ACKs.',
    tags: ['Java', 'Networking', 'Security'],
    meta: 'Systems & Security'
  },
  {
    title: 'Networked Quarto Strategy Game',
    category: ['fullstack', 'ai'],
    description:
      'Multi-threaded Java server with custom text protocol, bitwise board evaluation, and minimax + alpha-beta pruning AI engine (co-built with Rainers).',
    tags: ['Java', 'AI / Minimax', 'Multithreading'],
    meta: 'Game AI'
  },
  {
    title: 'Raw TCP/IPv6 WebExtension & Ad-Blocker',
    category: ['systems', 'fullstack'],
    description:
      'Custom browser extension blocking tracking scripts, scam redirects, and unwanted popups.',
    tags: ['JavaScript', 'TCP/IPv6', 'WebExtensions'],
    meta: 'Web Security'
  },
  {
    title: 'Syledis ERC-20 Token',
    category: ['fullstack'],
    description: 'Custom smart contract deployed on the Polygon network.',
    tags: ['Solidity', 'Web3', 'Polygon'],
    meta: 'Blockchain'
  },
  {
    title: 'The Glitched Deadline',
    category: ['fullstack'],
    description: 'Pixel-art dark fantasy indie game jam entry built in Godot.',
    tags: ['Godot', 'GDScript', 'Game Dev'],
    meta: 'Game Jam'
  }
];

const essays = [
  {
    title: "Beyond 'I Agree': Why Systemic Architecture Must Replace Individual Privacy Management",
    readTime: '11 min read',
    abstract:
      'Published in the Inter-Actief 2026 Privacy Conference Brochure, this paper critiques consent-heavy privacy regimes and argues for structural safeguards designed directly into software architectures.',
    thesis:
      'Ethical privacy cannot be outsourced to repeated individual burden; it must be encoded as systemic responsibility through defaults, constraints, and governance.'
  },
  {
    title: 'AI Companions and Human Flourishing',
    readTime: '9 min read',
    abstract:
      "A comparative dialogue between Martin Buber's I and Thou and Aristotle's Nicomachean Ethics to assess whether AI companions can mediate authentic relational and virtuous development.",
    thesis:
      'Companion systems should be evaluated less by simulation quality and more by whether they cultivate reciprocal recognition, practical wisdom, and moral growth.'
  },
  {
    title: 'Past Memory and Future Agency in Hope',
    readTime: '8 min read',
    abstract:
      "Drawing on Octavia Butler's A Few Rules For Predicting The Future and Lost Races of Science Fiction, this essay examines hope as disciplined agency rather than passive optimism.",
    thesis:
      'Hope becomes politically meaningful when memory is transformed into anticipatory practice and collective design of futures.'
  },
  {
    title: 'Situated Knowledges vs. Disembodied Objectivity',
    readTime: '10 min read',
    abstract:
      "A focused critique of Donna Haraway's intervention against neutrality myths in science and technology, with application to contemporary AI evaluation frameworks.",
    thesis:
      'Claims of objective neutrality mask power positions; accountable epistemology requires explicit situatedness and traceable responsibility.'
  },
  {
    title: 'Relative Facts and Absolute Moral Value',
    readTime: '7 min read',
    abstract:
      "An analysis of Ludwig Wittgenstein's A Lecture on Ethics distinguishing empirical variability from non-negotiable moral orientation.",
    thesis:
      'Descriptive relativity in language does not collapse normative seriousness; ethical value remains irreducible to factual description.'
  },
  {
    title: "Visual Semiotics & Renaissance Sculpture in JoJo's Bizarre Adventure",
    readTime: '6 min read',
    abstract:
      'A cultural-aesthetic study mapping visual grammar, bodily posture, and iconographic references between JoJo and Renaissance sculptural traditions.',
    thesis:
      'Stylization operates as philosophical argument in visual form: gesture and pose produce meaning beyond narrative dialogue.'
  }
];

const state = {
  drinks: structuredClone(drinksInitialState),
  history: [],
  countdown: 5,
  activeFilter: 'all'
};

const selectors = {
  clock: document.getElementById('live-clock'),
  copyEmailButton: document.getElementById('copy-email'),
  toast: document.getElementById('toast'),
  openWritingButton: document.getElementById('open-writing'),
  projectsGrid: document.getElementById('project-grid'),
  writingList: document.getElementById('writing-list'),
  filters: document.querySelectorAll('.filter'),
  drinkList: document.getElementById('drink-list'),
  marketLine: document.getElementById('market-line'),
  tickCountdown: document.getElementById('tick-countdown'),
  crashButton: document.getElementById('market-crash'),
  drawer: document.getElementById('essay-drawer'),
  drawerTitle: document.getElementById('drawer-title'),
  drawerReadtime: document.getElementById('drawer-readtime'),
  drawerAbstract: document.getElementById('drawer-abstract'),
  drawerThesis: document.getElementById('drawer-thesis'),
  closeDrawer: document.getElementById('close-drawer'),
  drawerBackdrop: document.getElementById('drawer-backdrop')
};

function formatClock() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const value = formatter.format(now);
  selectors.clock.textContent = `Local time · ${value}`;
  selectors.clock.dateTime = now.toISOString();
}

function showToast(message) {
  selectors.toast.textContent = message;
  selectors.toast.classList.add('show');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => selectors.toast.classList.remove('show'), 1700);
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
    showToast('Copied email to clipboard');
  } catch {
    showToast('Clipboard blocked — use heditrabelsi07@gmail.com');
  }
}

function updateSparkline() {
  if (!state.history.length) {
    state.history.push(state.drinks.reduce((acc, item) => acc + item.price, 0));
  }
  const points = state.history.slice(-24);
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  const mapped = points
    .map((value, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * 344 + 8;
      const y = 74 - ((value - min) / range) * 58;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(' ');

  selectors.marketLine.setAttribute('points', mapped);
}

function renderMarket() {
  selectors.drinkList.innerHTML = '';
  state.drinks.forEach((drink, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <span>${drink.name}</span>
      <span class="price">€${drink.price.toFixed(2)}</span>
      <button class="button" data-buy="${index}" type="button">Buy 1</button>
    `;
    selectors.drinkList.append(item);
  });
  selectors.tickCountdown.textContent = `${state.countdown}s`;
  updateSparkline();
}

function normalizePrices() {
  state.drinks = state.drinks.map((drink) => ({
    ...drink,
    price: Math.max(1.5, Number(drink.price.toFixed(2)))
  }));
}

function buyDrink(index) {
  const surge = 0.28;
  const easing = 0.06;

  state.drinks = state.drinks.map((drink, i) => {
    if (i === index) return { ...drink, price: drink.price + surge };
    return { ...drink, price: drink.price - easing };
  });

  normalizePrices();
  state.history.push(state.drinks.reduce((acc, item) => acc + item.price, 0));
  renderMarket();
}

function marketTick() {
  state.drinks = state.drinks.map((drink) => ({
    ...drink,
    price: drink.price + (Math.random() - 0.5) * 0.18
  }));

  normalizePrices();
  state.history.push(state.drinks.reduce((acc, item) => acc + item.price, 0));
  renderMarket();
}

function resetMarket() {
  state.drinks = structuredClone(drinksInitialState);
  state.history = [state.drinks.reduce((acc, item) => acc + item.price, 0)];
  state.countdown = 5;
  renderMarket();
  showToast('Market reset to baseline');
}

function renderProjects() {
  selectors.projectsGrid.innerHTML = '';
  const visible =
    state.activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category.includes(state.activeFilter));

  visible.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-item';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p class="meta">${project.meta}</p>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
    `;
    selectors.projectsGrid.append(card);
  });
}

function openDrawer(essay) {
  selectors.drawerTitle.textContent = essay.title;
  selectors.drawerReadtime.textContent = essay.readTime;
  selectors.drawerAbstract.textContent = essay.abstract;
  selectors.drawerThesis.textContent = essay.thesis;
  selectors.drawer.classList.add('open');
  selectors.drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  selectors.drawer.classList.remove('open');
  selectors.drawer.setAttribute('aria-hidden', 'true');
}

function renderWriting() {
  selectors.writingList.innerHTML = '';
  essays.forEach((essay) => {
    const row = document.createElement('li');
    row.innerHTML = `<button type="button">${essay.title}</button><span class="meta">${essay.readTime}</span>`;
    row.querySelector('button').addEventListener('click', () => openDrawer(essay));
    selectors.writingList.append(row);
  });
}

function setupFilters() {
  selectors.filters.forEach((button) => {
    button.addEventListener('click', () => {
      state.activeFilter = button.dataset.filter;
      selectors.filters.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      renderProjects();
    });
  });
}

function setupMarketEvents() {
  selectors.drinkList.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const value = target.getAttribute('data-buy');
    if (value === null) return;
    buyDrink(Number(value));
  });

  selectors.crashButton.addEventListener('click', resetMarket);

  window.setInterval(() => {
    state.countdown -= 1;
    if (state.countdown <= 0) {
      marketTick();
      state.countdown = 5;
    }
    selectors.tickCountdown.textContent = `${state.countdown}s`;
  }, 1000);
}

function setupDrawerEvents() {
  selectors.closeDrawer.addEventListener('click', closeDrawer);
  selectors.drawerBackdrop.addEventListener('click', closeDrawer);
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDrawer();
  });
}

function init() {
  formatClock();
  window.setInterval(formatClock, 1000);

  selectors.copyEmailButton.addEventListener('click', copyEmail);
  selectors.openWritingButton.addEventListener('click', () => {
    const firstEssay = essays[0];
    openDrawer(firstEssay);
  });

  renderWriting();
  renderProjects();
  resetMarket();
  setupFilters();
  setupMarketEvents();
  setupDrawerEvents();
}

init();
