// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
      });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.timeline-item, .cert-card, .skill-category, .contact-info, .contact-form');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.timeline-item, .cert-card, .skill-category, .contact-info, .contact-form').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form - in a real implementation, this would send your message.');
        
        // Reset form
        this.reset();
      });
    }
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    const heroSection = document.getElementById('hero');
    const heroHeight = heroSection.offsetHeight;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY >= heroHeight - 100) {
        navbar.style.backgroundColor = 'rgba(10, 61, 98, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.backgroundColor = 'rgba(10, 61, 98, 0.9)';
        navbar.style.boxShadow = 'none';
      }
    });
  });