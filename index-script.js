let mainNav = document.querySelector('.js-menu');
let navBarToggle = document.querySelector('.nav-toggle');

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle('active');
})