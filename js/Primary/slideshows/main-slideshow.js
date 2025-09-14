/**
 * Main Slideshow
 * Co            imageSrc: "assets/heroes/comp5.webp",
            altText: "North Houston Horse Park - Quality horse boarding"
        },
        {
            imageSrc: "assets/heroes/comp6.webp",
            altText: "North Houston Horse Park - Hunter/Jumper training"
        }the heroes slideshow on the homepage
 */

// Configuration for main slideshow
const mainSlideshowConfig = {
    content: {
        tagline: "Where riders are made and Dreams come true",
        ctaText: "Contact Us"
    },
    slides: [
        {
            imageSrc: "assets/heroes/comp1.webp",
            altText: "North Houston Horse Park - Beautiful horse riding experience"
        },
        {
            imageSrc: "assets/heroes/comp2.webp",
            altText: "North Houston Horse Park - Professional riding lessons"
        },
        {
            imageSrc: "assets/heroes/comp3.webp",
            altText: "North Houston Horse Park - Expert equestrian training"
        },
        {
            imageSrc: "assets/heroes/comp4.webp",
            altText: "North Houston Horse Park - Scenic trails and riding areas"
        },
        {
            imageSrc: "assets/heroes/comp5.webp",
            altText: "North Houston Horse Park - Premium horse boarding"
        },
        {
            imageSrc: "assets/heroes/comp6.webp",
            altText: "North Houston Horse Park - Experienced trainers"
        }
    ],
    autoplaySpeed: 6000, // milliseconds
    transitionSpeed: 800 // milliseconds
};

// Current slide index
let currentSlideIndex = 0;
let slideshowInterval = null;

// Initialize the main slideshow
function initMainSlideshow() {
    const slideshowContainer = document.querySelector('.main-slideshow');
    if (!slideshowContainer) return;

    // Create slideshow structure
    createSlides();
    
    // Load slideshow content
    loadSlideshowContent();
    
    // Set up navigation controls
    setupSlideshowControls();
    
    // Start autoplay
    startAutoplay();
}

// Create slides dynamically
function createSlides() {
    const container = document.querySelector('.main-slideshow');
    if (!container) return;
    
    // Find or create slides container
    let slidesContainer = container.querySelector('.main-slideshow-slides-container');
    if (!slidesContainer) {
        slidesContainer = document.createElement('div');
        slidesContainer.className = 'main-slideshow-slides-container';
        container.prepend(slidesContainer);
    } else {
        // Clear existing slides
        slidesContainer.innerHTML = '';
    }
    
    // Create slides
    mainSlideshowConfig.slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `main-slideshow-slide ${index === 0 ? 'active' : ''}`;
        const img = document.createElement('img');
        img.src = slide.imageSrc;
        img.alt = slide.altText;
        img.className = 'main-slideshow-slide-image';
        img.loading = 'lazy';
        slideDiv.appendChild(img);
        slidesContainer.appendChild(slideDiv);
    });
    
    // Add navigation controls
    const navHTML = `
        <div class="main-slideshow-controls">
            <button class="main-slideshow-nav main-slideshow-prev" aria-label="Previous slide">&lt;</button>
            <button class="main-slideshow-nav main-slideshow-next" aria-label="Next slide">&gt;</button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', navHTML);
}

// Set up slideshow navigation controls
function setupSlideshowControls() {
    const prevButton = document.querySelector('.main-slideshow-prev');
    const nextButton = document.querySelector('.main-slideshow-next');
    
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}

// Navigate to previous slide
function prevSlide() {
    const slides = document.querySelectorAll('.main-slideshow-slide');
    if (slides.length === 0) return;
    
    // Reset autoplay
    resetAutoplay();
    
    // Update current slide index
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    
    // Update slide display
    updateSlideDisplay(slides);
}

// Navigate to next slide
function nextSlide() {
    const slides = document.querySelectorAll('.main-slideshow-slide');
    if (slides.length === 0) return;
    
    // Reset autoplay
    resetAutoplay();
    
    // Update current slide index
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    // Update slide display
    updateSlideDisplay(slides);
}

// Update the display to show current slide
function updateSlideDisplay(slides) {
    slides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Start autoplay for slideshow
function startAutoplay() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
    
    slideshowInterval = setInterval(() => {
        nextSlide();
    }, mainSlideshowConfig.autoplaySpeed);
}

// Reset autoplay (called after manual navigation)
function resetAutoplay() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
    startAutoplay();
}

// Load slideshow content from config
function loadSlideshowContent() {
    const taglineElement = document.querySelector('.main-slideshow-tagline');
    if (taglineElement) {
        taglineElement.textContent = `"${mainSlideshowConfig.content.tagline}"`;
    }
    
    const ctaElement = document.querySelector('.main-slideshow-cta');
    if (ctaElement) {
        ctaElement.textContent = mainSlideshowConfig.content.ctaText;
    }
}

// Export functions
window.mainSlideshow = {
    next: nextSlide,
    prev: prevSlide
};
window.initMainSlideshow = initMainSlideshow;