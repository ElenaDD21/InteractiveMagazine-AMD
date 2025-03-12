document.addEventListener("DOMContentLoaded", function () {
    // Image Slider Logic
    let images = document.querySelectorAll(".image-slider img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 1000);

    // Section Scroll Animations
    let sections = document.querySelectorAll(".coco-section, .vignelli-section, .sholes-section");

    function revealOnScroll() {
        sections.forEach((section) => {
            let sectionPos = section.getBoundingClientRect().top;
            let screenPos = window.innerHeight / 1.5;

            if (sectionPos < screenPos) {
                section.classList.add("visible");
            }

            if (section.classList.contains("vignelli-section") || section.classList.contains("coco-section")) {
                if (sectionPos < window.innerHeight / 3) {
                    section.classList.add("scrolled");
                } else {
                    section.classList.remove("scrolled");
                }
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);

    // Christopher Latham Sholes Section Animation
    let sholesText = document.querySelector(".sholes-text h2");
    let sholesQuote = document.querySelector(".sholes-quote");
    let fadeElements = document.querySelectorAll(".fade-in, .fade-in-delay");

    function revealSholes() {
        let sectionPos = document.querySelector(".sholes-section").getBoundingClientRect().top;
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

    window.addEventListener("scroll", revealSholes);

    // Footer Animation
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
