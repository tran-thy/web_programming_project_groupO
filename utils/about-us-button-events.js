document.getElementById("about-btn").addEventListener("click", function() {
    const aboutUsSection = document.getElementById("about-us-section");

    fetch("_about-us-content.html")
        .then((response) => response.text())
        .then((data) => {
            aboutUsSection.innerHTML = data;

            // Hide the section
            document.getElementById('highlighted-section').style.display = 'none';
            document.getElementById('myCarousel').style.display = 'none';
            document.getElementById('search-results-section').style.display = 'none';
            document.getElementById('vn-recipe-display-section').style.display = 'none';
            document.getElementById('cn-recipe-display-section').style.display = 'none';
        });
});

document.getElementById("carousel-btn-about").addEventListener("click", function() {
    const aboutUsSection = document.getElementById("about-us-section");

    fetch("_about-us-content.html")
        .then((response) => response.text())
        .then((data) => {
            aboutUsSection.innerHTML = data;
            document.getElementById("highlighted-section").style.display = "none";
            document.getElementById("myCarousel").style.display = "none";
        });
});

document.getElementById("footer-btn-about").addEventListener("click", function() {
    const aboutUsSection = document.getElementById("about-us-section");

    fetch("_about-us-content.html")
        .then((response) => response.text())
        .then((data) => {
            aboutUsSection.innerHTML = data;

            // Hide the section
            document.getElementById('highlighted-section').style.display = 'none';
            document.getElementById('myCarousel').style.display = 'none';
            document.getElementById('search-results-section').style.display = 'none';
            document.getElementById('vn-recipe-display-section').style.display = 'none';
            document.getElementById('cn-recipe-display-section').style.display = 'none';
        });
});