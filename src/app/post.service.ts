import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// const posts = [
//   new Post("Title", "body"),
//   new Post("Title 2", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
//   new Post("Top Text", "bottom text"),
//   new Post("i hate memes", "jk memes are my life"),
//   new Post("dude lmao", "")
// ];

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.posts = database.list("posts");
  }

  getPosts(){
    return this.posts;
  }

  addPost(post: Post){
    let newItem = this.posts.push(post);
    return newItem;
  }

  getByID(id: string){
    return this.database.object(`posts/${id}`);
  }

  updatePost(postID, newData){
    let dbPost = this.getByID(postID);
    dbPost.update({title: newData.title, body: newData.body});
  }

}
