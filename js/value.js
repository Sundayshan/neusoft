var windowWidth=$(window).width()
//当屏幕大于等于768px时，圆的状态
if(windowWidth>=768){
	$(".circular-1").circleChart({
		size: 253,
		color:"#ddded3",
		value: 75,
		speed:5000,
		counterclockwise:true,
		widthRatio: 0.08,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
		
	});
	$(".circular-2").circleChart({
		size: 253,
		color:"#ddded3",
		value: 25,
		speed:4500,
		counterclockwise:true,
		widthRatio: 0.08,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
		
	});
	$(".circular-3").circleChart({
		size: 253,
		color:"#ddded3",
		value: 85,
		speed:5500,
		counterclockwise:true,
		widthRatio: 0.08,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
	});
	$(".circular-4").circleChart({
		size: 253,
		color:"#ddded3",
		value: 45,
		speed:5000,
		counterclockwise:true,
		widthRatio: 0.08,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
	});


}

//当屏幕小于768px时，圆的状态
if(windowWidth<768){

	$(".s-circle1").circleChart({
		size: 162,
		color:"#ddded3",
		value: 75,
		speed:5000,
		counterclockwise:true,
		widthRatio: 0.08,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
		
	});
	$(".s-circle2").circleChart({
		size: 162,
		color:"#ddded3",
		value: 25,
		speed:4500,
		counterclockwise:true,
		widthRatio: 0.08,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
		
	});
	$(".s-circle3").circleChart({
		size: 162,
		color:"#ddded3",
		value: 85,
		speed:5500,
		counterclockwise:true,
		widthRatio: 0.08,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
	});
	$(".s-circle4").circleChart({
		size: 162,
		color:"#ddded3",
		value: 45,
		speed:5000,
		counterclockwise:true,
		widthRatio: 0.08,
		startAngle:25,
		lineCap: "butt",
		backgroundColor:"#3bbe7a",
	});
}
	console.log(windowWidth)
	$(".number1").numberRock({
	    speed:60,
	    count:-10000
    })
    $(".number2").numberRock({
	    speed:35,
	    count:-3691
    })
    $(".number3").numberRock({
	    speed:50,
	    count:-12000
    })
    $(".number4").numberRock({
	    speed:10,
	    count:-30
    })
	

$('.menu').click(function(){
		$('button').children('div').eq(0).toggleClass('move-menu')
})

          

