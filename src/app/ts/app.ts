/*
 * Angular
 */
import {
  Component,
  Inject,
  ReflectiveInjector
} from '@angular/core';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";


/*
 * Services
 */
import {ApiService} from './services/ApiService';
import {ViewPortService} from './services/ViewPortService';


@Component({
  selector: 'di-sample-app',
  template: `
    <button (click)="invokeApi()">Invoke API</button>
    <button (click)="useInjectors()">Use Injectors</button>
  `
})
export class DiSampleApp {
  constructor(private apiService: ApiService,
              @Inject('ApiServiceAlias') private aliasService: ApiService,
              @Inject('SizeService') private sizeService: any) {
  }

  invokeApi(): void {
    this.apiService.get();
    this.aliasService.get();
    this.sizeService.run();
  }

  useInjectors(): void {
    let injector: any = ReflectiveInjector.resolveAndCreate([
      ViewPortService,
      {
        provide: 'OtherSizeService',
        useFactory: (viewport: any) => {
          return viewport.determineService();
        },
        deps: [ViewPortService]
      }
    ]);
    let sizeService: any = injector.get('OtherSizeService');
    sizeService.run();
  }
}

@NgModule({
  declarations: [DiSampleApp],
  imports: [BrowserModule],
  bootstrap: [DiSampleApp],
  exports: [DiSampleApp],
  providers: [

  ]
})
export class DiSampleAppAppModule {
}

