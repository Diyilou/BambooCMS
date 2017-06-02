<?php
  if (!isset($_POST['tag']) && $_POST['tag'] != 'bili') {
    echo json_encode(array('status' => 0, 'msg' => 'failed send, please check your send ajax'));
    return;
  }

  require_once(dirname(__file__) . '/../utils/db.php');
  $dutils = new DUtils();

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
    $delta = addslashes($data['delta']);
    $pubdate = time();
    // 检查空字段
    if (!isset($title) || empty($title)) {
          echo json_encode(array('status' => 0, 'msg' => '文章标题不能为空', 'errno' => '0'));
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
        $sql = "insert into bili_addonshop (aid,typeid,body,redirecturl,price,trueprice,brand,units,uptime,delta) values ($aid, $typeid,'$body','$redirecturl',$price,$trueprice,'$brand','$units',$pubdate,'$delta')";
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
    $sql = "select a.id,a.title,a.shorttitle,a.writer,a.source,a.litpic,a.pubdate,a.keywords,a.description,a.flag,b.tag,c.redirecturl,c.body,c.delta,c.price,c.trueprice,c.brand,c.units from (bili_archives a left join bili_taglist b on a.id=b.aid) left join bili_addonshop c on a.id=c.aid where a.id=$aid";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '商品数据获取失败', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'getallshop') {
    $writer = $_POST['userid'];
    global $dutils;
    $sql = "select a.id,a.title,a.shorttitle,a.source,a.litpic,a.pubdate,a.keywords,a.description,a.flag,b.tag,c.redirecturl,c.body,c.price,c.trueprice,c.brand,c.units from (bili_archives a left join bili_taglist b on a.id=b.aid) left join bili_addonshop c on a.id=c.aid where a.writer='$writer'";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '快去添加商品', 'errno' => '0'));
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
    $delta = addslashes($data['delta']);
    // 检查空字段
    if (!isset($title) || empty($title)) {
          echo json_encode(array('status' => 0, 'msg' => '文章必填内容不能为空', 'errno' => '0'));
          return;
    }

    // ded_archives 表
    $sql = "update bili_archives set typeid=$typeid,flag='$flag',litpic='$litpic',title='$title',shorttitle='$shorttitle',writer='$writer',source='$source',keywords='$keywords',description='$description' where id=$aid";
    $result = $dutils -> update($sql);
    if ($result['type'] == '5') {
      $sql = "update bili_addonshop set body='$body',delta='$delta',redirecturl='$redirecturl',price=$price,trueprice=$trueprice,units='$units',brand='$brand' where aid=$aid";
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
