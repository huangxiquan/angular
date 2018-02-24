import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

  private homeArticlesUrl = "http://api.cbnweek.com/v1/first_page_infos?page=";

  constructor(private http: Http) {

  }

  getHomeArticles(page): Promise<any> {
      return this.http.get(this.homeArticlesUrl + page)
          .toPromise()
          .then(response => response.json().data)

  }

}
