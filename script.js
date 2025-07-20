// App configurations with your actual information
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