<?php
  if (!isset($_POST['tag']) && $_POST['tag'] != 'bili') {
    echo json_encode(array('status' => 0, 'msg' => 'failed send, please check your send ajax'));
    return;
  }

  require_once(dirname(__file__) . '/../utils/db.php');
  $dutils = new DUtils();

  // 检查管理员不重复
  function checkAdmin ($uname) {
      global $dutils;
      $sql = "select id from bili_admin where uname='$uname'";
      $result = $dutils -> select($sql);
      // success and $typename is empty
      if ($result['type'] == '3') {
          return true;
      }

      return false;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'addadmin') {
    $data = $_POST['data'];

    $uname = $data['uname'];
    $pwd = md5($data['pwd']);
    $email = $data['email'];
    $phone = $data['phone'];
    $usertype = $data['usertype'];
    $logintime = time();
    $userId = 'BILI'.$logintime.rand(0,100000)."NTY";

    // 检查空字段
    if (!isset($uname) || empty($uname) ||
        !isset($pwd) || empty($pwd) ||
        !isset($email) || empty($email)) {
          echo json_encode(array('status' => 0, 'msg' => '管理员的必填字段不能为空', 'errno' => '0'));
          return;
    }

    if (checkAdmin($uname)) {
      $sql = "insert into bili_admin (uname,pwd,email,phone,usertype,logintime,userid) values ('$uname','$pwd','$email','$phone','$usertype','$logintime','$userId')";
      $result = $dutils -> insert($sql);
      if ($result['type'] == '1') {
        echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '管理员已存在', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'addmember') {
    $data = $_POST['data'];

    $uname = $data['uname'];
    $pwd = md5($data['pwd']);
    $email = $data['email'];
    $phone = $data['phone'];
    $usertype = $data['usertype'];
    $logintime = time();
    $userId = 'BUSINESS'.$logintime.rand(0,100000)."NTY";

    // 检查空字段
    if (!isset($uname) || empty($uname) ||
        !isset($pwd) || empty($pwd) ||
        !isset($email) || empty($email)) {
          echo json_encode(array('status' => 0, 'msg' => '商家信息的必填字段不能为空', 'errno' => '0'));
          return;
    }

    if (checkAdmin($uname)) {
      $sql = "insert into bili_member (uname,pwd,email,phone,mtype,jointime,userid,uptime) values ('$uname','$pwd','$email','$phone','$usertype','$logintime','$userId',0)";
      $result = $dutils -> insert($sql);
      if ($result['type'] == '1') {
        echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '商家已存在', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'alladmin') {
    global $dutils;
    $sql = "select * from bili_admin where usertype=1";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '没有管理员', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'allmember') {
    global $dutils;
    $sql = "select * from bili_member where mtype='0'";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result['data']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '没有商家', 'errno' => '0'));
    return;
  }



  if (isset($_POST['type']) && $_POST['type'] == 'getuserfromid') {
    $uid = $_POST['uid'];
    global $dutils;
    $sql = "select uname,usertype,userid from bili_admin";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      $data = $result['data'];
      for ($i = 0, $len = count($data); $i < $len; $i++) {
        if (md5($data[$i]['userid']) == $uid) {
          echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $data[$i]));
          return;
        }
      }

      echo json_encode(array('status' => 0, 'msg' => '没有管理员', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '没有管理员', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'getmuserfromid') {
    $uid = $_POST['uid'];
    global $dutils;
    $sql = "select uname,mtype,userid from bili_member";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      $data = $result['data'];
      for ($i = 0, $len = count($data); $i < $len; $i++) {
        if (md5($data[$i]['userid']) == $uid) {
          echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $data[$i]));
          return;
        }
      }

      echo json_encode(array('status' => 0, 'msg' => '没有此会员', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '没有此会员', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'deladmin') {
    $id = $_POST['id'];
    global $dutils;
    $sql = "delete from bili_admin where id=$id";
    $result = $dutils -> delete($sql);
    if ($result['type'] == '5') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '用户删除失败', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'delmember') {
    $id = $_POST['id'];
    global $dutils;
    $sql = "delete from bili_member where mid='$id'";
    $result = $dutils -> delete($sql);
    if ($result['type'] == '5') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '用户删除失败', 'errno' => '0'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'login') {
    $name = $_POST['name'];
    $pw = $_POST['pw'];
    global $dutils;
    $sql = "select * from bili_admin where uname='$name'";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      $data = $result['data'];
      if ($data[0]['pwd'] == md5($pw)) {
        echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'userid' => md5($data[0]['userid'])));
        return;
      }

      echo json_encode(array('status' => 0, 'msg' => '密码错误', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '用户不存在', 'errno' => '0'));
    return;
  }
  if (isset($_POST['type']) && $_POST['type'] == 'mlogin') {
    $name = $_POST['name'];
    $pw = $_POST['pw'];
    global $dutils;
    $sql = "select * from bili_member where uname='$name'";
    $result = $dutils -> select($sql);
    if ($result['type'] == '4') {
      $data = $result['data'];
      if ($data[0]['pwd'] == md5($pw)) {
        echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'userid' => md5($data[0]['userid'])));
        return;
      }

      echo json_encode(array('status' => 0, 'msg' => '密码错误', 'errno' => '0'));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => '用户不存在', 'errno' => '0'));
    return;
  }
?>
