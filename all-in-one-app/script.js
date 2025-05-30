// Simple review carousel rotation
const reviews = document.querySelectorAll('.review');
let currentReview = 0;

function showReview(index) {
  reviews.forEach((r, i) => {
    r.classList.toggle('active', i === index);
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}

setInterval(nextReview, 4000);

// Smooth scrolling for nav links
document.querySelectorAll('.nav a, .btn-primary').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('mobile-active');
});

// Close menu when clicking a nav link (on mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('mobile-active')) {
      nav.classList.remove('mobile-active');
    }
  });
});
 const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
      nav.classList.toggle('mobile-active');
    });

    // Close menu when clicking a nav link (on mobile)
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('mobile-active')) {
          nav.classList.remove('mobile-active');
        }
      });
    });