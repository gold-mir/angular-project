import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

const posts = [
  new Post("Title", "body"),
  new Post("Title 2", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
  new Post("Top Text", "bottom text"),
  new Post("i hate memes", "jk memes are my life"),
  new Post("dude lmao", "")
];

@Injectable()
export class PostService {

  constructor() { }

  getPosts(){
    return posts;
  }

  getByID(id: number){
    for(let post of posts){
      if(post.id === id){
        return post;
      }
    }
  }

}
