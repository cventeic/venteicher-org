import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Header } from '../header';
import { Hyperlink } from '../hyperlink';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() headers: Array<Header> = [];
  @Input() contents: Array<string> = [];
  @Input() tags: Array<string> = [];
  @Input() hyperlinks: Array<Hyperlink> = [];
  @Input() images: Array<string> = [];
  @Input() videos: Array<string> = [];

  sanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() { }
}
