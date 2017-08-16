export class Header {
  public titles: Array<string> = [];
  public tags: Array<string> = [];
  public avatarUrls: Array<string> = [];

  public constructor(init?:Partial<Header>){
    Object.assign(this, init);
  }
}


