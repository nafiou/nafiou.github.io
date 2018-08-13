<?php 
require 'connexion.php';
$_POST = json_decode(file_get_contents('php://input'), true);
$action = addslashes($_POST['action']);
if($action == 'GET'){
    $req = "SELECT * FROM article;";
    if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
        $jsonTable = json_encode($response);
        echo $jsonTable;
       }else{
        echo '400';
       } 
 }elseif($action == 'GETONE'){
    $id = $_POST['id']; 
    $req = "SELECT * FROM article WHERE id='$id';";
    if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
        $jsonTable = json_encode($response[0]);
        echo $jsonTable;
       }else{
        echo '400';
       }
 }
?>