/**
 * Header Component
 * Manages site header functionality for existing HTML structure
 */

// Load header functionality - work with existing HTML structure
function loadHeader() {
    // Check if header already exists in HTML
    const existingHeader = document.querySelector('.header');
    if (existingHeader) {
        // Header already exists in HTML, just setup functionality
        setupNavigation();
        setupMobileMenu();
        return;
    }
    
    // Fallback: If no header exists, create one
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder && !headerPlaceholder.querySelector('.header-placeholder')) {
        headerPlaceholder.innerHTML = FALLBACK_HEADER_TEMPLATE;
        setupNavigation();
        setupMobileMenu();
    }
}

// Fallback header template (only used if no HTML header exists)
const FALLBACK_HEADER_TEMPLATE = `
<header class="site-header">
    <div class="container">
        <div class="header-content">
            <div class="logo">
                <img src="assets/icons/horse_safety_icon.webp" alt="North Houston Horse Park" class="logo-image" loading="lazy">
                <div class="logo-text">
                    <h1>North Houston Horse Park</h1>
                    <span class="tagline">Premier Hunter/Jumper Facility</span>
                </div>
            </div>
            <nav class="nav-menu">
                <a href="#about" class="nav-link">About</a>
                <a href="#coaches" class="nav-link">Coaches</a>
                <a href="#programs" class="nav-link">Programs</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>
            <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>
`;

// Set up navigation functionality for existing structure
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Handle navigation click
            const sectionId = link.getAttribute('href');
            
            // If it's a section link (starts with #), handle smooth scrolling
            if (sectionId.startsWith('#') && sectionId !== '#') {
                e.preventDefault();
                
                const targetSection = document.querySelector(sectionId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Update active state
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Set initial active state based on page scroll position
    setActiveNavLink();
    
    // Update active link on scroll
    window.addEventListener('scroll', window.NHHP?.utils?.debounce(setActiveNavLink) || setActiveNavLink);
}

// Set up mobile menu functionality
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// Set active navigation link based on current scroll position
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200; // Offset to trigger slightly before the section top
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // If at the top of the page, set home as active
    if (scrollPosition < 200) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' || link.getAttribute('data-section') === 'home') {
                link.classList.add('active');
            }
        });
    }
}

// Initialize header
function initHeader() {
    loadHeader();
}

// Export functions
window.initHeader = initHeader;