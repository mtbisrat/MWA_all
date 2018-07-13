import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})

export class UserInfoService {

  urlUserInfo:string = 'http://jsonplaceholder.typicode.com/users/1';
  urlUserPosts:string = 'http://jsonplaceholder.typicode.com/posts?userId=1';

  constructor(private http: HttpClient) { }

  public getUserInfo() {
    return this.http.get(this.urlUserInfo);
}
 
public getPosts() {
    return this.http.get(this.urlUserPosts);
  }
}

