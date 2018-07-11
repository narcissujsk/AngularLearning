import {Component, NgModule,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {from} from "rxjs";
import {map, scan} from "rxjs/operators";
import * as $ from "jquery";

interface Action {
  type: string;
  payload?: any;
}

let incrementAction: Action ={type:'INCREMENT'};


let decrementtAction: Action ={type:'DECREMENT'};

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer:Reducer<number> = (state:number,action:Action) => {
  switch (action.type){
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }

};
console.log(reducer(1,incrementAction));

@Component({
  selector: "MyReduxComponent1",
  template: `    
      <button id="button001"> redux test </button>
      <hr>
      MyReduxComponent1
      <hr>
     `
})
export class MyReduxComponent1 implements OnInit {
  constructor() {

  }

  ngOnInit() {
    console.info("MymoduleModule1 ngOnInit");

  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyReduxComponent1],
  exports:[MyReduxComponent1]
})
export class MyreduxModule { }
