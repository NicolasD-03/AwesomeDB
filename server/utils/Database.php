<?php

namespace Utils;

use PDO;
use PDOException;
use RuntimeException;
use TypeError;

class Database
{

    /**
     * @var PDO The PDO object for database
     */
    private $_db;

    /**
     * Create a database
     * 
     * @param string $dbType The type of database ex mysql/pgsql/...
     * @param string $dbHost The hostname of database
     * @param string $dbName The name of database
     * @param string $dbUsername The username to login to database
     * @param string $dbPassword The pass to login to database
     * @throws TypeError Parameters are not string
     * @throws Exception Connection error to database
     */

    public function __construct($dbType, $dbHost, $dbName, $dbUsername, $dbPassword)
    {
        if (!is_string($dbType) || !is_string($dbHost) || !is_string($dbName) || !is_string($dbUsername) || !is_string($dbPassword)) {
            throw new TypeError("Please enter a string for all parameters!");
        }
        try {
            $this->_db = new PDO($dbType . ':dbname=' . $dbName . ';host=' . $dbHost, $dbUsername, $dbPassword);
            $this->_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            throw new RuntimeException($e->getMessage());
        }
    }

    /**
     * Request to database
     * 
     * @param string $sql The request with :MarksName ex "SELECT * FROM ... WHERE id = :id"
     * @param array $marks Marks for prepared request ex [":id" => "5", ...]
     * @return array The result of the request in associative array
     * @throws TyperError $sql is not a string & $marks is not an array
     * 
     */

    public function request($sql, $marks = [])
    {
        if (!is_string($sql)) {
            throw new TypeError('Please enter a string for request!');
        }
        if (!is_array($marks)) {
            throw new TypeError('Please enter an array for marks!');
        }

        $stmnt = $this->_db->prepare($sql);
        $stmnt->execute($marks);
        return $stmnt->fetchAll(PDO::FETCH_ASSOC);
    }
}
