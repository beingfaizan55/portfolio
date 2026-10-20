document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 2. Scroll Animations (Intersection Observer)
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-anim');
                obs.unobserve(entry.target); // Run once for performance
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.hidden-anim').forEach((el) => {
        observer.observe(el);
    });

    // 3. Dynamic Typing Effect
    const words = ["Python & Django.", "AI & Machine Learning.", "Interactive Web Apps."];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100; // Milliseconds per keystroke

    const typeElement = document.querySelector('.typewriter-text');

    function typeEffect() {
        if (!typeElement) return;

        const currentWord = words[currentWordIndex];
        
        if (isDeleting) {
            typeElement.textContent = currentWord.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typeSpeed = 50; // Delete faster
        } else {
            typeElement.textContent = currentWord.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typeSpeed = 120; // Type naturally
        }

        // Word completed typing
        if (!isDeleting && currentCharIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause before deleting
        } 
        // Word completely deleted
        else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Initialize typing effect
    setTimeout(typeEffect, 1000); // Initial 1-second delay
});