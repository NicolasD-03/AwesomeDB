<?php

    include './api/routes/filmsRoutes.php';

    $uri = $_SERVER['REQUEST_URI'];
    $uriSplit = explode('/', $uri);

    if ($uriSplit[1] != 'api') {
        header("HTTP/1.0 404 Not Found");
        exit;
    }

    switch ($uriSplit[2]) {
        case 'films':
            filmsRoute();
        break;
        case 'distributions':
            echo 'distribution';
        break;
        case 'realisator':
            echo 'realisator';
        break;
        default:
            header("Content-type: application/json");
            header("HTTP/1.0 404 Not Found");
            $result = array('message' => "Sorry you can't access to this ressource");
            echo json_encode($result);
            exit;
            break;
    }
