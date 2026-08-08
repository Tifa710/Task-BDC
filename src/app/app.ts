import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../Shared/nav/nav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Task-BDC');
}
