import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from './task.modal';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private api = 'https://6a5517eee49d9eb2cc558802.mockapi.io/Tasks';
  getTasks() {
    return this.http.get<Task[]>(this.api);
  }
  updateTask(id: string, data: Partial<Task>) {
    return this.http.patch<Task>(`${this.api} / ${id}`, data);
  }
}
