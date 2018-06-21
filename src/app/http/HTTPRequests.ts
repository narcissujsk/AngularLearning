/*
 * Angular
 */
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'more-http',
  template: `
  <h2>More Requests</h2>
  <button type="button" (click)="makeGet()">Make Get</button>
  <button type="button" (click)="makePost()">Make Post</button>
  <button type="button" (click)="makeDelete()">Make Delete</button>
  <button type="button" (click)="makeHeaders()">Make Headers</button>
  <button type="button" (click)="makeSearch()">Make Search</button>
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

  makeSearch(): void {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('user-agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/' +
      '537.36 (KHTML, like Gecko) Chrome/66.0.3343.4 Safari/537.36');
    headers.append('Referer', 'https://alpha.wallhaven.cc/search?q=tree&categories=111&purity=110&sorting=random&order=desc');
    headers.append('referer', 'https://alpha.wallhaven.cc/search?q=tree&categories=111&purity=110&sorting=random&order=desc');
    headers.append('Access-Control-Allow-Origin', '*');
    this.httpclient.get('https://developers.google.com/', {headers})
      .subscribe((res) => {
        this.data = res;
      });
  }
  //https://alpha.wallhaven.cc/search?q=tree&categories=111&purity=110&sorting=random&order=desc
}
