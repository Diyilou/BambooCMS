-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: bilicms
-- ------------------------------------------------------
-- Server version	5.7.17-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bili_addonarticle`
--

DROP TABLE IF EXISTS `bili_addonarticle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_addonarticle` (
  `aid` mediumint(8) NOT NULL,
  `typeid` smallint(5) NOT NULL,
  `body` text NOT NULL,
  `redirecturl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_addonarticle`
--

LOCK TABLES `bili_addonarticle` WRITE;
/*!40000 ALTER TABLE `bili_addonarticle` DISABLE KEYS */;
INSERT INTO `bili_addonarticle` VALUES (1,6,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=o0359tlmecr&tiny=0&auto=0\" allowfullscreen></iframe>\n今天给大家先上一个基础视频教程吧\n用最简单的移动工具变形属性来制作图片无限循环的效果\n活生生把一张羞羞的图做的这么有意境，大声跟我喊口号\n“我们拒绝黄赌毒，我们意淫全世界！”\n看看其他的效果\n《框中世界》\nhttp://www.wanmeixiangsu.cn/upload/images/1490448779/shijie.jpg\n《框中人物》\nhttp://www.wanmeixiangsu.cn/upload/images/1490448793/renwu.jpg\n好了，意淫全世界的第一步从这里启程\n快来下载素材试试手吧~\n素材链接：http://pan.baidu.com/s/1pLg0KmJ\n',''),(2,6,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=s0364pbbvf9&tiny=0&auto=0\" allowfullscreen></iframe>\n新一波ps教学视频来啦！！！\n今天如上期教程中说的\n教大家大头娃娃的特效\n这不是一个基础的视频\n学好了可以撩妹子\n 当然也可以钓汉子\n视频接近1小时，请在有空有无线的时候观看思密达！\n像素君有点感冒，鼻音太重还请见谅\nhttp://www.wanmeixiangsu.cn/upload/images/1490449927/wawa.png\n制作素材像素君会放在云盘里，亲们自己下载\n链接：http://pan.baidu.com/s/1eSdwb2y 密码：kkv1',''),(3,6,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=w0366wu3xn7&tiny=0&auto=0\" allowfullscreen></iframe>\nps教学视频周末大放送啦\n今天来简单介绍一下基本工具中的选区工具\n因为是基础知识，所以会相对枯燥些\n不过基础知识比较重要\n所以没基础的同学耐心看完多练习\n下节课我们讲真正的抠图\n属于比较重要的部分\nhttp://www.wanmeixiangsu.cn/upload/images/1490450286/xuantu.jpg\n涉及到的快捷键有两个：\nctrl+D  取消选区\nctrl+shift+i   反向选择\n视频中用到的素材链接：\n链接：http://pan.baidu.com/s/1ge2M7qN\n密码：5bbe',''),(4,6,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=a0376yckmo7&tiny=0&auto=0\" allowfullscreen></iframe>\n没错，我们就要这样的效果\n快来看视频\n想直接看案例的同学可以快进到14分观看\nhttp://www.wanmeixiangsu.cn/upload/images/1490450688/haibao.png\n这里是我们这期教程的素材和源文件，大家下载练习吧\n链接：http://pan.baidu.com/s/1gfHrJfP 密码：2kvu',''),(5,6,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=u0378tnrys4&tiny=0&auto=0\" allowfullscreen></iframe>\nhttp://www.wanmeixiangsu.cn/upload/images/1490450977/tuzhang1.jpg\nhttp://www.wanmeixiangsu.cn/upload/images/1490450984/tuzhang2.jpg\nhttp://www.wanmeixiangsu.cn/upload/images/1490450991/tuzhang3.jpg\nhttp://www.wanmeixiangsu.cn/upload/images/1490450997/tuzhang4.jpg\nhttp://www.wanmeixiangsu.cn/upload/images/1490451007/tuzhang5.jpg\nhttp://www.wanmeixiangsu.cn/upload/images/1490451013/tuzhang6.jpg\n素材下载链接：链接：http://pan.baidu.com/s/1pLCYd7d \n密码：rb0c',''),(6,6,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=w0383ei7o91&tiny=0&auto=0\" allowfullscreen></iframe>\nhttp://www.wanmeixiangsu.cn/upload/images/1490451416/lvjing_all.png\n01 \n首先打开你的ps软件，然后导入图片，右键选择智能化对象\n不要问我为什么要智能化对象，给我死记！\n其实智能化对象是为了保护原图层，重点是方便修改滤镜效果。\n毕竟这节课讲的凸出就是滤镜效果的一员。\n（在图片智能化对象的同时会自动生成一个蒙版，这个蒙版在后面大有用处。）\n02\n找到顶部菜单栏的滤镜，再从滤镜里面找到风格化，选择风格化里面的凸出。\n03\n大小设为6，深度设为60，确定即可。\n数值你可以自由设定，多试几遍，会有不同效果的。\nps数值是一个非常神奇的东西，差之毫厘谬以千里。\n\n还有些地方不太满意，在蒙版擦擦擦就好了。\n还不会的，多看几遍视频！祝成功~\n链接：http://pan.baidu.com/s/1jHXl2js \n密码：gq8i',''),(7,6,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=a0385se4mnv&tiny=0&auto=0\" allowfullscreen></iframe>\nhttp://www.wanmeixiangsu.cn/upload/images/1490452137/1.jpg\nhttp://www.wanmeixiangsu.cn/upload/images/1490452144/2.jpg\nhttp://www.wanmeixiangsu.cn/upload/images/1490452155/3.jpg\nhttp://www.wanmeixiangsu.cn/upload/images/1490452162/4.jpg\n链接：http://pan.baidu.com/s/1dEFLrR7 \n密码：yvpy','');
/*!40000 ALTER TABLE `bili_addonarticle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bili_addonshop`
--

DROP TABLE IF EXISTS `bili_addonshop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_addonshop` (
  `aid` mediumint(8) NOT NULL,
  `typeid` smallint(5) NOT NULL,
  `body` text NOT NULL,
  `price` float NOT NULL,
  `trueprice` float NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `units` varchar(255) DEFAULT NULL,
  `uptime` int(11) NOT NULL,
  `redirecturl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_addonshop`
--

LOCK TABLES `bili_addonshop` WRITE;
/*!40000 ALTER TABLE `bili_addonshop` DISABLE KEYS */;
/*!40000 ALTER TABLE `bili_addonshop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bili_admin`
--

DROP TABLE IF EXISTS `bili_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_admin` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `usertype` float DEFAULT NULL,
  `userid` char(30) NOT NULL,
  `pwd` char(32) NOT NULL,
  `uname` char(20) NOT NULL,
  `tname` char(30) DEFAULT NULL,
  `email` char(30) NOT NULL,
  `phone` char(30) DEFAULT NULL,
  `typeid` int(10) DEFAULT NULL,
  `logintime` int(10) NOT NULL,
  `loginip` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_admin`
--

LOCK TABLES `bili_admin` WRITE;
/*!40000 ALTER TABLE `bili_admin` DISABLE KEYS */;
INSERT INTO `bili_admin` VALUES (1,0,'BILIBILI','130e29f351572e58c49fd4c910d7beb0','super',NULL,'mnzmx_z@163.com','18014489610',NULL,20170310,NULL),(2,1,'BILI149044799435526NTY','e52c90a908c76df57d19d73830449ebe','辛浪',NULL,'1833482116@qq.com','',NULL,1490447994,NULL);
/*!40000 ALTER TABLE `bili_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bili_archives`
--

DROP TABLE IF EXISTS `bili_archives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_archives` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `typeid` smallint(5) NOT NULL,
  `flag` char(60) DEFAULT NULL,
  `click` mediumint(8) NOT NULL,
  `vote` mediumint(8) DEFAULT NULL,
  `channel` mediumint(8) NOT NULL,
  `title` char(60) NOT NULL,
  `shorttitle` char(36) DEFAULT NULL,
  `writer` char(150) NOT NULL,
  `source` char(20) DEFAULT NULL,
  `litpic` char(100) DEFAULT NULL,
  `pubdate` int(10) NOT NULL,
  `keywords` char(30) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_archives`
--

LOCK TABLES `bili_archives` WRITE;
/*!40000 ALTER TABLE `bili_archives` DISABLE KEYS */;
INSERT INTO `bili_archives` VALUES (1,6,'p',6,NULL,3,'基础工具介绍+案例演示-ps基础教程第一课程','基础工具介绍','辛浪','','/../upload/images/1490448806/gongju.png',1490448811,'基础工具介绍+案例演示-ps基础教程第一课程','基础工具介绍+案例演示-ps基础教程第一课程'),(2,6,'',2,NULL,3,'大头娃娃特效制作-ps基础教程第二课','大头娃娃特效制作','辛浪','','/../upload/images/1490449927/wawa.png',1490449935,'大头娃娃特效制作-ps基础教程第二课','大头娃娃特效制作-ps基础教程第二课'),(3,6,'',7,NULL,3,'选区工具-ps基础教程第三课','选区工具','辛浪','','/../upload/images/1490450286/xuantu.jpg',1490450305,'选区工具-ps基础教程第三课','选区工具-ps基础教程第三课'),(4,6,'',2,NULL,3,'画笔工具+海报制作-ps基础教程第四课','画笔工具+海报制作','辛浪','','/../upload/images/1490450688/haibao.png',1490450695,'画笔工具+海报制作-ps基础教程第四课','画笔工具+海报制作-ps基础教程第四课'),(5,6,'',4,NULL,3,'图章工具-ps基础教程第五课','图章工具','辛浪','','/../upload/images/1490451013/tuzhang6.jpg',1490451073,'图章工具-ps基础教程第五课','图章工具-ps基础教程第五课'),(6,6,'',5,NULL,3,'滤镜凸出-ps基础教程第六课','滤镜凸出','辛浪','','/../upload/images/1490451435/lvjing.png',1490451541,'滤镜凸出-ps基础教程第六课','滤镜凸出-ps基础教程第六课'),(7,6,'',2,NULL,3,'艺术人像-ps基础教程第七课','艺术人像','辛浪','','/../upload/images/1490452174/sou.png',1490452178,'艺术人像-ps基础教程第七课','艺术人像-ps基础教程第七课');
/*!40000 ALTER TABLE `bili_archives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bili_arctype`
--

DROP TABLE IF EXISTS `bili_arctype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_arctype` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `reid` smallint(5) NOT NULL,
  `type` smallint(5) NOT NULL,
  `typename` char(30) NOT NULL,
  `typedir` char(60) NOT NULL,
  `templetindex` char(60) DEFAULT NULL,
  `templetarticle` char(60) DEFAULT NULL,
  `description` char(150) NOT NULL,
  `keywords` varchar(60) NOT NULL,
  `seotitle` varchar(60) NOT NULL,
  `ishidden` smallint(10) NOT NULL,
  `content` text,
  `sitepath` char(60) DEFAULT NULL,
  `siteurl` char(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_arctype`
--

LOCK TABLES `bili_arctype` WRITE;
/*!40000 ALTER TABLE `bili_arctype` DISABLE KEYS */;
INSERT INTO `bili_arctype` VALUES (1,0,3,'视频教程','/videos/','index_videos.htm','article_videos.htm','视频教程_完美像素','视频教程_完美像素','视频教程_完美像素',0,'视频教程_完美像素',NULL,NULL),(2,0,0,'壁纸','/wallpaper/','index_wallpaper.htm','article_wallpaper.htm','壁纸_完美像素','壁纸_完美像素','壁纸_完美像素',0,'壁纸_完美像素',NULL,NULL),(3,0,2,'壁纸_pc','/wallpaper_pc/','index_wallpaper.htm','article_wallpaper.htm','壁纸_pc_完美像素','壁纸_pc_完美像素','壁纸_pc_完美像素',0,'壁纸_pc_完美像素',NULL,NULL),(4,0,2,'壁纸_mobile','/wallpaper_mobile/','index_wallpaper.htm','article_wallpaper.htm','壁纸_mobile_完美像素','壁纸_mobile_完美像素','壁纸_mobile_完美像素',0,'壁纸_mobile_完美像素',NULL,NULL),(5,0,0,'设计师导航','/nav/','index_nav.htm','article_nav.htm','','','设计师导航_完美像素',0,'',NULL,NULL),(6,1,3,'Photo shop','/ps/','index_videos.htm','article_videos.htm','','','ps',0,'',NULL,NULL),(7,1,3,'illustrator','/illustrator/','index_videos.htm','article_videos.htm','','','illustrator',0,'',NULL,NULL),(8,1,3,'Indesign','/indesign/','index_videos.htm','article_videos.htm','','','Indesign',0,'',NULL,NULL),(9,1,3,'After effect','/after_effect/','index_videos.htm','article_videos.htm','','','After effect',0,'',NULL,NULL),(10,1,3,'Premiere','/premiere/','index_videos.htm','article_videos.htm','','','Premiere',0,'',NULL,NULL),(11,1,3,'Cinemal 4D','/cinemal_4d/','index_videos.htm','article_videos.htm','','','Cinemal 4D',0,'',NULL,NULL),(12,1,3,'3D Max','/3d_max/','index_videos.htm','article_videos.htm','','','3D Max',0,'',NULL,NULL),(13,1,3,'Maya','/maya/','index_videos.htm','article_videos.htm','','','Maya',0,'',NULL,NULL),(14,2,0,'明星','/mingxin/','index_wallpaper.htm','article_wallpaper.htm','','','明星',0,'',NULL,NULL),(15,2,0,'爱车','/aiche/','index_wallpaper.htm','article_wapaper.htm','','','爱车',0,'',NULL,NULL),(16,2,0,'美景','/meijing/','index_videos.htm','article_wallpaper.htm','','','美景',0,'',NULL,NULL),(17,2,0,'动物','/dongwu/','index_wallpaper.htm','article_wallpaper.htm','','','动物',0,'',NULL,NULL),(18,2,0,'影视','/yingshi/','index_wallpaper.htm','article_wallpaper.htm','','','影视',0,'',NULL,NULL),(19,2,0,'艺术','/yishu/','index_wallpaper.htm','article_wallpaper.htm','','','艺术',0,'',NULL,NULL),(20,2,0,'卡通','/katong/','index_videos.htm','article_videos.htm','','','卡通',0,'',NULL,NULL),(21,2,0,'设计','/sheji/','index_wallpaper.htm','article_wallpaper.htm','','','设计',0,'',NULL,NULL),(22,2,0,'摄影','/sheying/','index_wallpaper.htm','article_wallpaper.htm','','','摄影',0,'',NULL,NULL),(23,2,0,'绘画','/huihua/','index_wallpaper.htm','article_wallpaper.htm','','','绘画',0,'',NULL,NULL),(24,5,0,'资源下载','/ziyuan/','index_nav.htm','article_nav.htm','','','资源下载',0,'',NULL,NULL),(25,5,0,'设计教程','/jiaocheng/','index_nav.htm','article_nav.htm','','','设计教程',0,'',NULL,NULL),(26,5,0,'高清图片','/tupian/','index_nav.htm','article_nav.htm','','','高清图片',0,'',NULL,NULL),(27,5,0,'配色方案','/peise/','配色方案','配色方案','','','配色方案',0,'',NULL,NULL),(28,5,0,'界面设计','/jiemian/','界面设计','界面设计','界面设计','界面设计','界面设计',0,'',NULL,NULL),(29,5,0,'网站模板','/muban/','网站模板','网站模板','','','网站模板',0,'',NULL,NULL),(30,5,0,'酷站推荐','/kuzhan/','酷站推荐','酷站推荐','','','酷站推荐',0,'',NULL,NULL),(31,5,0,'灵感创意','/linggan/','灵感创意','灵感创意','','','灵感创意',0,'',NULL,NULL),(32,5,0,'字体设计','/font/','字体设计','字体设计','','','字体设计',0,'',NULL,NULL),(33,5,0,'行业名博','/hangye/','行业名博','行业名博','','','行业名博',0,'',NULL,NULL),(34,5,0,'信息图','/xinxi/','信息图','信息图','','信息图','信息图',0,'',NULL,NULL),(35,5,0,'交互设计','/jiaohu/','交互设计','交互设计','','','交互设计',0,'',NULL,NULL),(36,5,0,'摄影美图','/sheying/','摄影美图','摄影美图','','','摄影美图',0,'',NULL,NULL),(37,5,0,'漫画插件','/chajian/','漫画插件','漫画插件','','','漫画插件',0,'',NULL,NULL),(38,5,0,'互联网资讯','/zixun/','互联网资讯','互联网资讯','','互联网资讯','互联网资讯',0,'',NULL,NULL),(39,5,0,'神器推荐','/shenqi/','神器推荐','神器推荐','','','神器推荐',0,'',NULL,NULL),(40,5,0,'热门微博','/weibo/','热门微博','热门微博','','','热门微博',0,'',NULL,NULL);
/*!40000 ALTER TABLE `bili_arctype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bili_feedback`
--

DROP TABLE IF EXISTS `bili_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_feedback` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `aid` mediumint(8) NOT NULL,
  `typeid` smallint(5) DEFAULT NULL,
  `username` char(20) NOT NULL,
  `arctitle` varchar(60) NOT NULL,
  `ip` char(15) DEFAULT NULL,
  `ischeck` float NOT NULL,
  `dtime` int(10) NOT NULL,
  `mid` mediumint(8) NOT NULL,
  `ftype` varchar(10) NOT NULL,
  `msg` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_feedback`
--

LOCK TABLES `bili_feedback` WRITE;
/*!40000 ALTER TABLE `bili_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `bili_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bili_flink`
--

DROP TABLE IF EXISTS `bili_flink`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_flink` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `url` char(60) NOT NULL,
  `webname` char(30) NOT NULL,
  `msg` char(200) NOT NULL,
  `email` char(50) DEFAULT NULL,
  `logo` char(60) DEFAULT NULL,
  `dtime` int(10) DEFAULT NULL,
  `typeid` smallint(5) DEFAULT NULL,
  `ischeck` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_flink`
--

LOCK TABLES `bili_flink` WRITE;
/*!40000 ALTER TABLE `bili_flink` DISABLE KEYS */;
/*!40000 ALTER TABLE `bili_flink` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bili_member`
--

DROP TABLE IF EXISTS `bili_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_member` (
  `mid` mediumint(8) NOT NULL AUTO_INCREMENT,
  `mtype` varchar(20) NOT NULL,
  `userid` char(30) NOT NULL,
  `pwd` char(32) NOT NULL,
  `uname` char(20) NOT NULL,
  `tname` char(30) DEFAULT NULL,
  `sex` char(10) DEFAULT NULL,
  `rank` smallint(5) DEFAULT NULL,
  `uptime` int(11) NOT NULL,
  `exptime` smallint(6) DEFAULT NULL,
  `money` mediumint(8) DEFAULT NULL,
  `email` char(50) NOT NULL,
  `address` char(50) DEFAULT NULL,
  `phone` char(50) DEFAULT NULL,
  `scores` mediumint(8) DEFAULT NULL,
  `face` char(50) DEFAULT NULL,
  `jointime` int(10) DEFAULT NULL,
  `joinip` char(16) DEFAULT NULL,
  `loginip` char(16) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_member`
--

LOCK TABLES `bili_member` WRITE;
/*!40000 ALTER TABLE `bili_member` DISABLE KEYS */;
/*!40000 ALTER TABLE `bili_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bili_orders`
--

DROP TABLE IF EXISTS `bili_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_orders` (
  `aid` mediumint(8) NOT NULL,
  `oid` varchar(80) NOT NULL,
  `userid` int(10) NOT NULL,
  `pid` int(12) DEFAULT NULL,
  `paytype` tinyint(2) NOT NULL,
  `dprice` float NOT NULL,
  `price` float NOT NULL,
  `pricecount` float NOT NULL,
  `state` tinyint(10) NOT NULL,
  `stime` int(10) NOT NULL,
  `title` varchar(80) NOT NULL,
  `buynum` int(10) NOT NULL,
  `ip` char(15) DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_orders`
--

LOCK TABLES `bili_orders` WRITE;
/*!40000 ALTER TABLE `bili_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `bili_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bili_taglist`
--

DROP TABLE IF EXISTS `bili_taglist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bili_taglist` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) NOT NULL,
  `typeid` smallint(5) NOT NULL,
  `tag` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_taglist`
--

LOCK TABLES `bili_taglist` WRITE;
/*!40000 ALTER TABLE `bili_taglist` DISABLE KEYS */;
INSERT INTO `bili_taglist` VALUES (1,1,6,'ps基础教程'),(2,2,6,'大头娃娃特效制作'),(3,3,6,'ps基础教程'),(4,4,6,'ps基础教程'),(5,5,6,'ps基础教程'),(6,6,6,'ps基础教程'),(7,7,6,'ps基础教程');
/*!40000 ALTER TABLE `bili_taglist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-26  2:12:00
