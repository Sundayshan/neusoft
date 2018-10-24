new WOW().init();
/*汉堡*/
$('.cs-navbar-default .navbar-header button').click(function(){
    $(this).toggleClass('cs-icon-bar');
});

$('.collapsed').click(function(){
    $(this).children('span:nth-of-type(3)').stop().toggleClass('zero');
    $(this).children('span:nth-of-type(2)').stop().toggleClass('one');
    $(this).children('span:nth-of-type(4)').stop().toggleClass('two');
})
//ercode
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
})