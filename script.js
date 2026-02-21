let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onlick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
}
