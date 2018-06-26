/*
 * Angular
 */
import {
  Component,CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-di',
  template: `
  <div class="container">
    <h1>DependencyInjectionApp</h1>
    <hr/>
  </div>
  `
})
class DependencyInjectionApp {
}

@NgModule({
  declarations: [
    DependencyInjectionApp
  ],
  imports: [
  ],
  exports: [
    DependencyInjectionApp
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DependencyInjectionAppModule {}
