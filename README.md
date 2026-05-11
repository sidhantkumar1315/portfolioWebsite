# Sidhant Kumar — Portfolio Website

A macOS-inspired interactive portfolio built with vanilla HTML, CSS, and JavaScript. The entire interface is designed to look and feel like a MacBook — complete with a menu bar, dock, window management, dark mode, and fullscreen apps for each section.

**Live:** [sidhantkumar1315.github.io/portfolioWebsite](https://sidhantkumar1315.github.io/portfolioWebsite/)

---

## Features

- **Mac desktop UI** — menu bar with live clock, dock with hover magnification, traffic light window controls
- **Dark mode** — toggleable with animated star field on the desktop background
- **Project previews** — hover any project card to see a live demo video popup
- **AI chat** — ask an AI assistant (powered by Google Gemini) anything about Sidhant
- **Built-in Pokedex** — live iframe embed of the Pokedex project
- **Tic Tac Toe** — playable game with Easy/Hard AI (Minimax + alpha-beta pruning)
- **Contact form** — sends real emails via EmailJS
- **Resume download** — PDF, plain-text (ATS-friendly), and print versions

---

## Project Structure

```
portfolioWebsite/
├── index.html              # Single HTML shell — all app content is injected via JS
├── script.js               # All app configs, logic, game AI, chat, resume functions
├── assets/
│   ├── Sidhant_Kumar_Resume.pdf
│   ├── SupervisedML_Course1.pdf
│   └── media/              # .mov demo videos for project preview popups
│       ├── peerSync-demo.mov
│       ├── voicetosql-demo.mov
│       ├── peer-demo.mov
│       ├── groki-demo.mov
│       ├── gitofy-demo.mov
│       ├── HousePricePrecitor_demo.mov
│       ├── pokedex-demo.mov
│       └── email_it-demo.mov
└── styles/
    ├── main.css             # Imports everything below
    ├── base/
    │   ├── reset.css
    │   ├── variables.css    # CSS custom properties (colors, spacing, etc.)
    │   └── font.css
    ├── components/
    │   ├── projects.css     # Project cards, tech badges, preview popup
    │   ├── app-window.css   # Fullscreen app window & traffic lights
    │   ├── dock.css         # Dock icons & magnification
    │   ├── menu-bar.css     # Top menu bar
    │   ├── hero.css         # Landing intro & role animation
    │   ├── laptop.css       # MacBook frame
    │   ├── ai-chat.css      # Chat UI
    │   └── contact-form.css
    ├── layout/
    │   ├── desktop.css
    │   └── responsive.css
    ├── themes/
    │   └── dark-mode.css    # Dark mode overrides + star field
    └── utilities/
        ├── animations.css
        └── helpers.css
```

---

## How It Works

All portfolio content lives in `script.js` inside the `appConfigs` object. Each key is a "app" that gets injected into the fullscreen window when the corresponding dock icon is clicked:

| App key | Content |
|---|---|
| `finder` | Welcome screen / quick overview |
| `about` | Bio, experience, skills, resume download |
| `projects` | Project cards with hover demo previews |
| `contact` | Contact form + socials |
| `pokedex` | Live iframe embed |
| `tic-tac-toe` | Playable Tic Tac Toe game |
| `ai-chat` | Gemini-powered AI assistant |

### Adding a New Project

1. Add a `<div class="project-card" data-project="yourkey">` block inside the `projects` content in `appConfigs`
2. Add a corresponding entry in the `projectPreviews` object pointing to your demo video:
   ```js
   yourkey: {
       title: "Project Title",
       description: "Short description for the popup.",
       gifUrl: "assets/media/your-demo.mov",
       isVideo: true
   }
   ```
3. Drop the demo video into `assets/media/`
4. Add a CSS badge color in `styles/components/projects.css` if using a new tech badge class

### Adding a New Tech Badge

In `styles/components/projects.css`, append:
```css
.tech-badge.yourlang { background: linear-gradient(135deg, #COLOR1, #COLOR2); }
```

Then use `<span class="tech-badge yourlang">Label</span>` in the project card HTML.

---

## Tech Stack

| Layer | Tech |
|---|---|
| UI | Vanilla HTML5, CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Email | EmailJS |
| AI Chat | Google Gemini API (gemini-1.5-flash) |
| Icons | Font Awesome 6 |
| Deployment | GitHub Pages / Vercel |

---

## Projects Featured

| Project | Stack | Links |
|---|---|---|
| **PeerSync** — VS Code collaborative coding extension | TypeScript, Node.js, Yjs CRDT, Socket.io, WebRTC | [Marketplace](https://marketplace.visualstudio.com/items?itemName=peersync.peersync) · [GitHub](https://github.com/DalCreators/peerFull) |
| **VoiceToSQL** — NL & voice query AI web app | React, Vite, FastAPI, Groq (Llama 3.3 70B), SQLite | [Live](https://voiceto-sql.vercel.app/) · [GitHub](https://github.com/sidhantkumar1315/VoicetoSQL) |
| **House Price Predictor** — ML web app | Python, Flask, NumPy, Pandas, Plotly | [Live](https://house-price-prediction-model-zeta.vercel.app/) · [GitHub](https://github.com/sidhantkumar1315/HousePricePredictionModel) |
| **Peer** — Collaborative IDE platform | React, Node.js, WebRTC, WebSockets | [Live](https://peer-kohl.vercel.app/) · [GitHub](https://github.com/DalCreators/Peer) |
| **Groki** — AI voice inventory manager | React, Node.js, Gemini API, Supabase | [Live](https://groki-app-final.vercel.app/) · [GitHub](https://github.com/sidhantkumar1315/Groki) |
| **Gitofy** — Android GitHub client | Java, Android, GitHub API | [GitHub](https://github.com/sidhantkumar1315/Gitofy) |
| **Pokedex** | JavaScript, Bootstrap, REST API | [Live](https://sidhantkumar1315.github.io/Pokedex/) · [GitHub](https://github.com/sidhantkumar1315/Pokedex) |

---

## Local Development

No build step required — it's plain HTML/CSS/JS.

```bash
git clone https://github.com/sidhantkumar1315/portfolioWebsite.git
cd portfolioWebsite
# open index.html in a browser, or use a local server:
npx serve .
# or
python3 -m http.server 8080
```

> The AI chat requires a Google Gemini API key. On first load you'll be prompted to enter one, or you can use the demo key built into the app.

---

## Contact

**Sidhant Kumar** — [sd247182@dal.ca](mailto:sd247182@dal.ca) · [LinkedIn](https://www.linkedin.com/in/sidhant-kumar-90ba65290/) · [GitHub](https://github.com/sidhantkumar1315)
