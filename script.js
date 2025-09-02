document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Scroll suave en la navbar
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // 🔹 Fade-in animación en secciones
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // 🔹 Interacción en íconos de habilidades
  document.querySelectorAll(".skills-grid i").forEach(icon => {
    icon.addEventListener("click", () => {
      icon.style.transform = "scale(1.3)";
      setTimeout(() => {
        icon.style.transform = "scale(1)";
      }, 250);
    });
  });

  // 🔹 Animación extra para el header
  const header = document.querySelector(".header");
  header.style.opacity = "0";
  header.style.transform = "translateY(-30px)";
  setTimeout(() => {
    header.style.transition = "opacity 1s ease, transform 1s ease";
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 300);

  console.log("🚀 CV cargado con éxito");
});
