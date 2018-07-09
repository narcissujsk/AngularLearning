import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Component, Inject, ReflectiveInjector} from '@angular/core';
import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UsersComponent, MyUsersService} from './users/users.component';
import {ArticleComponent} from './article/article.component';
import {InventoryAppModule} from './inventory/Product';
import {FormsDemoAppModule,FormsDemoApp} from './forms/app';
import {HttpAppModule,} from './http/HttpApp';
import {DependencyInjectionAppModule} from './di/DependencyInjection';
import {ObservableModule} from "./myObserable/obserable";
import {childroutes, MyjqueryComponent} from './mymoudle/myjquery/myjquery.component';
import {MyJqueryService} from './mymoudle/myjquery/myservice';
import {HomeComponent} from './mymoudle/HomeComponent';
import {AboutComponent} from './mymoudle/AboutComponent';
import {ContactComponent} from './mymoudle/ContactComponent';
import {DiSampleAppAppModule} from './ts/app';
import {ApiService} from "./ts/services/ApiService";
import {ViewPortService} from "./ts/services/ViewPortService";

const routes: Routes = [
  {path: 'MyjqueryComponent', component: MyjqueryComponent, children: childroutes},
  {path: 'UsersComponent', component: UsersComponent},
  {path: 'FormsDemoApp', component: FormsDemoApp}

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    ArticleComponent,
    MyjqueryComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    DiSampleAppAppModule,
    BrowserModule,
    InventoryAppModule,
    HttpAppModule,
    FormsDemoAppModule,
    DependencyInjectionAppModule,
    ObservableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    MyUsersService,
    {
      provide: MyJqueryService,
      useFactory: (): MyJqueryService => new MyJqueryService('YOLO')
    },
    ApiService,
    ViewPortService,
    {provide: 'ApiServiceAlias', useExisting: ApiService},
    {
      provide: 'SizeService',
      useFactory: (viewport: any) => {
        return viewport.determineService();
      },
      deps: [ViewPortService]
    }],
  exports: [
    UserComponent,
    UsersComponent,
    ArticleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

