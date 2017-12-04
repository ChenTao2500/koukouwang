require(["config"], function(){
	
	require(["jquery", "cookie","load", "login"], function(){
		
		$("#btn").click(function(){
			
			$.getJSON("../login.php",{
				username : $("#username").val(),
				password : $("#password").val()
			}, function(respData){
				if(respData.status == 1){ // 登陆成果
					$.cookie.json = true; // 配置，使得在保存/读取 cookie 值时可以自动进行格式转换
					$.cookie("loginUser", respData.data, {path:"/"}); // 保存登陆成功的用户到cookie 里面
					// 跳转页面
					location = "../index.html"
				}else{ // 登陆失败
					alert("用户名或密码错误");
				}
			});
		});
	});
});
