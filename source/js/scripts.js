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

let pricesToggles = document.querySelectorAll(".prices__toggle");
let pricesTable = document.querySelector(".prices__table");
let pricesTableTransform;

pricesToggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
        pricesToggles.forEach(toggle => toggle.classList.remove("slider__toggle--current"));
        e.target.classList.add("slider__toggle--current");

        if (e.target.textContent === "1") {
            pricesTableTransform = "translateX(35%)";
        } else if (e.target.textContent === "2") {
            pricesTableTransform  = "translateX(0)";
        } else {
            pricesTableTransform  = "translateX(-35%)";
        }

        pricesTable.style.transform = pricesTableTransform;
    })
});

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth >= 660) {
        pricesTable.style.transform = "";
    } else {
        pricesTable.style.transform = pricesTableTransform;
    }
});