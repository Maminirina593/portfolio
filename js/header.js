// ===== GESTION AMÉLIORÉE DU HEADER =====

// Menu mobile amélioré
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('menu-toggle');
    
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        // Animation d'entrée des liens
        setTimeout(() => {
            document.querySelectorAll('.mobile-nav-list li').forEach((li, index) => {
                li.style.transitionDelay = `${index * 0.1}s`;
            });
        }, 300);
    } else {
        document.body.style.overflow = 'auto';
        // Réinitialiser les délais d'animation
        document.querySelectorAll('.mobile-nav-list li').forEach(li => {
            li.style.transitionDelay = '0s';
        });
    }
}

// Fermer le menu mobile
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('menu-toggle');
    
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Réinitialiser les délais d'animation
    document.querySelectorAll('.mobile-nav-list li').forEach(li => {
        li.style.transitionDelay = '0s';
    });
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Gestion du thème
function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        document.documentElement.style.setProperty('--header-bg-rgb', '255, 255, 255');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        document.documentElement.style.setProperty('--header-bg-rgb', '15, 23, 42');
    }
}

// Initialisation du header amélioré
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    document.getElementById('menu-toggle').addEventListener('click', toggleMobileMenu);
    document.getElementById('mobile-close').addEventListener('click', closeMobileMenu);
    
    // Fermer le menu mobile en cliquant sur un lien
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Fermer le menu mobile en cliquant sur le backdrop
    document.getElementById('mobile-menu').addEventListener('click', function(e) {
        if (e.target === this) {
            closeMobileMenu();
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Gestion du thème
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Restaurer le thème
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.documentElement.style.setProperty('--header-bg-rgb', '15, 23, 42');
    } else {
        document.documentElement.style.setProperty('--header-bg-rgb', '255, 255, 255');
    }
    
    // Activer l'effet initial
    handleHeaderScroll();
});