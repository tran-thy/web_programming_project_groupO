// const BACKEND_URL = 'http://localhost:3001'
// class User {
//   #id = undefined
//   #email = undefined

//   constructor(){
//     const userFromStorage = sessionStorage.getItem('user')
//     if (userFromStorage) {
//       const userObeject = JSON.parse(userFromStorage)
//       this.#id = userObeject.id
//       this.#email = userObeject.email
//     }
//   }
//   get id() {
//       return this.#id;
//   }
//   get email() {
//       return this.#email;
//   }
//   get isLoggedIn() {
// return this.#id !== undefined ? true : false
//   }
//   async login(email, password) {
//       const data = JSON.stringify({ email: email, password: password });
//   const response = await fetch(BACKEND_URL + '/user/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: data
//   });
//   if (response.ok === true) {
//     const json = await response.json();
//    this.#id = json.id;
//    this.#email = json.email;
//    sessionStorage.setItem('user', JSON.stringify(json));
//     return this
//   } else {
//     throw response.statusText;
//   }
// }
// async register(email, password,username) {
//   const data = JSON.stringify({ email: email, password: password,username:username });
// const response = await fetch(BACKEND_URL + '/user/register', {
// method: 'POST',
// headers: {
//   'Content-Type': 'application/json'
// },
// body: data
// });
// if (response.ok === true) {
// const json = await response.json();
// return json.id
// } else {
// throw response.statusText;
// }
// }
// logout() {
//   this.#id = undefined
//   this.#email = undefined
//   sessionStorage.removeItem('user')
// }
// }

import { User } from "./Users.js";
const user = new User()
const email_input = document.querySelector('#user-email')
const password_input = document.querySelector('#password')
const username_input = document.querySelector('#username')

document.querySelector('#confirm-button').addEventListener('click',(event) => {
  event.preventDefault()
  const email = email_input.value
  const password = password_input.value
  const username = username_input.value
  user.register(email, password, username).then(user => {
    window.location.href = 'login.html'
  }).catch((error) => {
    alert(error)})

  
})