export class Card {
  //public titles: Array<string> = [];
  public titles: Array<any> = [];
  public contents: Array<string> = [];
  public tags: Array<string> = [];

  public constructor(init?:Partial<Card>){
    Object.assign(this, init);
  }
}

