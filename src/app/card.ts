import { Header } from './header';
import { Hyperlink } from './hyperlink';

export class Card {
  public headers: Array<Header>;
  public contents: Array<string> = [];
  public tags: Array<string> = [];
  public hyperlinks: Array<Hyperlink> = [];

  public constructor(init?:Partial<Card>){
    Object.assign(this, init);
  }
}
