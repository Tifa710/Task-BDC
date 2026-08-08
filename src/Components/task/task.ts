import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../Models/task.model';
import { TaskService } from '../../Services/task.service';
import { AuthService } from '../../Services/auth.service';
import { User } from '../../Models/usermodel';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent implements OnInit {
  currentUser: User | null = null;
  selectedTask!: Task;
  private taskService = inject(TaskService);
  private authService = inject(AuthService);
  tasks: Task[] = [];
  private route = inject(ActivatedRoute);
  projectId = this.route.snapshot.paramMap.get('id');
  deadline = new Date();
  editForm = new FormGroup({
    title: new FormControl(''),
  });
  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data.filter((task) => task.projectId === this.projectId);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }
  isDeadlinePassed(deadline: string): boolean {
    return new Date() > new Date(deadline);
  }

  edit(task: Task) {
    console.log(task);

    this.selectedTask = task;
    this.editForm.patchValue({
      title: task.title,
    });
  }
  save() {
    console.log(this.selectedTask);
    this.taskService
      .updateTask(this.selectedTask.id, {
        title: this.editForm.value.title!,
      })
      .subscribe({
        next: (updatedTask) => {
          this.selectedTask.title = updatedTask.title;
        },
        error: (err) => console.log(err),
      });
  }

  getUserRole(): boolean {
    return this.currentUser?.role === 'teamleader';
  }
}
