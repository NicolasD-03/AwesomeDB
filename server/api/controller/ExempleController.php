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
        $req1 = $this->_db->request("SELECT Titre_Original FROM table_films WHERE Titre_Original LIKE 'The%' LIMIT 10");
        $req2 = $this->_db->request("SELECT Distribution FROM table_distributions WHERE Distribution LIKE 'Bruce%' GROUP BY Distribution LIMIT 10");
        $req3 = $this->_db->request("SELECT Titre_Original, Langue_Originale FROM table_films WHERE Genres LIKE '%Action%' AND Langue_Originale != 'en' LIMIT 10");
        $req4 = $this->_db->request("SELECT Titre_Original, Genres FROM table_films WHERE Durée <= 0");

        echo json_encode(["req1" => $req1, "req2" => $req2, "req3" => $req3, "req4" => $req4]);
    }

    public function exemple2()
    {
        $req1 = $this->_db->request("SELECT DISTINCT count(Réalisateur) as nb_real FROM table_realisateurs LIMIT 10");
        $req2 = $this->_db->request("SELECT Titre_Original FROM table_films WHERE Langue_Originale = 'ja' AND Durée > 0 ORDER BY Durée LIMIT 10");
        $req3 = $this->_db->request("SELECT Titre_Original FROM table_films ORDER BY Année_Production LIMIT 10");
        $req4 = $this->_db->request("SELECT avg(Revenus_Générés) as avg_income FROM table_films WHERE Genres = 'Thriller' AND Revenus_Générés > 0 LIMIT 10");
        $req5 = $this->_db->request("SELECT Titre_Original FROM table_films WHERE Genres = 'Horror' AND Revenus_Générés > (SELECT avg(Revenus_Générés) FROM table_films WHERE Revenus_Générés > 0) LIMIT 10");


        echo json_encode(["req1" => $req1, "req2" => $req2, "req3" => $req3, "req4" => $req4, "req5" => $req5]);
    }

    public function exemple3()
    {
        $req1 = $this->_db->request("SELECT Réalisateur, table_films.Revenus_Générés FROM table_realisateurs INNER JOIN table_films on table_realisateurs.Id_Films = table_films.Id_Films ORDER BY table_films.Revenus_Générés DESC LIMIT 1");
        $req2 = $this->_db->request("SELECT Titre_Original FROM table_films INNER JOIN table_distributions on table_films.Id_Films = table_distributions.Id_Films WHERE table_distributions.Distribution = 'Bruce Willis' LIMIT 10");
        $req3 = $this->_db->request("SELECT Titre_Original FROM table_films INNER JOIN table_realisateurs on table_films.Id_Films = table_realisateurs.Id_Films WHERE table_realisateurs.Réalisateur = 'Luc Besson' AND table_films.Durée > 60*2 LIMIT 10");
        $req4 = $this->_db->request("SELECT Titre_Original FROM table_films INNER JOIN table_distributions on table_films.Id_Films = table_distributions.Id_Films WHERE table_distributions.Distribution = 'Cameron Diaz' AND table_films.Genres = 'Comedy' AND table_films.Année_Production > (SELECT Année_Production FROM table_films WHERE Titre_Original = 'Shrek') LIMIT 10");

        echo json_encode(["req1" => $req1, "req2" => $req2, "req3" => $req3, "req4" => $req4]);
    }

    public function exemple4()
    {
        if (!isset($_GET['actor'])) {
            echo json_encode(["error" => "Parameter requiered"]);
            header($_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request", true, 400);
            return;
        }

        //Transform string to lowercase to simplify requests
        $actor = strtolower($_GET['actor']);

        $req1 = $this->_db->request("SELECT DISTINCT count(Id_Films) as nb_films FROM table_distributions WHERE lower(distribution) = '{$actor}'");
        $req2 = $this->_db->request("SELECT table_realisateurs.Réalisateur, table_films.Titre_Original, table_films.Année_Production FROM table_distributions INNER JOIN table_films on table_distributions.Id_Films = table_films.Id_Films INNER JOIN table_realisateurs on table_films.Id_Films = table_realisateurs.Id_Films WHERE lower(distribution) = '{$actor}' ORDER BY table_films.Durée DESC LIMIT 1");

        echo json_encode(["req1" => $req1, "req2" => $req2]);
    }
}
