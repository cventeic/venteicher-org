export class Card {
  public contents: Array<string> = [];
  public tags: Array<string> = [];
  //public title: Array<string>,

  public constructor(init?:Partial<Card>){
    Object.assign(this, init);
  }
}

