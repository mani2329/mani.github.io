// Mobile Menu Toggle
const navLinks = document.getElementById('navLinks');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', () => {
    navLinks.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Form submission for contact page
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitBtn = document.getElementById('submitBtn');
        const status = document.getElementById('formStatus');
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            status.innerHTML = '<p class="success">Thank you for your message! I will get back to you soon.</p>';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Project filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            const projectCards = document.querySelectorAll('.project-item');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Skill bar animation on scroll
const skills = document.querySelectorAll('.skill');

function checkSkills() {
    skills.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(skillPosition < screenPosition) {
            skill.classList.add('in-view');
            const skillLevel = skill.querySelector('.skill-level');
            const percent = skillLevel.getAttribute('data-percent');
            skillLevel.style.setProperty('--target-width', percent);
        }
    });
}

// Run on load and scroll
window.addEventListener('load', checkSkills);
window.addEventListener('scroll', checkSkills);

// 