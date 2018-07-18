import {
  Component,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  NgModule,
  QueryList,
  AfterContentInit,
  ContentChildren
} from "@angular/core";

import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

/**
 * Popup指令
 */
@Directive({
  selector: '[popup]', exportAs: 'popup'
})
export class Popup {
  @Input() message: string;


  constructor(ele: ElementRef) {
    console.log('Directive bound');
    console.log(ele);
  }

  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }
}

@Component({
  selector: '[messsage]',
  template: `
    <div>
      {{header}}
    </div>
    <p>
      <ng-content></ng-content>
    </p>
  `
})
export class Message {
  @Input() header: string;

  @HostBinding('class') classes = 'ui message';

  ngOnInit(): void {
    console.log('header:', this.header);
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Popup,
    Message
  ],
  exports: [
    Popup,
    Message
  ]
})
export class MyDirectiveModule {
}
