import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ArticleNavComponent } from './components/article-nav.component'
import { ArticleHeadComponent } from './components/article-head.component'

@NgModule({
  imports:      [
     BrowserModule,
     FormsModule,
     NgbModule.forRoot(),
     HttpModule,
  ],
  declarations: [
    AppComponent,
    ArticleNavComponent,
    ArticleHeadComponent,
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
