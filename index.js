const container = document.getElementById('productsContainer');
document.getElementById('scrollLeft').onclick = () => container.scrollBy({ left: -300, behavior: 'smooth' });
document.getElementById('scrollRight').onclick = () => container.scrollBy({ left: 300, behavior: 'smooth' });

const container2 = document.getElementById('pproductsContainer');
document.getElementById('sscrollLeft').onclick = () => container2.scrollBy({ left: -300, behavior: 'smooth' });
document.getElementById('sscrollRight').onclick = () => container2.scrollBy({ left: 300, behavior: 'smooth' });
