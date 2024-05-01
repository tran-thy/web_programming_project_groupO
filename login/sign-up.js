const isLoggedIn = localStorage.getItem("isLoggedIn");
const signInIcon = document.querySelector(".signInIcon");

if (isLoggedIn === "true") {
  signInIcon.src = "chinese_images/head.png";
  signInIcon.style.opacity = "1";
  signInIcon.style.pointerEvents = "auto";
  signInIcon.classList.remove("disabled-img");
} else {
  signInIcon.src = "chinese_images/head.png";
  signInIcon.classList.add("disabled-img");
}
signInIcon.addEventListener("mouseover", function () {
  if (!this.classList.contains("disabled-img")) {
    this.style.opacity = "1"; // Apply opacity without !important
  }
});
