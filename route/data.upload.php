<?php
    header("ACCESS-CONTROL-ALLOW-ORIGIN:*");
    if ($_FILES['file']['error'] > 0) {
        echo json_encode(array('error' => $_FILES['file']['error']));
        return;
    }
    function compress($source, $destination, $quality) {
        $info = getimagesize($source);
        if ($info['mime'] == 'image/jpeg'){
            $image = imagecreatefromjpeg($source);
        }else if ($info['mime'] == 'image/gif') {
            $image = imagecreatefromgif($source);
        }elseif ($info['mime'] == 'image/png') {
            $image = imagecreatefrompng($source);
        }
       $rotate = imagerotate($image, 90);
        imagejpeg($rotate, $destination, $quality);
        return $destination;
    }
    $name = explode('.', $_FILES['file']['name']);
    $end = $name[1];
    if ($end == 'png' || $end == 'gif' || $end = 'bmp' || $end == 'jpeg' || $end == 'jpg') {

        $time = time();
        mkdir(dirname(__file__).'/../upload/images/'.$time);
        $filePath = dirname(__file__).'/../upload/images/'.$time.'/'.$_FILES['file']['name'];
        move_uploaded_file($_FILES['file']['tmp_name'], $filePath);
        //$simg = compress($filePath, $filePath, 75);
        $imgsrc = "/../upload/images/".$time.'/'.$_FILES['file']['name'];
        echo json_encode(array("url" => $imgsrc));
    }
    else {
        echo json_encode(array("error" => '请选择图片文件'));
    }
?>
