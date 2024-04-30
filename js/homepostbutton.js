// const homepostbutton = document.querySelector(".post");

// // Check if the user is logged in when the document is loaded
// document.addEventListener('DOMContentLoaded', function () {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');

//     if (isLoggedIn === 'true') {
//         // If logged in, remove the disabled attribute from the button
//         homepostbutton.removeAttribute('disabled');
//     }
// });

// // Add event listener to the "Post" button
// homepostbutton.addEventListener("click", function() {
//     // Check if the user is logged in
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     if (isLoggedIn === 'true') {
//         // If logged in, redirect to the postnewrecipe.html page
//         window.location.href = 'postnewrecipe.html';
        
//     } else {
//         // If not logged in, display a message or take another action
//         alert("Please sign in to post.");
       
//         // event.preventDefault();
//         homepostbutton.disabled = true;
//     }
// });

// Listen for the DOMContentLoaded event
// document.addEventListener('DOMContentLoaded', function () {
//     // Select the post button
//     const homepostbutton = document.querySelector(".disabled-img");

//     // Check if the user is logged in
//     const isLoggedIn = localStorage.getItem('isLoggedIn');

//     if (isLoggedIn === 'true') {
//         // If logged in, remove the disabled attribute from the button
//         homepostbutton.removeAttribute('disabled');
//     }

//     // Add event listener to the "Post" button
//     homepostbutton.addEventListener("click", function() {
//         // Check if the user is logged in
//         const isLoggedIn = localStorage.getItem('isLoggedIn');
//         if (isLoggedIn === 'true') {
//             // If logged in, redirect to the postnewrecipe.html page
//             window.location.href = 'postnewrecipe.html';
//         } else {
//             // If not logged in, display a message or take another action
//             alert("Please sign in to post.");
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    // Select the post button container
    const postContainer = document.querySelector("#post");

    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const signinimage = document.querySelector("#signInIcon")
    if (isLoggedIn === 'true') {
        // If logged in, remove the disabled class from the post button container
        // signinimage.style.src="css/user-profile";
        postContainer.classList.remove('disabled-img');
        
        // signinimage.src="css/user-profile.png";
        // signinimage.style.width = '30px';
        // signinimage.style.height = '30px';
        signinimage.style.opacity = "1";
    }

    // Add event listener to the "Post" button
    postContainer.addEventListener("click", function() {
        // Check if the user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn');
      
        if (isLoggedIn === 'true') {
            // If logged in, redirect to the postnewrecipe.html page
            signinimage.style.opacity = "1";
            window.location.href = 'postnewrecipe.html';
        } else {
            // If not logged in, display a message or take another action
           
            postContainer.style.color ="Please sign in to post." 
            alert("Please sign in to post.");
        }
    });
});