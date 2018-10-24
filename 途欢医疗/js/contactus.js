//map
var map = new BMap.Map("allmap", { enableMapClick: false });            // 创建Map实例
//map.centerAndZoom(new BMap.Point(116.4035, 39.915), 8);  //初始化时，即可设置中心点和地图缩放级别。
var point = new BMap.Point(104.063219, 30.592893);
map.centerAndZoom(point, 17)

var myIcon = new BMap.Icon("../img/mapicon2.png", new BMap.Size(50, 50));

var marker = new BMap.Marker(point, { icon: myIcon });  // 创建标注
map.addOverlay(marker);               // 将标注添加到地图中
marker.setAnimation(BMAP_PANORAMA_POI_NONE); //跳动的动画

map.enableScrollWheelZoom(true);
map.disableDragging();     //禁止拖拽
map.disableScrollWheelZoom();
map.disableDoubleClickZoom();
map.disablePinchToZoom();

var sContent = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天府新谷7号楼</h4>" +
    "</div>";
var infoWindow = new BMap.InfoWindow(sContent);
marker.addEventListener("click", function () {
    this.openInfoWindow(infoWindow);
    //图片加载完毕重绘infowindow
    document.getElementById('imgDemo').onload = function () {
        infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
    }
});
map.setMapStyle({
    styleJson: [
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }
    ]
});
//button
$('.collapsed').click(function(){
    $(this).children('span:nth-of-type(3)').stop().toggleClass('zero');
    $(this).children('span:nth-of-type(2)').stop().toggleClass('one');
    $(this).children('span:nth-of-type(4)').stop().toggleClass('two');
})
/*汉堡*/
$('.cs-navbar-default .navbar-header button').click(function(){
    $(this).toggleClass('cs-icon-bar');
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