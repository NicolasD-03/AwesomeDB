<<<<<<< HEAD
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    echo phpinfo();
    ?>
</body>

</html>
=======
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
>>>>>>> b355022432ea03512b6158e617acb7c537cf3915
