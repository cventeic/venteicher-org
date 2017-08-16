import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../card';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {
  @Input() cards: Array<Card>;

  constructor() { }

  ngOnInit() {
  }

}
