// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerHeight = document.querySelector('.header').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});

// Active link highlight on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Game iframe responsiveness
function resizeIframe() {
    const gameContainer = document.querySelector('.game-container');
    const iframe = document.querySelector('.game-container iframe');
    const containerWidth = gameContainer.offsetWidth;

    // Maintain 16:9 aspect ratio
    const newHeight = containerWidth * 9 / 16;
    iframe.style.height = `${newHeight}px`;
}

// Call once on load
window.addEventListener('load', resizeIframe);
// Call on resize
window.addEventListener('resize', resizeIframe);

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.game-controls, .about-content');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.game-controls, .about-content');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    animateOnScroll();
});

// Call on scroll
window.addEventListener('scroll', animateOnScroll);

// Preload images
function preloadImages() {
    const images = ['favicon-32x32.png', 'favicon-16x16.png'];
    images.forEach(img => {
        const image = new Image();
        image.src = img;
    });
}

// Call preload function
window.addEventListener('load', preloadImages);