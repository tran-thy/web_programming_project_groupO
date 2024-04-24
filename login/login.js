import { User } from "./Users.js";

const user = new User()
const email_input = document.querySelector('#user-email')
const password_input = document.querySelector('#password')

document.querySelector('#confirm-button').addEventListener('click',(event) => {
  event.preventDefault()
  const email = email_input.value
  const password = password_input.value
user.login(email, password).then((json) => {
  alert('Login successful')
  console.log(json)
}).catch((error) => {
  alert(error)})

  
})