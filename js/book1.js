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


    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        $('#main').css({'background':'#f00'});
      })

      

    $('.contents2').hide();

    $('.tab1').click(function(){
        $('.contents1').show();
        $('.contents2').hide();
        $('#main').css({'background':'#957FC0'});
    });

    $('.tab2').click(function(){
        $('.contents2').show();
        $('.contents1').hide();
        $('#main').css({'background':'#386B30'});
    });




    $('.tabs li:first-child').addClass('active');
    $('.tabs li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

});//문서준비이벤트