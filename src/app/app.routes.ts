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
    loadComponent: () => import('../Components/Auth/auth').then((c) => c.AuthComponent),
    title: 'BDC | Sign In',
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('../Components/signup/signup.component').then((c) => c.SignupComponent),
    title: 'BDC | Sign Up',
  },
  {
    path: 'project',
    loadComponent: () => import('../Components/project/project').then((c) => c.ProjectComponent),
    title: 'BDC | Project',
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    loadComponent: () => import('../Components/admin/admin').then((c) => c.AdminComponent),
    title: 'BDC | admin',
    canActivate: [authGuard],
  },
  {
    path: 'task/:id',
    loadComponent: () => import('../Components/task/task').then((c) => c.TaskComponent),
    title: 'BDC | Task',
    canActivate: [authGuard],
  },
];
