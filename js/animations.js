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
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .skill-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Animation des compétences (onglets) avec effet de chargement
function initSkillsTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.skills-tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Effet de chargement
            btn.classList.add('tab-loading');
            
            // Retirer la classe active de tous les boutons et contenus
            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.classList.remove('tab-loading');
            });
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            btn.classList.add('active');
            
            // Afficher le contenu correspondant avec un léger délai pour l'animation
            setTimeout(() => {
                const tabId = btn.getAttribute('data-tab') + '-tab';
                const targetTab = document.getElementById(tabId);
                if (targetTab) {
                    targetTab.classList.add('active');
                }
                btn.classList.remove('tab-loading');
            }, 300);
        });
    });
}

// Animation des éléments de compétences
function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        // Animation d'entrée progressive
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.transition = 'all 0.6s ease ' + (index * 0.1) + 's';
                    }, 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(item);
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
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    aboutObserver.unobserve(aboutSection);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }
    
    // Animation au défilement
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initialiser les animations au chargement
    handleScrollAnimations();
    
    // Initialiser les onglets de compétences
    initSkillsTabs();
    
    // Initialiser l'animation des compétences
    initSkillsAnimation();
    
    // Initialiser les éléments flottants
    initFloatingElements();
});

// Réinitialiser les animations lors du changement d'onglet
function resetSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skills-tab-content.active .skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
        }, 50);
    });
}