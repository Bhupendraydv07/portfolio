// Initialize Lucide Icons
lucide.createIcons();

// Typewriter Effect Logic (Infinite Loop)
const typewriterElement = document.getElementById('typewriter');
const phrase = "Visual Logic";
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeEffect() {
    const currentText = phrase.substring(0, charIndex);
    if (typewriterElement) {
        typewriterElement.textContent = currentText;
    }

    if (!isDeleting && charIndex < phrase.length) {
        // Typing
        charIndex++;
        typingSpeed = 150;
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        typingSpeed = 75;
    } else if (!isDeleting && charIndex === phrase.length) {
        // End of typing, wait before deleting
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        // End of deleting, wait before re-typing
        isDeleting = false;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typewriter loop
window.onload = () => {
    setTimeout(typeEffect, 1000);
};

// Reveal on Scroll Logic
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth Navbar Transition
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 3rem';
            nav.style.background = 'rgba(5, 5, 5, 0.8)';
        } else {
            nav.style.padding = '1.5rem 3rem';
            nav.style.background = 'rgba(255, 255, 255, 0.03)';
        }
    }
});