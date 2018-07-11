import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./HomeComponent";
import {ContactComponent} from "./ContactComponent";
import {AboutComponent} from "./AboutComponent";
import {Routes, RouterModule} from "@angular/router";
import * as $ from 'jquery';
import {Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent} from 'rxjs';
import {map, filter, scan} from 'rxjs/operators';

@Component({
  selector: "MyComponent1",
  template: `
    <div>
      <button id="button001"> rxjs test </button>
      <hr>
      MyComponent1
      <hr>
      <div>
        <div style="float: left">
          <nav>
            <a>Navigation:</a>
            <ul>

            </ul>
          </nav>
        </div>
        <div style="float: left ;margin: 30px;text-align:center ;border: 1px solid #0f0f10 ;padding: 50px">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>`
})
export class MyComponent1 implements OnInit {
  constructor() {

  }

  ngOnInit() {
    console.info("MymoduleModule1 ngOnInit");
    $("#button001").on("click", () => {
      var msg = "clicked button001";
      console.info(msg);
      alert(msg);
      var list = [1, 2, 3, 4, 5, 6];
      from(list).pipe(
        //filter(x => x % 2 === 1),
        map(x => x * x),
        scan((x, y) => {
          alert(x + " " + y);
          return y;
        })
      ).subscribe(v => {
        alert(v);
      }, value => {
        console.info(value);
        alert(value);
      }, () => {
        alert("complete");
      });
    });


    // var button = document.querySelector('button');
    // fromEvent(button, 'click')
    //   .subscribe(() => {
    //     console.log('Clicked!');
    //     alert("Clicked");
    //   });


  }
}

export const MymoduleModule1Router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MymoduleModule1Router)
  ],
  declarations: [MyComponent1],
  exports: [MyComponent1]
})
export class MymoduleModule {
}
