<?php
  if (!isset($_POST['tag']) && $_POST['tag'] != 'bili') {
    echo json_encode(array('status' => 0, 'msg' => 'failed send, please check your send ajax'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'setbasic') {
    $data = $_POST['data'];

    $myfile = fopen("../config/system.json", "w");
    fwrite($myfile, json_encode($data));
    fclose($myfile);
    echo json_encode(array('status' => 1, 'data' => $data));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'getbasic') {
    $content = file_get_contents('../config/system.json');
    $data = json_decode($content,true);
    echo json_encode(array('status' => 1, 'data' => $data));
    return;
  }
?>
