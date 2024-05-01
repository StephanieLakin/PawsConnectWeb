import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileDashboardComponent } from './components/profile-dashboard/profile-dashboard.component';


//PrimeNg
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import {StyleClassModule} from 'primeng/styleclass';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    StyleClassModule,
    BrowserAnimationsModule,
    ToastModule      
  ],
  providers: [MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
