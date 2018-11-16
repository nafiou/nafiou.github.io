import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {map} from 'rxjs/operators'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class BiblioService {
  url = this.localservice.url+'article.php';
  constructor(private http: Http,
              private localservice:LocalStorageService) { }
// Afficher liste des articles
GetArticle(){
  var data = {
    'action':'GET'
  };
  let headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'Application/json');
  let options = new RequestOptions({ headers: headers });
  return this.http.post(this.url, data, options).pipe(
    map(res => res.json())
  );
}
GetCurentArticle(id){
  var data = {
    'action' : 'GETONE',
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
}

