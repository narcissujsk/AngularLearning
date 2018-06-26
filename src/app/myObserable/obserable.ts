/*
 * Angular
 */
import {
  Component,CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { NgModule } from '@angular/core';

import {Subject, Observable} from 'rxjs';
//var Rx = require('rxjs/Rx');
var observable = Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
console.log('just before subscribe');
observable.subscribe({
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});
console.log('just after subscribe');

@Component({
  selector: 'app-observable',
  template: `
  <div class="container">
    <h1>ObservableApp</h1>
    <div> <button> click </button></div>
    <hr/>
  </div>
  `
})
class ObservableApp {
}

var button = document.querySelector('button');


@NgModule({
  declarations: [
    ObservableApp
  ],
  imports: [
  ],
  exports: [
    ObservableApp
  ],
  schemas: [  ]
})
export class ObservableModule {}
