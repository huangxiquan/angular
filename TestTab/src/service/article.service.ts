import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

  private baseUrl = "http://api.cbnweek.com/v1/";

  constructor(private http: Http) {

  }

  getArticleDetail(id): Promise<any> {
      return this.http.get(this.baseUrl + "articles/" + id)
          .toPromise()
          .then(response => response.json().data)
  }

}
