// Get artwork ID from URL
const params = new URLSearchParams(window.location.search);
const artId = params.get('id');

// Artwork data
const artData = {
  art1: {
    title: "Artwork Title",
    date: "Spring 2024",
    images: [
      "images/Rectangle 4.png",
      "images/Rectangle 4.png",
      "images/Rectangle 4.png"
    ]
  },
  art2: {
    title: "Another Work",
    date: "Summer 2023",
    images: [
      "images/Rectangle 3.png",
      "images/Rectangle 3.png"
    ]
  }
};

// Display selected artwork
if (artData[artId]) {
  const artwork = artData[artId];
  const mainArt = document.getElementById('main-art');
  const title = document.getElementById('art-title');
  const date = document.getElementById('art-date');
  const variationContainer = document.getElementById('variation-container');

  // set initial image
  mainArt.src = artwork.images[0];
  title.textContent = artwork.title;
  date.textContent = artwork.date;

  // create variation thumbnails
  artwork.images.forEach((src, i) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    if (i === 0) thumb.classList.add('active');
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.variations img').forEach(img => img.classList.remove('active'));
      thumb.classList.add('active');
      mainArt.src = src;
    });
    variationContainer.appendChild(thumb);
  });
} else {
  document.querySelector('.art-main').innerHTML = "<p>Artwork not found.</p>";
}
