import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);

  private api = 'https://6a5517eee49d9eb2cc558802.mockapi.io/projects';

  getProjects() {
    return this.http.get<Project[]>(this.api);
  }
}
