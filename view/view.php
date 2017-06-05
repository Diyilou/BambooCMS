<?php
  $tag = $_GET['tag'];

  // 栏目页
  if (isset($tag)) {

    if ($tag === 'index') {
      include('../templets/index.htm');
      return;
    }
    
    return;
  }
?>
