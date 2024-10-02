const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', function() {
    menuItems.classList.toggle('show');
    menuToggle.classList.toggle('open');
});

window.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target)) {
        menuItems.classList.remove('show');
        menuToggle.classList.remove('open');
    }
});
