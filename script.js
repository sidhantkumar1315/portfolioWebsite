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
                    <li><strong>Current Role:</strong> Software Developer - AI Trainer at DataAnnotation</li>
                    <li><strong>Education:</strong> Computer Science at Dalhousie University</li>
                    <li><strong>CGPA:</strong> 4.00/4.3</li>
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
            <p>Hello! I'm Sidhant Kumar, a Computer Science student at Dalhousie University with a perfect CGPA of 4.00/4.3. 
            I'm passionate about creating innovative solutions and have experience in AI training, web development, and software engineering.</p>
            
            <h3>Current Role</h3>
            <p><strong>Software Developer - AI Trainer</strong> at DataAnnotation (Nov 2024 - Jan 2025)</p>
            <ul>
                <li>Reviewing AI-generated responses to ensure alignment with user requests</li>
                <li>Developing and testing code to enhance system functionality</li>
                <li>Collaborating with cross-functional teams to improve AI performance</li>
                <li>Maintaining high standards for quality assurance in AI systems</li>
            </ul>
            
            <h3>Technical Skills</h3>
            <p><strong>Languages:</strong> HTML, CSS, JavaScript, Java, Python, MySQL, PHP, C, Node.js</p>
            <p><strong>Tools:</strong> Processing, Git</p>
            <p><strong>Frameworks:</strong> Bootstrap, JavaSwing, Pygame, Express.js</p>
            
            <h3>Awards & Recognition</h3>
            <ul>
                <li>Dalhousie University Global Entrance Scholarship</li>
                <li>Sexton Scholar</li>
            </ul>
        `
    },
    projects: {
        name: 'Projects',
        title: 'My Projects',
        content: `
            <h2>Featured Projects</h2>
            <div class="project-grid">
                <div class="project-card">
                    <h3>Pokedex Web App</h3>
                    <p>Developed an interactive web application fetching Pokémon data from official API with dynamic search/filter functionality and responsive UI.</p>
                    <p><strong>Technologies:</strong> JavaScript, Bootstrap, RESTful APIs</p>
                    <p><strong>Features:</strong> Asynchronous API calls, error handling</p>
                    <p><a href="https://github.com/sidhantkumar1315" target="_blank">🔗 GitHub</a></p>
                    <p><strong>Duration:</strong> Jan 2025 - Mar 2025</p>
                </div>
                
                <div class="project-card">
                    <h3>Email it! - Web Email System</h3>
                    <p>Built a web-based email platform with send/receive functionality, form validation, and message management features.</p>
                    <p><strong>Technologies:</strong> PHP, HTML, CSS, MySQL</p>
                    <p><strong>Features:</strong> User authentication, input sanitization, custom UI</p>
                    <p><a href="https://github.com/sidhantkumar1315" target="_blank">🔗 GitHub</a></p>
                    <p><strong>Duration:</strong> Feb 2025 - April 2025</p>
                </div>
                
                <div class="project-card">
                    <h3>Compiler Development Project</h3>
                    <p>Developed a lexical analyzer using Python and regular expressions to tokenize input strings. Implemented parser and semantic analyzer for code structure validation.</p>
                    <p><strong>Technologies:</strong> Python, Regular Expressions</p>
                    <p><strong>Achievement:</strong> Successfully created a functional compiler enhancing understanding of compiler design</p>
                    <p><a href="https://github.com/sidhantkumar1315" target="_blank">🔗 GitHub</a></p>
                    <p><strong>Duration:</strong> Sept 2024 - Dec 2024</p>
                </div>
                
                <div class="project-card">
                    <h3>FileBuddy</h3>
                    <p>Java Swing application for file merging, finding common elements, and finding differences between text files. Features modern drag-and-drop interface.</p>
                    <p><strong>Technologies:</strong> Java, JavaSwing</p>
                    <p><strong>Features:</strong> Efficient algorithms for file processing and comparison</p>
                    <p><a href="https://github.com/sidhantkumar1315" target="_blank">🔗 GitHub</a></p>
                    <p><strong>Duration:</strong> Sept 2024 - Nov 2024</p>
                </div>
            </div>
        `
    },
    education: {
        name: 'Education',
        title: 'Education',
        content: `
            <h2>Education</h2>
            
            <h3>Bachelor of Computer Science</h3>
            <p><strong>Dalhousie University</strong> | Sept 2023 - Present</p>
            <p>Halifax, Nova Scotia, Canada</p>
            <ul>
                <li><strong>CGPA:</strong> 4.00/4.3</li>
                <li><strong>Awards:</strong> 
                    <ul>
                        <li>Dalhousie University Global Entrance Scholarship</li>
                        <li>Sexton Scholar</li>
                    </ul>
                </li>
                <li><strong>Key Courses:</strong> Data Structures, Algorithms, Web Development, Database Systems, Software Engineering</li>
            </ul>
            
            <h3>Extra Curricular</h3>
            <div style="margin-top: 20px;">
                <h4>NASA Space Apps Challenge</h4>
                <p><strong>Dalhousie University, Halifax, NS</strong> | Oct 2024</p>
                <ul>
                    <li>Collaborated with a diverse team of 5 to propose innovative solutions for real-world challenges posed by NASA</li>
                    <li>Participated in brainstorming sessions, achieving high productivity and ensuring ideas were aligned with project goals</li>
                    <li>Developed technical skills in Python using Pygame while working under a tight 24-hour deadline</li>
                </ul>
            </div>
        `
    },
    contact: {
        name: 'Contact',
        title: 'Contact Me',
        content: `
            <h2>Get In Touch</h2>
            <p>I'm always open to discussing new opportunities, interesting projects, or potential collaborations.</p>
            
            <div style="margin-top: 30px;">
                <h3>Contact Information</h3>
                <ul>
                    <li>📧 Email: <a href="mailto:sd247182@dal.ca">sd247182@dal.ca</a></li>
                    <li>📱 Phone: <a href="tel:9029436901">(902) 943-6901</a></li>
                    <li>💼 LinkedIn: <a href="https://linkedin.com/in/sidhantkumar1315" target="_blank">linkedin.com/in/sidhantkumar1315</a></li>
                                        <li>🐱 GitHub: <a href="https://github.com/sidhantkumar1315" target="_blank">github.com/sidhantkumar1315</a></li>
                </ul>
            </div>
            
            <div style="margin-top: 30px;">
                <h3>Location</h3>
                <p>📍 Halifax, Nova Scotia, Canada</p>
                <p>📍 Available for internships</p>
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
    }
};

//roles 
const roles = [
    "Computer Science Student",
    "AI Trainer", 
    "Full Stack Developer",
    "Problem Solver",
    "4.0 GPA Scholar",
    "Lifelong Learner"
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

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    if (isDark) {
        createDynamicStars();
    } else {
        const starField = document.querySelector('.star-field');
        if (starField) starField.remove();
    }
});

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

// Override the openApp function to handle tic-tac-toe initialization
const originalOpenApp = openApp;
window.openApp = function(appName) {
    originalOpenApp(appName);
    
    if (appName === 'tic-tac-toe') {
        setTimeout(initializeTicTacToe, 100);
    }
};