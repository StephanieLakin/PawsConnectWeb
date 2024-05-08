import { Component } from '@angular/core';
import { DogModel } from '../../models/dog.model';
import { DogService } from '../../services/dog.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrl: './dog-profile.component.css',
})
export class DogProfileComponent {
  dogs: DogModel[] = [];
  dog: DogModel | null = null;
  dogId!: string;
  images: any[] | undefined;
  i: number = 0;
  responsiveOptions: any[] | undefined;


  constructor(private dogService: DogService, private messageService: MessageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.loadDogs();
    // Fetch details of a specific dog (replace 'dogId' with the actual dog's ID)
    this.dogService.getDogById(this.dogId).subscribe(
      (dog: DogModel) => {
        this.dog = dog;
        this.dogId = this.dog.id;
        // Populate the images array with the URLs of the dog's images
        this.images = [
          { source: dog.imageUrl1, thumbnail: dog.imageUrl1, alt: 'Image 1' },
          { source: dog.imageUrl2, thumbnail: dog.imageUrl2, alt: 'Image 2' },
          { source: dog.imageUrl3, thumbnail: dog.imageUrl3, alt: 'Image 3' }
        ];

        this.responsiveOptions = [
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
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error fetching dog details',
          detail: error.message || 'An error occurred while fetching dog details. Please try again later.'
        });
      }
    );
  }

  loadDogs(): void {
    this.dogService.getDogs().subscribe({
      next: (dogs) => {
        this.dogs = dogs;
      },
      error: (error) => {
        console.error('Error loading dogs:', error);
      },
    });
  }

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
