import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { users } from '../../DummyUser/dummyuser';
import { AuthService } from '../../Services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {
  userEmail: FormControl<string | null> = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/),
  ]);
  userPassword: FormControl<string | null> = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/),
  ]);
  userSigned = users;
  userNotFound: boolean = false;
  private authService = inject(AuthService);
  private router = inject(Router);
  logIn() {
    const savedUsers = JSON.parse(localStorage.getItem('users') ?? '[]');

    const allUsers = [...this.userSigned, ...savedUsers];

    const user = allUsers.find(
      (u) => u.email === this.userEmail.value && u.password === this.userPassword.value,
    );
    if (user) {
      this.authService.login(user);
      if (user.role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/project']);
      }
    } else {
      this.userNotFound = true;
    }
  }
}
