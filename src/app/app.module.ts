import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Component, Inject} from '@angular/core';
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
import {FormsDemoAppModule, FormsDemoApp} from './forms/app';
import {HttpApp, HttpAppModule,} from './http/HttpApp';
import {DependencyInjectionAppModule} from './di/DependencyInjection';
import {ObservableModule} from "./myObserable/obserable";
import {childroutes, MyjqueryComponent} from './mymoudle/myjquery.component';
import {MyJqueryService} from './mymoudle/myservice';
import {HomeComponent} from './mymoudle/component/HomeComponent';
import {AboutComponent} from './mymoudle/component/AboutComponent';
import {ContactComponent} from './mymoudle/component/ContactComponent';
import {DiSampleAppAppModule} from './ts/app';
import {ApiService} from "./ts/services/ApiService";
import {ViewPortService} from "./ts/services/ViewPortService";
import {MymoduleModule, MyComponent1} from "./mymoudle/mymodule.module";
import {MyreduxModule, MyReduxComponent1} from "./mymoudle/myredux.module";
import {TabsSampleApp, TabsSampleAppModule} from './mymoudle/tab/tabs';
const routes: Routes = [
  {path: 'MyjqueryComponent', component: MyjqueryComponent, children: childroutes},
  {path: 'UsersComponent', component: UsersComponent},
  {path: 'FormsDemoApp', component: FormsDemoApp},
  {path: 'MyComponent1', component: MyComponent1},
  {path: "music", loadChildren: "./mymoudle/music/music.module#MusicModule"},
  {path: 'MyReduxComponent1', component: MyReduxComponent1},
  {path: 'tabs', component: TabsSampleApp},
  {path: 'https', component: HttpApp}
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
    BrowserModule,
    DiSampleAppAppModule,
    InventoryAppModule,
    HttpAppModule,
    FormsDemoAppModule,
    DependencyInjectionAppModule,
    ObservableModule,
    RouterModule.forRoot(routes),
    MymoduleModule,
    MyreduxModule,
    TabsSampleAppModule
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

