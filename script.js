// Toggle menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("open");
});

// Animate cards on scroll
const cards = document.querySelectorAll('.card.animate');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function showOnScroll(elements) {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  const boxes = document.querySelectorAll(".box1, .box2, .box3");

  showOnScroll(cards);
  showOnScroll(boxes);
});

window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card");
  const boxes = document.querySelectorAll(".box1, .box2, .box3");

  showOnScroll(cards);
  showOnScroll(boxes);
});

const themeToggle = document.querySelector('.input');
const page = document.getElementById('page');

themeToggle.addEventListener('change', () => {
  page.classList.toggle('dark-theme');
});


const toggle = document.getElementById('themeToggle');
const body = document.getElementById('page');

// Load saved mode
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
