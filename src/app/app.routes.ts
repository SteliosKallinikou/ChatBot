import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'


export const routes: Routes = [
  {
    path: "GeneralChat",
    children:[
      {
        path:'',
        component: HomeComponent
      },
      {
        path:':name',
        component: HomeComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'/GeneralChat',
    pathMatch: "full"
  }
];

