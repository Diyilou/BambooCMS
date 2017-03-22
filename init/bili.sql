
DROP TABLE IF EXISTS `bili_arctype`; -- 栏目表

CREATE TABLE `bili_arctype` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT, -- 栏目id
  `reid` smallint(5) NOT NULL, -- 栏目上一级id
  `type` smallint(5) NOT NULL, -- 栏目模型
  `typename` char(30) NOT NULL, -- 栏目名称
  `typedir` char(60) NOT NULL, -- 栏目地址
  `templetindex` char(60) DEFAULT NULL, -- 栏目使用模板
  `templetarticle` char(60) DEFAULT NULL, -- 栏目使用模板
  `description` char(150) NOT NULL, -- 栏目描述
  `keywords` varchar(60) NOT NULL, -- 栏目关键字
  `seotitle` varchar(60) NOT NULL, -- seo标题
  `ishidden` smallint(10) NOT NULL, -- 是否隐藏
  `content` text DEFAULT NULL, -- 栏目内容
  `sitepath` char(60) DEFAULT NULL, -- 栏目路径
  `siteurl` char(60) DEFAULT NULL, -- 栏目url
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_arctype` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `bili_archives`; -- 存档表

CREATE TABLE `bili_archives` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT, -- 文章id
  `typeid` smallint(5) NOT NULL, -- 文章所属栏目
  `flag` char(60) DEFAULT  NULL, -- 文章属性
  `click` mediumint(8) NOT NULL, -- 点击量
  `vote` mediumint(8) DEFAULT NULL, --
  `channel` mediumint(8) NOT NULL, -- 文章类型
  `title` char(60) NOT NULL, -- 标题
  `shorttitle` char(36) DEFAULT NULL, -- 短标题
  `writer` char(150) NOT NULL, -- 作者
  `source` char(20) DEFAULT NULL, -- 源文件
  `litpic` char(100) DEFAULT NULL, -- 缩略图
  `pubdate` int(10) NOT NULL, -- 更新时间
  `keywords` char(30) NULL, -- 关键词
  `description` varchar(255) DEFAULT NULL, -- 描述
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_archives` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `bili_addonarticle`; -- 文章表

CREATE TABLE `bili_addonarticle` (
  `aid` mediumint(8) NOT NULL, -- 文章id
  `typeid` smallint(5) NOT NULL, -- 文章所属栏目
  `body` text NOT  NULL, -- 内容
  `redirecturl` varchar(255) DEFAULT NULL, -- 重定向的路径
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_addonarticle` WRITE;
UNLOCK TABLES;


DROP TABLE IF EXISTS `bili_addonshop`; -- 商品表

CREATE TABLE `bili_addonshop` (
  `aid` mediumint(8) NOT NULL, -- 商品id
  `typeid` smallint(5) NOT NULL, -- 商品所属栏目
  `body` text NOT  NULL, -- 内容
  `price` float NOT NULL, -- 优惠价
  `trueprice` float NOT NULL, -- 原价
  `brand` varchar(255) DEFAULT NULL, -- 品牌
  `units` varchar(255) DEFAULT NULL, -- 单位
  `uptime` int(11) NOT NULL, -- 上架时间
  `redirecturl` varchar(255) DEFAULT NULL, -- 重定向的路径
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_addonshop` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `bili_taglist`; -- tag表

CREATE TABLE `bili_taglist` (
  `tid` int(11) NOT NULL AUTO_INCREMENT, -- tag id
  `aid` int(11) NOT NULL, -- 文章id
  `typeid` smallint(5) NOT  NULL, -- 栏目id
  `tag` varchar(200) DEFAULT NULL, -- tag属性
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_taglist` WRITE;
UNLOCK TABLES;


DROP TABLE IF EXISTS `bili_admin`; -- 管理员用户表

CREATE TABLE `bili_admin` (
  `id` int(10) NOT NULL AUTO_INCREMENT, -- 文章id
  `usertype` float DEFAULT NULL, -- 文章所属栏目
  `userid` char(30) NOT NULL, -- 文章属性
  `pwd` char(32) NOT NULL, -- 点击量
  `uname` char(20) NOT NULL, -- 标题
  `tname` char(30) DEFAULT NULL, -- 短标题
  `email` char(30) NOT NULL, -- 作者
  `phone` char(30) DEFAULT NULL, -- 源文件
  `typeid` int(10) DEFAULT NULL, -- 缩略图
  `logintime` int(10) NOT NULL, -- 更新时间
  `loginip` varchar(20) DEFAULT NULL, -- 关键词
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_admin` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `bili_member`; -- 普通会员用户

CREATE TABLE `bili_member` (
  `mid` mediumint(8) NOT NULL AUTO_INCREMENT, -- 文章id
  `mtype` varchar(20) NOT NULL, -- 文章所属栏目
  `userid` char(30) NOT NULL, -- 文章属性
  `pwd` char(32) NOT NULL, -- 点击量
  `uname` char(20) NOT NULL, -- 标题
  `tname` char(30) DEFAULT NULL, -- 短标题
  `sex` char(10) DEFAULT NULL, -- 作者
  `rank` smallint(5) DEFAULT NULL, -- 源文件
  `uptime` int(11) NOT NULL, -- 缩略图
  `exptime` smallint(6) DEFAULT NULL, -- 更新时间
  `money` mediumint(8) DEFAULT NULL, -- 关键词
  `email` char(50) NOT NULL, -- 标题
  `address` char(50) DEFAULT NULL, -- 标题
  `phone` char(50) DEFAULT NULL, -- 短标题
  `scores` mediumint(8) DEFAULT NULL, -- 作者
  `face` char(50) DEFAULT NULL, -- 源文件
  `jointime` int(10) DEFAULT NULL, -- 缩略图
  `joinip` char(16) DEFAULT NULL, -- 更新时间
  `loginip` char(16) DEFAULT NULL, -- 关键词
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_member` WRITE;
UNLOCK TABLES;


DROP TABLE IF EXISTS `bili_flink`; -- 友情链接表

CREATE TABLE `bili_flink` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT, -- 文章id
  `url` char(60) NOT NULL, -- 文章所属栏目
  `webname` char(30) NOT NULL, -- 文章属性
  `msg` char(200) NOT NULL, -- 点击量
  `email` char(50) DEFAULT NULL, -- 标题
  `logo` char(60) DEFAULT NULL, -- 短标题
  `dtime` int(10) DEFAULT NULL, -- 作者
  `typeid` smallint(5) DEFAULT NULL, -- 源文件
  `ischeck` smallint(6) DEFAULT NULL, -- 缩略图
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_flink` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `bili_orders`; -- 订单表

CREATE TABLE `bili_orders` (
  `aid` mediumint(8) NOT NULL, -- 文章id
  `oid` varchar(80) NOT NULL, -- 文章所属栏目
  `userid` int(10) NOT NULL, -- 文章属性
  `pid` int(12) DEFAULT NULL, -- 点击量
  `paytype` tinyint(2) NOT NULL, -- 标题
  `dprice` float NOT NULL, -- 短标题
  `price` float NOT NULL, -- 作者
  `pricecount` float NOT NULL, -- 源文件
  `state` tinyint(10) NOT NULL, -- 缩略图
  `stime` int(10) NOT NULL, -- 更新时间
  `title` varchar(80) NOT NULL, -- 关键词
  `buynum` int(10) NOT NULL, -- 标题
  `ip` char(15) DEFAULT NULL, -- 标题
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_orders` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `bili_feedback`; -- 评论表

CREATE TABLE `bili_feedback` (
  `id` int(5) NOT NULL AUTO_INCREMENT, -- 文章id
  `aid` mediumint(8) NOT NULL, -- 文章所属栏目
  `typeid` smallint(5) DEFAULT NULL, -- 文章属性
  `username` char(20) NOT NULL, -- 点击量
  `arctitle` varchar(60) NOT NULL, -- 标题
  `ip` char(15) DEFAULT NULL, -- 短标题
  `ischeck` float NOT NULL, -- 作者
  `dtime` int(10) NOT NULL, -- 源文件
  `mid` mediumint(8) NOT NULL, -- 缩略图
  `ftype` varchar(10) NOT NULL, -- 关键词
  `msg` text NOT NULL, -- 标题
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bili_feedback` WRITE;
UNLOCK TABLES;

INSERT INTO `bili_admin` (uname,pwd,email,phone,usertype,logintime,userid) VALUES ('super', md5('bilibili'),'mnzmx_z@163.com', '18014489610',0,'20170310','BILIBILI');
