import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../Services/project.service';
import { Project } from '../../Models/project.model';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-project',
  imports: [RouterLink, DatePipe, FormsModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectComponent implements OnInit {
  private projectService = inject(ProjectService);
  showIncompleteOnly = false;
  projects: Project[] = [];
  selectedId = '';
  filteredProjects: Project[] = [];
  deadline = new Date();
  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.filterProjects();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  filterProjects() {
    if (this.showIncompleteOnly) {
      this.filteredProjects = this.projects.filter((project) => project.status === true);
    } else {
      this.filteredProjects = this.projects;
    }
  }
  isDeadlinePassed(deadline: string): boolean {
    return new Date() > new Date(deadline);
  }
}
