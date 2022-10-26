$(document).ready(function () {  //문서준비이벤트

    $('.mgnb_wrap').hide();

    $('.ham').click(function () {
        $('.mgnb_wrap').fadeIn()
        $('body').css({ 'overflow': 'hidden' })
    });

    $('.mgnb_close').click(function () {
        $('.mgnb_wrap').fadeOut()
        $('body').css({ 'overflow': 'auto' })
    });



    const look = new Swiper(".look", {
        slidesPerView: 2,
        spaceBetween: 50,
        centeredSlides: true,
        loop: true,
        slidesPerGroup: 3,

        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });



});//문서준비이벤트
