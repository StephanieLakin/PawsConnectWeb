import { Routes } from '@angular/router';
import { ProfileDashboardComponent } from './components/profile-dashboard/profile-dashboard.component'; 
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DogProfileComponent } from './components/dog-profile/dog-profile.component';

export const routes: Routes = [
  { path: '', component: ProfileDashboardComponent },
  { path: 'profile-dashboard', component: ProfileDashboardComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dog-profile', component: DogProfileComponent }
  // Define other routes here
];
