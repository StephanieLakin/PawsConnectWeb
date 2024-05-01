import { Routes } from '@angular/router';
import { ProfileDashboardComponent } from './components/profile-dashboard/profile-dashboard.component'; 
import { RegistrationComponent } from './components/registration/registration.component';

export const routes: Routes = [
  { path: '', component: ProfileDashboardComponent },
  { path: 'registration', component: RegistrationComponent },
  // Define other routes here
];
