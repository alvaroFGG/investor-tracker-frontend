import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'investors',
    loadComponent: () =>
      import('./pages/investors/investors.component').then(
        (m) => m.InvestorsComponent
      ),
  },
];
