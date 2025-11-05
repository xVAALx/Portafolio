// ===== PORTFOLIO PERSONAL - JAVASCRIPT =====

// Configuración de animaciones
const ANIMATION_CONFIG = {
    duration: {
        fast: 150,
        base: 250,
        slow: 400,
        scroll: 800
    },
    easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    observerOptions: {
        threshold: 0.1,
        rootMargin: '-80px 0px -50% 0px'
    }
};

// ===== UTILITIES =====
const utils = {
    // Debounce function para optimizar eventos de scroll
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function para scroll events
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Smooth scroll to element
    smoothScrollTo: (target, duration = ANIMATION_CONFIG.duration.scroll) => {
        const targetPosition = target.offsetTop - 80; // Account for nav height
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            window.scrollTo(0, startPosition + distance * easeOut);
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// ===== NAVIGATION =====
class Navigation {
    constructor() {
        this.nav = document.getElementById('navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.mobileToggle = document.getElementById('mobile-menu-toggle');
        this.mobileMenu = document.getElementById('nav-links');
        this.sections = document.querySelectorAll('section[id]');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollSpy();
        this.setupSmoothScroll();
        this.setupMobileMenu();
        this.handleInitialLoad();
    }

    setupEventListeners() {
        // Scroll handler with throttling
        window.addEventListener('scroll', utils.throttle(() => {
            this.handleScroll();
        }, 16));

        // Resize handler
        window.addEventListener('resize', utils.debounce(() => {
            this.handleResize();
        }, 250));

        // Navigation links click handler
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleNavLinkClick(e);
            });
        });
    }

    handleScroll() {
        const scrolled = window.pageYOffset > 50;
        
        // Add/remove scrolled class for styling
        if (scrolled) {
            this.nav.classList.add('nav-scrolled');
            this.nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            this.nav.classList.remove('nav-scrolled');
            this.nav.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    }

    handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
    }

    setupScrollSpy() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                
                if (entry.isIntersecting) {
                    // Remove active class from all links
                    this.navLinks.forEach(link => link.classList.remove('active'));
                    
                    // Add active class to current link
                    if (navLink) {
                        navLink.classList.add('active');
                    }
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-20% 0px -70% 0px'
        });

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    setupSmoothScroll() {
        // Enhanced smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    utils.smoothScrollTo(target);
                }
            });
        });
    }

    setupMobileMenu() {
        if (this.mobileToggle && this.mobileMenu) {
            this.mobileToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.nav.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    toggleMobileMenu() {
        this.mobileMenu.classList.toggle('mobile-menu-open');
        this.mobileToggle.classList.toggle('mobile-menu-active');
        
        // Prevent body scroll when menu is open
        if (this.mobileMenu.classList.contains('mobile-menu-open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMobileMenu() {
        this.mobileMenu.classList.remove('mobile-menu-open');
        this.mobileToggle.classList.remove('mobile-menu-active');
        document.body.style.overflow = '';
    }

    handleNavLinkClick(e) {
        const target = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(target);
        
        if (targetElement) {
            utils.smoothScrollTo(targetElement);
            
            // Close mobile menu if open
            this.closeMobileMenu();
        }
    }

    handleInitialLoad() {
        // Handle hash in URL on page load
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
                setTimeout(() => {
                    utils.smoothScrollTo(target, 0);
                }, 100);
            }
        }
    }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll('.project-card, .skill-badge, .contact-method');
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered animation delay for elements in the same container
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                    
                    // Unobserve once animated
                    observer.unobserve(entry.target);
                }
            });
        }, ANIMATION_CONFIG.observerOptions);

        this.animatedElements.forEach(element => {
            element.classList.add('animate-ready');
            observer.observe(element);
        });
    }
}

// ===== INTERACTIVE EFFECTS =====
class InteractiveEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupButtonEffects();
        this.setupCardEffects();
        this.setupSkillBadges();
        this.setupProjectLinks();
    }

    setupButtonEffects() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-ghost');
        
        buttons.forEach(button => {
            // Ripple effect on click
            button.addEventListener('click', (e) => {
                this.createRippleEffect(e, button);
            });

            // Enhanced hover effects
            button.addEventListener('mouseenter', () => {
                this.addGlowEffect(button);
            });

            button.addEventListener('mouseleave', () => {
                this.removeGlowEffect(button);
            });
        });
    }

    createRippleEffect(e, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    addGlowEffect(element) {
        element.style.boxShadow = 'var(--glow-subtle)';
    }

    removeGlowEffect(element) {
        if (element.classList.contains('btn-primary')) {
            element.style.boxShadow = 'var(--elevation-1)';
        } else {
            element.style.boxShadow = 'none';
        }
    }

    setupCardEffects() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            // Parallax effect on scroll
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = 'var(--glow-subtle), var(--elevation-1)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = 'var(--elevation-1)';
            });

            // 3D tilt effect
            card.addEventListener('mousemove', (e) => {
                this.addTiltEffect(e, card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeTiltEffect(card);
            });
        });
    }

    addTiltEffect(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }

    removeTiltEffect(card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }

    setupSkillBadges() {
        const skillBadges = document.querySelectorAll('.skill-badge');
        
        skillBadges.forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                this.animateSkillBadge(badge, true);
            });

            badge.addEventListener('mouseleave', () => {
                this.animateSkillBadge(badge, false);
            });
        });
    }

    animateSkillBadge(badge, entering) {
        const icon = badge.querySelector('.skill-icon');
        const label = badge.querySelector('.skill-label');
        
        if (entering) {
            badge.style.transform = 'scale(1.1) translateY(-2px)';
            badge.style.boxShadow = 'var(--glow-subtle)';
            
            if (icon) {
                icon.style.transform = 'rotate(5deg) scale(1.2)';
                icon.style.color = 'var(--accent-neon)';
            }
            
            if (label) {
                label.style.color = 'var(--primary-400)';
                label.style.fontWeight = '600';
            }
        } else {
            badge.style.transform = 'scale(1) translateY(0)';
            badge.style.boxShadow = 'none';
            
            if (icon) {
                icon.style.transform = 'rotate(0deg) scale(1)';
                icon.style.color = 'var(--primary-500)';
            }
            
            if (label) {
                label.style.color = 'var(--primary-400)';
                label.style.fontWeight = '400';
            }
        }
    }

    setupProjectLinks() {
        const projectLinks = document.querySelectorAll('.project-link');
        
        projectLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'scale(1.2)';
                link.style.boxShadow = 'var(--glow-primary)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = 'scale(1)';
                link.style.boxShadow = 'none';
            });
        });
    }
}

// ===== LOADING ANIMATIONS =====
class LoadingAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupHeroAnimations();
        this.setupCounterAnimations();
        this.setupTypingEffect();
    }

    setupHeroAnimations() {
        const heroElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-delay-3');
        
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.experience-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 50;
            let current = 0;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            counter.textContent = Math.floor(current) + '+';
                        }, 30);
                        
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }

    setupTypingEffect() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            const text = subtitle.textContent;
            subtitle.textContent = '';
            
            setTimeout(() => {
                this.typeText(subtitle, text, 100);
            }, 800);
        }
    }

    typeText(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(timer);
            }
        }, speed);
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.setupPreloading();
        this.optimizeAnimations();
    }

    setupLazyLoading() {
        // Implement lazy loading for images
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    setupPreloading() {
        // Preload critical resources
        const criticalResources = [
            '/css/styles.css',
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.css') ? 'style' : 'font';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        });
    }

    optimizeAnimations() {
        // Reduce animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.classList.add('reduce-motion');
        }

        // Optimize animations for low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.documentElement.classList.add('low-performance');
        }
    }
}

// ===== ACCESSIBILITY =====
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupScreenReaderSupport();
    }

    setupKeyboardNavigation() {
        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
            
            // Escape key to close mobile menu
            if (e.key === 'Escape') {
                const mobileMenu = document.getElementById('nav-links');
                if (mobileMenu && mobileMenu.classList.contains('mobile-menu-open')) {
                    // Close mobile menu
                    document.dispatchEvent(new CustomEvent('closeMobileMenu'));
                }
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    setupFocusManagement() {
        // Ensure focus is visible on keyboard navigation
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.classList.add('focus-visible');
            });

            element.addEventListener('blur', () => {
                element.classList.remove('focus-visible');
            });
        });
    }

    setupScreenReaderSupport() {
        // Add aria labels and descriptions
        const navToggle = document.getElementById('mobile-menu-toggle');
        if (navToggle) {
            navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            navToggle.setAttribute('aria-expanded', 'false');
        }

        // Add skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Saltar al contenido principal';
        skipLink.className = 'skip-link sr-only';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Update main content area
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.setAttribute('id', 'main-content');
        }
    }
}

// ===== THEME MANAGER =====
class ThemeManager {
    constructor() {
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.checkSystemPreference();
    }

    setupThemeToggle() {
        // Add theme toggle functionality if needed
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '🌙';
        themeToggle.setAttribute('aria-label', 'Cambiar tema');
        themeToggle.style.display = 'none'; // Hidden for now, could be enabled
        
        document.body.appendChild(themeToggle);

        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    checkSystemPreference() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
        } else {
            // Use system preference
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                this.currentTheme = 'light';
            }
        }
        
        document.documentElement.setAttribute('data-theme', this.currentTheme);
    }
}

// ===== MAIN APPLICATION =====
class PortfolioApp {
    constructor() {
        this.components = {};
        this.init();
    }

    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initComponents());
        } else {
            this.initComponents();
        }
    }

    initComponents() {
        try {
            // Initialize all components
            this.components.navigation = new Navigation();
            this.components.scrollAnimations = new ScrollAnimations();
            this.components.interactiveEffects = new InteractiveEffects();
            this.components.loadingAnimations = new LoadingAnimations();
            this.components.performanceOptimizer = new PerformanceOptimizer();
            this.components.accessibility = new AccessibilityEnhancer();
            this.components.themeManager = new ThemeManager();

            // Setup global event listeners
            this.setupGlobalEvents();

            // Add loaded class to body for CSS transitions
            document.body.classList.add('loaded');

            console.log('Portfolio app initialized successfully');
        } catch (error) {
            console.error('Error initializing portfolio app:', error);
        }
    }

    setupGlobalEvents() {
        // Handle mobile menu close from anywhere
        document.addEventListener('closeMobileMenu', () => {
            if (this.components.navigation) {
                this.components.navigation.closeMobileMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', utils.debounce(() => {
            // Recalculate layouts if needed
            this.handleResize();
        }, 250));

        // Handle online/offline status
        window.addEventListener('online', () => {
            this.showConnectionStatus('online');
        });

        window.addEventListener('offline', () => {
            this.showConnectionStatus('offline');
        });
    }

    handleResize() {
        // Update component calculations on resize
        if (this.components.scrollAnimations) {
            // Recalculate intersection observers
        }
    }

    showConnectionStatus(status) {
        // Optional: Show connection status to user
        const statusIndicator = document.createElement('div');
        statusIndicator.className = `connection-status ${status}`;
        statusIndicator.textContent = status === 'online' ? 'Conectado' : 'Sin conexión';
        statusIndicator.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            padding: 8px 16px;
            background: ${status === 'online' ? '#22c55e' : '#ef4444'};
            color: white;
            border-radius: 8px;
            font-size: 14px;
            z-index: 9999;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(statusIndicator);
        
        setTimeout(() => {
            statusIndicator.remove();
        }, 3000);
    }
}

// ===== CSS ANIMATIONS (Dynamic) =====
const style = document.createElement('style');
style.textContent = `
    .animate-ready {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid #22c55e !important;
        outline-offset: 2px !important;
    }
    
    .reduce-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
    
    .skip-link.sr-only:focus {
        position: absolute;
        left: 6px;
        top: 7px;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
        background: #22c55e;
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        z-index: 10000;
    }
    
    .mobile-menu-open {
        display: flex !important;
        position: fixed;
        top: 64px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(10, 10, 10, 0.98);
        backdrop-filter: blur(10px);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        z-index: 999;
    }
    
    .mobile-menu-active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// ===== INITIALIZE APPLICATION =====
const portfolio = new PortfolioApp();

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioApp, Navigation, ScrollAnimations, InteractiveEffects };
}