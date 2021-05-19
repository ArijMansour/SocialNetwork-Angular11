import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagePostsService } from 'src/app/shared/manage-posts.service';
import { Post } from 'src/core/model/Post';

@Component({
  selector: 'app-s-list-posts',
  templateUrl: './s-list-posts.component.html',
  styleUrls: ['./s-list-posts.component.css']
})
export class SListPostsComponent implements OnInit {

  date : Date = new Date();


  loader=true ;
  posts : Post[] = [] ;
  post: Post = new Post();
  alert: boolean=false;
  show! : boolean ;
  postToUpdate:any ;
  updatedepInt: boolean = false ;
  

  showdepartments: boolean = false;
  TypePost:any ;
  nbr!:number ; 
  PostType!:String ;
  PostText!:String ;
  PostType1!: string;
  show1!: boolean; 
  e!:any ;

  constructor(private servicePosts: ManagePostsService, private http: HttpClient , private _router:Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.servicePosts.getPosts().subscribe((response) => {
      this.posts = response ;

      this.loader=false ; 
    })
    this.getAllPosts();
  }

  public getAllPosts(): void {
    this.servicePosts.getPosts().subscribe(
      (response: Post[]) => {
        this.posts = response;
        console.log(this.posts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addPosts(){
    this.servicePosts.addPost(this.post).subscribe(res=>{console.log(res);   
  } ) ;
  this.alert=true; 
}

deleteDepartment(id:number){
  this.servicePosts.deletePosts(id).subscribe(()=>this.servicePosts.getPosts().subscribe(res=>{this.posts=res}));
}

hideadd(){

  this.show=false;
  this.showdepartments=false;
}

updatepost(id: number, post: Post) {
  console.log('post', post);
  console.log('hi', this.postToUpdate);
  this.servicePosts.getUpdatePosts(id, post).subscribe(() =>
    this.servicePosts.getPosts().subscribe((res) => {
      this.posts = res;
    })
  );
  this.updatedepInt = false;
  this.show = true;
}

updatedepInterface(id: number, post: Post) {
  this.updatedepInt = true;
  this.show = false;
  console.log(id, post);
  this.postToUpdate = post;
  console.log('hhh', this.postToUpdate);
}

AddDepatmentshowdiv(){
  this.show=true;
  this.showdepartments=false;
  this.updatedepInt=false;

}
Viewdepartment(){
  this.show=false;
  this.showdepartments=true;
  this.updatedepInt=false;
}

search(){
  if(this.PostType!=""){
   this.posts=this.posts.filter(res=>{
     return res.post_Title.toLocaleLowerCase().match(this.PostType.toLowerCase())
 
 
   });

  }else if (this.PostType =="") {

   this.ngOnInit() ;
  }


}

search1(){
  if(this.PostType1=""){
   this.posts=this.posts.filter(res=>{
     return res.post_Title.toLocaleLowerCase().match(this.PostType1.toLowerCase())
 
 
   });

  }else if (this.PostType1 =="") {

   this.ngOnInit() ;
  }


}




















































}
