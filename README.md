# BambooCMS
BambooCMS是一个动态的CMS，实现数据管理和网站实现分布处理。
# 特点：
1. 动态CMS
2. 实现内容管理和网站发布分布进行，BambooCMS核心功能是提供一个内容发布平台，而不是一个静态页面生成器
3. 基于React、php
4. 安装简单

# 安装:
环境要求：apache或者nginx，apache需要开启rewrite功能
1. git clone https://github.com/Diyilou/BambooCMS.git
2. 在apache或者nginx中配置网站路径规则，并重启服务器
4. 配置数据库（执行下面的命令），配置数据库之前需要再新建一个bamboocms.sql数据库，数据库的配置信息在BambooCMS/config/db.php中
  cd BambooCMS/init
  mysql -u root -p bamboocms < bamboocms.sql
5. 配置好数据库后，就可以打开http://localhost/biliadmin/，输入帐号:super，密码：bilibilicms即可登入内容发布后台
   超级管理员帐号修改可以参看BambooCMS/init/bamboocms.sql 文件的最后一行
6. 如果需要更具内容编写尾静态的网站，需要开启apache或者nginx的rewrite模块，然后通过.htaccess代理页面路由，再view/view.php文件中编写对应规则

# 目录：

/biliadmin 后台

/config 配置

/data 文档数据

/init 数据库初始化

/public 公共css或者js文件

/route 路由文件

/src jsx和sass源文件

/templets 伪静态网站的模板存放在这里

/upload 上传文件的存储目录

/utils 工具

/view 伪静态路径规则处理文件


安装和使用过程中若有问题，可通过mnzmx_z@163.com联系作者，有问必答，也可互相交流，共同成长，希望可以帮助到你们。
  
