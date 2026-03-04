document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Fade-Up Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it has become visible
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        elementObserver.observe(el);
    });

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Optional parallax effect on the background orbs slightly based on mouse
    const bgEffects = document.querySelector('.background-effects');
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    const orb3 = document.querySelector('.orb-3');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Move orbs subtly in opposite direction of mouse
        if(orb1) orb1.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
        if(orb2) orb2.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
        if(orb3) orb3.style.transform = `translate(${x * -20}px, ${y * 20}px)`;
    });
});
