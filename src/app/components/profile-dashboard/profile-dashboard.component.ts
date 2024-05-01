import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dashboard',  
  templateUrl: './profile-dashboard.component.html',
  styleUrl: './profile-dashboard.component.css'
})
export class ProfileDashboardComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();   
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe((response: HttpResponse<UserModel[]>) => {
        this.users = response.body || [];
      });
      console.log(this.users)
    }
  

  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  register() {
    this.router.navigate(['registration']);
    }

}
