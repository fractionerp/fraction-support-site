// Navigation functions
function toggleSection(button) {
  const section = button.closest('.nav-section');
  section.classList.toggle('expanded');
}

function toggleAllSections(expand) {
  const sections = document.querySelectorAll('.nav-section');
  sections.forEach(section => {
    if (expand) {
      section.classList.add('expanded');
    } else {
      section.classList.remove('expanded');
    }
  });
}

function toggleMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const sidebar = document.querySelector('.sidebar');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  
  if (window.innerWidth <= 768 && 
      sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) && 
      !menuBtn.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// Expand section containing active link on page load and initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Expand section containing active link
  const activeLink = document.querySelector('.nav-link.active');
  if (activeLink) {
    const section = activeLink.closest('.nav-section');
    if (section) {
      section.classList.add('expanded');
    }
  }
});
