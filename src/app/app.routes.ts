import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'General-Chat',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: ':name',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/General-Chat/General-Chat',
    pathMatch: 'full',
  },
];
