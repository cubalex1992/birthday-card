

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const body = document.body;
const sidebarLinks = document.querySelectorAll('.sidebar a');

hamburger.addEventListener('click', function () {
const isActive = sidebar.classList.toggle('active');
mainContent.classList.toggle('active');
body.style.overflow = isActive ? 'hidden' : 'auto'; // Prevent body scroll
hamburger.setAttribute('aria-expanded', isActive);
});

// Close sidebar when clicking outside of it
mainContent.addEventListener('click', function () {
if (sidebar.classList.contains('active')) {
 closeSidebar();
}
});

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
link.addEventListener('click', function () {
 closeSidebar();
});
});

function closeSidebar() {
sidebar.classList.remove('active');
mainContent.classList.remove('active');
body.style.overflow = 'auto';
hamburger.setAttribute('aria-expanded', 'false');
}
