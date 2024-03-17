// Function for the "Home" button
const homeButton = document.getElementById("home");
homeButton.addEventListener("click", handleHomeButtonClick);
homeButton.addEventListener("keypress", handleHomeButtonKeyPress);

// Function to handle click event for the "Home" button
function handleHomeButtonClick() {
  // Navigate to the main page of the website
  window.location.href = "index.html"; // Replace "index.html" with the actual URL of your main page
}

// Function to handle keypress event for the "Home" button
function handleHomeButtonKeyPress(event) {
  if (event.key === "Enter") {
    // Navigate to the main page of the website
    window.location.href = "index.html"; // Replace "index.html" with the actual URL of your main page
  }
}
