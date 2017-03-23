<?php

  require_once(dirname(__file__) . '/../utils/db.php');
  $dutils = new DUtils();

	class Client {

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
        $sql = "select a.litpic,a.title,a.id,a.typeid,b.typedir from bili_archives a left join bili_arctype b on a.typeid=b.id where b.id=$typeid order by pubdate desc";
        $result = $dutils -> select($sql);

        if ($result['type'] == '4') {
          return $result;
        }

        return false;
      }
    }

    function getIndexVideosList () {
      global $dutils;
      $sql = "select a.litpic,a.title,a.id,a.typeid,b.typedir from bili_archives a left join bili_arctype b on a.typeid=b.id where b.id in (select id from bili_arctype where reid=1) order by pubdate desc limit 0,20";
      $result = $dutils -> select($sql);

      if ($result['type'] == '4') {
        return $result;
      }

      return false;
    }

    function getVideo ($aid) {

      if (isset($aid) && !empty($aid)) {

        global $dutils;
        $sql = "select a.title,a.keywords,a.pubdate,a.description,a.litpic,a.click,b.body from bili_archives a left join bili_addonarticle b on a.id=b.aid where a.id=$aid";

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
        $sql = "select a.title,a.keywords,a.pubdate,a.description,a.litpic,a.click,b.body from bili_archives a left join bili_addonarticle b on a.id=b.aid where a.id=$aid";

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
      $sql = "select * from bili_arctype where reid=11";
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

	}
?>
