export class Hyperlink {
  public href: string = "";
  public icons: Array<string> = [];
  public texts: Array<string> = [];

  public constructor(init?:Partial<Hyperlink>){
    Object.assign(this, init);
  }
}

