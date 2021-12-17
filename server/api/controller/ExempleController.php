<?php

namespace Api\Controller;

class ExempleController
{

    public function __construct($db)
    {
        $this->_db = $db;
    }

    public function exemple1()
    {
        $req1 = $this->_db->request("SELECT * FROM table_films WHERE Titre_Original LIKE 'The%' LIMIT 10");
        $req2 = $this->_db->request("SELECT * FROM table_distributions WHERE Distribution LIKE 'Bruce%' LIMIT 10");
        $req3 = $this->_db->request("SELECT Titre_Original, Langue_Originale FROM table_films WHERE Genres LIKE '%Action%' AND Langue_Originale != 'en' LIMIT 10");
        $req4 = $this->_db->request("SELECT Titre_Original, Genres FROM table_films WHERE Durée <= 0 LIMIT 10");

        echo json_encode(["req1" => $req1, "req2" => $req2, "req3" => $req3, "req4" => $req4]);
    }
}
