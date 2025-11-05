// ===== GESTION DU CARROUSEL PROJETS =====
class ProjectsCarousel {
    constructor() {
        this.carousel = document.querySelector('.projects-carousel');
        this.track = document.querySelector('.carousel-track');
        this.cards = document.querySelectorAll('.project-card');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        this.indicators = document.querySelectorAll('.indicator');
        
        this.currentSlide = 0;
        this.slidesToShow = 3;
        this.totalSlides = Math.ceil(this.cards.length / this.slidesToShow);
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateSlidesToShow();
        this.updateCarousel();
        
        // Redimensionnement de la fenêtre
        window.addEventListener('resize', () => {
            this.updateSlidesToShow();
            this.updateCarousel();
        });
    }
    
    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Navigation par indicateurs
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
    
    updateSlidesToShow() {
        const width = window.innerWidth;
        
        if (width < 768) {
            this.slidesToShow = 1;
        } else if (width < 1200) {
            this.slidesToShow = 2;
        } else {
            this.slidesToShow = 3;
        }
        
        this.totalSlides = Math.ceil(this.cards.length / this.slidesToShow);
        this.updateIndicators();
    }
    
    updateCarousel() {
        const cardWidth = 100 / this.slidesToShow;
        const translateX = -this.currentSlide * 100;
        
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Mettre à jour les indicateurs
        this.updateIndicators();
        
        // Mettre à jour les boutons de navigation
        this.updateNavButtons();
    }
    
    updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
            indicator.style.display = index < this.totalSlides ? 'block' : 'none';
        });
    }
    
    updateNavButtons() {
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide >= this.totalSlides - 1;
    }
    
    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateCarousel();
        }
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateCarousel();
        }
    }
    
    goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < this.totalSlides) {
            this.currentSlide = slideIndex;
            this.updateCarousel();
        }
    }
}

// ===== ANIMATIONS DES PROJETS =====
function initProjectAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${entry.target.dataset.project * 0.1}s`;
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observer chaque carte de projet
    document.querySelectorAll('.project-card').forEach(card => {
        projectObserver.observe(card);
    });
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le carrousel
    new ProjectsCarousel();
    
    // Initialiser les animations
    initProjectAnimations();
    
    // Ajouter les styles d'animation
    const style = document.createElement('style');
    style.textContent = `
        .project-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .project-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});