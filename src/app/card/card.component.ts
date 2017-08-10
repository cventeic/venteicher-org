import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() titles: Array<string> = [];
  @Input() contents: Array<string> = [];
  @Input() tags: Array<string> = [];

  test_string = "<md-icon>done</md-icon>";

  constructor() { }

  ngOnInit() {
  }

}
