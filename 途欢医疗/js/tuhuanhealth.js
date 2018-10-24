// $('.nav li:nth-of-type(5)').hover(function(){
//     $(this).children().css({'color':'white'});
//     $(this).children().css('background','#3bbe7a')
// },function(){
//     $(this).children().css('color','#3bbe7a');
//     $(this).children().css('background','white')
// })
new WOW().init();
/*汉堡*/
$('.cs-navbar-default .navbar-header button').click(function(){
    $(this).toggleClass('cs-icon-bar');
})

//小于767px顶部按钮点击动画
$('.collapsed').click(function(){
    $(this).children('span:nth-of-type(3)').stop().toggleClass('zero');
    $(this).children('span:nth-of-type(2)').stop().toggleClass('one');
    $(this).children('span:nth-of-type(4)').stop().toggleClass('two');
})
//轮播图
var timer;
var flag=0;
go();
function go(){
    timer=setInterval(function(){
        if(flag==0){
            $('.banner2').show();
            $('.banner1').hide();
            $('.banner').css({'background':'url(\'../img/health-banner1.jpg\')','background-size':'cover','background-repeat':'no-repeat','background-position':'center'});
            $('.banner-tool>ul').children('li').eq(1).addClass('current4');
            $('.banner-tool>ul').children('li').eq(0).removeClass('current4');
            $('.prev').children('img').attr('src','../img/health-banner2-2x-small.jpg');
            $('.next').children('img').attr('src','../img/health-banner2-2x-small.jpg');
            flag=1;
        }else{
            $('.banner2').hide();
            $('.banner1').show();
            $('.banner').css({'background':'url(\'../img/health-banner2.jpg\')','background-size':'cover','background-repeat':'no-repeat','background-position':'center'});
            $('.banner-tool>ul').children('li').eq(0).addClass('current4');
            $('.banner-tool>ul').children('li').eq(1).removeClass('current4');
            $('.prev').children('img').attr('src','../img/health-banner1-2x-small.jpg');
            $('.next').children('img').attr('src','../img/health-banner1-2x-small.jpg');
            flag=0;
        }
    },3000);
}

$('.banner').mouseenter(function(){
    $('.prev-btn').show();
    $('.next-btn').show();
    clearInterval(timer);
})
$('.banner').mouseleave(function(){
    $('.prev-btn').hide();
    $('.next-btn').hide();
    go();
})

$('.banner-tool>ul').children('li').eq(0).click(function(){
    clearInterval(timer);
    $('.banner2').hide();
    $('.banner1').show();
    $('.banner').css({'background':'url(\'../img/health-banner2-2x-small.jpg\')','background-size':'cover','background-repeat':'no-repeat','background-position':'center'});
    $('.banner-tool>ul').children('li').eq(0).addClass('current4');
    $('.banner-tool>ul').children('li').eq(1).removeClass('current4');
    $('.prev').children('img').attr('src',"../img/health-banner1-2x-small.jpg");
    $('.next').children('img').attr('src',"../img/health-banner1-2x-small.jpg");
    flag=0;
})
$('.banner-tool>ul').children('li').eq(1).click(function(){
    clearInterval(timer);
    $('.banner2').show();
    $('.banner1').hide();
    $('.banner').css({'background':'url(\'../img/health-banner1.jpg\')','background-size':'cover','background-repeat':'no-repeat','background-position':'center'});
    $('.banner-tool>ul').children('li').eq(1).addClass('current4');
    $('.banner-tool>ul').children('li').eq(0).removeClass('current4');
    $('.prev').children('img').attr('src',"../img/health-banner2-2x-small.jpg");
    $('.next').children('img').attr('src',"../img/health-banner2-2x-small.jpg");
    flag=1;
});
$('.prev-btn').mouseenter(function(){
    $(this).hide();
   $('.prev').children('img').fadeIn();
});
$('.prev').children('img').mouseleave(function(){
    $(this).hide();
    $('.prev-btn').show();
});

$('.next-btn').mouseenter(function(){
    $(this).hide();
    $('.next').children('img').fadeIn();
});
$('.next').children('img').mouseleave(function(){
    $(this).hide();
    $('.next-btn').show();
});

$('.prev').children('img').click(function(){
    if($(this).attr('src')=="../img/health-banner1-2x-small.jpg"){
        clearInterval(timer);
        $('.banner2').show();
        $('.banner1').hide();
        $('.banner').css({'background':'url(\'../img/health-banner1.jpg\')','background-size':'cover','background-repeat':'no-repeat','background-position':'center'});
        $('.banner-tool>ul').children('li').eq(1).addClass('current4');
        $('.banner-tool>ul').children('li').eq(0).removeClass('current4');
        $(this).attr('src',"../img/health-banner2-2x-small.jpg");
        $('.next').children('img').attr('src',"../img/health-banner2-2x-small.jpg");
        flag=1;
    }else if($(this).attr('src')=="../img/health-banner2-2x-small.jpg"){
        clearInterval(timer);
        $('.banner2').hide();
        $('.banner1').show();
        $('.banner').css({'background':'url(\'../img/health-banner2.jpg\')','background-size':'cover','background-repeat':'no-repeat','background-position':'center'});
        $('.banner-tool>ul').children('li').eq(0).addClass('current4');
        $('.banner-tool>ul').children('li').eq(1).removeClass('current4');
        $(this).attr('src',"../img/health-banner1-2x-small.jpg");
        $('.next').children('img').attr('src',"../img/health-banner1-2x-small.jpg")
        flag=0;
    }

});
$('.next').children('img').click(function(){
    if($(this).attr('src')=="../img/health-banner2-2x-small.jpg"){
        clearInterval(timer);
        $('.banner2').hide();
        $('.banner1').show();
        $('.banner').css({'background':'url(\'../img/health-banner2.jpg\')','background-size':'cover','background-repeat':'no-repeat','background-position':'center'});
        $('.banner-tool>ul').children('li').eq(0).addClass('current4');
        $('.banner-tool>ul').children('li').eq(1).removeClass('current4');
        $(this).attr('src',"../img/health-banner1-2x-small.jpg");
        $('.prev').children('img').attr('src',"../img/health-banner1-2x-small.jpg");
        flag=0;
    }else if($(this).attr('src')=="../img/health-banner1-2x-small.jpg"){
        clearInterval(timer);
        $('.banner2').show();
        $('.banner1').hide();
        $('.banner').css({'background':'url(\'../img/health-banner1.jpg\')','background-size':'cover','background-repeat':'no-repeat','background-position':'center'});
        $('.banner-tool>ul').children('li').eq(1).addClass('current4');
        $('.banner-tool>ul').children('li').eq(0).removeClass('current4');
        $(this).attr('src',"../img/health-banner2-2x-small.jpg");
        $('.prev').children('img').attr('src',"../img/health-banner2-2x-small.jpg");
        flag=1;
    }
});




//slidelist
var num=0;
var w=180;
var l=30;
var x=15;
$(window).resize(function(){
    //图片li的动态宽度;
    w=$('.slide ul li').width();
    var www=$(document).width();
    // console.log($(document).width());
    if(www>=986){
        x=-300;
    }else if(www>=900){
        x=-180;
    }else if(www>=800){
        x=-160;
    }else if(www>=767){
        x=-170;
    }else if(www>=654){
        x=-1050;
    }else if(www>=533){
        x=-1100;
    } else if(www>=432){
        x=-630;
    }else if(www>=200){
        x=-460;
    }

});
function h(){
    timer5=setInterval(function(){
        num++;
        if(num==6){
            num=0;
            $('.slide ul').css('left','0px');
            num=1;
        }
        $('.slide ul').animate({'left':-num*(w+30)+x+'px'});
        $('.slide ul').children('li').eq(num+2).children('img').addClass('current5');
        $('.slide ul').children('li').eq(num+2).siblings().children('img').removeClass('current5');
        $('.slide ol').children('li').eq(num+2).fadeIn();
        $('.slide ol').children('li').eq(num+2).siblings().hide();
    },3500)
}

h();
$('.slidelist').mouseenter(function(){
    clearInterval(timer5);
});
$('.slidelist').mouseleave(function(){
    h();
})
//li click
$('.slide ul li').click(function(){
    num=$(this).index();
    if(num==0){
        num=3
    }else if(num==1){
        num=4;
    }else if(num==2){
        num=0;
    }else if(num==3){
        num=1;
    }else if(num==4){
        num=2;
    }
    else if(num==5){
        num=3;
    }else if(num==6){
        num=4
    }else if(num==7){
        num=5
    }else if(num==8){
        num=1;
    }else if(num==9){
        num=2;
    }
    $('.slide ul').animate({'left':-num*(w+30)+x+'px'});
    $('.slide ul').children('li').eq(num+2).children('img').addClass('current5');
    $('.slide ul').children('li').eq(num+2).siblings().children('img').removeClass('current5');
    $('.slide ol').children('li').eq(num+2).fadeIn();
    $('.slide ol').children('li').eq(num+2).siblings().hide();
    console.log(num);
});
$('.toright svg').click(function(){
    if(num==5){
        num=0;
    }
    num=num+1;

    $('.slide ul').animate({'left':-num*(w+30)+x+'px'});
    $('.slide ul').children('li').eq(num+2).children('img').addClass('current5');
    $('.slide ul').children('li').eq(num+2).siblings().children('img').removeClass('current5');
    $('.slide ol').children('li').eq(num+2).fadeIn();
    $('.slide ol').children('li').eq(num+2).siblings().hide();

})
$('.toleft svg').click(function(){
    if(num==0){
        num=5
    }
    num=num-1;
    $('.slide ul').animate({'left':-num*(w+30)+x+'px'});
    $('.slide ul').children('li').eq(num+2).children('img').addClass('current5');
    $('.slide ul').children('li').eq(num+2).siblings().children('img').removeClass('current5');
    $('.slide ol').children('li').eq(num+2).fadeIn();
    $('.slide ol').children('li').eq(num+2).siblings().hide();
})

//手机大于767
var timer2;
var pnum=0;
function p(){
    timer2=setInterval(function(){
        pnum++;
        if(pnum==5){
            pnum=0;
        }
        $('.shouji-pic ul').children('li').eq(pnum).fadeIn();
        $('.shouji-pic ul').children('li').eq(pnum).siblings().hide();
        $('.phone-right-desc ul').children('li').eq(pnum).show();
        $('.phone-right-desc ul').children('li').eq(pnum).siblings().hide();

        $('.phone-right-icon ul').children('li').eq(pnum).addClass('current6');
        $('.phone-right-icon ul').children('li').eq(pnum).siblings().removeClass('current6');
    },5000);
}
p();
$('.phone-right-icon ul').children('li').click(function(){
    $(this).addClass('current6').siblings().removeClass('current6');
    $('.shouji-pic ul').children('li').eq($(this).index()).fadeIn();
    $('.shouji-pic ul').children('li').eq($(this).index()).siblings().hide();
    $('.phone-right-desc ul').children('li').eq($(this).index()).fadeIn();
    $('.phone-right-desc ul').children('li').eq($(this).index()).siblings().hide();
    pnum=$(this).index();
})

//手机小于727
var spnum=0;
setInterval(function(){
    spnum++;
    if(spnum==5){
        spnum=0;
    }
    $('.phone-top ul').children('li').eq(spnum).show().siblings().hide();
    $('.phone-bottom-phone ul').children('li').eq(spnum).show().siblings().hide();
},1500)


$('.shoujilogo').mouseenter(function(){
    $('.shoujilogo-ercode').stop().fadeIn();
});
$('.shoujilogo').mouseleave(function(){
    $('.shoujilogo-ercode').stop().fadeOut();
});
$('.weixinlogo').mouseenter(function(){
    $('.weixinlogo-ercode').stop().fadeIn();
});
$('.weixinlogo').mouseleave(function(){
    $('.weixinlogo-ercode').stop().fadeOut();
});