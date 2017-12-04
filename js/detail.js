require(["config"], function(){
	// 放大镜
	require(["jquery", "load", "zoom"], function(){
		$(".zoom .left img").elevateZoom({
			zoomWindowWidth: 200,
			zoomWindowHeight:200
		});
	});
	// 切换
	require(["jquery"], function(){
		$(".title p").mouseenter(function(){
			$(".title p").eq($(this).index())
						 .addClass("cur")
						 .siblings()
						 .removeClass('cur');
						 
			$(".show1, .show2, .show3").hide()
									 .eq($(this).index())
									 .show();
		});
	});
});
