import { Component,Input } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: "article-head",
  templateUrl: "../view/article-head.html",
})

export class ArticleHeadComponent {
  @Input()
  article: any;
}
