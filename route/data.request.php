<?php
  if (!isset($_POST['tag']) && $_POST['tag'] != 'bili') {
    echo json_encode(array('status' => 0, 'msg' => 'failed send, please check your send ajax'));
    return;
  }

  require_once(dirname(__file__) . '/../utils/db.php');
  $dutils = new DUtils();

  if (isset($_POST['type']) && $_POST['type'] == 'changesearch') {

    $z = $_POST['z'];
    $f = $_POST['f'];
    $p = $_POST['p'];

    $sql = "select a.title,b.price,a.litpic,a.id,b.trueprice,b.brand from bili_archives a left join bili_addonshop b on a.id=b.aid where ".($p == '' || $p == '全部' ? '' : "b.brand='$p'").($z == '' || $z == '全部' ? '' : " and a.keywords like '%$z%'").($f == '' || $f == '全部' ? '' : " and a.description like '%$f%' ")."order by pubdate desc limit 20";

    $result = $dutils -> select($sql);
    echo $sql;
    if ($result['type'] == '4') {
      echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type'], 'data' => $result));
      return;
    }

    echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
    return;
  }
?>
