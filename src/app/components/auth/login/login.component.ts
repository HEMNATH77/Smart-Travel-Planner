import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  role: 'user' | 'admin' = 'user';   // 🔥 ROLE HERE
  hidePassword = true;
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  login() {

    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    if (this.email === savedEmail && this.password === savedPassword) {

      localStorage.setItem('userRole', this.role);
      this.authService.login(this.role);

      if (this.role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/itineraries']);
      }

    } else {
      this.errorMessage = 'Invalid login credentials';
    }
  }
}
