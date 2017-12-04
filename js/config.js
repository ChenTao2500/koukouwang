require.config({
	baseUrl : "/koukouwang/",
	paths : {
		"jquery" : "lib/jquery/jquery-1.12.4.min",
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"zoom" : "lib/jquery_plugins/jquery.elevateZoom-2.2.3.min",
		"load" : "js/loadHeaderFoot",
		"course" : "js/jquery.coursel",
		"register" : "js/register",
		"login" : "js/login",
		"cart" : "js/cart",
		"template" : "lib/arttemplate/template"
	},
	shim : {
			"course" : {deps:["jquery"]},
		    "zoom" : {deps:["jquery"]}
		   }
});