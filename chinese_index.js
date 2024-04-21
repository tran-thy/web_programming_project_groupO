document.addEventListener("DOMContentLoaded", function() {
    // Assume you have fetched the total number of recipes from the backend and stored it in a variable named 'totalRecipes'
    const totalRecipes = 30; // Example total number of recipes

    const recipes = document.querySelectorAll('.recipe'); // Get all recipe items
    const itemsPerPage = 6; // Number of recipes to display per page
    const totalPages = Math.ceil(totalRecipes / itemsPerPage); // Calculate total number of pages
    const pagination = document.querySelector('.pagination'); // Get pagination container


    document.addEventListener("DOMContentLoaded", function() {
        // Assume you fetch the total number of recipes from the backend
        fetch('url_to_your_backend_endpoint')
            .then(response => response.json())
            .then(data => {
                const totalRecipes = data.totalRecipes; // Assuming your API response contains the total number of recipes
                const itemsPerPage = 6; // Number of recipes to display per page
                const totalPages = Math.ceil(totalRecipes / itemsPerPage); // Calculate total number of pages
                const pagination = document.querySelector('.pagination'); // Get pagination container
    
                // Rest of your code that uses totalRecipes
            })
            .catch(error => {
                console.error('Error fetching recipe data:', error);
            });
    });


    // // Create previous page button
    // const prevButton = document.createElement('button');
    // prevButton.textContent = 'Back';
    // prevButton.addEventListener('click', function() {
    //     showPreviousPage();
    // });
    // pagination.appendChild(prevButton);

    // Create pagination buttons
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', function() {
            showPage(i); // Display recipes for the clicked page
            setActiveButton(i); // Set active class for the clicked button
        });
        pagination.appendChild(button);
    }

    // Create next page button
    // const nextButton = document.createElement('button');
    // nextButton.textContent = 'Next';
    // nextButton.addEventListener('click', function() {
    //     showNextPage();
    // });
    // pagination.appendChild(nextButton);

    // Display recipes for the default first page
    showPage(1);

    // Function to display recipes for a specific page
    function showPage(pageNumber) {
        // Calculate the range of recipes to display
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalRecipes);

        // Hide all recipe items
        recipes.forEach(function(recipe) {
            recipe.style.display = 'none';
        });

        // Display recipes within the calculated range
        for (let i = startIndex; i < endIndex; i++) {
            recipes[i % itemsPerPage].style.display = 'block';
        }
    }

    // Function to show previous page
    function showPreviousPage() {
        const currentPage = getCurrentPage();
        if (currentPage > 1) {
            showPage(currentPage - 1);
            setActiveButton(currentPage - 1);
        }
    }

    // Function to show next page
    function showNextPage() {
        const currentPage = getCurrentPage();
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
            setActiveButton(currentPage + 1);
        }
    }

    // Function to get current active page
    function getCurrentPage() {
        const activeButton = document.querySelector('.pagination button.active');
        return parseInt(activeButton.textContent);
    }

    // Function to set active class for the clicked button
    function setActiveButton(selectedPage) {
        const buttons = document.querySelectorAll('.pagination button');
        buttons.forEach(function(button) {
            if (parseInt(button.textContent) === selectedPage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
});



window.addEventListener('resize', function() {
    adjustPagination();
});

function adjustPagination() {
    const pagination = document.querySelector('.pagination');
    const paginationButtons = document.querySelectorAll('.pagination button');

    const containerWidth = pagination.offsetWidth;
    let buttonsTotalWidth = 0;

    paginationButtons.forEach(function(button) {
        buttonsTotalWidth += button.offsetWidth;
    });

    if (buttonsTotalWidth > containerWidth) {
        const pageButtons = document.createElement('div');
        pageButtons.classList.add('page-buttons');
        
        paginationButtons.forEach(function(button) {
            pageButtons.appendChild(button);
        });

        pagination.appendChild(pageButtons);
    } else {
        const pageButtons = document.querySelector('.page-buttons');
        if (pageButtons) {
            paginationButtons.forEach(function(button) {
                pagination.appendChild(button);
            });
            pagination.removeChild(pageButtons);
        }
    }
}

window.addEventListener('DOMContentLoaded', function() {
    adjustPagination();
});



document.addEventListener("DOMContentLoaded", function() {
    const toggleNavBtn = document.getElementById('toggleNavBtn');
    const navLinks = document.querySelector('.nav-links');


    toggleNavBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show'); 
    });
});



window.addEventListener('DOMContentLoaded', function() {
     let descriptions = document.querySelectorAll('.description');
     descriptions.forEach(function(description) {
       if (description.scrollHeight > description.clientHeight) {
         description.classList.add('clamp'); 
       }
   });
});
  

