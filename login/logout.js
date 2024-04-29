import { User } from "./Users.js";


const user = new User();

// document.addEventListener('DOMContentLoaded', function () {
//     const login_link = document.querySelector('.return-link');


//     user.logout();

//     login_link.innerHTML = "login-interface.html";
//     login_link.href = "login-interface.html";
// });

// Function to handle logout--------------------------------
const handleLogout = () => {
  user.logout(); // Call the logout method of the User class
  // Redirect to the login page or perform any other actions after logout
  window.location.href = "login-interface.html";
}

document.addEventListener('DOMContentLoaded', function () {
  const login_link = document.querySelector('#confirm-button');

  // Call the handleLogout function when the logout button is clicked
  login_link.addEventListener('click', handleLogout);
});
