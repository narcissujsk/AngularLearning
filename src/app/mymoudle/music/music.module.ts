import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MusicRouting} from  './music.routing';
import {Music,MusicAbout,MusicHome,PopupDirective,MessageDirective} from './music';
import {MyDirectiveModule} from "../directive/mydirective";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MusicRouting,
    MyDirectiveModule
  ],
  declarations: [Music,MusicAbout,MusicHome,PopupDirective,MessageDirective]
})
export class MusicModule { }
