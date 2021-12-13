<?php

namespace Api\Controller;

class FilmController
{
    public function __construct($test)
    {
        $this->test = $test;
    }

    /** 
     * Show films list
     */

    public function getFilms()
    {
        return $this->test;
    }
}
