import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input() post: Post;
  @Output() editButtonClicked = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
