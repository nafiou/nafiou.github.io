<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=dignite;charset=utf8', 'root', 'Android16@');
}
catch(Exception $e)
{       print('cc');
        die('Erreur : '.$e->getMessage());
}
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>