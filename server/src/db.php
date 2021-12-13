<?php

    
    try {
        $bdd = new PDO('mysql:host=mysql-nicolas001.alwaysdata.net;database=nicolas001_db', '251632', 'Niclefric57&*');
    } catch (PDOException $e) {
        die($e->getMessage());
    }
