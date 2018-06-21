import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent  } from './app.component';
import { HiComponent } from './hi/hi.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ArticleComponent } from './article/article.component';
import {InventoryAppModule} from './inventory/Product';
import {FormsDemoAppModule} from './forms/app';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpAppModule,} from './http/HttpApp';
import {DependencyInjectionAppModule} from './di/DependencyInjection';

@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    UserComponent,
    UsersComponent,
    ArticleComponent,


  ],
  imports: [
    BrowserModule,
    InventoryAppModule,
    HttpAppModule,
    FormsDemoAppModule,
    DependencyInjectionAppModule

  ],
  providers: [],
  exports: [
    HiComponent,
    UserComponent,
    UsersComponent,
    ArticleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
