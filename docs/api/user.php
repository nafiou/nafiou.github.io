<?php
require 'connexion.php';
$_POST = json_decode(file_get_contents('php://input'), true);
$id = $_POST['id'];
$nom = $_POST['nom'];
$email = $_POST['email'];
$req = "SELECT * FROM user WHERE email_use='$email';";
if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
    $jsontTable = json_encode($response[0]);
    echo $jsontTable;
}else{
    $req = "INSERT INTO user(nom_use, email_use) VALUES('$nom','$email')";
    if($bdd->exec($req)){
        $req = "SELECT * FROM user WHERE email_use='$email';";
        if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
            $jsontTable = json_encode($response[0]);
            echo $jsontTable;
        }else{
            var_dump($bdd->query($req)->fetchAll(PDO::FETCH_ASSOC));
        }
    }
}
?>