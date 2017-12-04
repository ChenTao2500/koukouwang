<?php
	$username = $_REQUEST["username"];
	$password = $_REQUEST["password"];
	
	mysql_connect("localhost:3306", "root", ""); // 连接数据库
	// 设置在数据库中读写的编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	
	mysql_select_db("h51707"); // 连接数据库
	$sql = "SELECT id, username, phone, password, sex, score, level, reg_time FROM users WHERE username = '$username' AND password = '$password'";
	$result = mysql_query($sql);
	
	if($row = mysql_fetch_array($result, MYSQL_ASSOC)){
		echo '{"status":1, "message":"success", "data":'.json_encode($row).'}';
	}else{
		echo '{"status":0, "message":"failed", "data":{}}';
	}
	mysql_close();
?>