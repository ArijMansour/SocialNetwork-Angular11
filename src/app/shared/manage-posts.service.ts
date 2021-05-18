import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/core/model/Post';


@Injectable({
  providedIn: 'root'
})
export class ManagePostsService {

  constructor(private _http:HttpClient) { }

  public getAllPosts() : Observable<Post[]>{
    return this._http.get<Post[]>("http://localhost:8083/SpringMVC/servlet/get-all-Posts");
  }

  
}
