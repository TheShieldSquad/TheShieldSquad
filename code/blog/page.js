const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('nav-bar');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.querySelector('i').classList.toggle('fa-sun');
});

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
});
