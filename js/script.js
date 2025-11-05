// ===== VARIABLES GLOBALES =====
let currentLanguage = 'fr';
let currentProjectIndex = 0;
const totalProjects = 3;
let greetingInterval;
let isGreetingAnimating = false;
let carouselInterval;

// ===== CONFIGURATION EMAILJS =====
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_d8hf2rp',
    TEMPLATE_ID: 'template_9kf4l1a', // Vous devez créer ce template dans EmailJS
    PUBLIC_KEY: '3h9E8Z7XqV2pL1wR5' // À remplacer par votre clé publique
};

// ===== DONNÉES DE SALUTATIONS =====
const greetings = {
    fr: [
        "Salut",
        "Bonjour", 
        "Coucou",
        "Bienvenue"
    ],
    en: [
        "Hi",
        "Hello",
        "Hey",
        "Welcome"
    ]
};

// ===== DONNÉES DE TRADUCTION =====
const translations = {
    fr: {
        // Header
        "accueil": "Accueil",
        "a-propos": "À propos",
        "competences": "Compétences",
        "projets": "Projets",
        "contact": "Contact",
        
        // Accueil
        "accueil-titre": ", je suis <span>Maminirina Jean Noël</span>",
        "accueil-sous-titre": "Développeur Web Full Stack",
        "accueil-description": "Passionné par la création d'applications web modernes et performantes. Je combine créativité et expertise technique pour offrir des solutions innovantes adaptées à vos besoins.",
        "accueil-btn-projets": "Voir mes projets",
        "accueil-btn-contact": "Me contacter",
        
        // À propos
        "a-propos-titre": "À propos de moi",
        "a-propos-sous-titre": "Développeur Web Passionné",
        "a-propos-description": "Je suis un développeur web full stack passionné par la création d'applications modernes et innovantes. Actuellement en formation, je me spécialise dans les technologies web les plus récentes.",
        "a-propos-etudes": "Études",
        "a-propos-certifications": "Certifications",
        "a-propos-qualites": "Qualités",
        "a-propos-qualites-details": "Créatif, rigoureux, autonome, bon communicateur et passionné par les nouvelles technologies",
        "a-propos-projets": "Projets réalisés",
        "a-propos-annees": "Années d'expérience",
        "a-propos-clients": "Clients satisfaits",
        "a-propos-btn-cv": "Télécharger mon CV",
        
        // Compétences
        "competences-titre": "Mes Compétences",
        "competences-langages": "Langages",
        "competences-frontend": "Front-end",
        "competences-backend": "Back-end",
        "competences-bdd": "Bases de données",
        "competences-design": "Design",
        "competences-outils": "Outils",
        
        // Projets
        "projets-titre": "Mes Projets",
        "projet1-titre": "Application E-commerce",
        "projet1-description": "Une application e-commerce complète avec système de paiement, gestion de stock et interface administrateur.",
        "projet2-titre": "Réseau Social",
        "projet2-description": "Plateforme de réseau social avec fonctionnalités de messagerie, partage de contenu et notifications en temps réel.",
        "projet3-titre": "Application Météo",
        "projet3-description": "Application météo avec prévisions sur 7 jours, géolocalisation et interface utilisateur intuitive.",
        "projet-btn-demo": "Voir la démo",
        "projet-btn-source": "Code source",
        "projets-btn-plus": "Voir plus de projets",
        
        // Contact
        "contact-titre": "Contactez-moi",
        "contact-info-titre": "Informations de contact",
        "contact-telephone": "Téléphone",
        "contact-email": "Email",
        "contact-adresse": "Adresse",
        "contact-adresse-details": "Isaingy, Antananarivo",
        "contact-reseaux-titre": "Réseaux sociaux",
        "contact-form-titre": "Envoyez-moi un message",
        "contact-form-nom": "Nom",
        "contact-form-email": "Email",
        "contact-form-sujet": "Sujet",
        "contact-form-message": "Message",
        "contact-form-btn": "Envoyer le message",
        "contact-form-sending": "Envoi en cours...",
        "contact-success": "Message envoyé avec succès! Je vous répondrai bientôt.",
        "contact-error": "Erreur lors de l'envoi du message. Veuillez réessayer.",
        
        // Footer
        "footer-description": "Développeur web full stack passionné par la création d'applications modernes et performantes.",
        "footer-liens-rapides": "Liens rapides",
        "footer-services": "Services",
        "footer-service1": "Développement Web",
        "footer-service2": "Applications Responsives",
        "footer-service3": "E-commerce",
        "footer-service4": "SEO & Performance",
        "footer-newsletter": "Newsletter",
        "footer-newsletter-desc": "Recevez les dernières actualités et projets.",
        "footer-newsletter-placeholder": "Votre email",
        "footer-newsletter-btn": "S'abonner",
        "footer-copyright": "© 2024 MJN. Tous droits réservés.",
        "footer-mentions": "Mentions légales",
        "footer-confidentialite": "Politique de confidentialité"
    },
    en: {
        // Header
        "accueil": "Home",
        "a-propos": "About",
        "competences": "Skills",
        "projets": "Projects",
        "contact": "Contact",
        
        // Accueil
        "accueil-titre": ", I'm <span>Maminirina Jean Noel</span>",
        "accueil-sous-titre": "Full Stack Web Developer",
        "accueil-description": "Passionate about creating modern and high-performance web applications. I combine creativity and technical expertise to deliver innovative solutions tailored to your needs.",
        "accueil-btn-projets": "View my projects",
        "accueil-btn-contact": "Contact me",
        
        // À propos
        "a-propos-titre": "About Me",
        "a-propos-sous-titre": "Passionate Web Developer",
        "a-propos-description": "I am a passionate full stack web developer dedicated to creating modern and innovative applications. Currently in training, I specialize in the latest web technologies.",
        "a-propos-etudes": "Education",
        "a-propos-certifications": "Certifications",
        "a-propos-qualites": "Qualities",
        "a-propos-qualites-details": "Creative, rigorous, autonomous, good communicator and passionate about new technologies",
        "a-propos-projets": "Projects completed",
        "a-propos-annees": "Years of experience",
        "a-propos-clients": "Satisfied clients",
        "a-propos-btn-cv": "Download my CV",
        
        // Compétences
        "competences-titre": "My Skills",
        "competences-langages": "Programming Languages",
        "competences-frontend": "Front-end",
        "competences-backend": "Back-end",
        "competences-bdd": "Databases",
        "competences-design": "Design",
        "competences-outils": "Tools",
        
        // Projets
        "projets-titre": "My Projects",
        "projet1-titre": "E-commerce Application",
        "projet1-description": "A complete e-commerce application with payment system, stock management and admin interface.",
        "projet2-titre": "Social Network",
        "projet2-description": "Social network platform with messaging features, content sharing and real-time notifications.",
        "projet3-titre": "Weather Application",
        "projet3-description": "Weather application with 7-day forecasts, geolocation and intuitive user interface.",
        "projet-btn-demo": "View demo",
        "projet-btn-source": "Source code",
        "projets-btn-plus": "View more projects",
        
        // Contact
        "contact-titre": "Contact Me",
        "contact-info-titre": "Contact Information",
        "contact-telephone": "Phone",
        "contact-email": "Email",
        "contact-adresse": "Address",
        "contact-adresse-details": "Isaingy, Antananarivo",
        "contact-reseaux-titre": "Social Networks",
        "contact-form-titre": "Send me a message",
        "contact-form-nom": "Name",
        "contact-form-email": "Email",
        "contact-form-sujet": "Subject",
        "contact-form-message": "Message",
        "contact-form-btn": "Send message",
        "contact-form-sending": "Sending...",
        "contact-success": "Message sent successfully! I will get back to you soon.",
        "contact-error": "Error sending message. Please try again.",
        
        // Footer
        "footer-description": "Full stack web developer passionate about creating modern and high-performance applications.",
        "footer-liens-rapides": "Quick Links",
        "footer-services": "Services",
        "footer-service1": "Web Development",
        "footer-service2": "Responsive Applications",
        "footer-service3": "E-commerce",
        "footer-service4": "SEO & Performance",
        "footer-newsletter": "Newsletter",
        "footer-newsletter-desc": "Receive the latest news and projects.",
        "footer-newsletter-placeholder": "Your email",
        "footer-newsletter-btn": "Subscribe",
        "footer-copyright": "© 2024 MJN. All rights reserved.",
        "footer-mentions": "Legal Notice",
        "footer-confidentialite": "Privacy Policy"
    }
};

// ===== FONCTIONS EMAILJS =====
function initEmailJS() {
    // Initialisation d'EmailJS avec votre clé publique
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('EmailJS initialisé avec succès');
    } else {
        console.error('EmailJS non chargé');
    }
}

function sendEmail(formData) {
    return new Promise((resolve, reject) => {
        if (typeof emailjs === 'undefined') {
            reject(new Error('EmailJS non chargé'));
            return;
        }
        
        emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            formData
        ).then(
            function(response) {
                console.log('Email envoyé avec succès:', response);
                resolve(response);
            },
            function(error) {
                console.error('Erreur envoi email:', error);
                reject(error);
            }
        );
    });
}

// ===== GESTION DU FORMULAIRE DE CONTACT =====
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formMessage = document.getElementById('form-message');
    
    // Afficher l'état de chargement
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    
    // Masquer les messages précédents
    formMessage.style.display = 'none';
    
    // Récupérer les données du formulaire
    const formData = {
        from_name: form.name.value,
        from_email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
        to_email: 'maminirinajeannoel@gmail.com'
    };
    
    // Envoyer l'email via EmailJS
    sendEmail(formData)
        .then(() => {
            // Succès
            showFormMessage('success', translations[currentLanguage]['contact-success']);
            form.reset();
        })
        .catch((error) => {
            // Erreur
            console.error('EmailJS Error:', error);
            showFormMessage('error', translations[currentLanguage]['contact-error']);
        })
        .finally(() => {
            // Réinitialiser le bouton
            btnText.style.display = 'block';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        });
}

function showFormMessage(type, message) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Masquer le message après 5 secondes
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ===== FONCTIONS DU CARROUSEL =====
function initImageCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    if (!slides.length) return;
    
    function showSlide(index) {
        // Retirer la classe active de toutes les slides et indicateurs
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Gérer les limites du carrousel
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Ajouter la classe active à la slide et indicateur courants
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Événements des boutons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Événements des indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Défilement automatique
    carouselInterval = setInterval(nextSlide, 4000);
    
    // Arrêter le défilement automatique au survol
    const carousel = document.querySelector('.image-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(nextSlide, 4000);
        });
    }
}

// ===== FONCTIONS DE SALUTATION DYNAMIQUE =====
function getRandomGreeting(language) {
    const languageGreetings = greetings[language] || greetings.fr;
    const randomIndex = Math.floor(Math.random() * languageGreetings.length);
    return languageGreetings[randomIndex];
}

function animateGreeting(language) {
    const greetingElement = document.getElementById('dynamic-greeting');
    if (!greetingElement) return;
    
    // Arrêter l'animation en cours
    if (greetingInterval) {
        clearInterval(greetingInterval);
    }
    
    let currentGreeting = getRandomGreeting(language);
    greetingElement.textContent = currentGreeting;
    greetingElement.classList.add('text-changing');
    
    // Animation de typing
    greetingElement.classList.add('typing-animation');
    
    // Changer la salutation toutes les 2 secondes
    greetingInterval = setInterval(() => {
        let newGreeting;
        do {
            newGreeting = getRandomGreeting(language);
        } while (newGreeting === currentGreeting && greetings[language].length > 1);
        
        currentGreeting = newGreeting;
        
        // Animation de changement
        greetingElement.classList.remove('text-changing');
        void greetingElement.offsetWidth; // Trigger reflow
        greetingElement.classList.add('text-changing');
        
        greetingElement.textContent = currentGreeting;
    }, 2000);
    
    // Supprimer l'animation de changement après la transition
    setTimeout(() => {
        greetingElement.classList.remove('text-changing');
    }, 500);
}

function stopGreetingAnimation() {
    if (greetingInterval) {
        clearInterval(greetingInterval);
        greetingInterval = null;
    }
    
    const greetingElement = document.getElementById('dynamic-greeting');
    if (greetingElement) {
        greetingElement.classList.remove('typing-animation');
    }
}

// ===== FONCTIONS DE TRADUCTION AMÉLIORÉES =====
function updateContent(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[language] && translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else {
                // Préserver le HTML existant comme les spans
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = translations[language][key];
                if (tempDiv.children.length > 0 || translations[language][key].includes('<')) {
                    element.innerHTML = translations[language][key];
                } else {
                    element.textContent = translations[language][key];
                }
            }
        }
    });
    
    // Mettre à jour les attributs lang et dir
    document.documentElement.setAttribute('lang', language);
    if (language === 'ar' || language === 'he') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Mettre à jour l'animation de salutation
    animateGreeting(language);
    
    // Réinitialiser les animations après changement de langue
    setTimeout(() => {
        if (typeof resetSkillsAnimation === 'function') {
            resetSkillsAnimation();
        }
    }, 300);
}

function changeLanguage() {
    const languageSelect = document.getElementById('language-select');
    currentLanguage = languageSelect.value;
    updateContent(currentLanguage);
    localStorage.setItem('language', currentLanguage);
    
    // Animation de transition
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.3s ease';
    }, 150);
}

// ===== FONCTIONS DU MODE SOMBRE/CLAIR =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Animation de transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

// ===== FONCTIONS DE GESTION DES COMPÉTENCES =====
function initSkillsInteractions() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        // Animation au clic
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le thème
    initTheme();
    
    // Initialiser la langue
    const savedLanguage = localStorage.getItem('language') || 'fr';
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }
    currentLanguage = savedLanguage;
    updateContent(currentLanguage);
    
    // Démarrer l'animation de salutation
    animateGreeting(currentLanguage);
    
    // Initialiser le carrousel
    initImageCarousel();
    
    // Initialiser EmailJS
    initEmailJS();
    
    // Ajouter les écouteurs d'événements
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (languageSelect) {
        languageSelect.addEventListener('change', changeLanguage);
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Initialiser les interactions des compétences
    initSkillsInteractions();
    
    // Animation de chargement initiale
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});

// Arrêter l'animation quand la page n'est plus visible
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        stopGreetingAnimation();
        clearInterval(carouselInterval);
    } else {
        animateGreeting(currentLanguage);
        initImageCarousel();
    }
});

// Support pour le rechargement dynamique
if (module && module.hot) {
    module.hot.accept();
}