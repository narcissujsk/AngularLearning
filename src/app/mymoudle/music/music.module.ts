import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MusicRouting} from  './music.routing';
import {Component} from '@angular/core';

import {Music,MusicAbout,MusicHome} from './music';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MusicRouting
  ],
  declarations: [Music,MusicAbout,MusicHome]
})
export class MusicModule { }
