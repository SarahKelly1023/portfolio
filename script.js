// script.js

// ===== Preloader =====
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.6s ease';
    setTimeout(() => { preloader.style.display = 'none'; }, 600);
}

window.addEventListener('load', hidePreloader);
// Fallback: hide preloader after 5 seconds
setTimeout(hidePreloader, 5000);

// ===== Scroll-to-top button =====
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
});

// ===== Fade-in sections on scroll =====
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in-section');
    const appearOptions = { threshold: 0.1 };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.classList.add('appear');
            observer.unobserve(entry);
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    // ===== Animate skill bars =====
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        setTimeout(() => {
            skill.style.width = level;
        }, 800); // slight delay to match fade-in
    });
});

// About Section Scroll Animation
const aboutCards = document.querySelectorAll(".about-card");

function aboutReveal() {
  aboutCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", aboutReveal);
aboutReveal(); // 초기 실행

// Education Scroll Animation
const educationItems = document.querySelectorAll(".education-item");

function educationReveal() {
  educationItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", educationReveal);
educationReveal(); // 초기 실행


// Contact Card 3D Mouse Move
const cards = document.querySelectorAll(".contact-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    card.style.transform = `rotateY(${x/15}deg) rotateX(${-y/15}deg) translateY(-10px) scale(1.07)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)";
  });
});

// Language Card 3D Mouse Move
const langCards = document.querySelectorAll(".language-card");

langCards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    card.style.transform = `rotateY(${x/15}deg) rotateX(${-y/15}deg) translateY(-10px) scale(1.08)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)";
  });
});

// 3D 마우스 패럴랙스
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30; // 좌우 회전
  const y = (e.clientY / window.innerHeight - 0.5) * 30; // 상하 회전

  document.querySelectorAll("[data-parallax]").forEach((el) => {
    el.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
});

const cursor = document.querySelector(".cursor-light");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

