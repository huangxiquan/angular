import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: "article-nav",
  templateUrl: "../view/article-nav.html"
})

export class ArticleNavComponent {
  @Input()
  article: any;
}
