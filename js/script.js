document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".image-slider img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    let cocoSection = document.querySelector(".coco-section");

    function revealOnScroll() {
        let sectionPos = cocoSection.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.5;

        if (sectionPos < screenPos) {
            cocoSection.classList.add("visible");
        }

        // Move text up gradually
        if (sectionPos < window.innerHeight / 3) {
            cocoSection.classList.add("scrolled");
        } else {
            cocoSection.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    let vignelliSection = document.querySelector(".vignelli-section");

    function revealOnScroll() {
        let sectionPos = vignelliSection.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.5;

        if (sectionPos < screenPos) {
            vignelliSection.classList.add("visible");
        }

        // Move text up gradually
        if (sectionPos < window.innerHeight / 3) {
            vignelliSection.classList.add("scrolled");
        } else {
            vignelliSection.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});
