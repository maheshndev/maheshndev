
// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Dynamic Experience Years
const experienceStartYear = 2021;
const currentYear = new Date().getFullYear();
document.getElementById("experience-years").textContent = `${currentYear - experienceStartYear}+ years`;
