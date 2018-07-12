import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MusicAbout, Music, MusicHome} from "./music";
import {ContactComponent} from "../component/ContactComponent";

export const childroutes: Routes = [
  {
    path: '', component: Music, children: [
      {path: '', component: MusicAbout},
      {path: 'about', component: MusicAbout},
      {path: 'home', component: MusicHome}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(childroutes)
  ]
})
export class MusicRouting {

}
