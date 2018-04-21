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
  @Output() editCancelled = new EventEmitter();

  newText:string = null;
  newTitle:string = null;

  constructor() { }

  ngOnInit() {
    this.newText = this.post.body;
    this.newTitle = this.post.title;
  }

  onEditFinished(){
    this.editFinished.emit({title: this.newTitle, text: this.newText});
  }

  onEditCancel(){
    this.editCancelled.emit();
  }

}
