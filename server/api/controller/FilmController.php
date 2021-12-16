<?php

namespace Api\Controller;

class FilmController
{
    /**
     * Create film controller
     * @param $db The database to do requests
     */
    public function __construct($db)
    {
        $this->_db = $db;
    }

    /** 
     * Show films list
     */

    public function getFilms()
    {
        if (isset($_GET['q'])) {
            $query = htmlspecialchars($_GET['q']);
            $result = $this->_db->request("SELECT * FROM table_films WHERE Titre_Original LIKE '{$query}%' LIMIT 20");
            echo json_encode($result);
        }
    }
}
