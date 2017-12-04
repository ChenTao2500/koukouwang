define(["jquery", "cookie"], function($){
	$.ajax("include/header.html").done(function(data){
		$(".head").html(data);
	}).done(function(){
		var _user = $.cookie("login_user");
		if (_user) {
			$(".login_reg").html("<a href='#'>欢迎您："+ _user +"</a>");
		}
	}).done(function(){
		$(".login_reg").hover(function(){
			$(this).css("height", 200);
		}, function(){
			$(this).css("height", 35)
		});
	});

	$(".footerr").load("include/footer.html");
});