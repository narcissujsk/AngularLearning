import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "../HomeComponent";
import {ContactComponent} from "../ContactComponent";
import {AboutComponent} from "../AboutComponent";
import {Routes,RouterModule} from "@angular/router";

@Component({
  selector: "MyComponent1",
  template: `
    <div>
      MyComponent1
      <hr>
      <div >
        <div style="float: left">
          <nav>
            <a>Navigation:</a>
            <ul>
              <li><a [routerLink]="['UsersComponent']"> UsersComponent</a></li>
              <li><a [routerLink]="['MyjqueryComponent']"> MyjqueryComponent</a></li>
              <li><a [routerLink]="['FormsDemoApp']"> FormsDemoApp</a></li>
              <li><a [routerLink]="['MyComponent1']"> MyComponent1</a></li>

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
  }
}

export const MymoduleModule1Router: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' }
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
