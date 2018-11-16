import { Injectable,  Inject} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public data:any=[]
  public url:string="http://localhost/Dignite/src/api/";
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }
  getFromLocal(key): void {
      console.log('recieved= key:' + key);
      this.data[key]= this.storage.get(key);
     }
}
