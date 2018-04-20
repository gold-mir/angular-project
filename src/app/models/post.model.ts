export class Post {
  private static idCount: number;
  public id: number;
  constructor(public title:string, public body:string){
    Post.idCount++;
    this.id = Post.idCount;
  }
}
