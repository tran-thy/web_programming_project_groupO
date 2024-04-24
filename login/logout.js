import { User } from "./Users.js";

const user = new User();

document.addEventListener('DOMContentLoaded', function () {
    const login_link = document.querySelector('.return-link');


    user.logout();

    login_link.innerHTML = "Login";
    login_link.href = "login.html";
});
