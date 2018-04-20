import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  @Input() post: Post;
  @Output() editFinished = new EventEmitter();
  text:string = null;

  constructor() { }

  ngOnInit() {
    this.text = this.post.body;
  }

  onEditFinished(){
    console.log(this.text);
  }

  onEditCancel(){

  }

}
