<?php
  if (!isset($_POST['tag']) && $_POST['tag'] != 'bili') {
    echo json_encode(array('status' => 0, 'msg' => 'failed send, please check your send ajax'));
    return;
  }

  require_once(dirname(__file__) . '/../utils/db.php');
  $dutils = new DUtils();

  // 检查栏目名称不重复
  function checkTypename ($typename) {
      global $dutils;
      $sql = "select id from bili_arctype where typename='$typename'";
      $result = $dutils -> select($sql);
      // success and $typename is empty
      if ($result['type'] == '3') {
          return true;
      }

      return false;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'addcolumn') {
    $data = $_POST['data'];

    $reid = $data['reid'];
    $ishidden = $data['ishidden'];
    $typename = $data['typename'];
    $typedir = $data['typedir'];
    $templetindex = $data['templetindex'];
    $templetarticle = $data['templetarticle'];
    $description = $data['description'];
    $keywords = $data['keywords'];
    $seotitle = $data['seotitle'];
    $content = $data['content'];
    $type = $data['type'];

    // 检查空字段
    if (!isset($typename) || empty($typename) ||
        !isset($typedir) || empty($typedir) ||
        !isset($templetindex) || empty($templetindex) ||
        !isset($templetarticle) || empty($templetarticle) ||
        !isset($seotitle) || empty($seotitle)) {
          echo json_encode(array('status' => 0, 'msg' => '增加栏目的字段不能为空', 'errno' => '0'));
          return;
    }

    if (checkTypename($typename)) {
      $sql = "insert into bili_arctype (reid,ishidden,typename,typedir,templetindex,templetarticle,description,keywords,seotitle,content,type) values ($reid,$ishidden,'$typename','$typedir','$templetindex','$templetarticle','$description','$keywords','$seotitle','$content',$type)";

      $result = $dutils -> insert($sql);
      if ($result['type'] == '1') {
        echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '本栏目已经存在，可以考虑更换栏目名称重新添加', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'updatecolumn') {
    $data = $_POST['data'];

    $reid = $data['reid']; // 如果是更新的话，$reid就是当前id,并非reid
    $ishidden = $data['ishidden'];
    $typename = $data['typename'];
    $typedir = $data['typedir'];
    $templetindex = $data['templetindex'];
    $templetarticle = $data['templetarticle'];
    $description = $data['description'];
    $keywords = $data['keywords'];
    $seotitle = $data['seotitle'];
    $content = $data['content'];
    $type = $data['type'];

    // 检查空字段
    if (!isset($typename) || empty($typename) ||
        !isset($typedir) || empty($typedir) ||
        !isset($templetindex) || empty($templetindex) ||
        !isset($templetarticle) || empty($templetarticle) ||
        !isset($seotitle) || empty($seotitle)) {
          echo json_encode(array('status' => 0, 'msg' => '增加栏目的字段不能为空', 'errno' => '0'));
          return;
    }

    $sql = "update bili_arctype set ishidden=$ishidden,typename='$typename',typedir='$typedir',templetindex='$templetindex',templetarticle='$templetarticle',description='$description',keywords='$keywords',seotitle='$seotitle',content='$content',type=$type where id=$reid";
    $result = $dutils -> update($sql);
    if ($result['type'] == '5') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }
    echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'allcolumn') {
    global $dutils;
    $sql = "select * from bili_arctype where reid=0";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '没有栏目，快去新建吧', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'delcolumn') {
    $id = $_POST['id'];
    global $dutils;
    $sql = "delete from bili_arctype where id=$id";
    $result = $dutils -> delete($sql);
    if ($result['type'] == '5') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '栏目删除失败，请重试', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'getsoncolumn') {
    $id = $_POST['id'];
    global $dutils;
    $sql = "select * from bili_arctype where reid=$id";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '没有子栏目', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'allarticle') {
    global $dutils;
    $id = $_POST['id'];
    $sql = "select * from bili_archives where typeid=$id";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '没有文章，快去新建文章吧', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'addarticle') {
    $data = $_POST['data'];
    $typeid = $data['typeid'];
    $title = $data['title'];
    $shorttitle = $data['shorttitle'];
    $tag = $data['tag'];
    $redirecturl = $data['redirecturl'];
    $source = $data['source'];
    $description = $data['description'];
    $keywords = $data['keywords'];
    $writer = $data['writer'];
    $body = $data['body'];
    $flag = $data['flag'];
    $channel = $data['channel'];
    $litpic = $data['litpic'];
    $pubdate = time();
    // 检查空字段
    if (!isset($title) || empty($title) ||
        !isset($description) || empty($description) ||
        !isset($keywords) || empty($keywords)) {
          echo json_encode(array('status' => 0, 'msg' => '文章必填内容不能为空', 'errno' => '0'));
          return;
    }

    // ded_archives 表
    $sql = "insert into bili_archives (litpic,typeid,flag,click,title,shorttitle,writer,source,pubdate,keywords,description,channel) values ('$litpic',$typeid,'$flag', 0,'$title','$shorttitle','$writer','$source','$pubdate','$keywords','$description',$channel)";
    $result = $dutils -> insert($sql);
    if ($result['type'] == '1') {
      $sql = "select id from bili_archives where pubdate='$pubdate'";
      $result = $dutils -> select($sql);
      if ($result['type'] == '4') {
        $aid = (int)$result['data'][0]['id'];
        $sql = "insert into bili_addonarticle (aid,typeid,body,redirecturl) values ($aid, $typeid,'$body','$redirecturl')";
        $result = $dutils -> insert($sql);
        if ($result['type'] == '1') {
          $sql = "insert into bili_taglist (aid,typeid,tag) values ($aid,$typeid,'$tag')";
          $result = $dutils -> insert($sql);
          if ($result['type'] == '1') {
            echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
            return;
          }
          echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
          return;
        }
        echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }

      echo json_encode(array('status' => 0, 'msg' => '创建文章出错', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'addvideos') {
    $data = $_POST['data'];
    $typeid = $data['typeid'];
    $title = $data['title'];
    $shorttitle = $data['shorttitle'];
    $tag = $data['tag'];
    $redirecturl = $data['redirecturl'];
    $source = $data['source'];
    $description = $data['description'];
    $keywords = $data['keywords'];
    $writer = $data['writer'];
    $body = $data['body'];
    $flag = $data['flag'];
    $channel = $data['channel'];
    $litpic = $data['litpic'];
    $pubdate = time();
    // 检查空字段
    if (!isset($title) || empty($title) ||
        !isset($description) || empty($description) ||
        !isset($keywords) || empty($keywords)) {
          echo json_encode(array('status' => 0, 'msg' => '文章必填内容不能为空', 'errno' => '0'));
          return;
    }

    // ded_archives 表
    $sql = "insert into bili_archives (typeid,flag,click,title,shorttitle,writer,source,pubdate,keywords,description,channel,litpic) values ($typeid,'$flag', 0,'$title','$shorttitle','$writer','$source','$pubdate','$keywords','$description',$channel,'$litpic')";
    $result = $dutils -> insert($sql);
    if ($result['type'] == '1') {
      $sql = "select id from bili_archives where pubdate='$pubdate'";
      $result = $dutils -> select($sql);
      if ($result['type'] == '4') {
        $aid = (int)$result['data'][0]['id'];
        $sql = "insert into bili_addonarticle (aid,typeid,body,redirecturl) values ($aid, $typeid,'$body','$redirecturl')";
        $result = $dutils -> insert($sql);
        if ($result['type'] == '1') {
          $sql = "insert into bili_taglist (aid,typeid,tag) values ($aid,$typeid,'$tag')";
          $result = $dutils -> insert($sql);
          if ($result['type'] == '1') {
            echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
            return;
          }
          echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
          return;
        }
        echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }

      echo json_encode(array('status' => 0, 'msg' => '创建文章出错', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'delarticle') {
    $aid = $_POST['aid'];
    global $dutils;
    $sql = "delete from bili_archives where id=$aid";
    $result = $dutils -> delete($sql);
    if ($result['type'] == '5') {
      $sql = "delete from bili_addonarticle where aid=$aid";
      $result = $dutils -> delete($sql);
      if ($result['type'] == '5') {
        $sql = "delete from bili_taglist where aid=$aid";
        $result = $dutils -> delete($sql);
        echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => '文章删除失败', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '文章删除失败', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'getarticledata') {
    $aid = $_POST['aid'];
    global $dutils;
    $sql = "select a.id,a.title,a.shorttitle,a.writer,a.source,a.litpic,a.pubdate,a.keywords,a.description,a.flag,b.tag,c.redirecturl,c.body from (bili_archives a left join bili_taglist b on a.id=b.aid) left join bili_addonarticle c on a.id=c.aid where a.id=$aid";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '文章数据获取失败', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'updatearticle') {
    $data = $_POST['data'];
    $typeid = $data['typeid'];
    $title = $data['title'];
    $shorttitle = $data['shorttitle'];
    $tag = $data['tag'];
    $redirecturl = $data['redirecturl'];
    $source = $data['source'];
    $description = $data['description'];
    $keywords = $data['keywords'];
    $writer = $data['writer'];
    $body = $data['body'];
    $flag = $data['flag'];
    $litpic = $data['litpic'];
    $aid = $_POST['aid'];

    // 检查空字段
    if (!isset($title) || empty($title) ||
        !isset($description) || empty($description) ||
        !isset($keywords) || empty($keywords)) {
          echo json_encode(array('status' => 0, 'msg' => '文章必填内容不能为空', 'errno' => '0'));
          return;
    }

    // ded_archives 表
    $sql = "update bili_archives set litpic='$litpic',typeid=$typeid,flag='$flag',title='$title',shorttitle='$shorttitle',writer='$writer',source='$source',keywords='$keywords',description='$description' where id=$aid";
    $result = $dutils -> update($sql);
    if ($result['type'] == '5') {
      $sql = "update bili_addonarticle set body='$body',redirecturl='$redirecturl' where aid=$aid";
      $result = $dutils -> update($sql);
      if ($result['type'] == 5) {
        $sql = "update bili_taglist set tag='$tag' where aid=$aid";
        $result = $dutils -> update($sql);
        if ($result['type'] == 5) {
          echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
          return;
        }
        echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'updatevideos') {
    $data = $_POST['data'];
    $typeid = $data['typeid'];
    $title = $data['title'];
    $shorttitle = $data['shorttitle'];
    $tag = $data['tag'];
    $redirecturl = $data['redirecturl'];
    $source = $data['source'];
    $description = $data['description'];
    $keywords = $data['keywords'];
    $writer = $data['writer'];
    $body = $data['body'];
    $flag = $data['flag'];
    $aid = $_POST['aid'];
    $litpic = $data['litpic'];

    // 检查空字段
    if (!isset($title) || empty($title) ||
        !isset($description) || empty($description) ||
        !isset($keywords) || empty($keywords)) {
          echo json_encode(array('status' => 0, 'msg' => '文章必填内容不能为空', 'errno' => '0'));
          return;
    }

    // ded_archives 表
    $sql = "update bili_archives set litpic='$litpic',typeid=$typeid,flag='$flag',title='$title',shorttitle='$shorttitle',writer='$writer',source='$source',keywords='$keywords',description='$description' where id=$aid";
    $result = $dutils -> update($sql);
    if ($result['type'] == '5') {
      $sql = "update bili_addonarticle set body='$body',redirecturl='$redirecturl' where aid=$aid";
      $result = $dutils -> update($sql);
      if ($result['type'] == 5) {
        $sql = "update bili_taglist set tag='$tag' where aid=$aid";
        $result = $dutils -> update($sql);
        if ($result['type'] == 5) {
          echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
          return;
        }
        echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
    return;
  }


  if (isset($_POST['type']) && $_POST['type'] == 'addshop') {
    $data = $_POST['data'];
    $typeid = $data['typeid'];
    $title = $data['title'];
    $shorttitle = $data['shorttitle'];
    $tag = $data['tag'];
    $redirecturl = $data['redirecturl'];
    $source = $data['source'];
    $description = $data['description'];
    $keywords = $data['keywords'];
    $writer = $data['writer'];
    $body = $data['body'];
    $flag = $data['flag'];
    $litpic = $data['litpic'];
    $price = $data['price'];
    $trueprice = $data['trueprice'];
    $units = $data['units'];
    $brand = $data['brand'];
    $channel = $data['channel'];
    $pubdate = time();
    // 检查空字段
    if (!isset($title) || empty($title) ||
        !isset($description) || empty($description) ||
        !isset($keywords) || empty($keywords)) {
          echo json_encode(array('status' => 0, 'msg' => '文章必填内容不能为空', 'errno' => '0'));
          return;
    }

    // ded_archives 表
    $sql = "insert into bili_archives (typeid,flag,click,title,shorttitle,writer,source,pubdate,keywords,description,litpic,channel) values ($typeid,'$flag', 0,'$title','$shorttitle','$writer','$source','$pubdate','$keywords','$description','$litpic',$channel)";
    $result = $dutils -> insert($sql);
    if ($result['type'] == '1') {
      $sql = "select id from bili_archives where pubdate='$pubdate'";
      $result = $dutils -> select($sql);
      if ($result['type'] == '4') {
        $aid = (int)$result['data'][0]['id'];
        $sql = "insert into bili_addonshop (aid,typeid,body,redirecturl,price,trueprice,brand,units,uptime) values ($aid, $typeid,'$body','$redirecturl',$price,$trueprice,'$brand','$units',$pubdate)";
        echo $sql;
        $result = $dutils -> insert($sql);
        if ($result['type'] == '1') {
          $sql = "insert into bili_taglist (aid,typeid,tag) values ($aid,$typeid,'$tag')";
          $result = $dutils -> insert($sql);
          if ($result['type'] == '1') {
            echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
            return;
          }
          echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
          return;
        }
        echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }

      echo json_encode(array('status' => 0, 'msg' => '创建商品错误', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'delshop') {
    $aid = $_POST['aid'];
    global $dutils;
    $sql = "delete from bili_archives where id=$aid";
    $result = $dutils -> delete($sql);
    if ($result['type'] == '5') {
      $sql = "delete from bili_addonshop where aid=$aid";
      $result = $dutils -> delete($sql);
      if ($result['type'] == '5') {
        $sql = "delete from bili_taglist where aid=$aid";
        $result = $dutils -> delete($sql);
        echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => '商品删除失败', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '商品删除失败', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'getshopdata') {
    $aid = $_POST['aid'];
    global $dutils;
    $sql = "select a.id,a.title,a.shorttitle,a.writer,a.source,a.litpic,a.pubdate,a.keywords,a.description,a.flag,b.tag,c.redirecturl,c.body,c.price,c.trueprice,c.brand,c.units from (bili_archives a left join bili_taglist b on a.id=b.aid) left join bili_addonshop c on a.id=c.aid where a.id=$aid";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '文章数据获取失败', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'updateshop') {
    $data = $_POST['data'];
    $typeid = $data['typeid'];
    $title = $data['title'];
    $shorttitle = $data['shorttitle'];
    $tag = $data['tag'];
    $redirecturl = $data['redirecturl'];
    $source = $data['source'];
    $description = $data['description'];
    $keywords = $data['keywords'];
    $writer = $data['writer'];
    $body = $data['body'];
    $flag = $data['flag'];
    $litpic = $data['litpic'];
    $price = $data['price'];
    $trueprice = $data['trueprice'];
    $units = $data['units'];
    $brand = $data['brand'];
    $aid = $_POST['aid'];

    // 检查空字段
    if (!isset($title) || empty($title) ||
        !isset($description) || empty($description) ||
        !isset($keywords) || empty($keywords)) {
          echo json_encode(array('status' => 0, 'msg' => '文章必填内容不能为空', 'errno' => '0'));
          return;
    }

    // ded_archives 表
    $sql = "update bili_archives set typeid=$typeid,flag='$flag',litpic='$litpic',title='$title',shorttitle='$shorttitle',writer='$writer',source='$source',keywords='$keywords',description='$description' where id=$aid";
    $result = $dutils -> update($sql);
    if ($result['type'] == '5') {
      $sql = "update bili_addonshop set body='$body',redirecturl='$redirecturl',price=$price,trueprice=$trueprice,units='$units',brand='$brand' where aid=$aid";
      $result = $dutils -> update($sql);
      if ($result['type'] == 5) {
        $sql = "update bili_taglist set tag='$tag' where aid=$aid";
        $result = $dutils -> update($sql);
        if ($result['type'] == 5) {
          echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
          return;
        }
        echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
    return;
  }
?>
