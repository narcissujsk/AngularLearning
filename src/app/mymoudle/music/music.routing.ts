import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MusicAbout, Music, MusicHome,PopupDirective,MessageDirective} from "./music";
import {ContactComponent} from "../component/ContactComponent";

export const childroutes: Routes = [
  {
    path: '', component: Music, children: [
      {path: '', component: MusicAbout},
      {path: 'about', component: MusicAbout},
      {path: 'home', component: MusicHome},
      {path: 'PopupDirective', component: PopupDirective},
      {path: 'MessageDirective', component: MessageDirective}
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
