import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeService } from '../service/home.service';
import { ArticleDetailPage } from '../pages/article/article-detail';
import { ArticleService } from '../service/article.service';
import { LoginPage } from '../pages/login/login'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArticleDetailPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArticleDetailPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},HomeService,ArticleService]
})
export class AppModule {}
