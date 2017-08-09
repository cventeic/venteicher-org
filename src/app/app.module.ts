import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { TabGroupComponent } from './tab-group/tab-group.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    TabGroupComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
