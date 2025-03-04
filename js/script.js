
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

document.addEventListener("DOMContentLoaded", function() {
    let sholesSection = document.querySelector(".sholes-section");

    function revealOnScroll() {
        let sectionPos = sholesSection.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.5;

        if (sectionPos < screenPos) {
            sholesSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    let sholesSection = document.querySelector(".sholes-section");
    let sholesText = document.querySelector(".sholes-text h2");
    let sholesQuote = document.querySelector(".sholes-quote");
    let fadeElements = document.querySelectorAll(".fade-in, .fade-in-delay");

    function revealOnScroll() {
        let sectionPos = sholesSection.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.5;

        if (sectionPos < screenPos) {
            sholesText.style.opacity = "1";
            sholesText.style.transform = "translateY(0)";

            sholesQuote.style.opacity = "1";
            sholesQuote.style.transform = "translateY(0)";

            fadeElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                }, index * 150);
            });
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    let footer = document.querySelector(".footer");
    let footerTitle = document.querySelector(".footer-title");

    function revealFooter() {
        let scrollPos = window.scrollY;
        let windowHeight = window.innerHeight;
        let footerOffset = footer.offsetTop;

        if (scrollPos + windowHeight > footerOffset) {
            footerTitle.style.opacity = "1";
            footerTitle.style.transform = "translateY(0)";
        }
    }

    window.addEventListener("scroll", revealFooter);
});
