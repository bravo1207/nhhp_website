/**
 * Farm Slideshow
 * Controls the farm facilities slideshow
 */

// Configuration for farm slideshow
const farmSlideshowConfig = {
    slides: [
        {
            imageSrc: "assets/farm/farm1.webp",
            altText: "North Houston Horse Park - Training Course"
        },
        {
            imageSrc: "assets/farm/farm2.webp",
            altText: "North Houston Horse Park - Main Arena"
        },
        {
            imageSrc: "assets/farm/farm3.webp",
            altText: "North Houston Horse Park - Our Home"
        },
        {
            imageSrc: "assets/farm/farm4.webp",
            altText: "North Houston Horse Park - Our Pastures"
        },
        {
            imageSrc: "assets/farm/farm5.webp",
            altText: "North Houston Horse Park - Boarding Stalls"
        },
        {
            imageSrc: "assets/farm/farm6.webp",
            altText: "North Houston Horse Park - Tack and Board"
        },
        {
            imageSrc: "assets/farm/farm7.webp",
            altText: "North Houston Horse Park - Covered Arena"
        }
    ],
    autoplaySpeed: 6000, // milliseconds
    transitionSpeed: 800 // milliseconds
};

// Current slide index
let currentFarmSlideIndex = 0;
let farmSlideshowInterval = null;

// Initialize the farm slideshow
function initFarmSlideshow() {
    try {
        const farmSlideshow = document.querySelector('.farm-slideshow');
        if (!farmSlideshow) return;

        // Create the slideshow structure
        createFarmSlideshowStructure(farmSlideshow);
        
        // Set up navigation controls
        setupFarmSlideshowControls();
        
        // Start autoplay
        startFarmAutoplay();
    } catch (error) {
        console.error('Farm slideshow initialization failed:', error);
    }
}

// Create the slideshow HTML structure
function createFarmSlideshowStructure(container) {
    // Always provide a fallback alt text for accessibility
    const slideshowHTML = `
        <div class="farm-slideshow-wrapper">
            <div class="farm-slides-container">
                ${farmSlideshowConfig.slides.map((slide, index) => `
                    <div class="farm-slide ${index === 0 ? 'active' : ''}">
                        <img src="${slide.imageSrc}" alt="${slide.altText || 'Farm facility image'}" class="farm-images ${index === 0 ? 'default-farm-image' : ''}" loading="lazy">
                        <div class="farm-caption">${slide.altText}</div>
                    </div>
                `).join('')}
            </div>
            <div class="farm-slideshow-controls">
                <button class="farm-slideshow-nav farm-slideshow-prev" aria-label="Previous slide">&lt;</button>
                <button class="farm-slideshow-nav farm-slideshow-next" aria-label="Next slide">&gt;</button>
            </div>
        </div>
    `;
    container.innerHTML = slideshowHTML;
}

// Set up slideshow navigation controls
function setupFarmSlideshowControls() {
    // Navigation will be set up later if needed
    console.log('Farm slideshow controls ready');
}

// Set up slideshow navigation controls
function setupFarmSlideshowControls() {
    const prevButton = document.querySelector('.farm-slideshow-prev');
    const nextButton = document.querySelector('.farm-slideshow-next');
    
    if (prevButton) {
        prevButton.addEventListener('click', prevFarmSlide);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', nextFarmSlide);
    }
}

// Navigate to previous slide
function prevFarmSlide() {
    const slides = document.querySelectorAll('.farm-slide');
    if (slides.length === 0) return;
    
    // Reset autoplay
    resetFarmAutoplay();
    
    // Update current slide index
    currentFarmSlideIndex = (currentFarmSlideIndex - 1 + slides.length) % slides.length;
    
    // Update slide display
    updateFarmSlideDisplay(slides);
}

// Navigate to next slide
function nextFarmSlide() {
    const slides = document.querySelectorAll('.farm-slide');
    if (slides.length === 0) return;
    
    // Reset autoplay
    resetFarmAutoplay();
    
    // Update current slide index
    currentFarmSlideIndex = (currentFarmSlideIndex + 1) % slides.length;
    
    // Update slide display
    updateFarmSlideDisplay(slides);
}

// Update the display to show current slide
function updateFarmSlideDisplay(slides) {
    slides.forEach((slide, index) => {
        if (index === currentFarmSlideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Start autoplay for slideshow
function startFarmAutoplay() {
    if (farmSlideshowInterval) {
        clearInterval(farmSlideshowInterval);
    }
    
    farmSlideshowInterval = setInterval(() => {
        nextFarmSlide();
    }, farmSlideshowConfig.autoplaySpeed);
}

// Reset autoplay (called after manual navigation)
function resetFarmAutoplay() {
    if (farmSlideshowInterval) {
        clearInterval(farmSlideshowInterval);
    }
    startFarmAutoplay();
}

// Export functions
window.farmSlideshow = {
    next: nextFarmSlide,
    prev: prevFarmSlide
};
window.initFarmSlideshow = initFarmSlideshow;