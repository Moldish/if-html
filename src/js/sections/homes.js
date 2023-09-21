import Swiper from 'swiper/bundle';



    (function () {

        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    })();



