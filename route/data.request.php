<?php
  if (!isset($_POST['tag']) && $_POST['tag'] != 'bili') {
    echo json_encode(array('status' => 0, 'msg' => 'failed send, please check your send ajax'));
    return;
  }

  require_once(dirname(__file__) . '/../utils/db.php');
  $dutils = new DUtils();

  if (isset($_POST['type']) && $_POST['type'] == 'changeclickdata') {

    if (isset($_POST['aid']) && !empty($_POST['aid']) && is_numeric($_POST['aid'])) {

      $aid = $_POST['aid'];

      $sql = "update bili_archives set click=click+1 where id=$aid";
      $result = $dutils -> update($sql);
      if ($result['type'] == '5') {
        echo json_encode(array('status' => 1, 'msg' => $result['statement'], 'errno' => $result['type']));
        return;
      }
      echo json_encode(array('status' => 0, 'msg' => $result['statement'], 'errno' => $result['type']));
      return;
    }
  }
?>
