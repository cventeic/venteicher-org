import { Header } from './header';

export class Card {
  public headers: Array<Header>;
  public contents: Array<string> = [];
  public tags: Array<string> = [];

  public constructor(init?:Partial<Card>){
    Object.assign(this, init);
  }
}

