/**
 * Al-Ahad Dental Care - Website Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileMenu();
    initSmoothScroll();
    initFormValidation();
    initScrollSpy();
});

/**
 * Sticky Header State on Scroll
 */
function initStickyHeader() {
    const header = document.getElementById('site-header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on init in case page is refreshed while scrolled down
}

/**
 * Mobile Navigation Menu Toggles
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-nav-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!menuBtn || !mobileMenu) return;
    
    const toggleMenu = () => {
        const isOpen = menuBtn.classList.contains('active');
        
        if (isOpen) {
            menuBtn.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('active');
            mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = ''; // Re-enable scrolling
        } else {
            menuBtn.classList.add('active');
            menuBtn.setAttribute('aria-expanded', 'true');
            mobileMenu.classList.add('active');
            mobileMenu.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Lock scrolling
        }
    };
    
    menuBtn.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on nav link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuBtn.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form Validation and Success Modal
 */
function initFormValidation() {
    const form = document.getElementById('booking-form');
    const modal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalOverlay = modal ? modal.querySelector('.modal-overlay') : null;
    
    if (!form || !modal) return;
    
    // Validation Helpers
    const setError = (input, message) => {
        const group = input.parentElement;
        const errorSpan = group.querySelector('.error-message');
        group.classList.add('invalid');
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    };
    
    const clearError = (input) => {
        const group = input.parentElement;
        group.classList.remove('invalid');
    };
    
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    
    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const service = document.getElementById('service-select');
        
        // First Name Validation
        if (!firstName.value.trim()) {
            setError(firstName, 'First name is required');
            isValid = false;
        } else {
            clearError(firstName);
        }
        
        // Last Name Validation
        if (!lastName.value.trim()) {
            setError(lastName, 'Last name is required');
            isValid = false;
        } else {
            clearError(lastName);
        }
        
        // Email Validation
        if (!email.value.trim()) {
            setError(email, 'Email address is required');
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            setError(email, 'Enter a valid email address');
            isValid = false;
        } else {
            clearError(email);
        }
        
        // Phone Validation
        if (!phone.value.trim()) {
            setError(phone, 'Phone number is required');
            isValid = false;
        } else {
            clearError(phone);
        }
        
        // Service Selection Validation
        if (!service.value) {
            setError(service, 'Please select a service');
            isValid = false;
        } else {
            clearError(service);
        }
        
        if (isValid) {
            // Populate Modal Summary
            document.getElementById('summary-name').textContent = `${firstName.value.trim()} ${lastName.value.trim()}`;
            document.getElementById('summary-service').textContent = service.options[service.selectedIndex].text;
            document.getElementById('summary-phone').textContent = phone.value.trim();
            document.getElementById('summary-email').textContent = email.value.trim();
            
            // Show Modal
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            
            // Reset Form
            form.reset();
        }
    });
    
    // Remove invalid indicators dynamically on keyup/change
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value) {
                clearError(input);
            }
        });
        input.addEventListener('blur', () => {
            if (input.value) {
                clearError(input);
            }
        });
    });
    
    // Close Modal Logic
    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    };
    
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
}

/**
 * ScrollSpy to Update Active Class in Navigation Links
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], header');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    
    const handleScrollSpy = () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120; // offset for sticky header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href === `#${currentSectionId}` || (href === '#' && currentSectionId === 'hero')) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
}
