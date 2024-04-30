function loadtop_Header() {
  const top_header = document.createElement("div");
  top_header.innerHTML = `
      <div class="top-header bg-light-brown py-2">
      <div class="container">
          <div class="row align-items-center">
              <!-- Social Media Icons -->
              <div class="col-md-6">
                  <div class="top-social text-white">
                      <a href="https://github.com"><i class="fab fa-github fa-2x"></i></a>
                      <a href="https://facebook.com"><i class="fab fa-facebook fa-2x"></i></a>
                      <a href="https://instagram"><i class="fab fa-instagram fa-2x"></i></a>
                      <a href="https://twitter.com"><i class="fab fa-twitter fa-2x"></i></a>
                  </div>
              </div>
  
              <!-- Search and Login/Register Area -->
              <!-- I think this part need more discussion: many ways to that -->
              <div class="col-md-6">
                  <div class="signup-search-area d-flex align-items-center">
                      <!-- Login/Register Area -->
                      <!-- It is can be change other way by by button ... -->
                      <div class="login_register_area d-flex">
                          <div class="login">
                              <a href="../login/login-interface.html" class="text-black">Sign in</a>
                          </div>
                      </div>
  
                      <!-- Search section -->
                      <div class="d-flex justify-content-between align-items-center" id="search-container">
                          <div class="search-options">
                              <button class="btn btn-primary search-symbol" type="button" id="search-button-icon">
                <i class="fas fa-search"></i>
              </button>
                              <div class="input-group search-box" style="display: none">
                                  <input type="text" class="form-control" id="search-input" placeholder="Dish or ingredient..." aria-label="Search for a dish" aria-describedby="search-box-expanded" autocomplete="off" />
                                  <button class="btn btn-primary" type="button" id="search-button">
                  Search
                </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
      `;
  document.body.appendChild(top_header); // Append top_header instead of prepending it.
}

// function loadHeader() {
//   const header = document.createElement("header");
//   header.innerHTML = `
// <!-- Part II: Menu bar -->
//     <div class="container">
//         <div class="row align-items-center">
//             <!-- Left Side - Logo and Name -->
//             <div class="logo col-md-6 d-flex align-items-center">
//                 <img class="image-wrapper" id="image-wrapper-left" src="data/images/logo/logo.png" alt="Logo" width="15%" />
//                 <h1 class="logo_name" id="logo-name-left">CHOPSTICKS WORLD</h1>
//             </div>

//             <!-- Right Side - Navigation -->
//             <div class="wrapper col-md-6">
//                 <div id="nav-wrapper">
//                     <div id="toggle">
//                         <i class="fas fa-bars"></i>
//                     </div>
//                     <nav class="navbar navbar-expand-md">
//                         <ul class="navbar-nav">
//                             <li class="nav-item">
//                                 <a href="index.html" class="nav-link"><strong>HOME</strong></a>
//                             </li>

//                             <li class="nav-item-btn">
//                                 <button class="btn vietnamese-recipes-btn" id="vietnamese-recipes-btn">
//                 <strong>VIETNAMESE RECIPES</strong>
//               </button>
//                             </li>

//                             <!-- <li class="nav-item-btn">
//                                 <button class="btn chinese-recipes-btn" id="chinese-recipes-btn">
//                                     <strong>CHINESE RECIPES</strong>
//                                 </button>
//                             </li> -->

//                             <li class="nav-item">
//                                 <a href="chinese_Yanwen.html" class="nav-link"><strong>CHINESE RECIPES</strong></a>
//                             </li>

//                             <li class="nav-item-btn">
//                                 <button class="btn about-btn" id="about-btn">
//                 <strong>ABOUT US</strong>
//               </button>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//   document.body.prepend(header);
// }

// function loadFooter() {
//   const footer = document.createElement("footer");
//   footer.innerHTML = `
//     <footer class="footer py-5">
//     <div class="container">
//       <div class="row">
//         <div class="col-md-4">
//           <h1 class="logo_name_footer">CHOPSTICKS WORLD</h1>
//           <p>Copyright &copy; 2024</p>
//         </div>
//         <div class="col-md-4">
//           <nav class="nav-footer">
//             <ul class="custom-list">
//               <li><a href="index.html" class="nav-link-footer">HOME</a></li>
//               <li>
//                 <button
//                   class="btn footer-btn-about"
//                   id="vietnamese-recipes-btn-footer"
//                 >
//                   VIETNAMESE RECIPES
//                 </button>
//               </li>
//               <!-- <li>
//                               <button class="btn footer-btn-about" id="chinese-recipes-btn-footer">CHINESE RECIPES</button>
//                           </li> -->
//               <li>
//                 <a href="chinese_Yanwen.html" class="nav-link-footer"
//                   >CHINESE RECIPES</a
//                 >
//               </li>

//               <li>
//                 <button class="btn footer-btn-about" id="footer-btn-about">
//                   ABOUT US
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         <div class="social col-md-4">
//           <a href="https://github.com"><i class="fab fa-github fa-2x"></i></a>
//           <a href="https://facebook.com"
//             ><i class="fab fa-facebook fa-2x"></i
//           ></a>
//           <a href="https://instagram"
//             ><i class="fab fa-instagram fa-2x"></i
//           ></a>
//           <a href="https://twitter.com"
//             ><i class="fab fa-twitter fa-2x"></i
//           ></a>
//         </div>
//       </div>
//     </div>
//   </footer>
//       `;
//   document.body.appendChild(footer);
// }

loadtop_Header();
// loadHeader();
// loadFooter();

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".post").addEventListener("click", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      window.location.href = "post-vnese-newrecipe.html";
    } else {
      alert("Please sign in to post.");
    }
  });
});
