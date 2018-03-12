<?php
$target_dir = 'upload_image';

if (!file_exists($target_dir)){
    mkdir($target_dir,0777,true);
}
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);

echo 'Hello';

?>