document.addEventListener('DOMContentLoaded', function() {
  const searchSymbol = document.querySelector('.search-symbol');
  const searchBox = document.querySelector('.search-box');

  searchSymbol.addEventListener('click', function() {
    searchBox.style.display = searchBox.style.display === 'none' ? 'flex' : 'none';
  });
});

