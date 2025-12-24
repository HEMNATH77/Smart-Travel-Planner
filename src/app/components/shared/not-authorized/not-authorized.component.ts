import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-authorized',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box">
      <h2>🚫 Access Denied</h2>
      <p>You do not have permission to view this page.</p>
    </div>
  `,
  styles: [`
    .box {
      text-align: center;
      margin-top: 100px;
    }
  `]
})
export class NotAuthorizedComponent {}
