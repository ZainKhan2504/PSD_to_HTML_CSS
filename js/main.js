$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $(".menu-toggle").click(function () {
        $(".main-menu").fadeToggle();
    });
});