import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-registration',  
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  };
  confirmPassword = '';

  constructor(private userService: UserService, private messageService: MessageService) {}

  register(): void {
    if (this.user.password !== this.confirmPassword) {
      // Handle password mismatch error
      return;
    }

    this.userService.register(this.user).subscribe(
      response => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Registration successful'});
      },
      error => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Registration failed'});
      }
    );
  }
}
