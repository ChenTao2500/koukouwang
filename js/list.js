require(["config"], function(){
	// 商品克隆
	require(["jquery", "cookie","load","course", "list"], function(){
		// 解析 cookie
		$.cookie.json = true;
		$.getJSON("../mock/products.json", function(data){
			$.each(data, function(index, product) {
				$(".template").clone(true)
							  .show()
							  .removeClass("template").addClass("box").children("a")
							  .children(".img").attr("src", product.img).end()
							  .children(".title").text(product.title).end()
							  .children(".curr").text(product.curr).end()
							  .children(".ago_price").text(product.ago_price).end()
							  .children(".id").val(product.id).end()
							  .appendTo(".buy")
			});
		});
		// 轮播图
		$(".lun").carousel({
			width : 1336,
			height : 480,
			imgs : [
					{src:"../img/b_15039967233155.jpg", href:"http://www.baidu.com"},
					{src:"../img/b_15082224498065.jpg", href:"http://www.baidu.com"},
					{src:"../img/b_15082261561250.jpg", href:"http://www.baidu.com"},
					{src:"../img/b_15090860484205.jpg", href:"http://www.baidu.com"},
					{src:"../img/b_15090865027955.jpg", href:"http://www.baidu.com"},
					{src:"../img/b_15091592217314.jpg", href:"http://www.baidu.com"},
			],
			type : "fade",
			shiftTime : 2000, 
			isAuto : true,
			isPrevNext : false
		});
		
		// 加入购物车绑定点击事件
	$(".buy").delegate(".pro", "click", function(){
		var _box = $(this);
		// 将当前选购商品信息保存到对象中
		var prod = {
			id : _box.children(".id").val(),
			title : _box.children(".title").text(),
		   	curr : _box.children(".curr").text(),
			ago_price : _box.children(".ago_price").text(),
			img : _box.children("img").attr("src"),
			amount : 1
		};
		// 获取 cookie 中已保存的购物车数组结构，没有就   新建数组
		var _products = $.cookie("products") || [];
		console.log(_products)
		// 判断在数组中是否有当前选购商品
		var index = findProd(prod.id, _products); 
		if(index !== -1)// 选购过
			_products[index].amount++;
		else // 为选购过
		    _products.push(prod);
		 // 将选购商品操作之后的数组保存到 cookie 里面
		 $.cookie("products", _products, {expires:7, path: "/"});
		 console.log(_products)
	});
	// 查找当前商品 id 是否已经存在
	function findProd(id, products){
		for (var i =0; i < products.length; i++) {
			if(products[i].id === id)
				return i;
		}
		return -1;
	}
	});
});