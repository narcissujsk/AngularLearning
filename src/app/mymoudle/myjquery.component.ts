import { Component, OnInit ,Inject,Injectable} from '@angular/core';
import * as $ from 'jquery';
import {HomeComponent} from './HomeComponent';
import {AboutComponent} from './AboutComponent';
import {MyJqueryService} from './myservice';
import {ContactComponent} from './ContactComponent';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {MyUsersService} from "../users/users.component";
import {DiSampleAppAppModule,DiSampleApp} from '../ts/app';
@Component({
  selector: 'app-myjquery',
  template: `myjquery works
  <hr>
  <button id="btnTest">Service Inject</button>    hu
  <hr>
  <di-sample-app></di-sample-app>
  <hr>
  <div>
    <div style="float: left">
      <nav><a>Navigation:</a>
        <ul>
          <li><a [routerLink]="['./home']"> home</a></li>
          <li><a [routerLink]="['./about']"> about</a></li>
          <li><a [routerLink]="['./contact']"> contact</a></li>
        </ul>
      </nav>
    </div>
    <div style="float: left ;border: 1px solid #0f0f10 ;padding: 50px;margin-left: 50px">
      <router-outlet></router-outlet>
    </div>
  </div>    `,
  styleUrls: []
})
export class MyjqueryComponent implements OnInit {
  id: string;

  constructor(private myservice:MyJqueryService) {

  }

  ngOnInit() {
    console.info("MyjqueryComponent OnInit");
    $("#btnTest").on("click",()=>{
      var msg="clicked: name is:"+this.myservice.name+" value is:"+this.myservice.getValue();
      console.info(msg);
      alert(msg);
    });
    window.addEventListener('hashchange',function(){
      //do something
      console.info(window.location.hash);
    });
  }

}
export const childroutes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' }
];



