const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
    slider.addEventListener("click", e => {
        const slides = slider.querySelectorAll(".slider__item");
        if (e.target.classList.contains("slider__toggle")) {
            const sliderToggles = slider.querySelectorAll(".slider__toggle");

            sliderToggles.forEach(toggle => toggle.classList.remove("slider__toggle--current"));
            e.target.classList.add("slider__toggle--current");

            const toggleIndex = Array.from(sliderToggles).findIndex(toggle => toggle === e.target);
            if (toggleIndex !== -1) {
                slides.forEach(slide => slide.classList.remove("slider__item--current"));
                slides[toggleIndex].classList.add("slider__item--current");
            }
        }

        if (e.target.classList.contains("review__arrow") || e.target.parentElement.classList.contains("review__arrow")) {
            const currentSliderIndex = Array.from(slides).findIndex(slide => slide.classList.contains("slider__item--current"));
            slides[currentSliderIndex].classList.remove("slider__item--current");

            if (e.target.classList.contains("review__arrow--prev") || e.target.parentElement.classList.contains("review__arrow--prev")) {
                if (currentSliderIndex === 0) {
                    slides[slides.length - 1].classList.add("slider__item--current");
                } else {
                    slides[currentSliderIndex - 1].classList.add("slider__item--current");
                }
            } else if (e.target.classList.contains("review__arrow--next") || e.target.parentElement.classList.contains("review__arrow--next")) {
                if (currentSliderIndex === slides.length - 1) {
                    slides[0].classList.add("slider__item--current");
                } else {
                    slides[currentSliderIndex + 1].classList.add("slider__item--current");
                }
            }
        }
    });
});