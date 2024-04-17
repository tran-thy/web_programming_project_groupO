document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggle");
  var navbar = document.querySelector(".navbar");

  toggleButton.addEventListener("click", function () {
    navbar.classList.toggle("open");
  });
});
