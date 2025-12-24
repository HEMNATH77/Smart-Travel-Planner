import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {

    const email = localStorage.getItem('userEmail');
    const role = localStorage.getItem('userRole');

    // ✅ logged in if email + role exist
    if (email && role) {
      return true;
    }

    // ❌ not logged in
    this.router.navigate(['/login']);
    return false;
  }
}

