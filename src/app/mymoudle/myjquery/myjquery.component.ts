import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-myjquery',
  templateUrl: './myjquery.component.html',
  styleUrls: ['./myjquery.component.css']
})
export class MyjqueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#btnTest").on('click',function(){
      alert('hi,jquery!');
    });
  }

}
