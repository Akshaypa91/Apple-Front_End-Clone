const container = document.getElementById('productsContainer');
document.getElementById('scrollLeft').onclick = () => container.scrollBy({ left: -300, behavior: 'smooth' });
document.getElementById('scrollRight').onclick = () => container.scrollBy({ left: 300, behavior: 'smooth' });``