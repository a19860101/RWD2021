$(function(){
    $('.scroll').click(function(){
        let scroll = $(this).data('scroll');
        let distance = $(scroll).offset().top;
        $('html,body').animate({
            scrollTop: distance
        })
    })
    $('.gotop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        })
    })
})