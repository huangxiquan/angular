import { Component,OnInit } from '@angular/core';
import { HomeService } from './service/home.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <article-nav *ngIf="articles" [article] = "articles[0]"></article-nav>
  `,
  providers: [ HomeService ]
})
export class AppComponent implements OnInit{

  ngOnInit(): void{
    this.homeService.getHomeArticles().then(data => {this.articles = data;console.log(data)});
  }

  constructor(private homeService: HomeService) {}

  title = 'Tour of Heroes';

  articles: any;
}
