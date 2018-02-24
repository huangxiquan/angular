import { Component,OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ArticleService } from '../../service/article.service';

@Component ({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html'
})

export class ArticleDetailPage implements OnInit {
  private id: number;
  article: any;
  constructor(public navCtrl : NavController,public navParams: NavParams,public articleService: ArticleService) {
      this.id = this.navParams.get('id');
  }

  ionViewDidLoad(): void {
    this.articleService.getArticleDetail(this.id).then(data => {console.log(data);this.article = data;});
  }

  ngOnInit(): void {

  }
}
