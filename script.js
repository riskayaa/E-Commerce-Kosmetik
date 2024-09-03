var swiper = new Swiper(".mySwiper",{
        loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disabledonINteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});