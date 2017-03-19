<?php
  $tag = $_GET['tag'];
  $aid = $_GET['aid'];

  // 文章页面
  if (isset($tag) && isset($aid)) {

    if ($tag === 'wallpaper') {
      include('../templets/article_wallpaper.htm');
      return;
    }

    if ($tag === 'course') {
      include('../templets/article_videos.htm');
      return;
    }

    return;
  }

  // 栏目页
  if (isset($tag)) {

    if ($tag === 'index') {
      include('../templets/index.htm');
      return;
    }

    if (preg_match('/wallpaper[\/]{0,1}/',$tag)) {
      include('../templets/index_wallpaper.htm');
      return;
    }

    if (preg_match('/tools[\/]/',$tag)) {
      include('../templets/index_tools.htm');
      return;
    }

    if (preg_match('/shop[\/]/',$tag)) {
      include('../templets/index_shop.htm');
      return;
    }

    if (preg_match('/course[\/]/',$tag)) {
      include('../templets/index_videos.htm');
      return;
    }

    if (preg_match('/nav[\/]/',$tag)) {
      include('../templets/index_nav.htm');
      return;
    }

    return;
  }
?>
