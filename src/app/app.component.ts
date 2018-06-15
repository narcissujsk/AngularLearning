import { Component } from '@angular/core';
import {Artical} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsk = 'my first app';
  articles: Artical[];
  constructor() {
    this.articles = [
      new Artical('Angular 2', 'http://angular.io', 3),
      new Artical('Fullsack', 'http://fullstack.io', 2),
      new Artical('Angular Homepage', 'http://angular.io', 3),
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Artical(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
  sortedArticles(): Artical[] {
    return this.articles.sort((a: Artical, b: Artical) => b.votes - a.votes);
  }
}
