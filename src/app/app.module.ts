import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { ImageModule } from 'primeng/image';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogFormComponent } from './dog-form/dog-form.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

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
    FooterComponent,
    DogsListComponent,
    DogFormComponent,
    DogDetailsComponent        
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
    GalleriaModule,
    ImageModule,
   ReactiveFormsModule,
   CardModule,
   CarouselModule,
   FileUploadModule, 
    CalendarModule,
    ListboxModule, 
    ConfirmDialogModule,

  ],
  providers: [MessageService, ConfirmationService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
