/*
 * Angular
 */
import {
  Component
} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';

/*
 * Components
 */
import { SimpleHTTPComponent } from './SimpleHTTPComponent';
import { MoreHTTPRequests } from './MoreHTTPRequests';





@Component({
  selector: 'http-app',
  template: `
  <div class="container">
    <simple-http></simple-http>
    <hr/>
    <more-http></more-http>
    <hr/>
  </div>
  `
})
class HttpApp {
}

@NgModule({
  declarations: [
    HttpApp,
    SimpleHTTPComponent,
    MoreHTTPRequests
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  exports: [
    SimpleHTTPComponent,
    MoreHTTPRequests,
    HttpApp
  ]
})
export class HttpAppModule {}
