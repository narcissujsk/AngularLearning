/*
 * Angular
 */
import {
  Component
} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
/*
 * Components
 */

import { HTTPRequests } from './HTTPRequests';





@Component({
  selector: 'http-app',
  template: `
  <div class="container">
    <more-http></more-http>
    <hr/>
  </div>
  `
})
export class HttpApp {
}

@NgModule({
  declarations: [
    HttpApp,
    HTTPRequests
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [
    HTTPRequests,
    HttpApp
  ]
})
export class HttpAppModule {}
