<?php

use Api\Controller\ExempleController;
use Api\Controller\FilmController;
use Utils\Database;

require 'vendor/autoload.php';
require 'utils/showErrors.php';
require 'utils/config.php';

// Set requests return to json only
header('content-type: application/json');
header('Access-Control-Allow-Origin: *');

// Verify db connection
try {
    $db = new Database($dbType, $dbHost, $dbName, $dbUsername, $dbPassword);
} catch (Exception $e) {
    header($_SERVER["SERVER_PROTOCOL"] . " 503 Service Unavailable", true, 503);
    exit();
}

$router = new AltoRouter();
$GLOBALS['filmController'] = new FilmController($db);
$GLOBALS['exempleController'] = new ExempleController($db);

$baseRoute = $apiRoute . $apiVersion;

$router->map('GET', $baseRoute . '/films', function () {
    $GLOBALS['filmController']->getFilms();
});

$router->map('GET', $baseRoute . '/exemple/[:id]', function ($id) {
    switch ($id) {
        case 1:
            $GLOBALS['exempleController']->exemple1();
            break;
        case 2:
            $GLOBALS['exempleController']->exemple2();
            break;
        case 3:
            $GLOBALS['exempleController']->exemple3();
            break;
        default:
            header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found", true, 404);
            break;
    }
});

$match = $router->match();

if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found", true, 404);
}
