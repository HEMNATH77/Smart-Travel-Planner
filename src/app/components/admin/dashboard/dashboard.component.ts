import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private router: Router) {}

  // ➡️ Navigate to approvals page
  goToApprovals(): void {
    this.router.navigate(['/admin/approvals']);
  }

  // ➡️ Navigate back to itineraries
  goToItineraries(): void {
    this.router.navigate(['/itineraries']);
  }
}
