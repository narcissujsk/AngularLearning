import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {HomeComponent} from '../HomeComponent';
import {AboutComponent} from '../AboutComponent';
import {ContactComponent} from '../ContactComponent';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-myjquery',
  template: `myjquery works`,
  styleUrls: []
})
export class MyjqueryComponent implements OnInit {
  id: string;

  constructor() {

  }

  ngOnInit() {
    $("#btnTest").on('click',function(){
      alert('hi,jquery!');
    });
  }

}
export const childroutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' }
];


