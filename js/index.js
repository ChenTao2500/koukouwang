require(["config"], function(){
//	require(["jquery", "load"], function(data){
//		$(".head").css({
//			height:145,
//		});
//		$.cookie.json = true;
//		// 获取用户信息
//		var user = $.cookie("loginUser");
//		if(user){ // 有登陆用户
//			$.data.find("#login").html("欢迎您："+user.username).end().appendTo(".header")
//		}else{
//			$.data(".header").append(data);
//		}
//	});
	// 轮播图动作
	require(["jquery", "load", "course"], function(){
		$(".course").carousel({
			width : 1336,
			height : 480,
			imgs : [
					{src:"img/b_15039967233155.jpg", href:"http://www.baidu.com"},
					{src:"img/b_15082224498065.jpg", href:"http://www.baidu.com"},
					{src:"img/b_15082261561250.jpg", href:"http://www.baidu.com"},
					{src:"img/b_15090860484205.jpg", href:"http://www.baidu.com"},
					{src:"img/b_15090865027955.jpg", href:"http://www.baidu.com"},
					{src:"img/b_15091592217314.jpg", href:"http://www.baidu.com"},
			],
			type : "fade",
			shiftTime : 2000, 
			isAuto : true,
			isPrevNext : false
		});
	});
	// table 切换动作
	require(["jquery"], function(){
		$(".table a").mouseenter(function(){
			
			$(".table a").eq($(this)
						.index())
						.addClass("cur")
						.siblings()
						.removeClass('cur');
			$(".table-show3, .table-show2, .table-show1").hide()
													   .eq($(this)
													   .index())
													   .show();
		});
	});
});