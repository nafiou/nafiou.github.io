import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ForumService } from '../forum.service';
import { Forum } from '../forum';
import { User } from '../user';
import { UserService } from '../user.service'
import { CommentService } from '../comment.service'
import { LocalStorageService } from '../local-storage.service';
import { Comment } from '../comment';
import 'jquery';
import 'bootstrap';
@Component({
  selector: 'app-detail-forum',
  templateUrl: './detail-forum.component.html',
  styleUrls: ['./detail-forum.component.css']
})
export class DetailForumComponent implements OnInit {
  private commenting = true;
  CurentuserId;
  onDeleteId;
  forum: Forum = {
    id: 0,
    titre_frm:'',
    description:'',
    nom_use:'',
    date:'',
    nbcmmentaire: '',
    action:'',
    id_use:'',
  };
  user: User = {
    id:0,
    nom:'',
    email:''
  };
  comment: Comment = {
    id:0,
    description:'',
    idfrm_cmt: this.route.snapshot.paramMap.get('id'),
    id_use:'',
    action:''
  }
  comments = [];
  Myforum:Forum;
  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private location: Location,
    private userService: UserService,
    private localStorage: LocalStorageService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.getForum();
    this.getComments();
    this.GetCurentUse();
  }

  //Delete commentaire
  Delete(id): void{
    this.onDeleteId = id;
    this.Showmodal("#AlertModal");
  }
  //Delete Connfirmation
  DeleteConfirm():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.DeleteCmment(this.onDeleteId, id).subscribe(
      data =>{
        console.log(data);
        this.comments = data;
        this.HidemoDal("#AlertModal");
      }
    )
  }
  
  //Editer Commentaire
  Edit(index){
    this.comment.description = this.comments[index].desc_cmt;
    this.comment.id = this.comments[index].id_cmt;
    this.Showmodal('#EditcommentModal');
  }
  // Edition Confirmé
  EditCommenter(){
 this.comment.action = 'EDIT';
 this.comment.id_use = this.localStorage.data['id_user'];
 this.commentService.AddComment(this.comment).subscribe(
   data =>{
     console.log(data);
     this.comments = data;
     this.HidemoDal('#EditcommentModal');
   }
 )
  }

  GetCurentUse():void{
    this.localStorage.getFromLocal('id_user');
    this.CurentuserId = this.localStorage.data['id_user'];  
   }
  // Récupérer commentaire
  getComments(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.GetComment(id).subscribe(
      comment => {
        this.comments = comment;
        console.log(this.comments);
      }
    )
  }
  // Recupérer forum
  getForum(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.forumService.GetSingleForum(id).subscribe(
      forum =>{
        this.Myforum = forum;
        console.log(forum);
      } 
    )
  }
// Créer Commentaire 
NewCommenter():void{
  this.comment.description='';
  this.localStorage.getFromLocal('id_user');
  this.commenting = true;
    if (this.localStorage.data['id_user']){
      this.Showmodal('#commentModal');
    }else{
      this.Showmodal('#userModal');
    }
}
//ENregister le commentaire
Commenter(): void{
 this.comment.action = 'POST';
 this.comment.id_use = this.localStorage.data['id_user'];
 this.commentService.AddComment(this.comment).subscribe(
   data =>{
     console.log(data);
     this.comments = data;
     this.HidemoDal('#commentModal');
   }
 )
}
//Enregistrer DIscussion
  save(): void {
    this.forum.action ='POST';
    this.forum.id_use = this.localStorage.data['id_user'];
    this.forumService.AddForum(this.forum).subscribe(
      data => {
        console.log(data);
        this.HidemoDal('#ForumModal');
      } 
    )
  }
  // Nouvelle Discussion
  NewDiscussion(): void{
    this.localStorage.getFromLocal('id_user');
    if (this.localStorage.data['id_user']){
      this.Showmodal('#ForumModal');
    }else{
      this.commenting = false;
      this.Showmodal('#userModal');
    }
  }
  //Inscription utilisateur
  Inscript(): void {
    this.userService.Adduser(this.user).subscribe(
      data =>{ 
        console.log(data);
        this.localStorage.saveInLocal('id_user',data.id_use)
        this.HidemoDal('#userModal');
        if(this.commenting){
          this.Showmodal('#commentModal');
        }else{
          this.Showmodal('#ForumModal');
        } 
      }
    );
  }

  HidemoDal(modal): void{
    $(modal).modal("toggle");
  }
  Showmodal(modal): void{
    $(modal).modal("show");
  }
}
