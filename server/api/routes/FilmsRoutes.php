<?php

use Utils\Database;

require getcwd() . '/utils/config.php';

if (isset($_GET['lang'])) {
    $languages = explode(',', $_GET['lang']);
    dump($languages);
}

// try {
//     $bdd = new Database($dbType, $dbHost, $dbName, $dbUsername, $dbPassword);
//     $result = $bdd->request('SELECT * FROM table_films LIMIT 10');
//     header('Content-Type: application/json');
//     echo json_encode($result);
// } catch (TypeError $e) {
//     header('HTTP/1.0 400 Bad Request');
// } catch (Exception $e) {
//     header('HTTP/1.0 503 Service Unvailable');
// }
