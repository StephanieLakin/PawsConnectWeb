// import { Component, OnInit } from '@angular/core';
// import { DogService } from '../services/dog.service';
// import { DogModel } from '../models/dog.model';

// @Component({
//   selector: 'app-dogs-list',
//   templateUrl: './dogs-list.component.html',
//   styleUrls: ['./dogs-list.component.css']
// })
// export class DogsListComponent implements OnInit {
//   dogs: DogModel[] = [];

//   constructor(private dogService: DogService) { }

//   ngOnInit(): void {
//     this.dogService.getDogs().subscribe(dogs => {
//       this.dogs = dogs;
//     });
//   }

//   deleteDog(dogId: string): void {
//     this.dogService.deleteDog(dogId).subscribe(() => {
//       this.dogs = this.dogs.filter(dog => dog.id !== dogId);
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from '../services/dog.service';
import { DogModel } from '../models/dog.model';
import { ConfirmationService } from 'primeng/api';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  dogs: DogModel[] = [];
  userId: string | null = null;

  constructor(
    private dogService: DogService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadDogs();
    
  }

  loadDogs(): void {
    this.dogService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
    });
  }

  onDogSelect(event: any): void {
    this.router.navigate(['/dogs', event.value.id]);
  }

  confirmDelete(dogId: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this dog?',
      accept: () => {
        this.deleteDog(dogId);
      }
    });
  }

  deleteDog(dogId: string): void {
    this.dogService.deleteDog(dogId).subscribe(() => {
      this.loadDogs(); // Refresh the list after deletion
    });
  }
}
