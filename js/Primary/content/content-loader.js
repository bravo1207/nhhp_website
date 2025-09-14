/**
 * Enhanced Content Loader
 * Dynamically loads all content including text, images, icons, and dynamic features
 * HTML no longer handles static content for security purposes
 */

// Enhanced configuration for dynamic assets and features
const pageContent = {
    // About section content
    aboutSection: {
        title: "About Our Facility",
        highlights: [
            {badge: "BBB A+ Rated", isBBB: true},
            {badge: "Hunter/Jumper Specialty", isBBB: false},
            {badge: "Open 7 Days a Week", isBBB: false}
        ],
        description: "North Houston Horse Park is where equine love and training excellence meet. We are a equestrian community based on trust, care, and shared enthusiasm for the sport of horses. From our expert training programs to our top-of-the-line stables, every detail is a reflection of our dedication to providing both horse and rider with the best"
    },
    
    // About Features - dynamic icons and content
    aboutFeatures: [
        {
            iconSrc: "assets/icons/horse_safety_icon.webp",
            altText: "Professional Training",
            title: "Professional Training",
            description: "Our trainers are dedicated to helping every rider reach their full potential. By combining proven techniques with personalized instruction, we create a training experience that builds both skill and confidence."
        },
        {
            iconSrc: "assets/icons/rider_trophy_icon.webp",
            altText: "Competition Success",
            title: "Competition Success",
            description: "Every win in the ring starts with hard work and heart. We focus on developing riders and horses who compete with confidence and trust in each other."
        },
        {
            iconSrc: "assets/icons/rider_helmet_icon.webp",
            altText: "Safety First",
            title: "Safety First",
            description: "Safety comes first in everything we do. With clear protocols and attentive guidance, we create an environment where riders can learn and grow with confidence."
        },
        {
            iconSrc: "assets/icons/barn_icon.webp",
            altText: "Premium Facilities",
            title: "Premium Facilities",
            description: "From stables to pastures and arenas, every part of our facility is built for the comfort and well-being of our horses. We also provide private boarding options so each horse can feel at home."
        }
    ],

    // Training section content
    trainingSection: {
        title: "What Makes Our Training Special",
        subtitle: "Experience the difference of personalized, professional equestrian education"
    },
        
    // Training Advantages - dynamic icons and content
    trainingAdvantages: {
        title: "Why Choose North Houston Horse Park?",
        items: [
            {
                iconSrc: "assets/icons/rider_trophy_icon.webp",
                altText: "Competition-Ready Training",
                title: "Competition-Ready Training",
                description: "With years of show experience, our instructors know what it takes to succeed in the ring. They’ll help you and your horse gain the confidence and skills needed for local and regional competitions."
            },
            {
                iconSrc: "assets/icons/Well_Trained_School_Horses.webp",
                altText: "Well-Trained School Horses", 
                title: "Well-Trained School Horses",
                description: "Every horse in our program is gentle, responsive, and ready for riders of any level. They help beginners gain confidence and allow seasoned riders to excel."
            },
            {
                iconSrc: "assets/icons/knowledge.webp",
                altText: "Comprehensive Horsemanship",
                title: "Comprehensive Horsemanship", 
                description: "Riding is just the beginning—we also teach horse care, grooming, and tacking. Above all, we help riders form a true connection with these amazing animals."
            },
            {
                iconSrc: "assets/icons/goal.webp",
                altText: "Goal-Oriented Programs",
                title: "Goal-Oriented Programs",
                description: "No matter if you’re here to gain confidence, get fit, compete, or just enjoy riding, we help you reach your goals. Our team supports every rider along their individual path."
            }
        ]
    },

    // Coaches - dynamic images
    coaches: {
        title: "Meet Our Coaches",
        coachData: {
            imageSrc: "assets/staff/family.webp",
            altText: "Mother and Daughter",
            name: "Melany & Carli Kirsch",
            title: "Owners & Head Coaches",
            bio: "North Houston Horse Park is led by a dedicated mother-and-daughter team with more than 80 years of combined experience. They are passionate about sharing their love for the sport and the joy it brings, fostering a welcoming community for riders of all levels. Whether guiding beginners or supporting competitive riders, their focus is always on developing skills, confidence, and a genuine connection between horse and rider. Above all, they believe in creating a space where the equestrian community can grow together and celebrate the sport they love."
        }
    },

    // Philosophy section content
    philosophySection: {
        title: "Our Philosophy",
        mainText: "At North Houston Horse Park, we live and breathe equestrian sport. Our passion is creating well-rounded riders who understand not just how to ride, but how to truly connect with their horses. We believe in fostering a lifelong love of horses and riding, whether your goals are recreational enjoyment or competitive excellence. Our English Hunter/Jumper program is designed to accommodate riders from age 7 through adulthood, with training paths for both recreational riders and those with competitive ambitions.",
        quote: "We're more than a riding facility - we're a community where friendships are formed, challenges are overcome, and the special bond between horse and rider is celebrated every day.",
        secondaryText: "Our adult program is particularly strong, providing a supportive environment for riders of all ages to pursue their equestrian passions and continuously grow their skills."
    },
    
    // Horses section content
    horsesSection: {
        title: "Meet Our Horses",
        description: "Our horses are the heart of the farm — each one with a unique story and personality. Some have been rescued and given a second chance, others are retired from long careers, and a few are here on generous lease. No matter how they arrived, they're all treated like family. We believe that great rides start with great partnerships. That's why we take the time to match each rider with a horse that fits their experience and goals — whether you're just starting out or have years in the saddle. Some horses are calm and steady, perfect for beginners. Others are confident and spirited, ready to challenge more advanced riders. Every horse is safe, well-trained, and deeply loved."
    },
    
    // Contact section content
    contactSection: {
        title: "Ready to Start?",
        description: "At North Houston Horse Park, we're more than a riding facility — we're a family built on love for the sport, our riders, and our horses. Whether you're dreaming of lessons, looking for a supportive community, or simply curious to learn more, we'd be honored to hear from you. Reach out today, and let's share in the joy of horsemanship together.",
        contactInfo: {
            phone: "936.273.5600",
            phoneNote: "Please leave your name and number if we don't answer",
            email: "nhhp@consolidated.net",
            address: ["17082 Lexington Dr", "Conroe, TX 77385"],
            hours: ["Open 7 days a week", "8:00AM - 9:00PM"]
        }
    },
    
    // Training Philosophy - dynamic content
    trainingPhilosophy: {
        title: "Our Training Philosophy",
        content: "At North Houston Horse Park, we live and breathe equestrian sport. Our passion is creating well-rounded riders who understand not just how to ride, but how to truly connect with their horses. We believe in fostering a lifelong love of horses and riding, whether your goals are recreational enjoyment or competitive excellence."
    }   
};

// Initialize content loader - now loads ALL content including text
function initContentLoader() {
    // Load section content
    loadAboutSection();
    loadPhilosophySection();
    loadHorsesSection();
    loadTrainingSection();
    loadContactSection();
    
    // Load dynamic features with icons
    loadAboutFeatures();
    loadTrainingPhilosophy();
    loadTrainingAdvantages();
    loadCoachesContent();
    
    console.log('Content loader initialized - all content loaded');
}

// Load About section features - dynamic icons and content
function loadAboutFeatures() {
    const aboutFeaturesContainer = document.querySelector('.about-features');
    if (!aboutFeaturesContainer) return;
    
    // Clear existing content if any
    aboutFeaturesContainer.innerHTML = '';
    
    // Create feature items
    pageContent.aboutFeatures.forEach(feature => {
        const featureElement = createFeatureElement(feature);
        aboutFeaturesContainer.appendChild(featureElement);
    });
}

// Create a feature element
function createFeatureElement(feature) {
    const featureElement = document.createElement('div');
    featureElement.className = 'feature-item';
    
    // Create icon container and image
    const iconContainer = document.createElement('div');
    iconContainer.className = 'feature-icon';
    
    const iconImage = document.createElement('img');
    iconImage.src = feature.iconSrc;
    iconImage.alt = feature.altText;
    iconImage.width = 80;
    iconImage.height = 80;
    iconImage.loading = 'lazy';
    
    iconContainer.appendChild(iconImage);
    
    // Create title
    const title = document.createElement('h3');
    title.textContent = feature.title;
    
    // Create description
    const description = document.createElement('p');
    description.textContent = feature.description;
    
    // Assemble feature element
    featureElement.appendChild(iconContainer);
    featureElement.appendChild(title);
    featureElement.appendChild(description);
    
    return featureElement;
}

// Load Training Philosophy content - dynamic content
function loadTrainingPhilosophy() {
    const philosophyContainer = document.querySelector('.training-philosophy-card');
    if (!philosophyContainer) return;
    
    philosophyContainer.innerHTML = `
        <h3 class="philosophy-title">${pageContent.trainingPhilosophy.title}</h3>
        <p>${pageContent.trainingPhilosophy.content}</p>
    `;
}

// Load Training Advantages content - dynamic icons and content
function loadTrainingAdvantages() {
    const advantagesContainer = document.querySelector('.advantages-card');
    if (!advantagesContainer) return;
    
    let advantagesHTML = `<h3 class="advantages-title">${pageContent.trainingAdvantages.title}</h3>`;
    
    const advantagesGrid = document.querySelector('.advantages-grid');
    if (advantagesGrid) {
        advantagesGrid.innerHTML = '';
        
        pageContent.trainingAdvantages.items.forEach(item => {
            const advantageElement = document.createElement('div');
            advantageElement.className = 'advantage-item';
            advantageElement.innerHTML = `
                <div class="advantage-icon">
                    <img src="${item.iconSrc}" alt="${item.altText}" width="80" height="80" loading="lazy">
                </div>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            `;
            advantagesGrid.appendChild(advantageElement);
        });
    }
}

// Load About section content
function loadAboutSection() {
    // Set about section title
    const aboutTitle = document.querySelector('.about-facility-section .section-title');
    if (aboutTitle) {
        aboutTitle.textContent = pageContent.aboutSection.title;
    }
    
    // Set highlights/badges
    const aboutHighlights = document.querySelector('.about-highlights');
    if (aboutHighlights) {
        aboutHighlights.innerHTML = '';
        pageContent.aboutSection.highlights.forEach(highlight => {
            const badge = document.createElement('span');
            badge.className = `highlight-badge${highlight.isBBB ? ' bbb-badge' : ''}`;
            badge.textContent = highlight.badge;
            aboutHighlights.appendChild(badge);
        });
    }
    
    // Set description
    const aboutDesc = document.querySelector('.about-facility-section .section-subtitle');
    if (aboutDesc) {
        aboutDesc.textContent = pageContent.aboutSection.description;
    }
}

// Load Philosophy section content
function loadPhilosophySection() {
    // Set philosophy section title
    const philosophyTitle = document.querySelector('.philosophy-section .section-title');
    if (philosophyTitle) {
        philosophyTitle.textContent = pageContent.philosophySection.title;
    }
    
    // Clear and rebuild philosophy content
    const philosophyContent = document.querySelector('.philosophy-content');
    if (philosophyContent) {
        philosophyContent.innerHTML = '';
        
        // Main text paragraph
        const mainText = document.createElement('p');
        mainText.className = 'section-subtitle';
        mainText.textContent = pageContent.philosophySection.mainText;
        philosophyContent.appendChild(mainText);
        
        // Quote
        const quote = document.createElement('div');
        quote.className = 'philosophy-quote';
        quote.textContent = pageContent.philosophySection.quote;
        philosophyContent.appendChild(quote);
        
        // Secondary text paragraph
        const secondaryText = document.createElement('p');
        secondaryText.className = 'section-subtitle';
        secondaryText.textContent = pageContent.philosophySection.secondaryText;
        philosophyContent.appendChild(secondaryText);
    }
}

// Load Horses section content
function loadHorsesSection() {
    // Set horses section title
    const horsesTitle = document.querySelector('#horses .section-title');
    if (horsesTitle) {
        horsesTitle.textContent = pageContent.horsesSection.title;
    }
    
    // Set description
    const horsesDesc = document.querySelector('#horses .section-subtitle');
    if (horsesDesc) {
        horsesDesc.textContent = pageContent.horsesSection.description;
    }
}

// Load Training section content
function loadTrainingSection() {
    // Set training section title
    const trainingTitle = document.querySelector('.programs-section .section-title');
    if (trainingTitle) {
        trainingTitle.textContent = pageContent.trainingSection.title;
    }
    
    // Set subtitle
    const trainingSubtitle = document.querySelector('.programs-section .section-subtitle');
    if (trainingSubtitle) {
        trainingSubtitle.textContent = pageContent.trainingSection.subtitle;
    }
}

// Load Contact section content
function loadContactSection() {
    // Set contact section title
    const contactTitle = document.querySelector('.contact-section .section-title');
    if (contactTitle) {
        contactTitle.textContent = pageContent.contactSection.title;
    }
    
    // Set description
    const contactDesc = document.querySelector('.contact-section .section-subtitle p');
    if (contactDesc) {
        contactDesc.textContent = pageContent.contactSection.description;
    }
    
    // Set contact info
    const phoneElement = document.querySelector('.contact-method:nth-child(1) p:nth-child(2)');
    if (phoneElement) {
        phoneElement.textContent = pageContent.contactSection.contactInfo.phone;
    }
    
    const phoneNote = document.querySelector('.contact-method:nth-child(1) p.contact-note');
    if (phoneNote) {
        phoneNote.textContent = pageContent.contactSection.contactInfo.phoneNote;
    }
    
    const emailElement = document.querySelector('.contact-method:nth-child(2) p');
    if (emailElement) {
        emailElement.textContent = pageContent.contactSection.contactInfo.email;
    }
    
    const addressLine1 = document.querySelector('.contact-method:nth-child(3) p:nth-child(2)');
    if (addressLine1) {
        addressLine1.textContent = pageContent.contactSection.contactInfo.address[0];
    }
    
    const addressLine2 = document.querySelector('.contact-method:nth-child(3) p:nth-child(3)');
    if (addressLine2) {
        addressLine2.textContent = pageContent.contactSection.contactInfo.address[1];
    }
    
    const hoursLine1 = document.querySelector('.contact-hours p:nth-child(2)');
    if (hoursLine1) {
        hoursLine1.textContent = pageContent.contactSection.contactInfo.hours[0];
    }
    
    const hoursLine2 = document.querySelector('.contact-hours p:nth-child(3)');
    if (hoursLine2) {
        hoursLine2.textContent = pageContent.contactSection.contactInfo.hours[1];
    }
}

// Load Coaches content - dynamic images
function loadCoachesContent() {
    // Set coaches section title
    const coachesTitle = document.querySelector('.coaches-section .section-title');
    if (coachesTitle) {
        coachesTitle.textContent = pageContent.coaches.title;
    }
    
    const coachesGrid = document.querySelector('.coaches-grid');
    if (!coachesGrid) return;
    
    coachesGrid.innerHTML = `
        <article class="coach-card combined-coach-card">
            <div class="coach-images">
                <img src="${pageContent.coaches.coachData.imageSrc}" alt="${pageContent.coaches.coachData.altText}" class="coach-image" loading="lazy">
            </div>
            <div class="coach-content">
                <h3 class="coach-name">${pageContent.coaches.coachData.name}</h3>
                <p class="coach-title">${pageContent.coaches.coachData.title}</p>
                <p class="coach-bio">${pageContent.coaches.coachData.bio}</p>
            </div>
        </article>
    `;
}

// Export functions
window.initContentLoader = initContentLoader;
