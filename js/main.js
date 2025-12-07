$(document).ready(function () {
    /* Mobile Menu */

    const menuBurger = document.querySelector(".menu-burger");
    const menuNav = document.querySelector(".menu-nav");
    const menuNavLinks = document.querySelectorAll(".menu-nav a");
    const bodyEl = document.body;

    menuBurger.addEventListener("click", function () {
        bodyEl.classList.toggle("lock");
        this.classList.toggle("menu-burger--active");
        menuNav.classList.toggle("menu-nav--active");
    });

    menuNavLinks.forEach(function (item) {
        item.addEventListener("click", function () {
            bodyEl.classList.remove("lock");
            menuBurger.classList.remove("menu-burger--active");
            menuNav.classList.remove("menu-nav--active");
        });
    });

    /* Fancybox */

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    /* OwlCarousel */

    const owl = $("#testimonial-slider");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        // loop: true,
        // margin: 0,
        // dotsEach: true,
        responsive: {
            900: {
                items: 2,
                margin: 0,
            },
        },
    });

    const prev = $("#sliderPrev");
    const next = $("#sliderNext");

    prev.click(function () {
        owl.trigger("prev.owl.carousel");
    });
    next.click(function () {
        owl.trigger("next.owl.carousel");
    });
});
