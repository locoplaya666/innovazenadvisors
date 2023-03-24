// Variables
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Navigation Menu Toggle
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Close Navigation Menu on Link Click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show Scroll to Top Button on Scroll
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const screenHeight = window.innerHeight;
    if (scrollHeight > screenHeight) {
        scrollTopBtn.classList.add('show-scroll');
    } else {
        scrollTopBtn.classList.remove('show-scroll');
    }
});

}
