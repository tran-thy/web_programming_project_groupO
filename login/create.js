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