<?php
require 'vendor/autoload.php';
require 'utils/showErrors.php';
require 'utils/config.php';

$router = new AltoRouter();

$router->map('GET|POST|PATCH|DELETE', $apiRoute . $apiVersion . '/films', function () {
    require 'api/routes/FilmsRoutes.php';
});

$match = $router->match();

if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    header("HTTP/1.0 404 Not Found");
}
