import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('../Components/Auth/auth').then((m) => m.AuthComponent),
    title: 'BDC | Sign In',
  },
  {
    path: 'project',
    loadComponent: () => import('../Components/project/project').then((m) => m.ProjectComponent),
    title: 'BDC | Project',
  },
  {
    path: 'admin',
    loadComponent: () => import('../Components/admin/admin').then((m) => m.AdminComponent),
    title: 'BDC | admin',
  },
  {
    path: 'task/:id',
    loadComponent: () => import('../Components/task/task').then((m) => m.TaskComponent),
    title: 'BDC | Task',
  },
];
