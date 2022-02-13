AOS.init({
    // duration: 800,
    offset:0,
    anchorPlacement:'bottom-bottom'
});
$(function(){
    $('.scroll').click(function(){
        let scroll = $(this).data('scroll');
        let distance = $(scroll).offset().top;
        $('html,body').animate({
            scrollTop: distance
        })
        return false;
    })
    $('.gotop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        })
        return false;
    })
    $(window).scroll(function(){
        let h = $(window).scrollTop();
        console.log(h);
        let _in = 'bounceIn';
        let _out = 'hinge';
        if(h > 650){
            $('.gotop').show().removeClass('animated '+_out).addClass('animated '+_in);
        }else{
            $('.gotop').removeClass('animated '+_in).addClass('animated '+_out);
        }
        $('.scroll').each(function(){
            let scroll = $(this).data('scroll');
            let o = $(scroll).offset().top;
            console.log(o)
            if(h >= o - 200){
                $('.scroll').removeClass('active');
                $(this).addClass('active');
            }
        })
    })
})