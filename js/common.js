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



    // const look = new Swiper(".look", {

    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },

    //     slidesPerView: 3,
    //     spaceBetween: 50,
    //     loop: true,
    //     slidesPerGroup: 3,
    //     loopFillGroupWithBlank: true,

    //     speed: 500,


    //     breakpoints: {
    //         640: {
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //             slidesPerGroup: 1,
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //             spaceBetween: 50,
    //         },

    //     },
    // });


      //제품 슬라이드
  const look = new Swiper('.look', {

    autoplay: {
      delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    spaceBetween: 30,  // 슬라이드 사이 여백
    slidesPerView: '2',  // 한 슬라이드에 보여줄 갯수
    loop: true,  // 슬라이드 반복 여부
    speed: 500,  // 슬라이드 동작 속도
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    

    // 반응형 슬라이드
    breakpoints: {
        1600 : {
            spaceBetween: 50,
            slidesPerView: '3',
            slidesPerGroup: 3, 
            centeredSlides: true,
        }

    },




  }); // 옵션



});//문서준비이벤트
