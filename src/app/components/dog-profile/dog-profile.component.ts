import { Component } from '@angular/core';
import { DogModel } from '../../models/dog.model';
import { DogService } from '../../services/dog.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dog-profile',  
  templateUrl: './dog-profile.component.html',
  styleUrl: './dog-profile.component.css'
})
export class DogProfileComponent {
  dogs: DogModel[] = [];
  dog?: DogModel;
  images: any[] = [];
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
 


   constructor(private dogService: DogService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadDogs();
  }

  loadDogs(): void {
    this.dogService.getDogs().subscribe({
      next: (dogs) => {
        this.dogs = dogs;
        // Assuming you want to display the images of the first dog in the list
        if (this.dogs.length > 0) {
          this.dog = this.dogs[0];
          this.images = [
            { source: this.dog.imageUrl1, thumbnail: this.dog.imageUrl1, alt: 'Image 1' },
            { source: this.dog.imageUrl2, thumbnail: this.dog.imageUrl2, alt: 'Image 2' },
            { source: this.dog.imageUrl3, thumbnail: this.dog.imageUrl3, alt: 'Image 3' }
          ];
        }
      },
      error: (error) => {
        console.error('Error loading dogs:', error);
      }
    });
  }


  // loadDogDetails(): void {
  //   this.dogService.getDogById(this.dogId).subscribe({
  //     next: (dog: DogModel) => {
  //       console.log('Dog details:', dog);
  //       console.log('Dog id:', this.dog?.id);
  //       this.dog = dog;
  //       this.images = [
  //         { source: dog.imageUrl1, thumbnail: dog.imageUrl1, alt: 'Image 1' },
  //         { source: dog.imageUrl2, thumbnail: dog.imageUrl2, alt: 'Image 2' },
  //         { source: dog.imageUrl3, thumbnail: dog.imageUrl3, alt: 'Image 3' }
  //       ];
  
  //       this.
  //     },
  //     error: (error) => {
  //       console.error('Error fetching dog details:', error);
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Error fetching dog details',
  //         detail: error.message || 'An error occurred while fetching dog details. Please try again later.'
  //       });
  //     }
  //   });
  // }
  

  createDog(): void {
    // Implement creating a new dog
  }

  editDog(dog: DogModel): void {
    // Implement editing a dog
  }

  deleteDog(dogId: string): void {
    // Implement deleting a dog
  }
}

