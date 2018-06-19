import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HiComponent } from './hi/hi.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ArticleComponent } from './article/article.component';
import {InventoryAppModule} from './inventory/Product';
import {FormsDemoAppModule} from './forms/app';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpAppModule} from './http/HttpApp';

@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    UserComponent,
    UsersComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    InventoryAppModule,
    FormsDemoAppModule,
    FormsModule,
    ReactiveFormsModule,
    HttpAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
