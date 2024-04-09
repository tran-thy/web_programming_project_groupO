document.getElementById('about-btn').addEventListener('click', function() {
    const aboutUsSection = document.getElementById('about-us-section');

    fetch('about_us_content.html')
        .then(response => response.text())
        .then(data => {
            aboutUsSection.innerHTML = data;
            document.getElementById('highlighted-section').style.display = 'none';
            document.getElementById('myCarousel').style.display = 'none';
        });
});