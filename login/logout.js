

// document.addEventListener('DOMContentLoaded', function () {
//     const login_link = document.querySelector('.return-link');


//     user.logout();

//     login_link.innerHTML = "login-interface.html";
//     login_link.href = "login-interface.html";
// });

// Function to handle logout--------------------------------
// const handleLogout = () => {
//   user.logout(); // Call the logout method of the User class
//   // Redirect to the login page or perform any other actions after logout
//   window.location.href = "login-interface.html";
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const login_link = document.querySelector('#confirm-button');
//   if(user.logout()){
//     localStorage.setItem("isLoggedIn", "false");
//     login_link.innerHTML = "Login";
//     login_link.href = "login.html";
//   }
 
// Function to handle logout
// document.addEventListener('DOMContentLoaded', function () {
//   const homepostbutton = document.querySelector(".post");
//   const isLoggedIn = localStorage.getItem('isLoggedIn');
//   const confirmButton = document.querySelector('#confirm-button');

//   // Function to handle logout
//   const handleLogout = () => {
//       user.logout();
//       window.location.href = "login-interface.html";
//   }

//   // Function to handle post button click

//   // Check if the user is logged in
//   if (isLoggedIn === 'true') {      
//       confirmButton.addEventListener('click', handleLogout);
//       homepostbutton.removeAttribute('disabled');
//   } else {
//       // homepostbutton.setAttribute('disabled', 'disabled');
//       alert("Please sign in.")
//   }
// });



// document.addEventListener('DOMContentLoaded', function () {
//   const homepostbutton = document.querySelector(".post");
//   const isLoggedIn = localStorage.getItem('isLoggedIn');
//   const confirmButton = document.querySelector('#confirm-button');
//   // Function to handle logout
//   const handleLogout = () => {
//       user.logout();
//       window.location.href = "login-interface.html";
//       // Disable the post button after logging out
//   }

//   // Function to handle post button click
  

//   if (isLoggedIn === 'true') {
//       homepostbutton.removeAttribute('disabled');
//       confirmButton.addEventListener('click', handleLogout);
      
//   } else {
//       homepostbutton.setAttribute('disabled', 'disabled');  
//       window.location.href = 'login-interface.html';
//     }
//   })

  // Event listener for logout button
 



  // homepostbutton.addEventListener("click", function() {
  //     const isLoggedIn = localStorage.getItem('isLoggedIn');
  //     if (isLoggedIn === 'true') {
         
  //     } else {
  //         alert("Please sign in to post.");
  //     }
  // });

  




// const handleLogout = () => {
//   user.logout(); // Call the logout method of the User class
//   // Redirect to the login page after logout
//   window.location.href = "login-interface.html";
  
// }
// homepostbutton = document.querySelector(".disabled-img");
// document.addEventListener('DOMContentLoaded', function () {
//   // Check if the user is logged in
//   if (isLoggedIn) {
//       // If not logged in, redirect to the login page
      
//       window.location.href = "login-interface.html";
//       homepostbutton.setAttribute('disabled', 'disabled');
//       localStorage.setItem("isLoggedIn", "false"); 
//   }
  
//   const confirmButton = document.querySelector('#confirm-button');

//   // Add event listener to handle logout
//   confirmButton.addEventListener('click', handleLogout);
// });


// this works

// import { User } from "./Users.js";

// const user = new User();

// // Function to handle logout
// const handleLogout = () => {
//   // Perform logout actions, such as clearing session storage
//   user.logout();

//   // Redirect to the login page after logout
//   window.location.href = "login-interface.html";
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const confirmButton = document.querySelector('#confirm-button');
  
//   // Check if the user is logged in
//   if (user.isLoggedIn) {
//     // If logged in, add event listener to handle logout
//     confirmButton.addEventListener('click', handleLogout);
//   } else {
//     // If not logged in, add event listener to redirect to login page
//     confirmButton.addEventListener('click', () => {
//       window.location.href = "login-interface.html";
//     });
//   }
// });
  
  
import { User } from "./Users.js";

const user = new User();



// Function to handle logout
const handleLogout = () => {
  
  user.logout();
  
  // Set isLoggedIn flag to "false"
  localStorage.setItem("isLoggedIn", "false");

  // Redirect to the login page after logout
  window.location.href = "login-interface.html";
}

document.addEventListener('DOMContentLoaded', function () {
  const confirmButton = document.querySelector('#confirm-button');
  
  // Add event listener to handle logout
  confirmButton.addEventListener('click', handleLogout);
});


  // Call the handleLogout function when the logout button is clicked
  // localStorage.setItem("isLoggedIn", "false"); // heyanwen added
  // login_link.addEventListener('click', handleLogout);

