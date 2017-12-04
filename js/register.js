require(["config"], function(){
	require(["jquery", "load", "register"], function(){
		var usernameExit = true;
	$("#username").blur(function(){ // 文本失去焦点，看看是否用户名已被占用
		$.ajax({
			type : "get",
			url : "../check.php",
			data : {username :　$(this).val()},
			dataType : "json",
			success : function(data){
				if(data.status == 0){
					$("#username_info").html("用户名已存在");
					usernameExit = true;
				}else{
					$("#username_info").text("用户名可用");
					usernameExit = false;
				}
			}
		});
	});
	// 点击注册, 提交注册信息
	$("#btn").click(function(){
		if(!usernameExit){ // 用户名不存在,就可以注册
			$.post("../register.php", {
				username : $("#username").val(),
				password : $("#password").val()
			}, function(data){
				console.log(data)
				if(data.status == 1)
					location = "login.html";
				else
					alert("erroe");
				
			}, "json");
		}
		});
		// 验证码部分
		function loadCode(){ // 加载验证码方法
			var url = "http://route.showapi.com/932-2?showapi_appid=48344&showapi_sign=09168fc73b1748ea9fc1f278a590cb83&length=4&specials=false&";
			$.getJSON(url, {}, function(data){ // 
				var resData = data.showapi_res_body;
				$("#codes-pic").attr("src", resData.image);
				$("#codes-pic").attr("sid", resData.sid);
			});
		};
		$("#change").on("click", function(){ // 给 “换一个” 绑定点击事件
			loadCode();
		});
		// 验证码有效性校验
		$("#code").blur(function(){
			var url = "http://route.showapi.com/932-1?showapi_appid=48344&showapi_sign=09168fc73b1748ea9fc1f278a590cb83&checkcode="+$("#code").val()+"&sid="+$("#codes-pic").attr("sid");
			$.getJSON(url, {}, function(data){
				if(data.showapi_res_body.valid){
					$("#info").text("验证通过");
					$("#info").css({
						"color":"green",
					});
				}else{
					$("#info").text("验证错误");
					$("#info").css({
						"color":"red",
					});
				}
			});
		});
		loadCode(); // 调用加载验证码方法
	});
});