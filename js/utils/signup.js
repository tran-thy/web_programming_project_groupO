const isLoggedIn = localStorage.getItem("isLoggedIn");
const signInIcon = document.getElementById("signInIcon");
const disabledImgStyles = `
  opacity: 0.3; 
  pointer-events: none; 
`;
if (isLoggedIn === "true") {
  signInIcon.src = "css/1486564400-account_81513.png";
  signInIcon.style.opacity = "1";
  signInIcon.style.pointerEvents = "auto";
  signInIcon.classList.remove("disabled-img");
} else {
  signInIcon.src = "css/1486564400-account_81513.png";
  signInIcon.style.cssText = disabledImgStyles;
  signInIcon.classList.add("disabled-img");
}
