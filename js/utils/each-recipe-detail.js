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
        // document.getElementById('cn-recipe-display-section').style.display = 'none';
    };

    // Extract dishId from the current URL
    const currentUrl = new URL(window.location.href);
    const dishId = getDishIdFromUrl(currentUrl);
    console.log("Current URL:", currentUrl);
    console.log("Dish ID:", dishId);

    // Check if dishId is defined
    if (dishId) {
        // Call the API to fetch data details according to the ID
        fetch(`http://localhost:3001/${dishId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update the content of HTML elements
                document.getElementById('dish-image').innerHTML = `<img src="${data.dishimage}" alt="${data.dishname}">`;
                document.getElementById('dish-name').textContent = data.dishname;
                document.getElementById('dish-type').textContent = data.dishtype;
                document.getElementById('dish-description').textContent = data.dishdescription;
                document.getElementById('recipe-ingredients').innerHTML = data.recipeingredients.split(',').map(ingredient => `<li>${ingredient}</li>`).join('');
                document.getElementById('recipe-instructions').textContent = data.recipeinstruction;
                document.getElementById('dish-name-2').textContent = data.dishname;
                document.getElementById('dish-name-congratulations').textContent = data.dishname;

                // Hide sections after displaying recipe details
                hideSectionsInEachRecipePage();
            })
            .catch(error => console.error('Error retrieving dish data:', error));

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