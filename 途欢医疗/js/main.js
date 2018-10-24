/*汉堡*/
$('.cs-navbar-default .navbar-header button').click(function(){
	$(this).toggleClass('cs-icon-bar');
})
/*上部淡入淡出轮播*/
var num=-1;
var timer;
function run(){
	timer=setInterval(function(){
		num++;
		if(num>=3){
			num=0;
		}
		$('.cs-carousel .item').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
		$('.cs-carousel .item .carousel-text>div').removeClass('textbg');
		$('.cs-container .cs-dot li').eq(num).addClass('active').siblings().removeClass('active');
	},2000)
}
run();
/*小图片点击事件*/
//$('.prev-banner').click(function(){
//	num--;
//	console.log(num)
//	if(num<-1){
//		num=1
//	}
//	run();
//})
//$('.next-banner').click(function(){
//	num++;
//	if(num>=2){
//		num=-1
//	}
//	run();
//})
/*小图标hover*/
$('.cs-container').hover(function(){
	$('.prev-banner').show();
	$('.next-banner').show();
},function(){
	$('.prev-banner').hide();
	$('.next-banner').hide();
})
/*图片按钮*/
$('.prev-banner').hover(function(){
	$('.prevbtn').animate({'opacity':'0'},300);
},function(){
	$('.prevbtn').animate({'opacity':'1'},300);	
})

$('.next-banner').hover(function(){
	$('.nextbtn').animate({'opacity':'0'},300);
},function(){
	$('.nextbtn').animate({'opacity':'1'},300);
})

/*hover码*/
$('.wechat-icon').hover(function(){
    $('.hoverMa-w').css('opacity','1');
},function(){
	$('.hoverMa-w').css('opacity','0');
})
$('.phone-icon').hover(function(){
    $('.hoverMa-p').css('opacity','1');
},function(){
	$('.hoverMa-p').css('opacity','0');
})

/*pc端淡入淡出轮播*/
var inum=0;
var itimer;
function irun(){
	itimer=setInterval(function(){
		inum++;
		if(inum>=4){
			inum=0;
		}
		$('.cs-ibox a').eq(inum).fadeIn().siblings().fadeOut();
		$('.cs-ibox a').eq(inum).addClass('cur').siblings().removeClass('cur');
		$('.mb-inav-about li').eq(inum).children('div').addClass('cur');
		$('.mb-inav-about li').eq(inum).siblings().children('div').removeClass('cur');
		$('.slide-itxt').eq(inum).css('display','block').siblings().css('display','none');
	},5000)
}
irun();

$('.mb-inav-about li').click(function(){
	inum=$(this).index();
	$('.cs-ibox a').eq($(this).index()).fadeIn().siblings().fadeOut();
	$('.cs-ibox a').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
	$('.slide-itxt').eq($(this).index()).css('display','block').siblings().css('display','none');
	$(this).children('div').addClass('cur');
	$(this).siblings().children('div').removeClass('cur');
})
/*app端无缝轮播*/
var ins =0;
var otimer;
function orun(){
	otimer=setInterval(function(){
		ins++;
		if(ins>=5){
			ins=0;
		}	
		$('.team-image ul li').eq(0).css('left','calc(-100% * '+ins+')');
		$('.team-image ul li').eq(1).css('left','calc(-100% * '+(ins-1)+')');
		$('.team-image ul li').eq(2).css('left','calc(-100% * '+(ins-2)+')');
		$('.team-image ul li').eq(3).css('left','calc(-100% * '+(ins-3)+')');
		$('.team-image ul li').eq(4).css('left','calc(-100% * '+(ins-4)+')');
		$('.item-text').eq(ins).css('display','block').siblings().css('display','none');
	},1000)
}
orun();