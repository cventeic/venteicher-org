import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { HyperlinkComponent } from './hyperlink/hyperlink.component';

@NgModule({
  declarations: [
    IconComponent,
    AppComponent,
    CardComponent,
    MenuComponent,
    TabGroupComponent,
    HyperlinkComponent,
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'venteicher-org'}),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
