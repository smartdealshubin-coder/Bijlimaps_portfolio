/**
 * BijliMap Product Portfolio Interactions
 * Minimal, vanilla JS for performance and SEO compliance.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once for performance
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 2. Navbar Scroll Effect (Subtle background blur enhancement)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }, { passive: true });

    // 3. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isActive = question.classList.contains('active');
            
            // Close all currently open answers (Optional: remove if you want multiple open)
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = null;
            });
            
            // If the clicked one wasn't active, open it
            if (!isActive) {
                question.classList.add('active');
                const answer = question.nextElementSibling;
                // Dynamically calculate height for smooth CSS transition
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
    
});
          
