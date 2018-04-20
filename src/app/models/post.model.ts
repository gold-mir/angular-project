export class Post {
  private static idCount = 0;
  public id: number;
  constructor(public title:string, public body:string){
    Post.idCount++;
    this.id = Post.idCount;
  }
}
