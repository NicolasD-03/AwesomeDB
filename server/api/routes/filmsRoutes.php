<?php

    function filmsRoute()
    {
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':
                echo 'get films';
                break;
            default:
                header("Content-type: application/json");
                header("HTTP/1.0 404 Not Found");
                $result = array('message' => "Sorry methods not allowed");
                echo json_encode($result);
                exit;
                break;
        }
    }
