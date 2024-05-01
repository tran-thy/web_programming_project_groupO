const isLoggedIn = localStorage.getItem("isLoggedIn");
const signInIcon = document.querySelector(".signInIcon");
const disabledImgStyles = `
  opacity: 0.3; 
  pointer-events: none; 
`;
if (isLoggedIn === "true") {
  signInIcon.src = "chinese_images/head.png";
  signInIcon.style.opacity = "1";
  signInIcon.style.pointerEvents = "auto";
  signInIcon.classList.remove("disabled-img");
} else {
  signInIcon.src = "chinese_images/head.png";
  signInIcon.style.cssText = disabledImgStyles;
  signInIcon.classList.add("disabled-img");
}
