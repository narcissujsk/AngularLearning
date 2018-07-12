
import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';
import {Component, Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
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
          <li><a [routerLink]="['./home'] "> home</a></li>
          <li><a [routerLink]="['./about']"> about</a></li>
          <li><a [routerLink]="['./PopupDirective']"> PopupDirective</a></li>
          <li><a [routerLink]="['./MessageDirective']"> MessageDirective</a></li>
          
        </ul>
      </nav>
    </div>
    <div style="float: left ;margin-left: 50px" class="ui message">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class Music{

}

@Component({
  selector : "musicHome",
  template : `<div popup message="msg From Directive" style="background: #0d71bb">
    MusicHome
  </div>
  `
})
export class MusicHome{
  @HostListener('click') displayMessage():void{
    alert("clicked");
  }
}

@Component({
  selector : "musicAbout",
  template : `MusicAbout`
})

export class MusicAbout{

}

@Component({
  selector : "PopupDirective",
  template : `PopupDirective
  <hr/>
  <div>
    <p  popup message="msg1 From Directive" #msg1="popup">msg1 From Directive</p>
    <button (click)="msg1.displayMessage()">button1 for msg1</button>
  </div>
  <div >
    <p popup message="msg2 From Directive" #msg2="popup">msg2 From Directive</p>
    <button (click)="msg2.displayMessage()">button2 for msg2</button>
  </div>
  `
})

export class PopupDirective{

}

@Component({
  selector : "MessageDirective",
  template : `<div messsage header="My Message" > this is the content of the message</div>
  `
})

export class MessageDirective{

}


