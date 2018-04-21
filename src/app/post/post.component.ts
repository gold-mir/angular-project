import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  postId: string = null;
  post: FirebaseObjectObservable<any> = null;
  editing = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) {}

  ngOnInit(){
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.post = this.postService.getByID(this.postId);
  }

  setEditing(editing:boolean){
    this.editing = editing;
  }

  editPost(data){
    // this.post.title = data.title;
    // this.post.body = data.body;
  }
}
