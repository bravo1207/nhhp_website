/**
 * Training Slideshow
 * Controls the training facilities slideshow
 */

// Configuration for training slideshow
const trainingSlideshowConfig = {
    slides: [
        {
            imageSrc: "assets/training/train1.webp",
            altText: "Specialized training from our head Coaches"
        },
        {
            imageSrc: "assets/training/train2.webp",
            altText: "Support for all of our new equestrian friends"
        },
        {
            imageSrc: "assets/training/train3.webp",
            altText: "Friendly and supportive staff"
        },
        {
            imageSrc: "assets/training/train4.webp",
            altText: "Experience our adult rider groups"
        },
        {
            imageSrc: "assets/training/train5.webp",
            altText: "Love for all of our riders"
        },
        {
            imageSrc: "assets/training/train6.webp",
            altText: "Making every ride fun and educational"
        },
        {
            imageSrc: "assets/training/train7.webp",
            altText: "Making our riders experience the best it can be"
        },
    ],
    autoplaySpeed: 6000, // milliseconds
    transitionSpeed: 800 // milliseconds
};

// Current slide index
let currentTrainingSlideIndex = 0;
let trainingSlideshowInterval = null;

// Initialize the training slideshow
function initTrainingSlideshow() {
    try {
        const trainingSlideshow = document.querySelector('.training-slideshow');
        if (!trainingSlideshow) return;

        // Create the slideshow structure
        createTrainingSlideshowStructure(trainingSlideshow);
        
        // Set up navigation controls
        setupTrainingSlideshowControls();
        
        // Start autoplay
        startTrainingAutoplay();
    } catch (error) {
        console.error('Training slideshow initialization failed:', error);
    }
}

// Create the slideshow HTML structure
function createTrainingSlideshowStructure(container) {
    // Always provide a fallback alt text for accessibility
    const slideshowHTML = `
        <div class="training-slideshow-wrapper">
            <div class="training-slides-container">
                ${trainingSlideshowConfig.slides.map((slide, index) => `
                    <div class="training-slide ${index === 0 ? 'active' : ''}">
                        <img src="${slide.imageSrc}" alt="${slide.altText || 'Training facility image'}" class="training-slide-image ${index === 0 ? 'default-training-image' : ''}" loading="lazy">
                        <div class="training-caption">${slide.altText}</div>
                    </div>
                `).join('')}
            </div>
            <div class="training-slideshow-controls">
                <button class="training-slideshow-nav training-slideshow-prev" aria-label="Previous slide">&lt;</button>
                <button class="training-slideshow-nav training-slideshow-next" aria-label="Next slide">&gt;</button>
            </div>
        </div>
    `;
    container.innerHTML = slideshowHTML;
}

    // Set up slideshow navigation controls
function setupTrainingSlideshowControls() {
    const prevButton = document.querySelector('.training-slideshow-prev');
    const nextButton = document.querySelector('.training-slideshow-next');
    
    if (prevButton) {
        prevButton.addEventListener('click', prevTrainingSlide);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', nextTrainingSlide);
    }
    
    // Also add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevTrainingSlide();
        } else if (e.key === 'ArrowRight') {
            nextTrainingSlide();
        }
    });
}// Navigate to previous slide
function prevTrainingSlide() {
    const slides = document.querySelectorAll('.training-slide');
    if (slides.length === 0) return;
    
    // Reset autoplay
    resetTrainingAutoplay();
    
    // Update current slide index
    currentTrainingSlideIndex = (currentTrainingSlideIndex - 1 + slides.length) % slides.length;

    // Update slide display
    updateTrainingSlideDisplay(slides);
}

// Navigate to next slide
function nextTrainingSlide() {
    const slides = document.querySelectorAll('.training-slide');
    if (slides.length === 0) return;
    
    // Reset autoplay
    resetTrainingAutoplay();

    // Update current slide index
    currentTrainingSlideIndex = (currentTrainingSlideIndex + 1) % slides.length;

    // Update slide display
    updateTrainingSlideDisplay(slides);
}

// Update the display to show current slide
function updateTrainingSlideDisplay(slides) {
    slides.forEach((slide, index) => {
        if (index === currentTrainingSlideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Start autoplay for slideshow
function startTrainingAutoplay() {
    if (trainingSlideshowInterval) {
        clearInterval(trainingSlideshowInterval);
    }
    
    trainingSlideshowInterval = setInterval(() => {
        nextTrainingSlide();
    }, trainingSlideshowConfig.autoplaySpeed);
}

// Reset autoplay (called after manual navigation)
function resetTrainingAutoplay() {
    if (trainingSlideshowInterval) {
        clearInterval(trainingSlideshowInterval);
    }
    startTrainingAutoplay();
}

// Export functions
window.trainingSlideshow = {
    next: nextTrainingSlide,
    prev: prevTrainingSlide
};
window.initTrainingSlideshow = initTrainingSlideshow;