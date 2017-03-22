<?php
  if (!isset($_POST['tag']) && $_POST['tag'] != 'bili') {
    echo json_encode(array('status' => 0, 'msg' => 'failed send, please check your send ajax'));
    return;
  }

  require_once(dirname(__file__) . '/../utils/db.php');
  $dutils = new DUtils();

  if (isset($_POST['type']) && $_POST['type'] == 'getindexdata') {

    global $dutils;
    $sql = "select count(*) as count from bili_admin where usertype!=0";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      // echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      // return;

      $admin = $result['data'][0]['count'];
      $sql = "select count(*) as count from bili_member";
      $result = $dutils -> select($sql);
      if ($result['type'] == '4') {
        $member = $result['data'][0]['count'];
        $sql = "select count(*) as count from bili_arctype where type=0";
        $result = $dutils -> select($sql);
        if ($result['type'] == '4') {
          $article = $result['data'][0]['count'];
          $sql = "select count(*) as count from bili_arctype where type=1";
          $result = $dutils -> select($sql);
          if ($result['type'] == '4') {
            $shop = $result['data'][0]['count'];
            $sql = "select count(*) as count from bili_arctype where type=2";
            $result = $dutils -> select($sql);
            if ($result['type'] == '4') {
              $photo = $result['data'][0]['count'];
              $sql = "select count(*) as count from bili_arctype where type=3";
              $result = $dutils -> select($sql);
              if ($result['type'] == '4') {
                $video = $result['data'][0]['count'];
                $data = array('admin' => $admin, 'member' => $member, 'article' => $article, 'shop' => $shop, 'photo' => $photo, 'video' => $video);
                echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $data));
                return;
              }
              echo json_encode(array('status' => 0, 'msg' => '视频数量获取失败', 'errno' => '0'));
              return;
            }
            echo json_encode(array('status' => 0, 'msg' => '图片数量获取失败', 'errno' => '0'));
            return;
          }
          echo json_encode(array('status' => 0, 'msg' => '商品数量获取失败', 'errno' => '0'));
          return;
        }
        echo json_encode(array('status' => 0, 'msg' => '文章数量获取失败', 'errno' => '0'));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => '会员数量获取失败', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '管理员数量获取失败', 'errno' => '0'));
    return;
  }
?>
