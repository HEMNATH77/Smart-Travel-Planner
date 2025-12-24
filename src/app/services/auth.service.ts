import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly LOGIN_KEY = 'is_logged_in';
  private readonly ROLE_KEY = 'user_role';

  constructor(private router: Router) {}

  // ✅ LOGIN
  login(role: 'user' | 'admin'): void {
    localStorage.setItem(this.LOGIN_KEY, 'true');
    localStorage.setItem(this.ROLE_KEY, role);
  }

  // ✅ LOGOUT
  logout(): void {
    localStorage.removeItem(this.LOGIN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    this.router.navigate(['/login']);
  }

  // ✅ CHECK LOGIN
  isLoggedIn(): boolean {
    return localStorage.getItem(this.LOGIN_KEY) === 'true';
  }

  // ✅ CHECK ADMIN
  isAdmin(): boolean {
    return localStorage.getItem(this.ROLE_KEY) === 'admin';
  }

  // ✅ GET ROLE
  getRole(): 'user' | 'admin' | null {
    return localStorage.getItem(this.ROLE_KEY) as 'user' | 'admin' | null;
  }
}
