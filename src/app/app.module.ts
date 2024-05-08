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
import { DogProfileComponent } from './components/dog-profile/dog-profile.component';
import { HealthRecordComponent } from './components/health-record/health-record.component';
import { LostAndFoundComponent } from './components/lost-and-found/lost-and-found.component';
import { ServiceMarketplaceComponent } from './components/service-marketplace/service-marketplace.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommunityEngagementComponent } from './components/community-engagement/community-engagement.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileDashboardComponent,
    DogProfileComponent,
    HealthRecordComponent,
    LostAndFoundComponent,
    ServiceMarketplaceComponent,
    MenuComponent,
    CommunityEngagementComponent,
    FooterComponent    
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
    ToastModule,
    GalleriaModule     
  ],
  providers: [MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
