import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {

    const role = localStorage.getItem('userRole');

    // ✅ only admin allowed
    if (role === 'admin') {
      return true;
    }

    // ❌ block non-admin
    this.router.navigate(['/itineraries']);
    return false;
  }
}
