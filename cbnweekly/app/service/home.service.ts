import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

  private homeArticlesUrl = "http://120.55.93.189:3000/v1/first_page_infos?page=1";

  constructor(private http: Http) {

  }

  getHomeArticles(): Promise<any> {
      return this.http.get(this.homeArticlesUrl)
          .toPromise()
          .then(response => response.json().data)

  }

}
