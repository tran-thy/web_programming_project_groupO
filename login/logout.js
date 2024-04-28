const BACKEND_URL = 'http://localhost:3001'
class User {
  #id = undefined
  #email = undefined

  constructor(){
    const userFromStorage = sessionStorage.getItem('user')
    if (userFromStorage) {
      const userObeject = JSON.parse(userFromStorage)
      this.#id = userObeject.id
      this.#email = userObeject.email
    }
  }
  get id() {
      return this.#id;
  }
  get email() {
      return this.#email;
  }
  get isLoggedIn() {
return this.#id !== undefined ? true : false
  }
  async login(email, password) {
      const data = JSON.stringify({ email: email, password: password });
  const response = await fetch(BACKEND_URL + '/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });
  if (response.ok === true) {
    const json = await response.json();
   this.#id = json.id;
   this.#email = json.email;
   sessionStorage.setItem('user', JSON.stringify(json));
    return this
  } else {
    throw response.statusText;
  }
}
async register(email, password,username) {
  const data = JSON.stringify({ email: email, password: password,username:username });
const response = await fetch(BACKEND_URL + '/user/register', {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body: data
});
if (response.ok === true) {
const json = await response.json();
return json.id
} else {
throw response.statusText;
}
}
logout() {
  this.#id = undefined
  this.#email = undefined
  sessionStorage.removeItem('user')
}
}


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
  const login_link = document.querySelector('.return-link');

  // Call the handleLogout function when the logout button is clicked
  login_link.addEventListener('click', handleLogout);
});
