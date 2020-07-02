let pricesSlider = document.querySelector(".prices__slider");
let pricesTable = document.querySelector(".prices__table");
let pricesTableTransform;

pricesSlider.addEventListener("click", e => {
    const target = e.target;

    if (target.classList.contains("slider__toggle")) {
        const pricesToggles = pricesSlider.querySelectorAll(".prices__toggle");

        pricesToggles.forEach(toggle => toggle.classList.remove("slider__toggle--current"));
        target.classList.add("slider__toggle--current");

        if (target.textContent === "1") {
            pricesTableTransform = "translateX(35%)";
        } else if (target.textContent === "2") {
            pricesTableTransform  = "translateX(0)";
        } else {
            pricesTableTransform  = "translateX(-35%)";
        }

        pricesTable.style.transform = pricesTableTransform;
    }
});

window.addEventListener('resize', () => {
    if (pricesTable) {
        if (document.documentElement.clientWidth >= 660) {
            pricesTable.style.transform = "";
        } else {
            pricesTable.style.transform = pricesTableTransform;
        }
    }
});