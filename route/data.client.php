<?php

  require_once(dirname(__file__) . '/../utils/db.php');
  $dutils = new DUtils();

	class Client {

    // 获得日报文章列表
    function getRibaoArticleList ($typeid) {

      if (isset($typeid) && !empty($typeid)) {
        global $dutils;
        $sql = "select a.litpic,a.title,a.click,a.pubdate,a.id,a.typeid,b.typedir from bili_archives a left join bili_arctype b on a.typeid=b.id where b.id=$typeid order by pubdate desc";
        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    // 记录点击
    function changeClickData ($aid) {
      global $dutils;
      $sql = "update bili_archives set click=click+1 where id=$aid";
      $dutils -> update($sql);
    }

    function getRibaoArticle ($aid) {

      if (isset($aid) && !empty($aid)) {

        global $dutils;
        $sql = "select a.title,a.writer,a.keywords,a.pubdate,a.description,a.litpic,a.click,b.body,c.typename from (bili_archives a left join bili_addonarticle b on a.id=b.aid) left join bili_arctype c on a.typeid=c.id where a.id=$aid";

        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    // 获得首页需要展示的商品
    function getIndexShop () {
      global $dutils;
      $sql = "select a.litpic,a.title,a.click,a.pubdate,a.id,a.typeid,b.brand,b.price,b.trueprice from bili_archives a left join bili_addonshop b on a.id=b.aid order by pubdate desc limit 10";
      $result = $dutils -> select($sql);

      if ($result['type'] == '4') {
        return $result;
      }

      return false;
    }

    function getShopAll () {
      global $dutils;
      $sql = "select a.litpic,a.title,a.click,a.pubdate,a.id,a.typeid,b.brand,b.price,b.trueprice from bili_archives a left join bili_addonshop b on a.id=b.aid order by pubdate desc limit 20";
      $result = $dutils -> select($sql);

      if ($result['type'] == '4') {
        return $result;
      }

      return false;
    }

    // 获得商品详情
    function getShop ($aid) {
      global $dutils;
      $sql = "select a.litpic,a.title,a.click,a.pubdate,a.writer,a.keywords,a.description,a.id,a.typeid,b.brand,b.price,b.trueprice,b.body from bili_archives a left join bili_addonshop b on a.id=b.aid where a.id=$aid";
      $result = $dutils -> select($sql);

      if ($result['type'] == '4') {
        return $result;
      }

      return false;
    }

    // 获得商家名称
    function getShopUser ($uid) {
      global $dutils;
      $sql = "select uname from bili_member where md5(userid)='$uid'";
      $result = $dutils -> select($sql);
      if ($result['type'] == '4') {
        return $result;
      }

      return false;
    }

    // 获得品牌
    function getPingPai () {
      global $dutils;
      $sql = "select brand from bili_addonshop";
      $result = $dutils -> select($sql);
      if ($result['type'] == '4') {
        return $result;
      }

      return false;
    }

    // 获得首页需要展示视频的栏目
		function getCourseVideosColumn () {

      global $dutils;
      $sql = "select * from bili_arctype where reid=1";
      $result = $dutils -> select($sql);
      // success and $typename is empty
      if ($result['type'] == '4') {
          return $result;
      }

      return false;
    }

    // 获得首页所有栏目的视频
    function getCourseVideosList ($typeid) {

      if (isset($typeid) && !empty($typeid)) {
        global $dutils;
        $sql = "select a.litpic,a.title,a.click,a.pubdate,a.id,a.typeid,b.typedir from bili_archives a left join bili_arctype b on a.typeid=b.id where b.id=$typeid order by pubdate desc";
        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    function getIndexVideosList () {
      global $dutils;
      $sql = "select a.litpic,a.pubdate,a.click,a.title,a.id,a.typeid,b.typedir from bili_archives a left join bili_arctype b on a.typeid=b.id where b.id in (select id from bili_arctype where reid=1) order by pubdate desc limit 0,20";
      $result = $dutils -> select($sql);

      if ($result['type'] == '4') {
        return $result;
      }

      return false;
    }

    function getVideo ($aid) {

      if (isset($aid) && !empty($aid)) {

        global $dutils;
        $sql = "select a.title,a.writer,a.keywords,a.pubdate,a.description,a.litpic,a.click,b.body,c.typename from (bili_archives a left join bili_addonarticle b on a.id=b.aid) left join bili_arctype c on a.typeid=c.id where a.id=$aid";

        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    function getWallpaper ($aid) {

      if (isset($aid) && !empty($aid)) {

        global $dutils;
        $sql = "select a.title,a.writer,a.keywords,a.pubdate,a.description,a.litpic,a.click,b.body,c.typename from (bili_archives a left join bili_addonarticle b on a.id=b.aid) left join bili_arctype c on a.typeid=c.id where a.id=$aid";

        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    function getWallpaperPC ($aid, $typeid) {

      if (isset($aid) && !empty($aid) && isset($typeid) && !empty($typeid)) {

        global $dutils;
        $sql = "select a.title,b.body from bili_archives a left join bili_addonarticle b on a.id=b.aid where a.id in (select aid from bili_taglist where tag like '%$aid%' and typeid=$typeid)";

        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    function getWallpaperMobile ($aid, $typeid) {

      if (isset($aid) && !empty($aid) && isset($typeid) && !empty($typeid)) {

        global $dutils;
        $sql = "select a.title,b.body from bili_archives a left join bili_addonarticle b on a.id=b.aid where a.id in (select aid from bili_taglist where tag like '%$aid%' and typeid=$typeid)";

        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    // 获得所有的壁纸栏目
    function getWallPaperColumn () {
      global $dutils;
      $sql = "select * from bili_arctype where reid=2";
      $result = $dutils -> select($sql);
      // success and $typename is empty
      if ($result['type'] == '4') {
          return $result;
      }

      return false;
    }

    // 获得首页所有栏目的视频
    function getWallPaperList ($typeid) {

      if (isset($typeid) && !empty($typeid)) {
        global $dutils;
        $sql = "select a.litpic,a.title,a.id,a.typeid,b.typedir from bili_archives a left join bili_arctype b on a.typeid=b.id where b.id=$typeid order by pubdate desc";
        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    function getNavSection ($typeid) {
      if (isset($typeid) && !empty($typeid)) {
        global $dutils;
        $sql = "select typename,seotitle,id from bili_arctype where reid=$typeid";
        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    function getNavDetail ($typeid) {
      if (isset($typeid) && !empty($typeid)) {
        global $dutils;
        $sql = "select a.title,a.description,a.keywords,b.redirecturl from bili_archives a left join bili_addonarticle b on a.id=b.aid where a.typeid=$typeid";
        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

	}
?>
