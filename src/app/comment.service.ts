import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { LocalStorageService } from './local-storage.service'
import { Comment } from './comment'
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = this.localservice.url+'comment.php';
  constructor(private http: Http, private localservice:LocalStorageService) { }

  // Nouveau Commentaire
  AddComment(comment: Comment){
    console.log(comment);
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'Application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, comment, options).pipe(
      map(res => res.json())
    );
  }
  
  GetComment(id){
    var data = {
      'action':'GET',
      'id':id
    };
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'Application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, data, options).pipe(
      map(res => res.json())
    );
  }

  DeleteCmment(id, id_frm){
    var data = {
      'action':'DELETECOMMENT',
      'id':id,
      'id_frm':id_frm
    };
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'Application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, data, options).pipe(
      map(res =>res.json())
    );

  }
}
