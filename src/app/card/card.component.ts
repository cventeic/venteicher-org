import { Component, OnInit, Input } from '@angular/core';

import { Header } from '../header';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() headers: Array<Header> = [];
  @Input() contents: Array<string> = [];
  @Input() tags: Array<string> = [];

  constructor() { }

  ngOnInit() { }
}
