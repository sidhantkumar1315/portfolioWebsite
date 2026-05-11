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

## Tech Stack

| Layer | Tech |
|---|---|
| UI | Vanilla HTML5, CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Email | EmailJS |
| AI Chat | Google Gemini API (gemini-1.5-flash) |
| Icons | Font Awesome 6 |
| Deployment | GitHub Pages |

---

## Projects Featured

| Project | Stack | Links |
|---|---|---|
| **PeerSync** — Real-time collaborative VS Code extension | TypeScript, Node.js, Yjs CRDT, Socket.io, WebRTC | [Marketplace](https://marketplace.visualstudio.com/items?itemName=peersync.peersync) · [GitHub](https://github.com/DalCreators/peerFull) |
| **VoiceToSQL** — NL & voice query AI web app | React, Vite, FastAPI, Groq (Llama 3.3 70B), SQLite | [Live](https://voiceto-sql.vercel.app/) · [GitHub](https://github.com/sidhantkumar1315/VoicetoSQL) |
| **House Price Predictor** — ML web app | Python, Flask, NumPy, Pandas, Plotly | [Live](https://house-price-prediction-model-zeta.vercel.app/) · [GitHub](https://github.com/sidhantkumar1315/HousePricePredictionModel) |
| **Peer** — Collaborative coding & communication platform | React, Node.js, WebRTC, WebSockets | [Live](https://peer-kohl.vercel.app/) · [GitHub](https://github.com/DalCreators/Peer) |
| **Groki** — AI voice-controlled inventory manager | React, Node.js, Gemini API, Supabase | [Live](https://groki-app-final.vercel.app/) · [GitHub](https://github.com/sidhantkumar1315/Groki) |
| **Gitofy** — Android GitHub/GitLab client | Java, Android, GitHub API | [GitHub](https://github.com/sidhantkumar1315/Gitofy) |
| **Pokedex** — Interactive Pokémon browser | JavaScript, Bootstrap, REST API | [Live](https://sidhantkumar1315.github.io/Pokedex/) · [GitHub](https://github.com/sidhantkumar1315/Pokedex) |

---

## Project Structure

```
portfolioWebsite/
├── index.html              # Single HTML shell — app content is injected via JS
├── script.js               # App configs, game logic, AI chat, resume functions
├── assets/
│   ├── Sidhant_Kumar_Resume.pdf
│   └── media/              # Demo videos for project preview popups
└── styles/
    ├── main.css             # Imports all partials
    ├── base/                # Reset, variables, fonts
    ├── components/          # Projects, dock, menu bar, app window, chat, contact
    ├── layout/              # Desktop layout & responsive breakpoints
    ├── themes/              # Dark mode overrides + star field
    └── utilities/           # Animations & helpers
```

---

## Local Development

No build step required — it's plain HTML/CSS/JS.

```bash
git clone https://github.com/sidhantkumar1315/portfolioWebsite.git
cd portfolioWebsite
# open index.html in a browser, or spin up a local server:
npx serve .
# or
python3 -m http.server 8080
```

> The AI chat requires a free [Google Gemini API key](https://aistudio.google.com/app/apikey). You'll be prompted to enter one on first use.

---

## Contact

**Sidhant Kumar** · [LinkedIn](https://www.linkedin.com/in/sidhant-kumar-90ba65290/) · [GitHub](https://github.com/sidhantkumar1315)
