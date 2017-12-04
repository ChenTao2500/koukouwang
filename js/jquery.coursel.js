;
(function($){
	function Carousel(options) {
		this.container = options.container; // 放置轮播图所有后代元素的容器
		this.width = options.width;
		this.height = options.height;
		this.imgs = options.imgs;
		this.len = this.imgs.length;
		this.currentIndex = 0;
		this.nextIndex = 1;
		this.timer = null; // 自动轮播计时器
		this.isPrevNext = options.isPrevNext; // 是否允许向上/下翻页
		this.isAuto = options.isAuto; // 是否允许自动轮播
		this.shiftTime = options.shiftTime || 3000;
		this.type = options.type || "fade"; // 轮播方式

		this.init(); // 初始化
	}

	Carousel.prototype = {
		constructor : Carousel,
		init : function(){ // 动态创建所需要使用到的DOM结构
			$(this.container).css({
				position:"relative",
				width: this.width,
				height: this.height,
				overflow: "hidden"
			});
			
			// 动态创建 ul 添加待轮播切换的图片盒子
			var _ul = $("<ul class='imgs'></ul>").appendTo(this.container);
			for (var i = 0, len = this.imgs.length; i < len; i++) {
				var _img = this.imgs[i];
				// 创建 li 元素
				var _li = $(`<li class='img'><a href="${_img.href}"><img src="${_img.src}"></a></li>`);
				// 将 _li 添加到 ul 中
				_li.appendTo(_ul);
			}

			// 添加小圆点
			var _circles = $("<div class='circles'></div>").appendTo(this.container);
			_circles.css({
				position:"absolute",
				bottom:20,
				left:10,
				width:this.width / 5,
				marginLeft:509,
				height:20
			});

			var html = "";
			var count = 1;
			for (i = 0; i < len; i++) {
				html += `<i style=" text-align:center; line-height:22px; width:22px; height:22px; display:inline-block; margin:5px; background:#ccc; border-radius:10px;">${count++}</i>`;
			}
			_circles.html(html)
					.children().eq(0).css("background", "#ccc");
					
			// 向上向下页
			if (this.isPrevNext) { // 有向上/下翻页的配置
				$("<div class='prev'><</div><div class='next'>></div>").appendTo(this.container);
				$(".prev, .next").css({
					width: "45px",
					height:"100px",
					background:"#000",
					position:"absolute",
					top:0,
					bottom:0,
					margin:"auto",
					color:"#fff",
					"text-align":"center",
					"line-height":"100px"
				});
				$(".next").css("right","0");
			}
			
			// 注册事件监听
			this.registerEventListener();
			// 允许自动轮播
			if (this.isAuto) {
				this.auto();
			}
		},
		registerEventListener: function(){
			if (this.isAuto) {
				$(this.container).hover(()=>{
					clearInterval(this.timer);
				}, ()=>{
					this.timer = setInterval(()=>{
						this.move();
					}, this.shiftTime);
				});
			}
			// 鼠标移入小圆点
			var that = this;
			var circles = $(".circles i"); 
			for(let i = 0;i < circles.length; i++){
			circles.mouseover(function(){
				var index = $(this).index();
				if (that.currentIndex === index)
					return;
				that.nextIndex = index;
				that.move();
			});
		}
		// 向上/向下
		if (this.isPrevNext) {
				$(".prev").click(()=>{
					this.nextIndex = this.currentIndex - 1;
					console.log("当前" + this.currentIndex);
					console.log("下一个" + this.nextIndex);
					if (this.nextIndex < 0)
						this.nextIndex = this.imgs.length - 1;
					this.move();
				})
				$(".next").click(()=>{
					this.move();
				});
			}
		},
		auto : function(){
			this.timer = setInterval(()=>{
				this.move();
			}, this.shiftTime);
		},
		move : function(){ // 轮播切换
			if (this.type === "fade") {
				this.fade();
			} else if (this.type === "slide") {
				this.slide();
			}
		},
		fade : function(){
			// 当前图片淡出，即将显示图片淡入
			var imgs = $(".imgs .img")
			imgs.eq(this.currentIndex).stop().fadeOut();
			imgs.eq(this.nextIndex).stop().fadeIn();

			// 小圆点
			$(".circles i").eq(this.currentIndex).css("background", "#ccc");
			$(".circles i").eq(this.nextIndex).css("background", "orange");

			this.currentIndex = this.nextIndex;
			this.nextIndex++;
			if (this.nextIndex >= this.imgs.length)
				this.nextIndex = 0;
		},
	}
	$.fn.extend({
		carousel : function(options){
			options = options || {};
			options.container = this;
			new Carousel(options);
		}
	});
})(jQuery);