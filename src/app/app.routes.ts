import { Routes } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

// Auth Components
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

// User Components
import { ItineraryListComponent } from './components/itineraries/itinerary-list/itinerary-list.component';
import { ItineraryCreateComponent } from './components/itineraries/itinerary-create/itinerary-create.component';
import { ItineraryEditComponent } from './components/itineraries/itinerary-edit/itinerary-edit.component';
import { ItineraryDetailsComponent } from './components/itineraries/itinerary-details/itinerary-details.component';

// Admin Components
import { AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminItineraryApprovalComponent } from './components/admin/admin-itinerary-approval/admin-itinerary-approval.component';

export const routes: Routes = [

  // 🔓 Auth Routes
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  // 👤 User Routes
  {
    path: 'itineraries',
    component: ItineraryListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'itineraries/create',
    component: ItineraryCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'itineraries/edit/:id',
    component: ItineraryEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'itineraries/:id',
    component: ItineraryDetailsComponent,
    canActivate: [AuthGuard]
  },

  // 🛡️ Admin Routes
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/approvals',
    component: AdminItineraryApprovalComponent,
    canActivate: [AuthGuard, AdminGuard]
  },

  // ❌ Fallback
  {
    path: '**',
    redirectTo: 'login'
  }
];
