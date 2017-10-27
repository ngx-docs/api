import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocsApiModule } from '@ngx-docs/api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DocsApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
