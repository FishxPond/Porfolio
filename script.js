// Select all tabs and artwork elements
const tabs = document.querySelectorAll('.tab');
const artworks = document.querySelectorAll('.artwork');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove "active" class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add "active" to the clicked one
    tab.classList.add('active');

    const category = tab.textContent.toLowerCase();

    artworks.forEach(art => {
      const artCategory = art.dataset.category;
      if (category === 'all' || artCategory === category) {
        art.style.display = 'block';
      } else {
        art.style.display = 'none';
      }
    });
  });
});