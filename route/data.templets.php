<?php
  if (!isset($_POST['tag']) && $_POST['tag'] != 'bili') {
    echo json_encode(array('status' => 0, 'msg' => 'failed send, please check your send ajax'));
    return;
  }

  if (isset($_POST['type']) && $_POST['type'] == 'gettemplets') {
    $dir="../templets/";
    $files=scandir($dir);

    $fileArray = array();

    for ($i = 0, $len = count($files); $i < $len; $i++) {
      if (preg_match('/htm/', $files[$i])) {
        $status = stat($dir.$files[$i]);
        array_push($fileArray, array('name' => $files[$i], 'url' => $dir.$files[$i], 'mtime' => date("Y-m-d H:i:s",$status['mtime'])));
      }
    }

    echo json_encode(array('status' => 1, 'data' => $fileArray));
  }

  if (isset($_POST['type']) && $_POST['type'] == 'gettempletscontent') {
    $filename = $_POST['name'];
    $dir="../templets/";
    $content = file_get_contents($dir.$filename);
    echo json_encode(array('status' => 1, 'data' => $content));
  }

  if (isset($_POST['type']) && $_POST['type'] == 'updatetemplate') {
    $con = $_POST['con'];
    $name = $_POST['name'];
    $dir ="../templets/";
    $myfile = fopen($dir.$name, "w");
    fwrite($myfile, $con);
    fclose($myfile);
    echo json_encode(array('status' => 1));
  }
?>
