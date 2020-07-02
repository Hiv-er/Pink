let mainNav = document.querySelector(".main-nav");
let mainNavToggle = document.querySelector(".main-nav__toggle");
let pageHeader = document.querySelector(".page-header");

mainNav.classList.remove("main-nav--nojs");
pageHeader.classList.remove("page-header--non-transparent");

mainNavToggle.addEventListener("click", () => {
    mainNav.classList.toggle("main-nav--closed");
    mainNav.classList.toggle("main-nav--opened");
    pageHeader.classList.toggle("page-header--non-transparent");
});