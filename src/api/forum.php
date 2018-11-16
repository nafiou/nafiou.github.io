<?php
require 'connexion.php';
$_POST = json_decode(file_get_contents('php://input'), true);
$action = addslashes($_POST['action']);
if($action == 'POST'){
    $titre = addslashes($_POST['titre']);
    $description = addslashes($_POST['description']);
    $id_use = addslashes($_POST['id_use']);
    $req = "INSERT INTO forum(titre_frm, description_frm, iduse_frm) VALUES('$titre', '$description','$id_use');";
    if($bdd->exec($req)){
     $req = "SELECT * FROM forum,user WHERE iduse_frm=id_use ORDER BY id_frm DESC;";
     if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
         $jsonTable = json_encode($response);
         echo $jsonTable;
        }else{
         echo '400';
        }  
    }else{
        var_dump($bdd->exec($req));
    }
}elseif($action == 'GET'){
    $titre = addslashes($_POST['titre']);
    $description = addslashes($_POST['description']);
    $id_use = addslashes($_POST['id_use']);
    $req = "SELECT * FROM forum,user WHERE iduse_frm=id_use ORDER BY id_frm DESC;";
     if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
         $jsonTable = json_encode($response);
         echo $jsonTable;
        }else{
         echo '400';
        }   
}elseif($action == 'GETSINGLE'){
    $id = addslashes($_POST['id']);
    $req = "SELECT * FROM forum,user WHERE iduse_frm=id_use AND id_frm='$id';";
    if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
        $jsonTable = json_encode($response[0]);
        echo $jsonTable;
       }else{
        echo '400';
       } 
}elseif($action == 'FDELETE'){
   $id = addslashes($_POST['id']);
   $req = "DELETE FROM forum WHERE id_frm='$id';";
   if($bdd->exec($req)){
    $req = "SELECT * FROM forum,user WHERE iduse_frm=id_use ORDER BY id_frm DESC;";
    if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
        $jsonTable = json_encode($response);
        echo $jsonTable;
       }else{
        echo '400';
       }  
   }else{
       var_dump($bdd->exec($req));
   }
}elseif($action == 'EDIT'){
    $titre = addslashes($_POST['titre']);
    $description = addslashes($_POST['description']);
    $id = addslashes($_POST['id']);
    $req = "UPDATE forum SET titre_frm='$titre', description_frm='$description' WHERE id_frm='$id';";
    $bdd->exec($req);
     $req = "SELECT * FROM forum,user WHERE iduse_frm=id_use ORDER BY id_frm DESC;";
     if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
         $jsonTable = json_encode($response);
         echo $jsonTable;
        }else{
         echo '400';
        }  
    
}
?>