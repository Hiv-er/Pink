const rangeControls = document.querySelectorAll(".range-controls");

rangeControls.forEach(rangeControl => {
    rangeControl.addEventListener("mousedown", e => {
        const target = e.target;
        if (target.classList.contains("range-controls__toggle")) {
            let shiftX = e.clientX - target.getBoundingClientRect().left;

            function onMouseMove(e) {
                let left = e.pageX - shiftX - rangeControl.getBoundingClientRect().left;
                if (left < 0) {
                    left = 0;
                }

                if (left + target.clientWidth > rangeControl.clientWidth) {
                    left = rangeControl.clientWidth - target.clientWidth;
                }
                target.style.left = left + 'px';
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);

            target.ondragstart = function() {
                return false;
            }
        }
    })
});