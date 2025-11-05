// ===== VARIABLES GLOBALES =====
let currentLanguage = 'fr';
let currentProjectIndex = 0;
const totalProjects = 3;

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
        "accueil-titre": "Bonjour, je suis <span>MJN</span>",
        "accueil-sous-titre": "Développeur Web Full Stack",
        "accueil-description": "Passionné par la création d'applications web modernes et performantes. Je combine créativité et expertise technique pour offrir des solutions innovantes adaptées à vos besoins.",
        "accueil-btn-projets": "Voir mes projets",
        "accueil-btn-contact": "Me contacter",
        
        // À propos
        "a-propos-titre": "À propos de moi",
        "a-propos-sous-titre": "Développeur Web Passionné",
        "a-propos-description": "Je suis un développeur web full stack avec plus de 5 ans d'expérience dans la création d'applications web modernes et performantes. Mon expertise couvre à la fois le développement front-end et back-end.",
        "a-propos-etudes": "Études",
        "a-propos-etudes-details": "Master en Informatique - Université de Technologie (2015-2020)",
        "a-propos-certifications": "Certifications",
        "a-propos-certifications-details": "Certification AWS Developer, Google Cloud Professional, React Developer Certification",
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
        "contact-adresse-details": "Paris, France",
        "contact-reseaux-titre": "Réseaux sociaux",
        "contact-form-titre": "Envoyez-moi un message",
        "contact-form-nom": "Nom",
        "contact-form-email": "Email",
        "contact-form-sujet": "Sujet",
        "contact-form-message": "Message",
        "contact-form-btn": "Envoyer le message",
        
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
        "footer-copyright": "© 2023 MJN. Tous droits réservés.",
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
        "accueil-titre": "Hello, I'm <span>MJN</span>",
        "accueil-sous-titre": "Full Stack Web Developer",
        "accueil-description": "Passionate about creating modern and high-performance web applications. I combine creativity and technical expertise to deliver innovative solutions tailored to your needs.",
        "accueil-btn-projets": "View my projects",
        "accueil-btn-contact": "Contact me",
        
        // À propos
        "a-propos-titre": "About Me",
        "a-propos-sous-titre": "Passionate Web Developer",
        "a-propos-description": "I am a full stack web developer with over 5 years of experience in creating modern and high-performance web applications. My expertise covers both front-end and back-end development.",
        "a-propos-etudes": "Education",
        "a-propos-etudes-details": "Master's Degree in Computer Science - University of Technology (2015-2020)",
        "a-propos-certifications": "Certifications",
        "a-propos-certifications-details": "AWS Developer Certification, Google Cloud Professional, React Developer Certification",
        "a-propos-qualites": "Qualities",
        "a-propos-qualites-details": "Creative, rigorous, autonomous, good communicator and passionate about new technologies",
        "a-propos-projets": "Projects completed",
        "a-propos-annees": "Years of experience",
        "a-propos-clients": "Satisfied clients",
        "a-propos-btn-cv": "Download my CV",
        
        // Compétences
        "competences-titre": "My Skills",
        "competences-langages": "Languages",
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
        "contact-adresse-details": "Paris, France",
        "contact-reseaux-titre": "Social Networks",
        "contact-form-titre": "Send me a message",
        "contact-form-nom": "Name",
        "contact-form-email": "Email",
        "contact-form-sujet": "Subject",
        "contact-form-message": "Message",
        "contact-form-btn": "Send message",
        
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
        "footer-copyright": "© 2023 MJN. All rights reserved.",
        "footer-mentions": "Legal Notice",
        "footer-confidentialite": "Privacy Policy"
    }
};


// ===== FONCTIONS DE TRADUCTION =====
function updateContent(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else {
                element.innerHTML = translations[language][key];
            }
        }
    });
}

function changeLanguage() {
    const languageSelect = document.getElementById('language-select');
    currentLanguage = languageSelect.value;
    updateContent(currentLanguage);
    localStorage.setItem('language', currentLanguage);
}

// ===== FONCTIONS DU MODE SOMBRE/CLAIR =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
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
}

// ===== GESTION DU FORMULAIRE DE CONTACT =====
function handleContactForm(event) {
    event.preventDefault();
    alert(currentLanguage === 'fr' 
        ? 'Merci pour votre message! Je vous répondrai bientôt.' 
        : 'Thank you for your message! I will get back to you soon.');
    document.getElementById('contact-form').reset();
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le thème
    initTheme();
    
    // Initialiser la langue
    const savedLanguage = localStorage.getItem('language') || 'fr';
    document.getElementById('language-select').value = savedLanguage;
    currentLanguage = savedLanguage;
    updateContent(currentLanguage);
    
    // Ajouter les écouteurs d'événements
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('language-select').addEventListener('change', changeLanguage);
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
});