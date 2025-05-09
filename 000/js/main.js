$(function(){
    $('.search').click(function(){
        $('.searchf').slideToggle()
    })
    $('.hbot > ul > li').mouseenter(function(){
        $('header').stop().animate({
            height: '484px'
        },400)
    })
    $('.hbot > ul > li').mouseleave(function(){
        $('header').stop().animate({
            height: '168px'
        },400)
    })
    
})