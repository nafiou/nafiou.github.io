<?php 
require 'connexion.php';
$_POST = json_decode(file_get_contents('php://input'), true);
$action = addslashes($_POST['action']);
if($action == 'POST'){
 $description = addslashes($_POST['description']);
 $idfrmt = addslashes($_POST['idfrm_cmt']);
 $iduse = addslashes($_POST['id_use']);
 $req = "INSERT INTO commentaire_cmt(desc_cmt, idfrm_cmt, iduse_cmt) VALUES('$description', '$idfrmt', '$iduse');";
 if($bdd->exec($req)){
    $req = "SELECT * FROM commentaire_cmt,user WHERE iduse_cmt=id_use AND idfrm_cmt='$idfrmt'  ORDER BY id_cmt DESC;";
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
    $id = $_POST['id'];
    $req = "SELECT * FROM commentaire_cmt,user WHERE iduse_cmt=id_use AND idfrm_cmt ='$id' ORDER BY id_cmt DESC;";
    if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
        $jsonTable = json_encode($response);
        echo $jsonTable;
       }else{
        $jsonTable = json_encode([]);
        echo $jsonTable;
       }  
}elseif($action == 'DELETECOMMENT'){
    $id = $_POST['id'];
    $id_frm = $_POST['id_frm'];
    $req = "DELETE FROM commentaire_cmt WHERE id_cmt='$id';";
    if($bdd->exec($req)){
        $req = "SELECT * FROM commentaire_cmt,user WHERE iduse_cmt=id_use AND idfrm_cmt ='$id_frm' ORDER BY id_cmt DESC;";
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
    $id = addslashes($_POST['id']);
    $description = addslashes($_POST['description']);
    $idfrmt = addslashes($_POST['idfrm_cmt']);
    $iduse = addslashes($_POST['id_use']);
    $req = "UPDATE commentaire_cmt SET 	desc_cmt='$description' WHERE id_cmt='$id';";
    $bdd->exec($req);
    $req = "SELECT * FROM commentaire_cmt,user WHERE iduse_cmt=id_use AND idfrm_cmt ='$idfrmt' ORDER BY id_cmt DESC;";
     if($response = $bdd->query($req)->fetchAll(PDO::FETCH_ASSOC)){
         $jsonTable = json_encode($response);
         echo $jsonTable;
        }else{
         echo '400';
        }   
}
?>
