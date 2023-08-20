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
  



  const optionButtons = document.querySelectorAll('.option-button');
const contentSections = document.querySelectorAll('.content');

function showContent(option) {
  contentSections.forEach(content => {
    if (content.id === `${option}-content`) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
}

optionButtons.forEach(button => {
  button.addEventListener('click', () => {
    optionButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const selectedOption = button.getAttribute('data-tab');
    showContent(selectedOption);
  });
});

// Show the default content (Windows) when the page loads
showContent('windows');