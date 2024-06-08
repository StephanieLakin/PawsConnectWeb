import { Routes } from '@angular/router';
import { ProfileDashboardComponent } from './components/profile-dashboard/profile-dashboard.component'; 
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DogProfileComponent } from './components/dog-profile/dog-profile.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogFormComponent } from './dog-form/dog-form.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';

export const routes: Routes = [
  { path: '', component: ProfileDashboardComponent },
  { path: 'profile-dashboard', component: ProfileDashboardComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dog-profile', component: DogProfileComponent },
  { path: '', redirectTo: '/dogs', pathMatch: 'full' },
  { path: 'dogs', component: DogsListComponent },
  { path: 'dogs/new', component: DogFormComponent },
  { path: 'dogs/:id', component: DogDetailsComponent },
  { path: 'dogs/:id/edit', component: DogFormComponent }
  // Define other routes here
];



