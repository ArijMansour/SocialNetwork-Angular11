import { Component, OnInit } from '@angular/core';
import { ManagePostsService } from '../shared/manage-posts.service';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/core/model/Post';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css']
})
export class ManagePostsComponent implements OnInit {


  listPosts! : Post[];

  blockDisabled : boolean= false ;
  constructor(private servicePost:ManagePostsService , private _http:HttpClient) { }

  ngOnInit(): void {
    this.servicePost.getAllPosts().subscribe(res=>{
      console.log(res);
      this.listPosts=res
    });



  }

}
