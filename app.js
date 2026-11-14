const email = "heditrabelsi07@gmail.com";
const missions = [
  {
    title: "TouchMyBike — Active Anti-Theft Bike Security System",
    date: "MISSION 01 // OCT 2026",
    summary: "University of Twente Project Group 3 tackling bike theft in the Netherlands by reacting during the theft.",
    overview: "<h3>ROLE // SECURITY OFFICER</h3><p>Hedi served as Security Officer (Belbin: Co-ordinator & Resource Investigator) in a 6-person Scrum team. Mentors: Levi Ockels & Anna Sudareva.</p><ul><li>Reacting during theft instead of only recovering after it.</li><li>Owner web dashboard at touchmybike.netlify.app.</li></ul>",
    architecture: "<h3>HARDWARE // ARCHITECTURE</h3><p>ESP32 Bike Controller with GPS Module, IMU motion sensor, 60s MP3 alarm + Speaker, status LED, and physical defence mechanism communicating via encrypted LoRa radio with a Raspberry Pi server and owner web dashboard.</p><p>Heartbeat interval: 5 minutes.</p>",
    security: "<h3>SECURITY BY DESIGN</h3><p>TOTP 2FA, salted bcrypt password hashing, 5-attempt login lockout, global session logout, and AES-128-GCM encryption with a message counter against replay and tampering attacks.</p>"
  },
  {
    title: "Basetide 2 — Automated Production Planning Tool",
    date: "MISSION 02 // M4 PROJECT",
    summary: "A production planning tool that dynamically reschedules factory production when urgent customer orders disrupt workflows.",
    overview: "<h3>OBJECTIVE // RESCHEDULE</h3><p>Built with Team Basetide 2 to dynamically adapt factory production workflows around urgent customer orders.</p><ul><li>Work-order prioritization and operator acknowledgments.</li><li>Internal messaging with mobile/tablet accessibility.</li></ul>",
  },
  {
    title: "Networked Quarto Game & AI Strategy Engine",
    date: "MISSION 03 // JAVA SYSTEMS",
    summary: "Multi-threaded networked implementation of Quarto in Java featuring a custom text protocol and a tiered AI engine.",
    result: "2ND PLACE // TOURNAMENT",
    overview: "<h3>GAME ENGINE // QUARTO</h3><p>Multi-threaded networked implementation of the Quarto strategy board game with bitwise board evaluation and a custom text protocol.</p>",
    architecture: "<h3>AI // TIERED STRATEGY</h3><p>Tiered AI engine using minimax with alpha-beta pruning and iterative deepening.</p>",
    security: "<h3>STACK // NETWORKING</h3><p>Java networking, multi-threading, custom protocol design, and bitwise evaluation.</p>"
  },
  {
    title: "EUDIS Defence Hackathon 2025",
    date: "MISSION 04 // OCT 2025",
    summary: "European Commission initiative fostering defence, cybersecurity, and resilience innovation across Europe.",
    overview: "<h3>INITIATIVE // EUDIS</h3><p>European Commission initiative bringing together minds across Europe to collaborate on defence, cybersecurity, and resilience challenges.</p>",
    architecture: "<h3>COLLABORATION // INNOVATION</h3><p>A defence-sector innovation context focused on resilience and collaborative problem-solving.</p>",
    security: "<h3>DOMAIN // CYBERSECURITY</h3><p>Defence technology and cybersecurity challenge space.</p>"
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let activeMission = missions[0];
let themeBlue = false;

function updateHud() {
  const now = new Date();
  const clock = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Amsterdam", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(now);
  const dateParts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Amsterdam", day: "2-digit", month: "2-digit", weekday: "short" }).formatToParts(now);
  const dateValues = Object.fromEntries(dateParts.map((part) => [part.type, part.value]));
  $("#hud-clock").textContent = `ENSCHEDE, NL // ${clock}`;
  $("#hud-clock").dateTime = now.toISOString();
  $("#hud-date").textContent = `${dateValues.month} / ${dateValues.day} ${dateValues.weekday.toUpperCase()}`;
}

function updateAge() {
  const badge = document.getElementById("age-badge");
  if (!badge) return;
  const birth = new Date(`${badge.dataset.birth}T00:00:00`);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const birthdayPassed = now.getMonth() > birth.getMonth()
    || (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());
  if (!birthdayPassed) age -= 1;
  badge.textContent = `${age} YEARS`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2300);
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
    showToast("CALLING CARD COPIED! ✦");
  } catch (error) {
    showToast(`COPY MANUALLY: ${email}`);
  }
}

function renderMissions() {
  $("#mission-list").replaceChildren(...missions.map((mission, index) => {
    const card = document.createElement("article");
    card.className = "mission-card";
    card.tabIndex = 0;
    card.dataset.mission = index;
    card.innerHTML = `<span class="mission-number">${mission.date}</span><h3>${mission.title}</h3>${mission.result ? `<p class="mission-meta">${mission.result}</p>` : ""}<p>${mission.summary}</p>`;
    card.addEventListener("click", () => openModal(index));
    card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") openModal(index); });
    return card;
  }));
}

function openModal(index) {
  activeMission = missions[index];
  $("#modal-title").textContent = activeMission.title;
  $("#modal-summary").textContent = activeMission.summary;
  $("#modal-number").textContent = activeMission.date;
  $("#modal-content").innerHTML = [activeMission.overview, activeMission.architecture, activeMission.security].filter(Boolean).join("<hr>");
  $("#mission-modal").classList.add("open");
  $("#mission-modal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#mission-modal").classList.remove("open");
  $("#mission-modal").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function navigate(viewName) {
  const current = $(".view.active");
  const next = $(`#${viewName}`);
  if (!next || current === next) return;
  const wipe = $("#screen-wipe");
  wipe.classList.remove("play");
  void wipe.offsetWidth;
  wipe.classList.add("play");
  setTimeout(() => {
    current.classList.remove("active");
    next.classList.add("active");
    $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewName));
    history.replaceState(null, "", `#${viewName}`);
    $("#main-nav").classList.remove("open");
  }, 300);
  setTimeout(() => wipe.classList.remove("play"), 760);
}

function setupNavigation() {
  $$(".nav-item").forEach((item) => item.addEventListener("click", () => navigate(item.dataset.view)));
  $("#menu-toggle").addEventListener("click", () => {
    const nav = $("#main-nav");
    const open = nav.classList.toggle("open");
    $("#menu-toggle").setAttribute("aria-expanded", String(open));
  });
}

function setupModal() {
  $$("[data-close-modal]").forEach((item) => item.addEventListener("click", closeModal));
  window.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
}

function toggleTheme() {
  themeBlue = !themeBlue;
  document.documentElement.style.setProperty("--accent", themeBlue ? "#00a8ff" : "#e60012");
  document.documentElement.style.setProperty("--accent-rgb", themeBlue ? "0,168,255" : "230,0,18");
  $("#theme-toggle").textContent = themeBlue ? "[ P5 CRIMSON ]" : "[ P3 RELOAD CYAN ]";
  $("#theme-toggle").setAttribute("aria-pressed", String(themeBlue));
  showToast(themeBlue ? "P3 RELOAD CYAN // ACTIVE" : "P5 CRIMSON // ACTIVE");
}

function completeEntry() {
  const gate = document.getElementById("entry-gate");
  if (!gate || gate.classList.contains("is-exiting")) return;
  sessionStorage.setItem("persona_intro_seen", "true");
  gate.classList.add("is-exiting");
  setTimeout(() => {
    gate.classList.add("is-hidden");
    document.body.classList.remove("gate-locked");
  }, 1450);
}

function setupEntryGate() {
  const gate = document.getElementById("entry-gate");
  if (!gate) return;
  const start = () => completeEntry();
  document.getElementById("press-start").addEventListener("click", start);
  document.getElementById("entry-skip").addEventListener("click", start);
  document.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && !gate.classList.contains("is-hidden")) {
      event.preventDefault();
      start();
    }
  });
  if (sessionStorage.getItem("persona_intro_seen") === "true") {
    gate.classList.add("is-hidden");
    document.body.classList.remove("gate-locked");
  }
}

function init() {
  updateHud();
  updateAge();
  setInterval(updateHud, 1000);
  renderMissions();
  setupNavigation();
  setupModal();
  $("#copy-email").addEventListener("click", copyEmail);
  $("#copy-email-card").addEventListener("click", copyEmail);
  $("#theme-toggle").addEventListener("click", toggleTheme);
  $("#replay-intro").addEventListener("click", () => {
    sessionStorage.removeItem("persona_intro_seen");
    window.location.reload();
  });
  setupEntryGate();
  const initial = location.hash.slice(1);
  if (initial && $(`#${initial}`)) navigate(initial);
}

init();
