<?php
  $tag = $_GET['tag'];
  $aid = $_GET['aid'];

  // 文章页面
  if (isset($tag) && isset($aid)) {
    if ($tag === 'find') {
      $aid = explode('_', $aid);
      if ($aid[0] === 'ribao') {
        $aid = $aid[1];
        include('../templets/article_find.htm');
        return;
      }
      return;
    }

    if ($tag === 'store') {
      include('../templets/article_store.htm');
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

    if (preg_match('/find[\/]{0,1}/',$tag)) {
      include('../templets/index_find.htm');
      return;
    }

    if (preg_match('/store[\/]/',$tag)) {
      include('../templets/index_store.htm');
      return;
    }

    return;
  }
?>
