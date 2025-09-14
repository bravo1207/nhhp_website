// ===================================
// North Houston Horse Park - Enhanced Init
// Last updated: 2024-08-24 14:08 - Cache Bust
// ===================================

// Dynamic JavaScript module loader
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Load all required JavaScript modules
async function loadModules() {
    try {
        console.log('NHHP: Loading JavaScript modules...');
        
        // Load modules in order
        await loadScript('js/Primary/utils/utils.js');
        await loadScript('js/Primary/page_layout/header.js');
        await loadScript('js/Primary/page_layout/footer.js');
        await loadScript('js/Primary/content/content-loader.js');
        await loadScript('js/Primary/slideshows/main-slideshow.js');
        await loadScript('js/Primary/slideshows/farm-slideshow.js');
        await loadScript('js/Primary/slideshows/training-slideshow.js');

        console.log('NHHP: All modules loaded successfully');
        return true;
    } catch (error) {
        console.error('NHHP: Error loading modules:', error);
        return false;
    }
}

// Main initialization function
document.addEventListener('DOMContentLoaded', async function() {
    console.log('NHHP: Initializing enhanced page...');
    
    // Load all JavaScript modules first
    const modulesLoaded = await loadModules();
    
    if (!modulesLoaded) {
        console.warn('NHHP: Some modules failed to load, proceeding with basic functionality');
    }
    
    // Initialize loading screen
    initializeLoadingScreen();
    
    // Initialize header and footer from separate modules
    if (typeof loadHeader === 'function') {
        loadHeader();
    } else {
        console.warn('loadHeader function not available');
    }
    
    if (typeof loadFooter === 'function') {
        loadFooter();
    } else {
        console.warn('loadFooter function not available');
    }
    
    // Initialize slideshows from separate modules
    if (typeof initMainSlideshow === 'function') {
        initMainSlideshow();
    }
    if (typeof initFarmSlideshow === 'function') {
        initFarmSlideshow();
    }
    if (typeof initTrainingSlideshow === 'function') {
        initTrainingSlideshow();
    }
    
    // Initialize content loading
    if (typeof initContentLoader === 'function') {
        initContentLoader();
    }
    
    // Initialize forms
    initializeForms();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize animations
    initializeScrollAnimations();
    initializeIntersectionObserver();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize enhanced interactions
    initializeEnhancedInteractions();
    
    // Initialize animated counters
    initializeAnimatedCounters();
    
    console.log('NHHP: Enhanced page initialization complete');
});

// Loading screen functionality
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide loading screen after a short delay to show the animation
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }
    }, 1500);
}

// Intersection Observer for scroll animations
function initializeIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced interactions
function initializeEnhancedInteractions() {
    // Add parallax effect to heroes section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach(element => {
            element.style.setProperty('--scroll-y', `${scrolled * 0.5}px`);
        });
    });
    
    // Enhanced hover effects for cards (using CSS classes)
    document.querySelectorAll('.premium-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover-active');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover-active');
        });
    });
    
    // Add ripple effect to buttons (using CSS classes)
    document.querySelectorAll('.btn-premium').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.setProperty('--ripple-x', x + 'px');
            ripple.style.setProperty('--ripple-y', y + 'px');
            ripple.style.setProperty('--ripple-size', size + 'px');
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Forms initialization (placeholder for future enhancement)
function initializeForms() {
    console.log('Forms ready for enhancement');
}

// Main slideshow initilization //
function initializeMainSlideshow(){
    console.log('Main Slidshow Ready for enhancement')
}

// Farm slideshow initialization (placeholder for future enhancement)
function initializeFarmSlideshow() {
    console.log('Farm slideshow ready for enhancement');
}

// Farm slideshow initialization (placeholder for future enhancement)
function initializeTrainingSlideshow() {
    console.log('Training slideshow ready for enhancement');
}

// Enhanced smooth scrolling with offset for fixed header
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('nav-menu');
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}

// Scroll animations for better user experience
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-item, .program-card, .coach-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
}

// Enhanced completion section functions
function showCompletionSection(title, message, details) {
    const completionSection = document.getElementById('completion');
    const completionTitle = document.getElementById('completion-title');
    const completionMessage = document.getElementById('completion-message');
    const completionDetails = document.getElementById('completion-details');
    
    if (completionTitle) completionTitle.textContent = title;
    if (completionMessage) completionMessage.textContent = message;
    if (completionDetails) {
        completionDetails.innerHTML = `<p><strong>What to expect:</strong> ${details}</p>`;
    }
    
    if (completionSection) {
        completionSection.style.display = 'block';
        setTimeout(() => {
            completionSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

function hideCompletionSection() {
    const completionSection = document.getElementById('completion');
    if (completionSection) {
        completionSection.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Make functions available globally
window.showCompletionSection = showCompletionSection;
window.hideCompletionSection = hideCompletionSection;

// Animated counters functionality
function initializeAnimatedCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);
            
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
        
        element.classList.add('counting');
    };
    
    // Create intersection observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateCounter(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.7
    });
    
    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
}

// Enhanced magnetic effect for interactive elements
function initializeMagneticElements() {
    document.querySelectorAll('.magnetic-element').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// Advanced cursor effects
function initializeCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.querySelectorAll('a, button, .interactive-element').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
}

// Initialize all advanced features
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeMagneticElements();
        initializeCursorEffects();
    }, 1000);
});
