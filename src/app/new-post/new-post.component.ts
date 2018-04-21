import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  post: Post = null;

  ngOnInit() {
    this.post = new Post("", "");
  }

  onPostSave(data){
    this.post.title = data.title;
    this.post.body = data.body;
    this.postService.addPost(this.post);
  }

  onCancel(){
    this.router.navigate(['posts']);
  }

}
