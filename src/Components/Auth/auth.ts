import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { users } from '../../DummyUser/dummyuser';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {
  userEmail: string = '';
  userPassword: string = '';
  userSigned = users;
  private authService = inject(AuthService);
  private router = inject(Router);
  logIn() {
    const user = this.userSigned.find(
      (u) => u.email === this.userEmail && u.password === this.userPassword,
    );
    if (user) {
      this.authService.login(user);
      if (user.role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/project']);
      }
    }
  }
}
