import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/core/model/Post';


@Injectable({
  providedIn: 'root'
})
export class ManagePostsService {

  headers = new HttpHeaders().set('content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }

  urlGetAllPosts: string = "http://localhost:8083/SpringMVC/servlet/get-all-Posts";
  urlAddPosts: string = "http://localhost:8083/SpringMVC/servlet/addPost";
  urlGetPostById: string = "http://localhost:8083/SpringMVC/servlet/retrieve-Post/";
  urlUpdatePosts: string = "http://localhost:8083/SpringMVC/servlet/update1Post/";
  urlDeletePost: string = "http://localhost:8083/SpringMVC/servlet/deletePost/";

  constructor(private http:HttpClient) { }
  getPosts(){
    return this.http.get<Post[]>(this.urlGetAllPosts);
  }

  deletePosts(id : number): Observable<Post>{
    const urldelete = `${this.urlDeletePost}/${id}`;
    return this.http.delete<Post>(urldelete, this.httpOptions);
  }

  getUpdatePosts(id: number,post:Post): Observable<Post>{
    return this.http.put<Post>(this.urlUpdatePosts + id, post);
  }

  public addPost(post:Post){
    return this.http.post<Post>( "http://localhost:8083/SpringMVC/servlet/addPost", post);
  }








  

  
}
