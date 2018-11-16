import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { LocalStorageService } from './local-storage.service'
import { Forum } from './forum'

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  url = this.localservice.url+'forum.php';
  constructor(private http: Http, private localservice:LocalStorageService) { }
  //Nouveau forum
  AddForum(forum: Forum){
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'Application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, forum, options).pipe(
      map(res => res.json())
    );
  }
  // Afficher tout les forum
  GetForum(forum: Forum){
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'Application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, forum, options).pipe(
      map(res => res.json())
    );
  }
  // Détail Forum
  GetSingleForum(id){
    var data = {
      'id':id,
      'action':'GETSINGLE'
    };
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'Application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, data, options).pipe(
      map(res => res.json())
    ); 
  }
  // Delete Forum
  DeleteForum(id){
    var data = {
      'id':id,
      'action':'FDELETE'
    };
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'Application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, data, options).pipe(
      map(res => res.json())
    ); 
  }
  
  
}
