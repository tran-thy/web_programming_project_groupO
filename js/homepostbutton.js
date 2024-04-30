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

    if (isLoggedIn === 'true') {
        // If logged in, remove the disabled class from the post button container
        postContainer.classList.remove('disabled-img');
    }

    // Add event listener to the "Post" button
    postContainer.addEventListener("click", function() {
        // Check if the user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            // If logged in, redirect to the postnewrecipe.html page
            window.location.href = 'postnewrecipe.html';
        } else {
            // If not logged in, display a message or take another action
            alert("Please sign in to post.");
        }
    });
});