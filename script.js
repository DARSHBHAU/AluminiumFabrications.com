// Menu Toggle + Blur Effect
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const pageContent = document.querySelector(".page-content");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  pageContent.classList.toggle("blur");
});

// Dark Mode Toggle
const toggle = document.getElementById("themeToggle");
const body = document.getElementById("page");

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

// Scroll animation for .card
function revealOnScroll() {
  const reveals = document.querySelectorAll('.card');
  const triggerPoint = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
