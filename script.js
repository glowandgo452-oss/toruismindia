// script.js - FINAL CLEAN VERSION

document.addEventListener('DOMContentLoaded', () => {

  // ==============================
  // 1. Mobile Menu
  // ==============================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ==============================
  // 2. Hero Slider
  // ==============================
  const slides = document.querySelectorAll('.slide');

  if (slides.length > 0) {
    let current = 0;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    let sliderInterval = setInterval(nextSlide, 3000);

    const sliderContainer = document.getElementById('heroSlider');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(sliderInterval);
      });

      sliderContainer.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(nextSlide, 3000);
      });
    }
  }

  // ==============================
  // 3. Active Nav Highlight
  // ==============================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // ==============================
  // 4. Contact Form Validation
  // ==============================
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      let isValid = true;

      if (!name.value.trim()) {
        alert("Enter your name");
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value)) {
        alert("Enter valid email");
        isValid = false;
      }

      if (!message.value.trim()) {
        alert("Enter your message");
        isValid = false;
      }

      if (isValid) {
        alert(`✅ Thank you ${name.value}! We will contact you soon ✈️`);
        contactForm.reset();
      }
    });
  }

  // ==============================
  // 5. Scroll Reveal Animation
  // ==============================
  const revealElements = document.querySelectorAll('.category-card, .highlight-card, .package-card');

  function revealOnScroll() {
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if (top < window.innerHeight - 50) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);

  // ==============================
  // 6. Page Load Animation
  // ==============================
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

});


// ==============================
// 7. SEARCH FUNCTION (GLOBAL)
// ==============================
function searchPlace() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".highlight-card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}
function rate(stars){
  alert("⭐ You rated " + stars + " stars!");
}