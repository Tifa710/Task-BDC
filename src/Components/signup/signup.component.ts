import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserSign } from '../../Models/signuser.model';
@Component({
  selector: 'app-signup',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  private route = inject(Router);
  userName: FormControl<string | null> = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[A-Za-z\u0600-\u06FF]+(?:\s+[A-Za-z\u0600-\u06FF]+)+$/),
  ]);
  userEmail: FormControl<string | null> = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/),
  ]);
  userPassword: FormControl<string | null> = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/),
  ]);
  confirmPassword: FormControl<string | null> = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/),
  ]);
  userBirthDate: FormControl<string | null> = new FormControl('', [Validators.required]);
  users: UserSign[] = [];

  signUp() {
    if (
      this.userName.invalid ||
      this.userEmail.invalid ||
      this.userPassword.invalid ||
      this.confirmPassword.invalid ||
      this.confirmPassword.value !== this.userPassword.value
    ) {
      this.userName.markAsUntouched();
      this.userName.reset();
      this.userEmail.markAsUntouched();
      this.userEmail.reset();
      this.userPassword.markAsUntouched();
      this.userPassword.reset();
      this.confirmPassword.markAsUntouched();
      this.confirmPassword.reset();
      this.userBirthDate.reset();

      return;
    }

    const savedUsers = localStorage.getItem('users');

    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }

    const newUser: UserSign = {
      name: this.userName.value ?? '',
      email: this.userEmail.value ?? '',
      password: this.userPassword.value ?? '',
      birthDate: this.userBirthDate.value ?? '',
    };

    this.users.push(newUser);

    localStorage.setItem('users', JSON.stringify(this.users));

    this.route.navigate(['/login']);
  }
  get passwordsMatch(): boolean {
    return this.confirmPassword.value === this.userPassword.value;
  }
}
