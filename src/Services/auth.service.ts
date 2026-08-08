import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Models/usermodel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser = new BehaviorSubject<User | null>(null);

  currentUser$ = this.currentUser.asObservable();

  login(user: User) {
    this.currentUser.next(user);
  }
  logout() {
    this.currentUser.next(null);
  }
  isLoggedIn(): boolean {
    return this.currentUser.value !== null;
  }
}
