<?php
$host = 'localhost';
$dbname = 'local.spu111.com';
$user = 'root';
$password = '';

// PDO connection
try {
    //Creating a PDO instance
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);

    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<h3>Connected successfully</h3>";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}