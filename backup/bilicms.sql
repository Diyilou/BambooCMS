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
INSERT INTO `bili_addonarticle` VALUES (1,2,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=k0023j2kgli&tiny=0&auto=0\" allowfullscreen></iframe>\n\n杨幂刘亦菲撞了三次角色 谁才是古装第一美人？',''),(2,2,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=v0385mjpiw8&tiny=0&auto=0\" allowfullscreen></iframe>\n张杰一首《我要你》情韵开唱 复古有又浪漫',''),(3,2,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=y0023qd9k8l&tiny=0&auto=0\" allowfullscreen></iframe>\n[独家首发]《极光之恋》超长片花：马可恋关晓彤狂撩少女心',''),(4,2,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=f0383q4f5m8&tiny=0&auto=0\" allowfullscreen></iframe>\n任素汐失恋被质问：你能为他改变什么？',''),(5,2,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=k0023w7futr&tiny=0&auto=0\" allowfullscreen></iframe>\n北京广州等4城同日出台限购 半月内已有16城加码',''),(6,3,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=w00236a5w8l&tiny=0&auto=0\" allowfullscreen></iframe>\n石头也能下蛋？ 神秘山崖每30年产蛋一枚原因未知',''),(7,3,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=x0023z2u1vv&tiny=0&auto=0\" allowfullscreen></iframe>\n美女体验泰国廉价VR 全程靠服务员摇晃',''),(8,5,'<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https://v.qq.com/iframe/player.html?vid=v0022c132j0&tiny=0&auto=0\" allowfullscreen></iframe>\n炸弹“炸”出绝美天坑 墨西哥这里竟藏着惊天秘密','');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_admin`
--

LOCK TABLES `bili_admin` WRITE;
/*!40000 ALTER TABLE `bili_admin` DISABLE KEYS */;
INSERT INTO `bili_admin` VALUES (1,0,'BILIBILI','130e29f351572e58c49fd4c910d7beb0','super',NULL,'mnzmx_z@163.com','18014489610',NULL,20170310,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_archives`
--

LOCK TABLES `bili_archives` WRITE;
/*!40000 ALTER TABLE `bili_archives` DISABLE KEYS */;
INSERT INTO `bili_archives` VALUES (1,2,'a',0,3,'杨幂刘亦菲撞了三次角色 谁才是古装第一美人？','','张明鑫','','/../upload/images/1489889288/1.png',1489888007,'杨幂刘亦菲撞了三次角色 谁才是古装第一美人？','杨幂刘亦菲撞了三次角色 谁才是古装第一美人？'),(2,2,'',0,3,'张杰一首《我要你》情韵开唱 复古有又浪漫','','张明鑫','','/../upload/images/1489889295/2.png',1489888174,'张杰一首《我要你》情韵开唱 复古有又浪漫','张杰一首《我要你》情韵开唱 复古有又浪漫'),(3,2,'',0,3,'[独家首发]《极光之恋》超长片花：马可恋关晓彤狂撩少女心','','张明鑫','','/../upload/images/1489889559/3.png',1489888805,'[独家首发]《极光之恋》超长片花：马可恋关晓彤狂撩少女心','[独家首发]《极光之恋》超长片花：马可恋关晓彤狂撩少女心'),(4,2,'',0,3,'任素汐失恋被质问：你能为他改变什么？','','张明鑫','','/../upload/images/1489889638/4.png',1489889640,'任素汐失恋被质问：你能为他改变什么？','任素汐失恋被质问：你能为他改变什么？'),(5,2,'',0,3,'北京广州等4城同日出台限购 半月内已有16城加码','','张明鑫','','/../upload/images/1489889737/5.png',1489889739,'北京广州等4城同日出台限购 半月内已有16城加码','北京广州等4城同日出台限购 半月内已有16城加码'),(6,3,'',0,3,'石头也能下蛋？ 神秘山崖每30年产蛋一枚原因未知','','张明鑫','','/../upload/images/1489889823/6.png',1489889833,'石头也能下蛋？ 神秘山崖每30年产蛋一枚原因未知','石头也能下蛋？ 神秘山崖每30年产蛋一枚原因未知'),(7,3,'',0,3,'美女体验泰国廉价VR 全程靠服务员摇晃','','张明鑫','','/../upload/images/1489889874/7.png',1489889892,'美女体验泰国廉价VR 全程靠服务员摇晃','美女体验泰国廉价VR 全程靠服务员摇晃'),(8,5,'',0,3,'炸弹“炸”出绝美天坑 墨西哥这里竟藏着惊天秘密','','张明鑫','','/../upload/images/1489889989/9.png',1489890001,'炸弹“炸”出绝美天坑 墨西哥这里竟藏着惊天秘密','炸弹“炸”出绝美天坑 墨西哥这里竟藏着惊天秘密');
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_arctype`
--

LOCK TABLES `bili_arctype` WRITE;
/*!40000 ALTER TABLE `bili_arctype` DISABLE KEYS */;
INSERT INTO `bili_arctype` VALUES (1,0,3,'视频教程','/videos/','index_videos.htm','article_videos.htm','','','视频教程_完美像素',0,'',NULL,NULL),(2,1,3,'Photo Shop','/videos/ps/','list_videos.htm','article_videos.htm','','','ps视频教程',0,'',NULL,NULL),(3,1,3,'Illustrator','/videos/illustrator/','list_videos.htm','article_videos.htm','','','Illustrator视频教程',0,'',NULL,NULL),(4,1,3,'Indesign','/videos/indesign/','list_videos.htm','article_videos.htm','','','Indesign视频教程',0,'',NULL,NULL),(5,1,3,'After effect','/aftereffect/','list_videos.htm','article_videos.htm','','','After effect视频教程',0,'',NULL,NULL),(6,1,3,'Premiere','/videos/premiere/','list_article.htm','article_article.htm','','','Premiere视频教程',0,'',NULL,NULL),(7,1,3,'Cinemal 4D','/videos/cinemal/','list_videos.htm','article_videos.htm','','','Cinemal 4D视频教程',0,'',NULL,NULL),(8,1,0,'3D Max','/3dmax/','list_videos.htm','article_videos.htm','','','3D Max视频教程',0,'',NULL,NULL),(10,1,3,'Maya','/videos/maya/','list_videos.htm','article_videos.htm','','','Maya视频教程',0,'',NULL,NULL),(11,0,0,'壁纸','/wallpaper/','index_wallpaper.htm','article_wallpaper.htm','','','壁纸',0,'',NULL,NULL),(12,0,2,'壁纸_pc','/wallpaper_pc/','index_wallpaper.htm','article_wallpaper.htm','','','壁纸_pc',1,'',NULL,NULL),(13,0,2,'壁纸_mobile','/wallpaper_mobile/','index_wallpaper.htm','article_wallpaper.htm','','','壁纸_mobile',1,'',NULL,NULL),(14,11,0,'明星','/wallpaper/mingxing/','index_wallpaper.htm','article_wallpaper.htm','明星_壁纸','明星_壁纸','明星_壁纸',0,'明星_壁纸',NULL,NULL),(15,11,0,'爱车','/wallpaper/aiche/','index_wallpaper.htm','article_wallpaper.htm','爱车_壁纸','爱车_壁纸','爱车_壁纸',0,'爱车_壁纸',NULL,NULL),(16,11,0,'美景','/wallpaper/meijing/','index_wallpaper.htm','article_wallpaper.htm','美景_壁纸','美景_壁纸','美景_壁纸',0,'美景_壁纸',NULL,NULL),(17,11,0,'动物','/wallpaper/dongwu/','index_wallpaper.htm','article_wallpaper.htm','动物_壁纸','动物_壁纸','动物_壁纸',0,'动物_壁纸',NULL,NULL),(18,11,0,'影视','/wallpaper/yingshi/','index_wallpaper.htm','article_wallpaper.htm','影视_壁纸','影视_壁纸','影视_壁纸',0,'影视_壁纸',NULL,NULL),(19,11,0,'卡通','/wallpaper/katong/','index_wallpaper.htm','article_wallpaper.htm','卡通_壁纸','卡通_壁纸','卡通_壁纸',0,'卡通_壁纸',NULL,NULL),(20,11,0,'设计','/wallpaper/sheji/','index_wallpaper.htm','article_paper.htm','设计_壁纸','设计_壁纸','设计_壁纸',0,'设计_壁纸',NULL,NULL),(21,11,0,'艺术','/yishu/','index_wallpaper.htm','article_wallpaper.htm','艺术_壁纸','艺术_壁纸','艺术_壁纸',0,'艺术_壁纸',NULL,NULL),(22,11,0,'摄影','/wallpaper/sheying/','index_wallpaper.htm','article_wallpaper.htm','摄影_壁纸','摄影_壁纸','摄影_壁纸',0,'摄影_壁纸',NULL,NULL),(23,11,0,'绘画','/huihua/','index_wallpaper.htm','article_wallpaper.htm','绘画_壁纸','绘画_壁纸','绘画_壁纸',0,'绘画_壁纸',NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bili_taglist`
--

LOCK TABLES `bili_taglist` WRITE;
/*!40000 ALTER TABLE `bili_taglist` DISABLE KEYS */;
INSERT INTO `bili_taglist` VALUES (1,1,2,'古装美女'),(2,2,2,'我要你'),(3,3,2,''),(4,4,2,''),(5,5,2,''),(6,6,3,''),(7,7,3,''),(8,8,5,'');
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

-- Dump completed on 2017-03-19 22:16:30
