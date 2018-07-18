/*
 * Angular
 */
import { Component } from '@angular/core';
import {HttpClient,HttpClientJsonpModule} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { Jsonp} from "@angular/http";
@Component({
  selector: 'more-http',
  template: `
    <div id="id001">
      id001
    </div>
    <hr>
  <h2>More Requests</h2>
  <button type="button" (click)="makeGet()">Make Get</button>
  <button type="button" (click)="makePost()">Make Post</button>
  <button type="button" (click)="makeDelete()">Make Delete</button>
  <button type="button" (click)="makeHeaders()">Make Headers</button>
  <button type="button" (click)="makeSearch()">UsersList</button>
  <div *ngIf="loading">loading...</div>
  <pre>{{data | json}}</pre>
`
})
export class HTTPRequests {
  data: Object;
  loading: boolean;

  constructor(private httpclient: HttpClient) {
  }
  makeGet(): void {
    this.loading = true;
    this.httpclient.get('http://httpbin.org/get').subscribe(data => {
      console.log(data);
      this.data = data;
      this.loading = false;
    });
  }

  makePost(): void {
    this.loading = true;
    this.httpclient.post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }))
      .subscribe((res) => {
        console.log(res);
        this.data = res;
        this.loading = false;
      });
  }

  makeDelete(): void {
    this.loading = true;
    this.httpclient.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res) => {
        console.log(res);
        this.data = res;
        this.loading = false;
      });
  }

  makeHeaders(): void {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('X-API-TOKEN', 'ng-book');


    this.httpclient.get('http://jsonplaceholder.typicode.com/posts/1', {headers})
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
  }

   back ():void{

  }
  makeSearch(): void {

    var url="/users/list";

    this.httpclient.get(url)
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

  }
  //https://alpha.wallhaven.cc/search?q=tree&categories=111&purity=110&sorting=random&order=desc
}
