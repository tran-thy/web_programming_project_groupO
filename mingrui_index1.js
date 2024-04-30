document.addEventListener("DOMContentLoaded", function () {
  const toggleNavBtn = document.getElementById("toggleNavBtn");
  const navLinks = document.querySelector(".nav-links");

  toggleNavBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = 3; //slides.length

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; //modulo: for index is always <script totalSlides
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // +totalSlides to avoid negative index
  showSlide(currentSlide);
}
const carousel = document.getElementById("myCarousel");
const slidetime = 4000; //4 seconds
let slideTimer = setInterval(nextSlide, slidetime);

carousel.addEventListener("mouseenter", () => {
  clearInterval(slideTimer); // Pause auto-slide when mouse enters
});

carousel.addEventListener("mouseleave", () => {
  slideTimer = setInterval(nextSlide, slidetime); // Resume auto-slide when mouse leaves
});

document.getElementById("leftButton").addEventListener("click", function () {
  window.location.href = "vietnamese_recipes.html";
});

document.getElementById("rightButton").addEventListener("click", function () {
  window.location.href = "chinese_Yanwen.html";
});
