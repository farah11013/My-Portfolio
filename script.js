// Particle.js config
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00bcd4" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#00bcd4", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 6, "out_mode": "out" }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 200, "duration": 0.4 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

// Typing effect
const text = "Web Developer | Designer | Creator";
let i = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
  typingEl.textContent = "";
  i = 0;
  function step() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(step, 100);
    }
  }
  step();
}

// Smooth scrolling & navbar highlight
document.addEventListener("DOMContentLoaded", function () {
  typeEffect();

  const links = document.querySelectorAll('.main-navbar a');
  const sections = document.querySelectorAll('section');

  function setActiveSection(target) {
    if (!target) return;
    sections.forEach(sec => sec.classList.remove('active'));
    target.classList.add('active');

    links.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.main-navbar a[href="#${target.id}"]`);
    if (activeLink) activeLink.classList.add('active');
  }

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 20,
          behavior: 'smooth'
        });
        setActiveSection(target);
      }
    });
  });

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 150;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        setActiveSection(sec);
      }
    });
  });

  if (sections.length) setActiveSection(sections[0]);

  // Theme toggle (Dark/Light mode)
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem("theme", localStorage.getItem("theme") || "dark");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "dark");
    }
  });
});
