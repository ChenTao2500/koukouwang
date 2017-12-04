-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 11 月 10 日 01:12
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `h51707`
--

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL auto_increment,
  `username` varchar(50) collate utf8_unicode_ci NOT NULL,
  `password` varchar(50) collate utf8_unicode_ci NOT NULL,
  `phone` varchar(50) collate utf8_unicode_ci NOT NULL,
  `email` varchar(50) collate utf8_unicode_ci NOT NULL,
  `sex` varchar(2) collate utf8_unicode_ci NOT NULL default '女',
  `score` int(11) NOT NULL default '100',
  `level` varchar(50) collate utf8_unicode_ci NOT NULL default 'VIP2',
  `reg_time` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=12 ;

--
-- 导出表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `phone`, `email`, `sex`, `score`, `level`, `reg_time`) VALUES
(1, '123', '1', '', '', '女', 100, 'VIP2', '2017-10-27 23:33:56'),
(2, 'taozi', '1', '1234', '', '女', 100, 'VIP2', '2017-10-27 23:36:18'),
(3, 'aa', 'a', '12', '', '女', 100, 'VIP2', '2017-10-28 00:00:15'),
(4, 'é™ˆv', 'vdvd', 'vdvddv', '', '女', 100, 'VIP2', '2017-10-28 08:23:35'),
(5, '1231', '1', '1', '', '女', 100, 'VIP2', '2017-10-28 08:24:39'),
(6, 'tt', 't', '123', '', '女', 100, 'VIP2', '2017-11-05 11:52:10'),
(7, 'qw', '12', '', '', '女', 100, 'VIP2', '2017-11-07 09:19:06'),
(8, 'aaa', 'a', '', '', '女', 100, 'VIP2', '2017-11-07 09:20:33'),
(9, 'a', 'a', '', '', '女', 100, 'VIP2', '2017-11-07 11:32:27'),
(10, 'vf', 'f', '', '', '女', 100, 'VIP2', '2017-11-08 08:40:20'),
(11, 'ss', 's', '', '', '女', 100, 'VIP2', '2017-11-09 14:17:06');
