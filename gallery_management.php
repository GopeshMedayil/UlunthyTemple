<?php

$dir    = 'images/gallery';
$files1 = array_diff(scandir($dir), array('..', '.'));

$imagesArray = array_values($files1);
echo json_encode($imagesArray);
 ?>