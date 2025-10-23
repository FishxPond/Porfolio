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

// Handle clicking on an artwork to go to art.html

artworks.forEach(art => {
  art.addEventListener('click', () => {
    const artId = art.dataset.id; // get the unique id
    // Go to art.html and pass the id in the URL
    window.location.href = `art.html?id=${artId}`;
  });
});