import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MusicComponent} from './music/music.component';
import {MathComponent} from './math/math.component';


export const routes: Routes = [
  {
    path: "generalChat",
    component: HomeComponent
  },
  {
    path: "musicChat",
    component: MusicComponent
  },
  {
    path: "mathChat",
    component: MathComponent
  }

];

