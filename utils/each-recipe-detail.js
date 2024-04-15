document.addEventListener('DOMContentLoaded', () => {
    // Function to extract dishId from URL
    function getDishIdFromUrl(url) {
        // Find the index of the 'dishId' parameter in the URL
        const dishIdIndex = url.indexOf('dishId=');
        if (dishIdIndex !== -1) {
            // Extract the substring starting from the dishIdIndex
            const substring = url.substring(dishIdIndex + 7); // 7 is the length of 'dishId='
            // Find the index of the next '&' character after the dishId
            const nextParamIndex = substring.indexOf('&');
            // Return the substring from dishIdIndex to nextParamIndex (if found), else return the whole substring
            return nextParamIndex !== -1 ? substring.substring(0, nextParamIndex) : substring;
        } else {
            return null; // dishId parameter not found
        }
    }

    // Extract dishId from the current URL
    const currentUrl = window.location.href;
    console.log("Current URL:", currentUrl);
    const dishId = getDishIdFromUrl(currentUrl);
    console.log("Dish ID:", dishId);

    // Check if dishId is defined
    if (dishId) {
        // Call the API to fetch data details according to the ID
        fetch(`http://localhost:3001/${dishId}`)
            .then(response => {
                // Check if response is successful
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