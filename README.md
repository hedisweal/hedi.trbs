# HEDI.TRBS // PHANTOM PROFILE ✦

> *"Curiosity fuels my Knowledge, human interaction shapes my Charm, and building systems sharpens my Proficiency."*

A kinetic, high-contrast personal portfolio website for **Hedi Trabelsi** (Tunisian-Belgian BSc Technical Computer Science student at the **University of Twente** & Philosophy Track Student Ambassador at **Honours Association Ockham**).

Designed with a custom UI inspired by the dynamic menus and visual direction of *Persona 5 Royal* and *Persona 3 Reload*, built entirely with zero-dependency semantic HTML5, modern CSS, and vanilla JavaScript.

---

## ✦ Key Features & UI Architecture

* **Interactive Entry Gate (`SYS.BOOT // ENSCHEDE_NODE_26`):** Full-screen Calling Card pre-loader featuring a multi-layer diagonal polygon shard wipe (`clip-path`), keyboard trigger support (`Enter` / `Space`), and session persistence via `sessionStorage` with an on-demand `[ REPLAY INTRO ]` trigger.
* **Dual-Theme Engine (`P5 CRIMSON` / `P3 RELOAD CYAN`):** Instant runtime theme switching powered by CSS custom properties (`@property --accent`), morphing all borders, shadows, halftone patterns, and highlights between Phantom Crimson (`#E60012`) and Reload Cyan (`#00A8FF`).
* **Live Telemetry HUD:** Real-time clock and calendar synchronized to `Europe/Amsterdam` (`Enschede, NL`) using `Intl.DateTimeFormat`, paired with a dynamic age calculator.
* **Diagonal Screen-Wipe Navigation:** 5 distinct views (`01 // PROFILE`, `02 // MISSIONS`, `03 // SOCIAL STATS`, `04 // ACADEMIA`, `05 // CONTACT`) connected by a 60fps angled curtain transition and URL hash routing.
* **Interactive Mission Dossiers:** Accessible modal archive detailing engineering projects:
  * **Mission 01 — TouchMyBike:** Active anti-theft bike security system (`ESP32`, `Raspberry Pi`, encrypted `LoRa` with `AES-128-GCM`, `TOTP 2FA`, `bcrypt`).
  * **Mission 02 — Basetide 2:** Automated factory production planning & rescheduling tool (M4 project).
  * **Mission 03 — Networked Quarto & AI Engine:** Multi-threaded Java implementation with bitwise board evaluation and Minimax + Alpha-Beta pruning (`2nd Place // Tournament`).
  * **Mission 04 — EUDIS Defence Hackathon:** European Commission defence & cybersecurity innovation challenge.
* **Accessibility & Motion Discipline:** Full keyboard navigation (`Tab`, `Enter`, `Space`, `Escape`), high-contrast `:focus-visible` states, and automatic support for `prefers-reduced-motion`.
* **Background Music:** Optional low-volume looping playback for `Color Your Night`, with mute and volume controls in the HUD. Browsers start playback from the entry interaction to comply with autoplay policies.

---

## ✦ Tech Stack

* **Markup:** Semantic HTML5 (`ARIA` roles, modal dialog management, live regions)
* **Styling:** Modern CSS3 (`CSS Grid`, `Flexbox`, `@property`, `clip-path` polygons, 60fps keyframe choreography, responsive breakpoints)
* **Logic:** Vanilla JavaScript (`ES6+`, DOM state management, Clipboard API, `Intl` time formatting, `sessionStorage`)
* **Typography:** `Archivo Black`, `Barlow Condensed`, `Space Grotesk`, and `JetBrains Mono` (via Google Fonts)

---

## ✦ Project Structure

```text
├── assets/
│   ├── favicon.ico          # Browser favicon
│   ├── hedi-blue.png        # Brand icon
│   └── color-your-night.mp3 # Locally supplied music file
├── index.html               # Main application markup & views
├── styles.css               # Core layout, Persona grid, components & responsive rules
├── polish.css               # Entry gate, kinetic animations, halftone textures & polish
├── app.js                   # HUD clock, view navigation, mission modal & theme switcher
└── README.md                # Project documentation
```

---

## ✦ Local Development

Because this project runs on pure web standards with zero build steps or external bundlers required, you can launch it immediately:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd hedi.trbs
   ```
2. **Run a local server:**
   * Using **VS Code**: Right-click `index.html` and select **Open with Live Server**.
   * Using **Python**:
     ```bash
     python3 -m http.server 8000
     ```
   * Using **Node.js**:
     ```bash
     npx serve .
     ```
3. Open `http://localhost:8000` in your browser.

---

## ✦ Contact & Channels

* **Author:** Hedi Trabelsi (`He/Him`)
* **Email:** [heditrabelsi07@gmail.com](mailto:heditrabelsi07@gmail.com)
* **LinkedIn:** [linkedin.com/in/hedi-trabelsi-0a0081241](https://www.linkedin.com/in/hedi-trabelsi-0a0081241/)
* **Instagram:** [@hedi.trbs](https://instagram.com/hedi.trbs)
