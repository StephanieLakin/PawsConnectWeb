import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private userService: UserService,
    private router: Router
  ) {}

  login(): void {
    // Check if both fields are filled
    if (!this.user.username || !this.user.password || !this.user.email) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'All fields are required.',
      });
      return;
    }

    // Proceed with login
    this.userService
      .login(this.user.username, this.user.email, this.user.password)
      .subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login successful!',
          });
          // Navigate to profile dashboard upon successful login
          this.router.navigate(['profile-dashboard']);
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

  register() {
    this.router.navigate(['registration']);
  }
}
