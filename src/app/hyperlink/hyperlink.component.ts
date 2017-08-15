import { Component, OnInit, Input } from '@angular/core';

import { Hyperlink } from '../hyperlink';

@Component({
  selector: 'app-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.css']
})
export class HyperlinkComponent implements OnInit {
  @Input() hyperlink: Hyperlink;

  constructor() { }

  ngOnInit() {
  }

}
