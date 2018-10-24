//点击事件
$(function(){
	$('.tbody ul li').hover(function() 
{
		$(this).children('div').children('div').children('div').children('span').children('i').css('display','inline-block')
		$('.tbody ul li').unbind("click").click(function() {
		$(this).children('.t-title').children('div').children('div').children('span').children('i').toggleClass('menu-down')
		if($(this).children('.t-title').children('div').children('div').children('span').children('i').hasClass('menu-down')){
			$(this).children('.t-title').css('backgroundColor', '#f0f0f0');
			$(this).children('.details').show()
			$(this).children('div').children('div').children('div').children('span').children('i').show()
			$(this).siblings().children('.details').hide()
		}
		else{
			$(this).children('.t-title').css('backgroundColor', 'rgba(0,0,0,0)');
			$(this).children('.details').hide()

		}
		$('.tbody ul li').bind('click')
	
	})


},function(){
			$(this).children('div').children('div').children('div').children('span').children('i').css('display','none')		

});
})
//导航栏动态效果
$('.menu').click(function(){
	$('button').children('div').eq(0).toggleClass('move-menu')
})

