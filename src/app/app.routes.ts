import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'vista-eventos',
    loadComponent: () => import('./pages/vista-eventos/vista-eventos.page').then( m => m.VistaEventosPage)
  },
  {
    path: 'detalles-eventos/:id',
    loadComponent: () => import('./pages/detalles-eventos/detalles-eventos.page').then( m => m.DetallesEventosPage)
  },
];
