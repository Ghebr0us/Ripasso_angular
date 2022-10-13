import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContenitoreComponent } from './contenitore/contenitore.component';
import { ContenutoComponent } from './contenuto/contenuto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenitoreComponent,
    ContenutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
