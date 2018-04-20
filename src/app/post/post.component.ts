import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  postId: number = null;
  post: Post = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) {}

  ngOnInit(){
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });
    this.post = this.postService.getByID(this.postId);
  }
}
