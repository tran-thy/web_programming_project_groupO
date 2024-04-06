document.getElementById('about-btn').addEventListener('click', function() {
    const aboutUsSection = document.getElementById('about-us-section');
    const carouselSection = document.getElementById('myCarousel');
    fetch('about_us_content.html')
        .then(response => response.text())
        .then(data => {
            aboutUsSection.innerHTML = data;
            carouselSection.style.display = 'none';
        });
});