import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  isAdmin = false;
  showNavbar = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateNavbarState(event.url);
      }
    });
  }

  ngOnInit(): void {
    this.updateAuthState();
  }

  private updateNavbarState(url: string): void {
    this.showNavbar = !(
      url.includes('/login') || url.includes('/register')
    );
    this.updateAuthState();
  }

  private updateAuthState(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.isAdmin = this.authService.isAdmin();
  }

  logout() {
  const confirmLogout = window.confirm('Are you sure you want to logout?');

  if (confirmLogout) {
    // clear auth data
    localStorage.clear(); // or remove specific keys

    // navigate to login
    this.router.navigate(['/login']);
  }
}

}
