import { Component, OnInit, NgModule, Inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Forum } from '../forum';
import { User } from '../user';
import { UserService } from '../user.service'
import { LocalStorageService } from '../local-storage.service'
import { ForumService } from '../forum.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Location} from '@angular/common'; 
import 'jquery';
import 'poper';
import 'bootstrap';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule
  ],
})
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  onDeleteId;
  CurentuserId;
  forums=[];
  forum: Forum = {
    id: 0,
    titre_frm:'',
    description:'',
    nbcmmentaire: '',
    action:'',
    nom_use:'',
    date:'',
    id_use:''
  };
  user: User = {
    id:0,
    nom:'',
    email:''
  }
  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private forumService:ForumService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router

    ) { }
  ngOnInit() {
    this.GetDiscussion()
    this.GetCurentUse()
    $(".link_hide").css("display", "none");
  }
  
  save(): void {
    this.forum.action ='POST';
    this.forum.id_use = this.localStorage.data['id_user'];
    this.forumService.AddForum(this.forum).subscribe(
      data => {
        console.log(data);
        this.forums = data;
        this.HidemoDal('#ForumModal');
      }
    )
  }
  //Création Discussion
  GetDiscussion(){
   this.forum.action='GET';
   this.forumService.GetForum(this.forum).subscribe(
     data => {
      console.log(data);
      this.forums = data;
     }
   )
  }
  // Editer Discussion
  editForum(){
    this.forum.action = 'EDIT';
    this.forumService.AddForum(this.forum).subscribe(
      data => {
        console.log(data);
        this.forums = data;
        this.HidemoDal('#EditForumModal');
      }
    )
  }
  // Nouvelle Discussion
  NewDiscussion(): void{
    this.forum.titre_frm = '';
    this.forum.description='';
    this.localStorage.getFromLocal('id_user');
    if (this.localStorage.data['id_user']){
      this.Showmodal('#ForumModal');
    }else{
      this.Showmodal('#userModal');
    }
  }
  //GEt current user use
  GetCurentUse():void{
   this.localStorage.getFromLocal('id_user');
   this.CurentuserId = this.localStorage.data['id_user'];  
  }
  //Inscription utilisateur
  Inscript(): void {
    this.userService.Adduser(this.user).subscribe(
      data =>{ 
        console.log(data);
        this.localStorage.saveInLocal('id_user',data.id_use)
        this.HidemoDal('#userModal');
        this.Showmodal('#ForumModal');
      }
    );
  }
  //GE=o to detail
  Detail(id): void{
    this.router.navigate(['/forum/'+id]);
  }
  //Delete forum
  Delete(id): void{
    this.onDeleteId = id;
    this.Showmodal("#AlertModal");
  }
  DeleteConfirm():void{
    this.forumService.DeleteForum(this.onDeleteId).subscribe(
      data =>{
        console.log(data);
        this.forums = data;
        this.HidemoDal('#AlertModal');
      }
    )
  }
  //Detail forum
  Edit(index):void{
    this.forum.description = this.forums[index].description_frm;
    this.forum.titre_frm = this.forums[index].titre_frm;
    this.forum.id = this.forums[index].id_frm;
    console.log(this.forum)
    this.Showmodal('#EditForumModal');
  }

  //Modal Controller
  HidemoDal(modal): void{
    $(modal).modal("toggle");
  }
  Showmodal(modal): void{
    $(modal).modal("show");
  }
  
  
}
