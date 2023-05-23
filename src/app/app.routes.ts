import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'gps',
    loadComponent: () => import('./gps/gps.page').then( m => m.GpsPage)
  },
];
