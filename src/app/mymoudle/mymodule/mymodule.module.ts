import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "../HomeComponent";
import {ContactComponent} from "../ContactComponent";
import {AboutComponent} from "../AboutComponent";
import {Routes,RouterModule} from "@angular/router";

@Component({
  selector: "",
  template: `
    <div>
      mymodule1
    </div>`
})
export class MymoduleModule1 implements OnInit {
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
  declarations: [MymoduleModule1],
  exports: [MymoduleModule1]
})
export class MymoduleModule {
}
