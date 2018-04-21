export class Post {
  private static idCount = 0;
  constructor(public title:string, public body:string, public id:number = Post.idCount++){}
}
