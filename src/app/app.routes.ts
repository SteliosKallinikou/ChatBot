import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/general-chat/general-chat',
    pathMatch: 'full',
  },
  {
    path: 'general-chat',
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
    path: '**',
    redirectTo: '/general-chat/general-chat',
  },
];
