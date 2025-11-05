// ===== ANIMATIONS =====

// Animation des statistiques
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2 secondes
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
}

// Animation au défilement
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Animation des compétences (onglets)
function initSkillsTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.skills-tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons et contenus
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            btn.classList.add('active');
            
            // Afficher le contenu correspondant
            const tabId = btn.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Animation des éléments flottants
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        // Animation aléatoire pour chaque élément
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        element.style.animationDelay = `${randomDelay}s`;
        element.style.animationDuration = `${randomDuration}s`;
    });
}

// Initialisation des animations
document.addEventListener('DOMContentLoaded', function() {
    // Animation des statistiques
    const aboutSection = document.getElementById('a-propos');
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                aboutObserver.unobserve(aboutSection);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
    
    // Animation au défilement
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initialiser les animations au chargement
    handleScrollAnimations();
    
    // Initialiser les onglets de compétences
    initSkillsTabs();
    
    // Initialiser les éléments flottants
    initFloatingElements();
});