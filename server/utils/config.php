<?php
$dotenv = Dotenv\Dotenv::createImmutable(getcwd(), '.env.local');
$dotenv->load();

$apiRoute = $_ENV['API_ROUTE'];
$apiVersion = $_ENV['API_VERSION'];
$dbType = $_ENV['DB_TYPE'];
$dbHost = $_ENV['DB_HOST'];
$dbUsername = $_ENV['DB_USERNAME'];
$dbPassword = $_ENV['DB_PASSWORD'];
$dbName = $_ENV['DB_NAME'];
$clientDomain = $_ENV['CLIENT_DOMAIN'];
