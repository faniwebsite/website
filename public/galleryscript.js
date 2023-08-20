document.addEventListener("DOMContentLoaded", function() {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    const isActive = (currentLocation === href || currentLocation === `/${href}`);
    link.classList.toggle('active', isActive);
  });

  // Add active class to parent link if a child link is active
  navLinks.forEach(function(link) {
    if (link.classList.contains('active')) {
      let parentLink = link.closest('.nav-item');
      if (parentLink) {
        parentLink.classList.add('active');
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Initialize MixItUp
  const mixer = mixitup('#gallery-container', {
    selectors: {
      target: '.gallery-item',
      control: '[data-filter]'
    }
  });

  // Add click event listeners to the buttons
  const buttons = document.querySelectorAll('[data-filter]');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });

      // Add active class to the clicked button
      button.classList.add('active');

      // Get the clicked button's category
      const category = button.getAttribute('data-filter');

      // If the category is 'all', show all items, else filter the items based on the category
      if (category === 'all') {
        mixer.filter('.gallery-item');
      } else {
        mixer.filter(`.${category}`);
      }
    });
  });
});

let galleryItems = [
  { caption: "i am first ", imageUrl: "/gallery1.jpeg", category: "windows" },
  { caption: "i am second", imageUrl: "/gallery2.jpeg", category: "doors" },
  { caption: "i am third", imageUrl: "/gallery3.jpeg", category: "aluminium" },
  { caption: "i am fourth", imageUrl: "/gallery4.jpeg", category: "conservatories" },
  { caption: "i am fifth", imageUrl: "/gallery5.jpeg", category: "doors" },
  { caption: "i am six", imageUrl: "/gallery6.jpeg", category: "windows" },
  { caption: "i am seven", imageUrl: "/gallery7.jpeg", category: "aluminium" },
  { caption: "i am eight", imageUrl: "/gallery8.jpeg", category: "conservatories" },
  { caption: "i am nine", imageUrl: "/gallery9.jpeg", category: "doors" },
  { caption: "i am ten", imageUrl: "/gallery10.jpeg", category: "windows" },
  { caption: "i am eleven", imageUrl: "/gallery11.jpeg", category: "doors" },
  { caption: "i am twelve", imageUrl: "/gallery12.jpeg", category: "windows" },
  { caption: "i am thirteen", imageUrl: "/gallery13.jpeg", category: "doors" },
];

// Get the gallery container
const galleryContainer = document.getElementById('gallery-container');

// Loop through the galleryItems array and create gallery items
galleryItems.forEach(function(item, index) {
  // Create a div for the gallery item
  const galleryItemDiv = document.createElement('div');
  galleryItemDiv.classList.add('col', 'gallery-item', item.category);

  const anchorElement = document.createElement('a');
  anchorElement.href = item.imageUrl;

  // Create a div for the border box and image
  const itemContentDiv = document.createElement('div');
  itemContentDiv.classList.add('gallery-item-content');

  // Create the image element
  const imgElement = document.createElement('img');
  imgElement.src = item.imageUrl;
  imgElement.alt = `Image ${index + 1}`;
  imgElement.classList.add('gallery-img');

  // Create the caption element
  const captionDiv = document.createElement('div');
  captionDiv.classList.add('caption');
  captionDiv.textContent = item.caption; // Use the caption from the data

  // Append the image and caption to the itemContentDiv
  anchorElement.appendChild(imgElement);
  itemContentDiv.appendChild(anchorElement);
  itemContentDiv.appendChild(captionDiv);
  galleryItemDiv.appendChild(itemContentDiv);

  galleryContainer.querySelector('.row').appendChild(galleryItemDiv);
});

/* const lightbox = new SimpleLightbox('.gallery-item-content a'); */







