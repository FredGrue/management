import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'bluetooth',
    loadComponent: () => import('./bluetooth/bluetooth.page').then( m => m.BluetoothPage)
  },
];
