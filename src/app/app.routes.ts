import { Routes } from '@angular/router';
import { authGuard } from '../Components/Auth/auth.guard';

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
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    loadComponent: () => import('../Components/admin/admin').then((m) => m.AdminComponent),
    title: 'BDC | admin',
    canActivate: [authGuard],
  },
  {
    path: 'task/:id',
    loadComponent: () => import('../Components/task/task').then((m) => m.TaskComponent),
    title: 'BDC | Task',
    canActivate: [authGuard],
  },
];
