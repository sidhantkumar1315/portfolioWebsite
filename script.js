const appConfigs = {
    finder: {
        name: 'Finder',
        title: 'Finder',
        content: `
            <h2>Welcome to My Portfolio</h2>
            <p>Navigate through different applications using the dock below to explore my work and experience.</p>
            <div style="margin-top: 30px;">
                <h3>Quick Overview:</h3>
                <ul>
                    <li><strong>Status:</strong> Currently seeking opportunities for Winter 2026</li>
                    <li><strong>Education:</strong> Computer Science at Dalhousie University</li>
                    <li><strong>CGPA:</strong> 4.11/4.3</li>
                    <li><strong>Location:</strong> Halifax, NS</li>
                </ul>
            </div>
        `
    },
    about: {
        name: 'About Me',
        title: 'About - Sidhant Kumar',
        content: `
            <h2>About Me</h2>
            <p>I'm a 3rd year Computer Science student at Dalhousie University who somehow maintains a 4.0+ GPA while 
            building cool stuff on the side. When I'm not cramming for exams, I'm working on collaborative platforms, 
            AI-powered applications, and mobile apps that solve real problems. I believe in learning by doing and 
            turning ideas into working software. Currently seeking opportunities for Winter 2026.</p>
            
            <h3>Professional Experience</h3>
            <p><strong>Software Developer – AI Trainer (Remote)</strong> at DataAnnotation (Nov 2024 – Mar 2025)</p>
            <ul>
                <li>Reviewed AI-generated responses to ensure alignment with user request</li>
                <li>Developed and tested code to enhance system functionality and user experience</li>
                <li>Collaborated with cross-functional teams to improve AI performance and resolve issues</li>
                <li>Maintained high standards for quality assurance in AI systems</li>
            </ul>
            
            <h3>Technical Skills</h3>
            <p><strong>Languages:</strong> HTML, CSS, JavaScript, Java, Python, MySQL, PHP, Aseba, C, Node.js</p>
            <p><strong>Tools:</strong> Processing, Android Studio, IntelliJ, PyCharm, Eclipse, Jupyter Notebooks, Git, VS Code, Cursor</p>
            <p><strong>Frameworks:</strong> Bootstrap, JavaSwing, Pygame, Express.js, TailwindCSS</p>
            
            <h3>Awards</h3>
            <ul>
                <li>Dalhousie University Global Entrance Scholarship</li>
                <li>Sexton Scholar</li>
            </ul>
            
            <h3>Extra Curricular</h3>
            <div style="margin-top: 20px;">
                <h4>NASA Space Apps Challenge</h4>
                <p><strong>Dalhousie University, Halifax, NS</strong> | Oct 2024</p>
                <ul>
                    <li>Collaborated with a diverse team of 5 to propose innovative solutions for real-world challenges posed by NASA</li>
                    <li>Participated in brainstorming sessions to align technical ideas with project goals</li>
                    <li>Developed Python game prototype using Pygame under a 24-hour deadline</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 20px; background: rgba(74, 144, 226, 0.1); border-radius: 12px;">
                <h3 style="margin-bottom: 15px; color: #4A90E2;">📄 Download Resume</h3>
                <p style="margin-bottom: 20px; color: #666;">Get a copy of my resume in your preferred format</p>
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="downloadResume('txt')" style="background: #4A90E2; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: background 0.3s ease;">
                        📝 Download TXT
                    </button>
                    <button onclick="downloadResume('pdf')" style="background: #DC3545; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: background 0.3s ease;">
                        📄 Download PDF
                    </button>
                </div>
                <p style="font-size: 0.9em; color: #888; margin-top: 15px;">
                    📧 Contact: sd247182@dal.ca | 📱 Phone: (902) 943-6901
                </p>
            </div>
        `
    },
    projects: {
        name: 'Projects',
        title: 'My Projects',
        content: `
            <h2>Featured Projects</h2>
            <div class="projects-container">
                <div class="project-grid">
                    <div class="project-card" data-project="peer">
                        <div class="project-header">
                            <h3>Peer — Collaborative Coding & Communication Platform</h3>
                            <div class="tech-badges">
                                <span class="tech-badge react">React</span>
                                <span class="tech-badge nodejs">Node.js</span>
                                <span class="tech-badge webrtc">WebRTC</span>
                                <span class="tech-badge websockets">WebSockets</span>
                            </div>
                        </div>
                        <p>Developed a real-time collaborative IDE with integrated chat/video, enabling teams to code together seamlessly.</p>
                        <p>Optimized WebSocket sync to support 10+ concurrent users with minimal latency, ensuring a smooth remote teamwork experience.</p>
                        <div class="project-links">
                            <a href="https://github.com/DalCreators/Peer" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                            <a href="https://peer-kohl.vercel.app/" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                        <p class="project-duration">Apr 2025 - Jul 2025</p>
                    </div>
                    
                    <div class="project-card" data-project="groki">
                        <div class="project-header">
                            <h3>Groki — AI Voice-Controlled Inventory Manager</h3>
                            <div class="tech-badges">
                                <span class="tech-badge react">React</span>
                                <span class="tech-badge nodejs">Node.js</span>
                                <span class="tech-badge ai">Gemini AI</span>
                                <span class="tech-badge supabase">Supabase</span>
                            </div>
                        </div>
                        <p>Built a voice-activated inventory system with wake-word detection for true hands-free usage.</p>
                        <p>Integrated Gemini AI to suggest recipes from pantry contents, improving meal planning efficiency for end-users.</p>
                        <p>Secured user authentication and storage with Supabase, ensuring reliability and data protection.</p>
                        <div class="project-links">
                            <a href="https://github.com/sidhantkumar1315/Groki" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                            <a href="https://groki-app-final.vercel.app/" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                        <p class="project-duration">Jan 2025 - Aug 2025</p>
                    </div>
                    
                    <div class="project-card" data-project="gitofy">
                        <div class="project-header">
                            <h3>Gitofy — GitHub/GitLab Companion (Android)</h3>
                            <div class="tech-badges">
                                <span class="tech-badge java">Java</span>
                                <span class="tech-badge android">Android</span>
                                <span class="tech-badge api">GitHub API</span>
                            </div>
                        </div>
                        <p>Created a mobile app for on-the-go repository management, giving developers quick access to project insights.</p>
                        <p>Implemented OAuth login + push notifications to keep users updated on tracked branches.</p>
                        <p>Added contributor statistics and repo filtering, improving productivity for teams managing multiple projects.</p>
                        <div class="project-links">
                            <a href="https://github.com/sidhantkumar1315/Gitofy" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                        <p class="project-duration">Jan 2025 - Aug 2025</p>
                    </div>
                    
                    <div class="project-card" data-project="compiler">
                        <div class="project-header">
                            <h3>Compiler Development Project</h3>
                            <div class="tech-badges">
                                <span class="tech-badge python">Python</span>
                                <span class="tech-badge regex">RegEx</span>
                            </div>
                        </div>
                        <p>Designed and implemented a custom lexical analyzer and grammar-based parser in Python.</p>
                        <p>Incorporated semantic checks to improve reliability, strengthening understanding of compiler design and language processing.</p>
                        <div class="project-links">
                            <a href="https://github.com/sidhantkumar1315/Compiler" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                        <p class="project-duration">Sept 2024 - Dec 2024</p>
                    </div>
                    
                    <div class="project-card" data-project="pokedex">
                        <div class="project-header">
                            <h3>Pokedex Web App</h3>
                            <div class="tech-badges">
                                <span class="tech-badge javascript">JavaScript</span>
                                <span class="tech-badge bootstrap">Bootstrap</span>
                                <span class="tech-badge api">REST API</span>
                            </div>
                        </div>
                        <p>Engineered a responsive web application with real-time Pokémon data fetching and advanced filtering algorithms.</p>
                        <p>Optimized API calls for 3x faster load times and implemented comprehensive error handling for seamless user experience.</p>
                        <div class="project-links">
                            <a href="https://github.com/sidhantkumar1315/Pokedex" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                            <a href="https://sidhantkumar1315.github.io/Pokedex/" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                        <p class="project-duration">Jan 2025 - Mar 2025</p>
                    </div>
                    
                    <div class="project-card" data-project="email">
                        <div class="project-header">
                            <h3>Email it! - Web Email System</h3>
                            <div class="tech-badges">
                                <span class="tech-badge php">PHP</span>
                                <span class="tech-badge html">HTML</span>
                                <span class="tech-badge css">CSS</span>
                                <span class="tech-badge mysql">MySQL</span>
                            </div>
                        </div>
                        <p>Developed a secure full-stack email system with advanced authentication, SQL injection protection, and intuitive message management.</p>
                        <p>Implemented custom SMTP integration and comprehensive input validation for enterprise-level security.</p>
                        <div class="project-links">
                            <a href="https://github.com/sidhantkumar1315/Email_It" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        </div>
                        <p class="project-duration">Feb 2025 - April 2025</p>
                    </div>
                    
                </div>
                
            </div>
            
            <!-- Project Preview Popup will be inserted into app-content -->
        `
    },
    contact: {
        name: 'Contact',
        title: 'Contact Me',
        content: `
            <div class="contact-container">
                <div class="contact-hero-left">
                    <h1>LET'S WORK TOGETHER</h1>
                    <p>Have something in mind? Want to collaborate on a project? Send me a message using the form below</p>
                    
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Message" rows="3" required></textarea>
                        </div>
                        <button type="submit" class="send-button">Send</button>
                    </form>
                </div>
                
                <div class="contact-form-section">
                    <div class="contact-alternative">
                        <p>Prefer direct email? <a href="mailto:ksidhant193@gmail.com">click here to email me directly</a></p>
                        <p class="or-text">OR</p>
                        <p>Connect with me on my Socials</p>
                        <div class="social-icons">
                            <a href="https://www.linkedin.com/in/sidhant-kumar-90ba65290/" target="_blank" class="social-icon">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/sidhantkumar1315" target="_blank" class="social-icon">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="availability-info">
                        <h3>Quick Info</h3>
                        <p>📍 Halifax, Nova Scotia, Canada</p>
                        <p>🚀 Seeking Winter 2026 internships</p>
                        <p>💼 Full-stack development, AI/ML, mobile apps</p>
                    </div>
                </div>
            </div>
        `
    },
    pokedex: {
        name: 'Pokedex',
        title: 'Pokédex',
        content: `
            <div class="pokedex-container">
                <iframe src="https://sidhantkumar1315.github.io/Pokedex/" 
                        frameborder="0" 
                        allowfullscreen></iframe>
            </div>
        `
    },
    'tic-tac-toe': {
        name: 'Tic Tac Toe',
        title: 'Tic Tac Toe Game',
        content: `
            <div class="tic-tac-toe-container">
                <h2>Tic Tac Toe</h2>
                <div class="game-mode-selection">
                    <label>Game Mode:</label>
                    <select id="game-mode" class="mode-select">
                        <option value="pvp">Player vs Player</option>
                        <option value="ai-easy">Player vs AI (Easy)</option>
                        <option value="ai-hard">Player vs AI (Hard)</option>
                    </select>
                </div>
                <div class="game-info">
                    <div id="current-player">Current Player: <span id="player-indicator">X</span></div>
                    <div id="game-status"></div>
                </div>
                <div class="game-play-area">
                    <div class="game-board" id="game-board">
                        <div class="cell" data-cell-index="0"></div>
                        <div class="cell" data-cell-index="1"></div>
                        <div class="cell" data-cell-index="2"></div>
                        <div class="cell" data-cell-index="3"></div>
                        <div class="cell" data-cell-index="4"></div>
                        <div class="cell" data-cell-index="5"></div>
                        <div class="cell" data-cell-index="6"></div>
                        <div class="cell" data-cell-index="7"></div>
                        <div class="cell" data-cell-index="8"></div>
                    </div>
                    <div class="game-sidebar">
                        <div class="score-board">
                            <h3>Score</h3>
                            <div class="score">
                                <div class="score-item">
                                    <span id="x-label">X: <span id="x-wins">0</span></span>
                                </div>
                                <div class="score-item">
                                    <span id="o-label">O: <span id="o-wins">0</span></span>
                                </div>
                                <div class="score-item">
                                    <span>Draws: <span id="draws">0</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="game-controls">
                            <button id="restart-game" class="restart-btn">New Game</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ai-chat': {
        name: 'AI Chat',
        title: 'Chat with AI about Sidhant',
        content: `
            <div class="ai-chat-container">
                <div class="chat-header">
                    <div class="ai-avatar">🤖</div>
                    <div class="chat-info">
                        <h3>AI Assistant</h3>
                        <p class="chat-subtitle">Ask me anything about Sidhant Kumar's background, skills, and projects!</p>
                    </div>
                    <div class="api-status" id="api-status">
                        <span class="status-indicator offline" id="status-indicator">●</span>
                        <span class="status-text">Setup Required</span>
                    </div>
                </div>
                
                <div class="chat-messages" id="chat-messages">
                    <div class="message ai-message">
                        <div class="message-avatar">🤖</div>
                        <div class="message-content">
                            <div class="message-text">
                                Hi! I'm here to help you learn about Sidhant Kumar. I can answer questions about his:
                                <ul>
                                    <li>📚 Education at Dalhousie University (4.0 GPA!)</li>
                                    <li>💼 Work experience as an AI Trainer at DataAnnotation</li>
                                    <li>🚀 Projects like Pokedex, Email System, and Compiler</li>
                                    <li>⚡ Technical skills in Python, JavaScript, Java, and more</li>
                                    <li>🎯 Career goals and achievements</li>
                                </ul>
                                Perfect for learning about internship readiness and technical expertise!
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="chat-input-container">
                    <div class="chat-input-wrapper">
                        <input type="text" 
                               id="chat-input" 
                               class="chat-input" 
                               placeholder="Ask about Sidhant's experience, projects, or skills...">
                        <button id="send-button" class="send-button">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                    <div class="api-setup-notice" id="api-setup-notice" style="display: none;">
                        <div class="setup-content">
                            <i class="fa-solid fa-exclamation-triangle"></i>
                            <span>To use the AI chat, please add your free Google Gemini API key.</span>
                            <button class="setup-button" onclick="showApiSetup()">Setup API</button>
                        </div>
                    </div>
                </div>
                
                <div class="api-setup-modal" id="api-setup-modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3>Setup Free AI Chat</h3>
                            <button class="close-modal" onclick="hideApiSetup()">×</button>
                        </div>
                        <div class="modal-body">
                            <div class="setup-steps">
                                <h4>Get your free Google Gemini API key:</h4>
                                <ol>
                                    <li>Visit <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a></li>
                                    <li>Sign in with your Google account</li>
                                    <li>Click "Create API Key" and copy it</li>
                                    <li>Paste it below (stored locally in your browser)</li>
                                </ol>
                            </div>
                            <div class="api-input-group">
                                <label for="gemini-api-key">Gemini API Key:</label>
                                <input type="password" id="gemini-api-key" class="api-input" placeholder="Enter your API key here" value="">
                                <button class="save-api-key" onclick="saveApiKey()">Save & Test</button>
                                <button class="test-demo-key" onclick="useDemoKey()" style="margin-top: 8px; background: #28a745;">Use Demo Key (for testing)</button>
                            </div>
                            <div class="privacy-note">
                                <i class="fa-solid fa-shield-alt"></i>
                                <small>Your API key is stored locally in your browser only. It's never sent to any server except Google's official API.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

//roles 
const roles = [
    "Computer Science Student",
    "Full Stack Developer",
    "Problem Solver",
    "Lifelong Learner",
    "AI Enthusiast"
];

let currentRoleIndex = 0;
const roleWrapper = document.querySelector('.role-wrapper');
const currentRole = document.querySelector('.current-role');

function changeRole() {
    // Fade out current role
    roleWrapper.classList.add('fade-out');
    
    setTimeout(() => {
        // Get next role
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        const nextRole = roles[currentRoleIndex];
        
        // Update text
        currentRole.textContent = nextRole;
        
        // Remove fade-out, add fade-in
        roleWrapper.classList.remove('fade-out');
        roleWrapper.classList.add('fade-in');

        setTimeout(() => {
            roleWrapper.classList.remove('fade-in');
        }, 500);
    }, 500);
}


function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    timeElement.textContent = `${displayHours}:${minutes} ${ampm}`;
}

// Open fullscreen app
function openApp(appName) {
    const app = appConfigs[appName];
    if (!app) return;
    
    // Update menu bar app name
    document.getElementById('current-app').textContent = app.name;
    
    // Update app title and content
    document.getElementById('app-title').textContent = app.title;
    document.getElementById('app-content').innerHTML = app.content;
    
    // Hide hero intro and show app
    document.getElementById('hero-intro').classList.add('hidden');
    document.getElementById('fullscreen-app').classList.add('active');
    if (appName === 'pokedex') {
        document.getElementById('app-content').classList.add('no-padding');
    } else {
        document.getElementById('app-content').classList.remove('no-padding');
    }
}

// Close fullscreen app
function closeApp() {
    // Reset to Finder
    document.getElementById('current-app').textContent = 'Finder';
    
    // Show hero intro and hide app
    document.getElementById('hero-intro').classList.remove('hidden');
    document.getElementById('fullscreen-app').classList.remove('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Start role changing after a short delay
    setTimeout(() => {
        changeRole();
        // Continue changing roles every 3.5 seconds
        setInterval(changeRole, 3500);
    }, 1500);
    
    // Update time
    updateTime();
    setInterval(updateTime, 1000);
    
    // Initialize contact form
    initContactForm();
    
    // Dock items click handlers
    const dockItems = document.querySelectorAll('.dock-item');
    dockItems.forEach(item => {
        item.addEventListener('click', () => {
            const appName = item.getAttribute('data-app');
            openApp(appName);
        });
    });
    
    // Traffic lights handlers
    document.getElementById('close-btn').addEventListener('click', closeApp);
    document.getElementById('minimize-btn').addEventListener('click', () => {
        closeApp();
    });
    
    document.getElementById('maximize-btn').addEventListener('click', () => {
        console.log('Already in fullscreen');
    });
    
    // Click on Apple logo to go back to Finder
    document.querySelector('.apple-logo').addEventListener('click', () => {
        if (document.getElementById('fullscreen-app').classList.contains('active')) {
            closeApp();
        }
    });
    
    // Menu items functionality
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log(`Clicked: ${item.textContent}`);
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    createDynamicStars();
}

function createDynamicStars() {
    const desktop = document.querySelector('.desktop');
    
    // Removing existing star field if any
    const existingStarField = desktop.querySelector('.star-field');
    if (existingStarField) existingStarField.remove();
    
    if (!body.classList.contains('dark-mode')) return;
    
    const starField = document.createElement('div');
    starField.className = 'star-field';

    //creating stars
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        const size = Math.random() * 2 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        
        // Random opacity
        star.style.opacity = Math.random() * 0.8 + 0.2;
        
        starField.appendChild(star);
    }
    
    desktop.appendChild(starField);
}


// dark mode toggle
darkModeToggle.addEventListener('click', () => {
    // Add switching class for smooth icon transition
    darkModeToggle.classList.add('switching');
    
    // Toggle dark mode
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // Handle stars
    if (isDarkMode) {
        createDynamicStars();
    } else {
        const starField = document.querySelector('.star-field');
        if (starField) starField.remove();
    }
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
    
    // Remove switching class after icon animation completes
    setTimeout(() => {
        darkModeToggle.classList.remove('switching');
    }, 600);
});

// Clean initialization - no animation controls needed

// Tic Tac Toe Game Logic
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = false;
let scores = { X: 0, O: 0, draws: 0 };
let gameMode = 'pvp'; // 'pvp', 'ai-easy', 'ai-hard'
let isAIThinking = false;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameBoard[clickedCellIndex] !== '' || !gameActive || isAIThinking) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    const gameEnded = handleResultValidation();
    
    // If it's AI mode and game is still active, let AI make a move
    if (!gameEnded && gameMode !== 'pvp' && currentPlayer === 'O' && gameActive) {
        isAIThinking = true;
        const gameStatus = document.getElementById('game-status');
        if (gameStatus) gameStatus.textContent = 'AI is thinking...';
        
        setTimeout(() => {
            makeAIMove();
            isAIThinking = false;
        }, 500); // Small delay to show AI "thinking"
    }
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameBoard[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add('played');
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updatePlayerLabels();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    const gameStatus = document.getElementById('game-status');
    if (roundWon) {
        let winMessage;
        if (gameMode === 'pvp') {
            winMessage = `Player ${currentPlayer} has won!`;
        } else {
            winMessage = currentPlayer === 'X' ? 'You won! 🎉' : 'AI won! 🤖';
        }
        gameStatus.textContent = winMessage;
        gameActive = false;
        scores[currentPlayer]++;
        updateScoreBoard();
        highlightWinningCells();
        return true;
    }

    let roundDraw = !gameBoard.includes('');
    if (roundDraw) {
        gameStatus.textContent = 'Game ended in a draw!';
        gameActive = false;
        scores.draws++;
        updateScoreBoard();
        return true;
    }

    handlePlayerChange();
    return false;
}

function highlightWinningCells() {
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];
        if (a === b && b === c && a !== '') {
            document.querySelector(`[data-cell-index="${winCondition[0]}"]`).classList.add('winning-cell');
            document.querySelector(`[data-cell-index="${winCondition[1]}"]`).classList.add('winning-cell');
            document.querySelector(`[data-cell-index="${winCondition[2]}"]`).classList.add('winning-cell');
            break;
        }
    }
}

function updateScoreBoard() {
    const xWins = document.getElementById('x-wins');
    const oWins = document.getElementById('o-wins');
    const draws = document.getElementById('draws');
    
    if (xWins) xWins.textContent = scores.X;
    if (oWins) oWins.textContent = scores.O;
    if (draws) draws.textContent = scores.draws;
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    isAIThinking = false;
    const gameStatus = document.getElementById('game-status');
    const playerIndicator = document.getElementById('player-indicator');
    
    if (gameStatus) gameStatus.textContent = '';
    if (playerIndicator) playerIndicator.textContent = currentPlayer;
    
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('played', 'winning-cell');
    });
}

// AI Logic using Minimax Algorithm
function minimax(board, depth, isMaximizing, alpha = -Infinity, beta = Infinity) {
    const winner = checkWinner(board);
    
    if (winner === 'O') return 10 - depth; // AI wins
    if (winner === 'X') return depth - 10; // Human wins  
    if (winner === 'draw') return 0; // Draw
    
    if (isMaximizing) {
        let maxEval = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                const eval = minimax(board, depth + 1, false, alpha, beta);
                board[i] = '';
                maxEval = Math.max(maxEval, eval);
                alpha = Math.max(alpha, eval);
                if (beta <= alpha) break; // Alpha-beta pruning
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                const eval = minimax(board, depth + 1, true, alpha, beta);
                board[i] = '';
                minEval = Math.min(minEval, eval);
                beta = Math.min(beta, eval);
                if (beta <= alpha) break; // Alpha-beta pruning
            }
        }
        return minEval;
    }
}

function checkWinner(board) {
    // Check for winner
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    
    // Check for draw
    if (!board.includes('')) return 'draw';
    
    // Game continues
    return null;
}

function makeAIMove() {
    if (!gameActive) return;
    
    let bestMove = -1;
    
    if (gameMode === 'ai-easy') {
        // Easy mode: 70% random, 30% optimal
        if (Math.random() < 0.3) {
            bestMove = getBestMove();
        } else {
            bestMove = getRandomMove();
        }
    } else if (gameMode === 'ai-hard') {
        // Hard mode: Always optimal
        bestMove = getBestMove();
    }
    
    if (bestMove !== -1) {
        const cell = document.querySelector(`[data-cell-index="${bestMove}"]`);
        handleCellPlayed(cell, bestMove);
        handleResultValidation();
    }
}

function getBestMove() {
    let bestScore = -Infinity;
    let bestMove = -1;
    
    for (let i = 0; i < 9; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = 'O';
            const score = minimax(gameBoard, 0, false);
            gameBoard[i] = '';
            
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    
    return bestMove;
}

function getRandomMove() {
    const availableMoves = [];
    for (let i = 0; i < 9; i++) {
        if (gameBoard[i] === '') {
            availableMoves.push(i);
        }
    }
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

function initializeTicTacToe() {
    const cells = document.querySelectorAll('.cell');
    const restartButton = document.getElementById('restart-game');
    const gameModeSelect = document.getElementById('game-mode');
    
    if (cells.length > 0) {
        gameActive = true;
        cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    }
    
    if (restartButton) {
        restartButton.addEventListener('click', handleRestartGame);
    }
    
    if (gameModeSelect) {
        gameModeSelect.addEventListener('change', (e) => {
            gameMode = e.target.value;
            handleRestartGame();
            updatePlayerLabels();
        });
        gameMode = gameModeSelect.value;
    }
    
    updateScoreBoard();
    updatePlayerLabels();
}

function updatePlayerLabels() {
    const currentPlayerDiv = document.getElementById('current-player');
    const xLabel = document.getElementById('x-label');
    const oLabel = document.getElementById('o-label');
    
    // Update current player display
    if (currentPlayerDiv && gameMode !== 'pvp') {
        if (currentPlayer === 'X') {
            currentPlayerDiv.innerHTML = 'Your Turn: <span id="player-indicator">X</span>';
        } else {
            currentPlayerDiv.innerHTML = 'AI Turn: <span id="player-indicator">O</span>';
        }
    } else if (currentPlayerDiv) {
        currentPlayerDiv.innerHTML = 'Current Player: <span id="player-indicator">' + currentPlayer + '</span>';
    }
    
    // Update scoreboard labels based on game mode
    if (gameMode === 'pvp') {
        if (xLabel) xLabel.innerHTML = 'X: <span id="x-wins">' + scores.X + '</span>';
        if (oLabel) oLabel.innerHTML = 'O: <span id="o-wins">' + scores.O + '</span>';
    } else {
        if (xLabel) xLabel.innerHTML = 'You: <span id="x-wins">' + scores.X + '</span>';
        if (oLabel) oLabel.innerHTML = 'AI: <span id="o-wins">' + scores.O + '</span>';
    }
}

// Resume Download Functions
function downloadResume(format) {
    if (format === 'pdf') {
        const link = document.createElement('a');
        link.href = './assets/SidhantKumar_Resume.pdf';
        link.download = 'SidhantKumar_Resume.pdf';
        link.click();
    } else if (format === 'txt') {
        downloadTextResume();
    }
}

function downloadTextResume() {
    const resumeText = `
SIDHANT KUMAR
(902) 943-6901 | sd247182@dal.ca | LinkedIn | GitHub

EDUCATION
Dalhousie University                                                    Sept 2023 – Present
Bachelor of Computer Science, CGPA – 4.11/4.3                          Halifax, NS

TECHNICAL SKILLS
Languages: HTML, CSS, JavaScript, Java, Python, MySQL, PHP, Aseba, C, Node.js
Tools: Processing, Android Studio, IntelliJ, PyCharm, Eclipse, Jupyter Notebooks, Git, VS Code, Cursor
Frameworks: Bootstrap, JavaSwing, Pygame, Express.js, TailwindCSS

EXPERIENCE
Software Developer – AI Trainer (Remote)                               Nov 2024 – Mar 2025
DataAnnotation
• Reviewed AI-generated responses to ensure alignment with user request.
• Developed and tested code to enhance system functionality and user experience.
• Collaborated with cross-functional teams to improve AI performance and resolve issues.
• Maintained high standards for quality assurance in AI systems.

PROJECTS
Peer — Collaborative Coding & Communication Platform | GitHub | Live    Apr 2025 – Jul 2025
React, Node.js, WebRTC, WebSockets
• Built multi-user code sharing with integrated chat/video and role-based access.
• Implemented live sync over WebSockets and designed a responsive UI for remote teamwork.

Groki — AI Voice-Controlled Inventory Manager | GitHub                  Jan 2025 – Aug 2025
React, Node.js, Gemini API, Supabase
• Added wake-word activation and conversational assistance for hands-free item management.
• Integrated Gemini AI for recipe guidance based on pantry contents; secured auth/data with Supabase.

Gitofy — GitHub/GitLab Companion (Android) | GitHub                     Jan 2025 – Aug 2025
Java, Android, GitHub REST API
• Implemented OAuth login, push notifications for tracked branches, and activity analytics.
• Improved on-the-go repo visibility with filtered browsing and contributor stats.

Compiler Development Project | GitHub                                   Sept 2024 – Dec 2024
Python, Regular Expressions
• Built a lexical analyzer with Python regex, a grammar-based parser, and semantic checks.
• Strengthened understanding of compiler design and language processing.

EXTRA CURRICULAR
NASA Space Apps Challenge                                               Oct 2024
Dalhousie University, Halifax, NS
• Collaborated with a diverse team of 5 to propose innovative solutions for real-world challenges posed by NASA.
• Participated in brainstorming sessions to align technical ideas with project goals.
• Developed Python game prototype using Pygame under a 24-hour deadline.

AWARDS
• Dalhousie University Global Entrance Scholarship.
• Sexton Scholar.
    `.trim();
    
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'SidhantKumar_Resume_ATS.txt';
    link.click();
    window.URL.revokeObjectURL(link.href);
}

function printResume() {
    const printContent = `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.4;">
            <header style="text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px;">
                <h1 style="margin: 0; font-size: 24px;">SIDHANT KUMAR</h1>
                <p style="margin: 5px 0; font-size: 12px;">(902) 943-6901 | sd247182@dal.ca | LinkedIn | GitHub</p>
            </header>
            
            <section style="margin-bottom: 15px;">
                <h2 style="font-size: 16px; border-bottom: 1px solid #666; padding-bottom: 3px; margin-bottom: 8px;">EDUCATION</h2>
                <p style="margin: 3px 0; font-weight: bold;">Bachelor of Computer Science | Dalhousie University | Sept 2023 - Present</p>
                <p style="margin: 3px 0; font-size: 12px;">CGPA: 4.11/4.3 | Halifax, Nova Scotia, Canada</p>
                <p style="margin: 3px 0; font-size: 12px;"><strong>Key Courses:</strong> Data Structures, Algorithms, Web Development, Database Systems, Software Engineering</p>
                <p style="margin: 3px 0; font-size: 12px;"><strong>Awards:</strong> Dalhousie University Global Entrance Scholarship, Sexton Scholar</p>
            </section>
            
            <section style="margin-bottom: 15px;">
                <h2 style="font-size: 16px; border-bottom: 1px solid #666; padding-bottom: 3px; margin-bottom: 8px;">EXPERIENCE</h2>
                <p style="margin: 3px 0; font-weight: bold;">Software Developer - AI Trainer | DataAnnotation | Nov 2024 - Mar 2025</p>
                <ul style="margin: 5px 0; padding-left: 20px; font-size: 12px;">
                    <li>Reviewed AI-generated responses to ensure alignment with user requests</li>
                    <li>Developed and tested code to enhance system functionality</li>
                    <li>Collaborated with cross-functional teams to improve AI performance</li>
                    <li>Maintained high standards for quality assurance in AI systems</li>
                </ul>
            </section>
            
            <section style="margin-bottom: 15px;">
                <h2 style="font-size: 16px; border-bottom: 1px solid #666; padding-bottom: 3px; margin-bottom: 8px;">TECHNICAL SKILLS</h2>
                <p style="margin: 3px 0; font-size: 12px;"><strong>Languages:</strong> HTML, CSS, JavaScript, Java, Python, MySQL, PHP, C, Node.js</p>
                <p style="margin: 3px 0; font-size: 12px;"><strong>Tools:</strong> Processing, Android Studio, IntelliJ, PyCharm, Eclipse, Jupyter Notebooks, Git, VS Code, Cursor</p>
                <p style="margin: 3px 0; font-size: 12px;"><strong>Frameworks:</strong> Bootstrap, JavaSwing, Pygame, Express.js, TailwindCSS</p>
            </section>
            
            <section style="margin-bottom: 15px;">
                <h2 style="font-size: 16px; border-bottom: 1px solid #666; padding-bottom: 3px; margin-bottom: 8px;">PROJECTS</h2>
                <div style="margin-bottom: 8px;">
                    <p style="margin: 3px 0; font-weight: bold; font-size: 13px;">Peer — Collaborative Coding & Communication Platform | Apr 2025 – Jul 2025</p>
                    <p style="margin: 3px 0; font-size: 11px;">React, Node.js, WebRTC, WebSockets</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Developed a real-time collaborative IDE with integrated chat/video, enabling teams to code together seamlessly.</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Optimized WebSocket sync to support 10+ concurrent users with minimal latency, ensuring a smooth remote teamwork experience.</p>
                </div>
                <div style="margin-bottom: 8px;">
                    <p style="margin: 3px 0; font-weight: bold; font-size: 13px;">Groki — AI Voice-Controlled Inventory Manager | Jan 2025 – Aug 2025</p>
                    <p style="margin: 3px 0; font-size: 11px;">React, Node.js, Gemini API, Supabase</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Built a voice-activated inventory system with wake-word detection for true hands-free usage.</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Integrated Gemini AI to suggest recipes from pantry contents, improving meal planning efficiency for end-users.</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Secured user authentication and storage with Supabase, ensuring reliability and data protection.</p>
                </div>
                <div style="margin-bottom: 8px;">
                    <p style="margin: 3px 0; font-weight: bold; font-size: 13px;">Gitofy — GitHub/GitLab Companion (Android) | Jan 2025 – Aug 2025</p>
                    <p style="margin: 3px 0; font-size: 11px;">Java, Android, GitHub REST API</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Created a mobile app for on-the-go repository management, giving developers quick access to project insights.</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Implemented OAuth login + push notifications to keep users updated on tracked branches.</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Added contributor statistics and repo filtering, improving productivity for teams managing multiple projects.</p>
                </div>
                <div style="margin-bottom: 8px;">
                    <p style="margin: 3px 0; font-weight: bold; font-size: 13px;">Compiler Development Project | Sept 2024 – Dec 2024</p>
                    <p style="margin: 3px 0; font-size: 11px;">Python, Regular Expressions</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Designed and implemented a custom lexical analyzer and grammar-based parser in Python.</p>
                    <p style="margin: 3px 0; font-size: 11px;">• Incorporated semantic checks to improve reliability, strengthening understanding of compiler design and language processing.</p>
                </div>
            </section>
        </div>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Sidhant Kumar - Resume</title>
            <style>
                @media print {
                    body { margin: 0; }
                    @page { margin: 0.5in; }
                }
            </style>
        </head>
        <body>
            ${printContent}
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(() => window.close(), 100);
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// QR Code Generation (using qrcode.js library)
function generateQRCode() {
    const qrElement = document.getElementById('portfolio-qr');
    if (qrElement && typeof QRCode !== 'undefined') {
        new QRCode(qrElement, {
            text: window.location.origin + window.location.pathname,
            width: 128,
            height: 128,
            colorDark: "#2c3e50",
            colorLight: "#ffffff",
        });
    }
}




// AI Chat Functionality
let geminiApiKey = localStorage.getItem('gemini-api-key');
let isApiKeyValid = false;

const SIDHANT_CONTEXT = `
You are a friendly and helpful AI assistant on Sidhant Kumar's portfolio website. You have two main roles:

1. PRIMARY: Help visitors learn about Sidhant Kumar's professional background with informative responses
2. SECONDARY: Answer general questions politely and try to naturally connect them back to Sidhant when appropriate

RESPONSE GUIDELINES:
- For questions about Sidhant: Provide clear, factual responses using the information below - let his achievements speak for themselves
- For general questions: Answer helpfully and briefly, then relate to Sidhant's background when it feels natural (don't force it)
- For technical questions: Answer them and mention relevant experience Sidhant has
- Be professional, friendly, and conversational - avoid over-selling or excessive praise
- Present facts naturally rather than using superlatives like "amazing", "excellent", "incredible"
- If you don't know something specific about Sidhant, be honest but offer what you do know

SIDHANT KUMAR'S COMPREHENSIVE INFORMATION:

PERSONAL INFO:
- Name: Sidhant Kumar
- Location: Halifax, Nova Scotia, Canada
- Current Status: Computer Science student at Dalhousie University
- CGPA: 4.11/4.3
- Email: sd247182@dal.ca
- Phone: (902) 943-6901
- LinkedIn: LinkedIn profile available
- GitHub: GitHub profile available

CURRENT ROLE:
Software Developer – AI Trainer (Remote) at DataAnnotation (Nov 2024 – Mar 2025)
- Reviewed AI-generated responses to ensure alignment with user request
- Developed and tested code to enhance system functionality and user experience
- Collaborated with cross-functional teams to improve AI performance and resolve issues
- Maintained high standards for quality assurance in AI systems

EDUCATION:
- Bachelor of Computer Science at Dalhousie University (Sept 2023 - Present)
- CGPA: 4.11/4.3
- Halifax, NS

TECHNICAL SKILLS:
- Languages: HTML, CSS, JavaScript, Java, Python, MySQL, PHP, Aseba, C, Node.js
- Tools: Processing, Android Studio, IntelliJ, PyCharm, Eclipse, Jupyter Notebooks, Git, VS Code, Cursor
- Frameworks: Bootstrap, JavaSwing, Pygame, Express.js, TailwindCSS

AWARDS:
- Dalhousie University Global Entrance Scholarship
- Sexton Scholar

FEATURED PROJECTS:
1. Peer — Collaborative Coding & Communication Platform (Apr 2025 – Jul 2025)
   - Built multi-user code sharing with integrated chat/video and role-based access
   - Implemented live sync over WebSockets and designed a responsive UI for remote teamwork
   - Technologies: React, Node.js, WebRTC, WebSockets

2. Groki — AI Voice-Controlled Inventory Manager (Jan 2025 – Aug 2025)
   - Added wake-word activation and conversational assistance for hands-free item management
   - Integrated Gemini AI for recipe guidance based on pantry contents; secured auth/data with Supabase
   - Technologies: React, Node.js, Gemini API, Supabase

3. Gitofy — GitHub/GitLab Companion (Android) (Jan 2025 – Aug 2025)
   - Implemented OAuth login, push notifications for tracked branches, and activity analytics
   - Improved on-the-go repo visibility with filtered browsing and contributor stats
   - Technologies: Java, Android, GitHub REST API

4. Compiler Development Project (Sept 2024 – Dec 2024)
   - Built a lexical analyzer with Python regex, a grammar-based parser, and semantic checks
   - Strengthened understanding of compiler design and language processing
   - Technologies: Python, Regular Expressions

EXTRA CURRICULAR:
NASA Space Apps Challenge (Oct 2024) - Dalhousie University, Halifax, NS
- Collaborated with a diverse team of 5 to propose innovative solutions for real-world challenges posed by NASA
- Participated in brainstorming sessions to align technical ideas with project goals
- Developed Python game prototype using Pygame under a 24-hour deadline

CAREER HIGHLIGHTS:
- Excellent 4.11/4.3 GPA throughout university
- Scholarship recipient
- Experienced in AI training and quality assurance
- Strong background in full-stack development
- Active in hackathons and coding challenges

EXAMPLE RESPONSES (Notice the natural, factual tone):
- "What's 2+2?" → "That's 4! Speaking of math, Sidhant maintains a 4.0 GPA in Computer Science and has worked on projects like compiler development that involve mathematical concepts. Would you like to know more about his technical projects?"

- "How's the weather?" → "I don't have current weather data, but Sidhant is based in Halifax, Nova Scotia where he's studying at Dalhousie University. Are you interested in learning about his educational background or projects?"

- "What programming languages do you know?" → "I'm an AI assistant, but I can tell you about Sidhant's programming experience! He works with HTML, CSS, JavaScript, Java, Python, MySQL, PHP, C, and Node.js. He's built projects like a collaborative coding platform and AI voice-controlled inventory manager. Would you like to hear more about any of these?"

- "Tell me a joke" → "Here's one: Why do programmers prefer dark mode? Because light attracts bugs! 😄 Speaking of programming, Sidhant works as an AI Trainer at DataAnnotation and has experience in web development. Want to know more about his technical background?"

Focus on being helpful and presenting Sidhant's background factually without over-promotion.
`;

function showApiSetup() {
    document.getElementById('api-setup-modal').classList.add('active');
}

function hideApiSetup() {
    document.getElementById('api-setup-modal').classList.remove('active');
}

function useDemoKey() {
    const apiKeyInput = document.getElementById('gemini-api-key');
    apiKeyInput.value = 'AIzaSyAL0kRV4zgBcmDQr9k7EYI2gYKBCK4hQgM';
    saveApiKey();
}

async function saveApiKey() {
    const apiKeyInput = document.getElementById('gemini-api-key');
    const apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
        alert('Please enter a valid API key.');
        return;
    }
    
    // Test the API key
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: 'Hello, this is a test message. Please respond with "API test successful".'
                    }]
                }]
            })
        });
        
        const result = await response.json();
        
        if (response.ok && result.candidates) {
            localStorage.setItem('gemini-api-key', apiKey);
            geminiApiKey = apiKey;
            isApiKeyValid = true;
            updateApiStatus(true);
            enableChat();
            hideApiSetup();
            addMessage('AI', 'Great! The API connection is working. I\'m ready to answer questions about Sidhant Kumar!');
        } else {
            console.error('API Error:', result);
            throw new Error(result.error?.message || 'Invalid API key');
        }
    } catch (error) {
        alert('Invalid API key or network error. Please check your key and try again.\n\nError: ' + error.message);
        console.error('API key test failed:', error);
    }
}

function updateApiStatus(isOnline) {
    const statusIndicator = document.getElementById('status-indicator');
    const statusText = document.querySelector('.status-text');
    const apiSetupNotice = document.getElementById('api-setup-notice');
    
    if (isOnline) {
        statusIndicator.className = 'status-indicator online';
        statusText.textContent = 'Connected';
        apiSetupNotice.style.display = 'none';
    } else {
        statusIndicator.className = 'status-indicator offline';
        statusText.textContent = 'Setup Required';
        apiSetupNotice.style.display = 'block';
    }
}

function enableChat() {
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    
    if (chatInput && sendButton) {
        chatInput.disabled = false;
        sendButton.disabled = false;
    }
}

function addMessage(sender, text, isLoading = false) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'AI' ? 'message ai-message' : 'message user-message';
    
    if (isLoading) {
        messageDiv.innerHTML = `
            <div class="message-avatar">${sender === 'AI' ? '🤖' : '👤'}</div>
            <div class="message-content">
                <div class="message-text loading">
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar">${sender === 'AI' ? '🤖' : '👤'}</div>
            <div class="message-content">
                <div class="message-text">${text}</div>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

async function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (!message || !isApiKeyValid) return;
    
    // Add user message
    addMessage('User', message);
    chatInput.value = '';
    
    // Add loading message
    const loadingMessage = addMessage('AI', '', true);
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: SIDHANT_CONTEXT + "\n\nUser question: " + message + "\n\nPlease provide a helpful response about Sidhant Kumar based on the context provided above. Keep your response professional and informative."
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 500,
                }
            })
        });
        
        const data = await response.json();
        
        if (response.ok && data.candidates && data.candidates[0]) {
            const aiResponse = data.candidates[0].content.parts[0].text;
            
            // Remove loading message and add actual response
            loadingMessage.remove();
            addMessage('AI', aiResponse);
        } else {
            console.error('API Error:', data);
            throw new Error(data.error?.message || 'Failed to get response');
        }
    } catch (error) {
        loadingMessage.remove();
        addMessage('AI', 'Sorry, I encountered an error. Please try again or check your API key.\n\nError: ' + error.message);
        console.error('Chat error:', error);
    }
}

async function testExistingApiKey() {
    if (!geminiApiKey) return false;
    
    try {
        console.log('Testing API key on:', window.location.hostname);
        console.log('Protocol:', window.location.protocol);
        
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: 'Hello, this is a test message.'
                    }]
                }]
            })
        });
        
        console.log('Response status:', response.status);
        console.log('Response headers:', [...response.headers.entries()]);
        
        const result = await response.json();
        console.log('API Response:', result);
        
        if (response.ok && result.candidates) {
            isApiKeyValid = true;
            updateApiStatus(true);
            enableChat();
            return true;
        } else {
            console.error('API Error:', result);
            // Don't remove key on GitHub Pages, might be temporary issue
            if (window.location.hostname !== 'sidhantkumar1315.github.io') {
                localStorage.removeItem('gemini-api-key');
                geminiApiKey = null;
            }
            updateApiStatus(false);
            return false;
        }
    } catch (error) {
        console.error('API key test failed:', error);
        console.error('Error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        
        // Don't remove key on GitHub Pages, might be temporary issue
        if (window.location.hostname !== 'sidhantkumar1315.github.io') {
            localStorage.removeItem('gemini-api-key');
            geminiApiKey = null;
        }
        updateApiStatus(false);
        return false;
    }
}

function initializeAIChat() {
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    
    // Auto-setup with demo key if no key exists
    if (!geminiApiKey) {
        geminiApiKey = 'AIzaSyAL0kRV4zgBcmDQr9k7EYI2gYKBCK4hQgM';
        localStorage.setItem('gemini-api-key', geminiApiKey);
    }
    
    // Test the API key
    testExistingApiKey();
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !chatInput.disabled) {
                sendMessage();
            }
        });
    }
    
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
}

// Pokedex Layout Fix Function
function fixPokedexLayout() {
    const iframe = document.querySelector('.pokedex-container iframe');
    if (!iframe) return;

    iframe.onload = function() {
        try {
            // Wait a bit more for the external site to fully load
            setTimeout(() => {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                
                // Inject CSS to fix the Pokemon grid layout
                const style = iframeDoc.createElement('style');
                style.textContent = `
                    /* Force 3 Pokemon per row with proper spacing */
                    .row, .pokemon-grid, .card-deck, .d-flex {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 20px !important;
                        padding: 20px !important;
                        margin: 0 !important;
                    }
                    
                    /* Fix individual Pokemon cards */
                    .card, .pokemon-card, .col-md-4, .col-lg-3, .col-sm-6 {
                        margin: 0 !important;
                        max-width: none !important;
                        flex: none !important;
                        width: 100% !important;
                    }
                    
                    /* Reduce excessive spacing */
                    .container, .container-fluid {
                        padding: 20px !important;
                        max-width: 1200px !important;
                        margin: 0 auto !important;
                    }
                    
                    /* Make cards more compact */
                    .card-body {
                        padding: 15px !important;
                    }
                    
                    /* Fix any Bootstrap column issues */
                    [class*="col-"] {
                        padding: 10px !important;
                        margin: 0 !important;
                    }
                    
                    /* Mobile responsive - 2 per row on smaller screens */
                    @media (max-width: 768px) {
                        .row, .pokemon-grid, .card-deck, .d-flex {
                            grid-template-columns: repeat(2, 1fr) !important;
                            gap: 15px !important;
                            padding: 15px !important;
                        }
                    }
                    
                    /* Very small screens - 1 per row */
                    @media (max-width: 480px) {
                        .row, .pokemon-grid, .card-deck, .d-flex {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `;
                
                iframeDoc.head.appendChild(style);
                console.log('Pokedex layout fixed!');
                
            }, 1000);
        } catch (error) {
            console.log('Cannot access iframe content (CORS restriction) - using CSS fallback');
            // Fallback: Apply scaling to show more content in view
            iframe.style.transform = 'scale(0.75)';
            iframe.style.transformOrigin = 'top left';
            iframe.style.width = '133%';
            iframe.style.height = '133%';
            iframe.style.margin = '5px';
            console.log('Applied CSS scaling fallback for better Pokemon layout');
        }
    };
}

// Project Preview System
const projectPreviews = {
    peer: {
        title: "Peer - Real-time Collaboration",
        description: "Watch developers collaborate in real-time with integrated video chat and live code synchronization.",
        gifUrl: "assets/media/peer-demo.mov",
        isVideo: true
    },
    groki: {
        title: "Groki - Voice-Controlled AI",
        description: "See voice commands in action as AI suggests recipes based on available ingredients.",
        gifUrl: "assets/media/groki-demo.mov",
        isVideo: true
    },
    gitofy: {
        title: "Gitofy - Mobile GitHub Client",
        description: "Experience seamless repository management with push notifications and analytics on mobile.",
        gifUrl: "assets/media/gitofy-demo.mov",
        isVideo: true
    },
    compiler: {
        title: "Compiler - Code Analysis",
        description: "See the lexical analyzer output and code structure visualization.",
        gifUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOUI1OUI2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q29tcGlsZXIgU2NyZWVuc2hvdDwvdGV4dD4KICA8L3N2Zz4K"
    },
    pokedex: {
        title: "Pokedex - Interactive Search",
        description: "Explore dynamic Pokémon search with real-time filtering and responsive design.",
        gifUrl: "assets/media/pokedex-demo.mov",
        isVideo: true
    },
    email: {
        title: "Email System - Full Communication",
        description: "See the complete email workflow from composition to delivery with security features.",
        gifUrl: "assets/media/email_it-demo.mov",
        isVideo: true
    }
};

let hoverTimeout;
let currentPreviewProject = null;

function positionPopupSmart(popup, hoveredCard) {
    const projectGrid = document.querySelector('.project-grid');
    const allCards = Array.from(projectGrid.querySelectorAll('.project-card'));
    const cardIndex = allCards.indexOf(hoveredCard);
    const totalCards = allCards.length;
    
    // Remove previous positioning classes
    popup.classList.remove('popup-left', 'popup-center', 'popup-right');
    
    console.log(`Card index: ${cardIndex}, Total cards: ${totalCards}`); // Debug log
    
    // Force scroll to bottom for second row cards (indices 3, 4, 5)
    if (cardIndex >= 3) {
        const appContent = document.getElementById('app-content');
        if (appContent) {
            // Force scroll to bottom to show second row cards properly
            appContent.scrollTo({
                top: appContent.scrollHeight,
                behavior: 'smooth'
            });
        }
    }
    
    // Determine position based on card index in a 3-column grid
    const column = cardIndex % 3; // 0 = left column, 1 = middle column, 2 = right column
    
    if (column === 0) {
        // Left column - show popup in center
        popup.classList.add('popup-center');
        console.log('Positioning center (left card)');
    } else if (column === 1) {
        // Middle column - show popup on the right
        popup.classList.add('popup-right');
        console.log('Positioning right (middle card)');
    } else {
        // Right column - show popup in center
        popup.classList.add('popup-center');
        console.log('Positioning center (right card)');
    }
}

function showProjectPreview(projectId, cardElement) {
    if (currentPreviewProject === projectId) return;
    
    // Clear any existing timeout
    clearTimeout(hoverTimeout);
    
    // Clear any existing effects first
    const projectsContainer = document.querySelector('.projects-container');
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.remove('highlighted', 'blurred');
    });
    
    const preview = projectPreviews[projectId];
    if (!preview) {
        console.error('No preview found for project:', projectId);
        return;
    }
    
    let popup = document.getElementById('project-preview-popup');
    
    // If popup doesn't exist, create it
    if (!popup) {
        console.log('Creating popup...');
        createProjectPreviewPopup();
        popup = document.getElementById('project-preview-popup');
    }
    
    if (!popup) {
        console.error('Failed to create or find popup');
        return;
    }
    
    const title = document.getElementById('preview-title');
    const desc = document.getElementById('preview-desc');
    const gifContainer = document.getElementById('preview-gif');
    
    if (!title || !desc || !gifContainer) {
        console.error('Popup elements not found:', { title, desc, gifContainer });
        return;
    }
    
    // Update content
    title.textContent = preview.title;
    desc.textContent = preview.description;
    
    // Create or update media (GIF/Video)
    if (preview.isVideo) {
        let video = gifContainer.querySelector('video');
        if (!video) {
            video = document.createElement('video');
            video.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 8px;';
            video.controls = true;
            video.muted = true;
            video.loop = true;
            video.autoplay = true;
            gifContainer.innerHTML = '';
            gifContainer.appendChild(video);
        }
        video.src = preview.gifUrl;
    } else {
        let img = gifContainer.querySelector('img');
        if (!img) {
            img = document.createElement('img');
            img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 8px;';
            gifContainer.innerHTML = '';
            gifContainer.appendChild(img);
        }
        img.src = preview.gifUrl;
        img.alt = preview.title;
    }
    
    // Add preview mode and apply new effects
    projectsContainer.classList.add('preview-mode');
    document.querySelectorAll('.project-card').forEach(card => {
        if (card !== cardElement) {
            card.classList.add('blurred');
        } else {
            card.classList.add('highlighted');
        }
    });
    
    // Position popup smartly based on which card is hovered
    positionPopupSmart(popup, cardElement);
    
    // Add project-specific data attribute and show popup
    popup.setAttribute('data-project', projectId);
    popup.classList.add('active');
    currentPreviewProject = projectId;
    
    console.log('Popup should be visible now with class:', popup.className);
}

function hideProjectPreview() {
    hoverTimeout = setTimeout(() => {
        const popup = document.getElementById('project-preview-popup');
        const projectsContainer = document.querySelector('.projects-container');
        
        popup.classList.remove('active');
        projectsContainer.classList.remove('preview-mode');
        currentPreviewProject = null;
        
        // Remove all effects from cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.remove('highlighted', 'blurred');
        });
    }, 150); // Small delay to prevent flickering
}

function closeProjectPreview() {
    const popup = document.getElementById('project-preview-popup');
    const projectsContainer = document.querySelector('.projects-container');
    
    popup.classList.remove('active');
    projectsContainer.classList.remove('preview-mode');
    currentPreviewProject = null;
    
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.remove('highlighted', 'blurred');
    });
}

function createProjectPreviewPopup() {
    // Check if popup already exists
    if (document.getElementById('project-preview-popup')) return;
    
    const appContent = document.getElementById('app-content');
    if (!appContent) return;
    
    const popup = document.createElement('div');
    popup.id = 'project-preview-popup';
    popup.className = 'project-preview-popup';
    popup.innerHTML = `
        <div class="preview-content">
            <div class="preview-header">
                <h4 id="preview-title">Project Preview</h4>
                <button class="close-preview" onclick="closeProjectPreview()">×</button>
            </div>
            <div class="preview-media">
                <div class="gif-placeholder" id="preview-gif">
                    <div class="gif-loading">
                        <i class="fa-solid fa-play"></i>
                        <p>Demo Preview</p>
                    </div>
                </div>
            </div>
            <div class="preview-description">
                <p id="preview-desc">Hover over a project card to see a live demo preview</p>
            </div>
        </div>
    `;
    
    appContent.appendChild(popup);
    
    // Add popup hover handlers
    popup.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
    popup.addEventListener('mouseleave', hideProjectPreview);
}

function initializeProjectPreviews() {
    // Create the popup in app-content area
    createProjectPreviewPopup();
    
    const projectCards = document.querySelectorAll('.project-card[data-project]');
    
    projectCards.forEach(card => {
        const projectId = card.getAttribute('data-project');
        
        card.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            showProjectPreview(projectId, card);
        });
        
        card.addEventListener('mouseleave', hideProjectPreview);
    });
}

// Override the openApp function to handle tic-tac-toe initialization and QR code
const originalOpenApp = openApp;
window.openApp = function(appName) {
    originalOpenApp(appName);
    
    if (appName === 'tic-tac-toe') {
        setTimeout(initializeTicTacToe, 100);
    } else if (appName === 'about') {
        setTimeout(generateQRCode, 100);
    } else if (appName === 'ai-chat') {
        setTimeout(initializeAIChat, 100);
    } else if (appName === 'pokedex') {
        setTimeout(fixPokedexLayout, 500); // Wait for iframe to load
    } else if (appName === 'projects') {
        setTimeout(initializeProjectPreviews, 100);
    } else if (appName === 'contact') {
        setTimeout(initContactForm, 100);
    }
};

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form && !form.hasAttribute('data-initialized')) {
        form.setAttribute('data-initialized', 'true');
        form.addEventListener('submit', handleContactSubmit);
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    
    if (!name || !email || !message) {
        showCustomAlert('Please fill in all fields', 'error');
        return;
    }
    
    // Show sending message
    showCustomAlert('Sending your message...', 'info');
    
    // Disable submit button
    const submitBtn = form.querySelector('.send-button');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // EmailJS configuration with your actual credentials
    const serviceID = 'service_gzp0o1c';
    const templateID = 'template_550a2xn';
    const userID = 'F5uiIuH65qyYVG6it';
    
    // Template parameters for EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'ksidhant193@gmail.com',
        user_name: name,
        user_email: email,
        user_message: message,
        reply_to: email,
        name: name,
        email: email,
        to_name: 'Sidhant Kumar'
    };
    
    console.log('Sending email with params:', templateParams);
    console.log('Service ID:', serviceID, 'Template ID:', templateID, 'User ID:', userID);
    
    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
            console.log('Email sent successfully:', response);
            showCustomAlert('Thank you for your message, looking forward to working with you!', 'success');
            form.reset();
        })
        .catch((error) => {
            console.error('EmailJS Error Details:', error);
            console.error('Error status:', error.status);
            console.error('Error text:', error.text);
            
            let errorMessage = 'There was an error sending your message. ';
            if (error.status === 400) {
                errorMessage += 'Please check the form fields or try again later.';
            } else if (error.status === 401) {
                errorMessage += 'Authentication failed. Please contact me directly.';
            } else {
                errorMessage += 'Please try again or contact me directly.';
            }
            
            showCustomAlert(errorMessage, 'error');
        })
        .finally(() => {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
}

// Custom alert function for better styling
function showCustomAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `custom-alert custom-alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <span class="alert-message">${message}</span>
            <button class="alert-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(alert);
    
    // Auto remove after 8 seconds for longer messages
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 8000);
}


