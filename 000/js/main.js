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

let yes=document.querySelector(".yes")
let no=document.querySelector(".no")
let pbg=document.querySelector(".popup_bg")

    yes.addEventListener("click",function(){
        pbg.style.display="none";
    })

    no.addEventListener("click",function(){
        alert('만 19세 미만은 사이트 이용이 불가능 합니다.')
    })

