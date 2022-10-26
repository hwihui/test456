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


});//문서준비이벤트