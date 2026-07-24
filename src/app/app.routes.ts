import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'project',
    pathMatch: 'full',
  },

  {
    path: 'project',
    loadComponent: () =>
      import('../Components/project/project.component').then((m) => m.ProjectComponent),
  },

  {
    path: 'task/:id',
    loadComponent: () => import('../Components/task/task.component').then((m) => m.TaskComponent),
  },
];
