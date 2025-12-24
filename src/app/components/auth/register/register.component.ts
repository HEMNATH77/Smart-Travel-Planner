import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class RegisterComponent {

  registerForm: FormGroup;
  hidePassword = true;
  errorMsg = '';
  successMsg = '';

  constructor(private fb: FormBuilder, private router: Router) {

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  register() {

    if (this.registerForm.invalid) {
      this.errorMsg = 'Please fill all required fields correctly';
      return;
    }

    const userData = this.registerForm.value;

    // ✅ Store user details
    localStorage.setItem('userEmail', userData.email);
    localStorage.setItem('userPassword', userData.password);
    localStorage.setItem('userPhone', userData.phone);
    localStorage.setItem('userAddress', userData.address);
    localStorage.setItem('userState', userData.state);
    localStorage.setItem('userCountry', userData.country);

    this.successMsg = 'Registered successfully!';
    this.errorMsg = '';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 800);
  }
}
