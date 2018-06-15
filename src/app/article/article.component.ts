import {Component, HostBinding, OnInit , Input } from '@angular/core';
import {Artical} from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Artical;

  @HostBinding('class') classes = 'row';
  constructor() {
      this.article = new Artical('amgular', 'http://angular.io', 10);
  }
  voteUp() {
    this.article.voteUp();
    return false;
  }
  voteDown() {
    this.article.voteDown();
    return false;
    // 默认情况下,JavaScript会把click事件冒泡到所有父级组件
    // 返回false 阻止父级附件click事件触发
  }

  ngOnInit() {
  }

}
