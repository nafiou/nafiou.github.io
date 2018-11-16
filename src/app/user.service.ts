import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { LocalStorageService } from './local-storage.service'
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';
import { Url } from 'url';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = this.localservice.url+'user.php';
  constructor(private http: Http, private localservice:LocalStorageService) { }
  Adduser(user:User){
    let headers = new Headers();
    headers.set('Content-Type','application/json');
    headers.set('Accept','Application/json');
    let options = new RequestOptions({ headers: headers });
    console.log(user);
    return this.http.post(this.url, user).pipe(
    map(res => res.json())
    );
  }
 
  private extractData(res: Response) {
    let body = res.json();
          return body || {};
      }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }

}
