document.addEventListener('DOMContentLoaded', () => {
    // Function to extract dishId from URL
    function getDishIdFromUrl(url) {
        const urlParams = new URLSearchParams(url.search);
        return urlParams.get('dishId');
    }

    // Function to hide sections
    const hideSectionsInEachRecipePage = () => {
        document.getElementById('highlighted-section').style.display = 'none';
        document.getElementById('myCarousel').style.display = 'none';
        document.getElementById('search-results-section').style.display = 'none';
        document.getElementById('about-us-section').style.display = 'none';
        document.getElementById('vn-recipe-display-section').style.display = 'none';
        document.getElementById('cn-recipe-display-section').style.display = 'none'; // Show the Chinese recipe section
    };

    // Extract dishId from the current URL
    const currentUrl = new URL(window.location.href);
    const dishId = getDishIdFromUrl(currentUrl);
    console.log("Current URL:", currentUrl);
    console.log("Dish ID:", dishId);

    // Check if dishId is defined
    if (dishId) {
        // Call the API to fetch data details according to the ID
        fetch(`http://localhost:3001/vietnamese/${dishId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update the content of HTML elements if they exist
                const updateElement = (id, value) => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.textContent = value;
                    }
                };

                updateElement('dish-image', `<img src="${data.dishimage}" alt="${data.dishname}">`);
                updateElement('dish-name', data.dishname);
                updateElement('dish-type', data.dishtype);
                updateElement('dish-history', data.dishhistory);
                updateElement('recipe-ingredients', data.recipeingredients.split(',').map(ingredient => `<li>${ingredient}</li>`).join(''));
                updateElement('recipe-instructions', data.recipeinstruction);
                updateElement('dish-name-2', data.dishname);
                updateElement('dish-name-congratulations', data.dishname);

                // Check if dish video exists and embed it
                if (data.dishvideo) {
                    // Extract video ID from YouTube URL
                    const videoId = data.dishvideo.split('v=')[1];
                    if (videoId) {
                        // Construct embedded player URL
                        const embeddedUrl = `https://www.youtube.com/embed/${videoId}`;
                        const dishVideoElement = document.getElementById('dish-video');
                        if (dishVideoElement) {
                            dishVideoElement.src = embeddedUrl;
                        }
                    }
                }

                // Hide sections after displaying recipe details
                hideSectionsInEachRecipePage();
            })
            .catch(error => {
                console.error('Error retrieving dish data:', error);
                // Display a user-friendly error message
                const errorMessageElement = document.getElementById('error-message');
                if (errorMessageElement) {
                    errorMessageElement.textContent = 'Error retrieving dish data. Please try again later.';
                }
            });

        // Add event listener for view details buttons
        const viewDetailButtons = document.querySelectorAll('.view-details');
        viewDetailButtons.forEach(button => {
            button.addEventListener('click', () => {
                const dishId = button.getAttribute('data-dish-id');
                if (dishId) {
                    // Redirect to the same page with the dishId parameter
                    window.location.href = `_each-recipe-detail.html?dishId=${dishId}`;
                } else {
                    console.error("Dish ID is not defined.");
                }
            });
        });
    } else {
        console.log("Dish ID is not present in the URL. Script will not execute.");
    }
});