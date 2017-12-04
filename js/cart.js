require(["config"], function(){
	
	require(["jquery", "cookie", "template","load"], function($,cookie,template){
		$.cookie.json = true;
		// 从 cookie 里面读取已经选购的购物车信息
		var _products = $.cookie("products") || [];
		console.log(_products)
		if(_products.length === 0){
			$(".cart_body").html("<a href='list.html'>快去选购咯！<img style='margin-left:293px' src='../img/cart.png'/></a>");
//			$(".cart_body").html("<div class='.cart_datail'></div>");
			return;
		}
			
		// 页面中显示购物车里面的信息
		var html = template("cart_template", {products:_products});
		// 显示
		$(".cart_body").html(html);
		// 删除 事件委派
			$(".cart_body").on("click", ".del", function(){
				if(confirm("您确定要删除吗？")){
					var id = $(this).parents(".row").children(".id").text(),
					index = findProp(id, _products);
					// 删除数组中指定索引处的元素
					_products.splice(index, 1);
					// 重新存回 cookie
					$.cookie("products", _products, {expires:7, path: "/"});
					// 从 dom 结构中删除
					$(this).parents(".row").remove();
					if(_products.length === 0){
//						$(".cart_body").html("<div class='.cart_datail'></div>");
//						$(".cart_body").show();
//						$(".cart_body").html("<a href='list.html'><img src='../img/cart.png'/></a>");
			$(".cart_body").html("<a href='list.html'>快去选购咯！<img style='margin-left:293px' src='../img/cart.png'/></a>");
					}
					calcTotal() // 更新合计
					};
				
			});
		// 数量 + / 数量 -
	   $(".cart_body").on("click", ".add, .minus", function(){
	   
	   	 // 找出所在行
	   	 var _row = $(this).parents(".row");
	   	 // 获取商品 id
	   	 var _id = _row.children(".id").text()
	   	 // 找出数组中对应商品对象
	   	 var _prod = _products[findProp(_id, _products)];
	   	 if($(this).is(".add")){ // 数量加
	   	 	_prod.amount++;
	   	 }else{ // 数量减
	   	 	if(_prod.amount <=1)
	   	 		return;
	   	 	_prod.amount--;
	   	 }
	   	 // 将加之后的数据存回 cookie
	   	 $.cookie("products", _products, {expires:7, path:"/"});
	   	 // 显示 加之后的数据
	   	 _row.find(".amount").val(_prod.amount);
	   	 // 更新小计
	   	 _row.find(".sub").text(_prod.amount * _prod.curr);
	   	 
	   	 calcTotal() // 更新合计
	   });
	   
	   // 输入数量修改
	   $(".cart_body .amount").blur(function(){
	   	// 找出所在行
	   	var _row = $(this).parents(".row");
	   	// 找出商品 id 
	   	var _id = _row.children(".id").text();
	   	// 商品对象
	   	var _prod = _products[findProp(_id, _products)];
	   	// 修改数量是否合法判断
	   	if(!/^[1-9]\d*$/.test($(this).val())){ // 非法，还原
	   		$(this).val(_prod.amount);
	   		return;
	   	}
	   	// 数量合法，保存到商品对象属性里面
	   	_prod.amount = $(this).val();
	   	
	   	// 修改小计金额
	   	_row.find(".sub").text(_prod.curr * _prod.amount);
	   	// 保存 cookie
	   	$.cookie("products", _products, {expires:7, path:"/"});
	   	// 
	   	calcTotal() // 更新合计
	   });
	   // 全选
	   $("#check_all").click(function(){
	   	// 获取选中状态
	   	var status = $(this).prop("checked");
	   	// 将所有商品行前的复选框选中状态设置为全选一直的状态
	   	$(".cart_body .ck_prod").prop("checked", status);
	   	// 更新合计
	   	calcTotal();
	   });
	   $(".cart_body .ck_prod").click(function(){
	   		var status = $(".cart_body .ck_prod:checked").length === _products.length;
	   		$("#check_all").prop("checked", status);
	   		// 更新合计
	   		calcTotal();
	   });
	   
	   
	   
	   // 查找商品id 是 id 的商品在 cookie 里面存储的_products里面有没有
	function findProp(id, products){
		console.log(products)
		for (var i = 0; i < products.length; i++) {
			if(products[i].id === id)
				return i;
		}
			return -1;
	}
	});
	
	
	
	
	
	
	// 更新he计操作
	function calcTotal(){
		var sum = 0;
		$(".cart_body .ck_prod:checked").each(function(index, element){
			sum += Number($(this).parents(".row").children(".sub").text());
		});
		$(".total").text(sum);
	}
	
});
