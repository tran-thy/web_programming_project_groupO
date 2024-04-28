import { User } from "./Users.js";

const user = new User();
const email_input = document.querySelector("#user-email");
const password_input = document.querySelector("#password");

document.querySelector("#confirm-button").addEventListener("click", (event) => {
  event.preventDefault();
  const email = email_input.value;
  const password = password_input.value;
  user
    .login(email, password)
    .then((user) => {
      localStorage.setItem("isLoggedIn", "true"); // heyanwen added
      localStorage.setItem("userId", id); //Ha add
      window.location.href = "../index.html";
    })
    .catch((error) => {
      alert(error);
    });
});

// const email_input = document.querySelector('#user-email');
// const password_input = document.querySelector('#password');

// document.querySelector('#confirm-button').addEventListener('click', (event) => {
//   event.preventDefault();
//   const email = email_input.value;
//   const password = password_input.value;

//   user.login(email, password)
//     .then(() => {
//       // Set a flag in localStorage to indicate successful login
//       localStorage.setItem('isLoggedIn', 'true');
//       window.location.href = '../index.html';
//     })
//     .catch((error) => {
//       alert(error);
//     });
// });
