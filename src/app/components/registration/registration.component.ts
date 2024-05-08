import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}
  register(): void {
    // Check if both fields are filled
    if (!this.user.password || !this.user.confirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Both password fields are required.',
      });
      return;
    }

    // Check if passwords match
    if (this.user.password !== this.user.confirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Passwords do not match. Please try again.',
      });
      this.user.password = '';
      this.user.confirmPassword = '';
      return;
    }

    // Proceed with registration
    this.userService.register(this.user).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error,
        });
      },
    });
  }

  login() {
    this.router.navigate(['login']);
  }
}
