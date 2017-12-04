<?php
	// 获取请求传递的用户数据
	$username = $_REQUEST["username"];
	$password = $_REQUEST["password"];
	
	// 将用户数据保存到数据库中，
	// 连接数据库服务器
	$conn = mysql_connect("localhost:3306", "root", ""); // 服务器名称，  数据库名称，密码
	if(!$conn)
		die('Could not connect:' .mysql_error());
	// 选择连接数据库名称
	mysql_select_db("h51707");
	// 创建插入数据的 sql 语句
	$sql = "INSERT INTO users (username, password, phone) VALUES ('$username', '$password', '$phone')";
	// 执行 sql 语句
	$result = mysql_query($sql);
	// 根据数据插入ok / no ok 判断
	if($result){
		echo '{"status":1, "message":"success"}';
	}else{
		echo '{"status":0, "message":"failed"}';
	}
	// 判断数据库连接
	mysql_close();
?>