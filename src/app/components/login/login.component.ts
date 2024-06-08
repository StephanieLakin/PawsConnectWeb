// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { Router } from '@angular/router';
// import { MessageService } from 'primeng/api';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   user = {
//     username: '',
//     email: '',
//     password: '',
//   };
//   errorMessage: string = '';

//   constructor(
//     private http: HttpClient,
//     private messageService: MessageService,
//     private userService: UserService,
//     private router: Router
//   ) {}

//   login(): void {
//     // Check if both fields are filled
//     if (!this.user.username || !this.user.password || !this.user.email) {
//       this.messageService.add({
//         severity: 'error',
//         summary: 'Error',
//         detail: 'All fields are required.',
//       });
//       return;
//     }

//     // Proceed with login
//     this.userService
//       .login(this.user.username, this.user.email, this.user.password)
//       .subscribe({
//         next: (response) => {
//           this.messageService.add({
//             severity: 'success',
//             summary: 'Success',
//             detail: 'Login successful!',
//           });
//           // Navigate to profile dashboard upon successful login
//           this.router.navigate(['profile-dashboard']);
//         },
//         error: (error) => {
//           this.messageService.add({
//             severity: 'error',
//             summary: 'Error',
//             detail: error.error,
//           });
//         },
//       });
//   }

//   register() {
//     this.router.navigate(['registration']);
//   }
// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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

//   login(): void {
//     if (!this.user.username || !this.user.password || !this.user.email) {
//       this.messageService.add({
//         severity: 'error',
//         summary: 'Error',
//         detail: 'All fields are required.',
//       });
//       return;
//     }
  
//     this.userService
//       .login(this.user.username, this.user.email, this.user.password)
//       .subscribe({
//         next: (response) => {
//           this.messageService.add({
//             severity: 'success',
//             summary: 'Success',
//             detail: 'Login successful!',
//           });
  
//           // Assuming response contains user ID
//           const userId = response.userId; // Adjust this according to your actual response structure
//           console.log('User ID:', userId); // Log User ID
//           localStorage.setItem('userId', userId); // Store user ID in local storage
  
//           this.router.navigate(['profile-dashboard']);
//         },
//         error: (error) => {
//           this.messageService.add({
//             severity: 'error',
//             summary: 'Error',
//             detail: error.error,
//           });
//         },
//       });
//   }

//   register() {
//     this.router.navigate(['registration']);
//   }
// }
login(): void {
  if (!this.user.username || !this.user.password || !this.user.email) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'All fields are required.',
    });
    return;
  }

  this.userService
    .login(this.user.username, this.user.email, this.user.password)
    .subscribe({
      next: (response) => {
        console.log('Login Response:', response);  // Log the full response

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login successful!',
        });

        const userId = response.userId;  // Adjust according to your actual response structure
        console.log('User ID:', userId);  // Log User ID
        localStorage.setItem('userId', userId);  // Store user ID in local storage

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