import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cards: Array<Card>;

  constructor (){

    this.cards = [
      new Card({
        contents: [ "Chris Venteicher",
          "Software Engineer, Developer of Venteicher.org",
          "<h1>hello world</h1>"
        ],
        tags: [ 'person' ]
      })
    ]
  }
}
