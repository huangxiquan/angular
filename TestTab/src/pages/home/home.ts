import { Component,OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HomeService } from '../../service/home.service';

import { ArticleDetailPage } from '../article/article-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  articles: any;
  page: number;
  constructor(public navCtrl: NavController,public homeService: HomeService) {

  }

  ngOnInit(): void{
    this.homeService.getHomeArticles(1).then(data => {this.articles = data;console.log(data)});
    this.page = 1;
  }

  loadMoreData(event): void {
    this.page ++;
    this.homeService.getHomeArticles(this.page).then(data => {this.articles = this.articles.concat(data);console.log(this.articles);event.complete()})
  }

  isArticle(article): boolean {
    return article.type != "theme" && article.type != "top_article"
  }

  pushDetail(event,id): void {
    this.navCtrl.push(ArticleDetailPage,{id: id})
    console.log(id)
  }

}
