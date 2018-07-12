import { Component } from "@angular/core";
import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';
@Component({
  selector : "music",
  template : `<h3>这是Music模块！！！</h3>
  <hr/>
  这是,模块内路由
  <hr>
  <div>
    <div style="float: left">
      <nav><a>Navigation:</a>
        <ul>
          <li><a [routerLink]="['./home']"> home</a></li>
          <li><a [routerLink]="['./about']"> about</a></li>
        </ul>
      </nav>
    </div>
    <div style="float: left ;border: 1px solid #0f0f10 ;padding: 50px;margin-left: 50px">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class Music{

}



@Component({
  selector : "musicAbout",
  template : `这是MusicAbout`
})

export class MusicAbout{

}


@Component({
  selector : "musicHome",
  template : `这是MusicHome`
})
export class MusicHome{

}
