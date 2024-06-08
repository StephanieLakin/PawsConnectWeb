// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DogService } from '../services/dog.service';
// import { UserService } from '../services/user.service';
// import { CreateDogModel, UpdateDogModel, DogModel } from '../models/dog.model';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-dog-form',
//   templateUrl: './dog-form.component.html',
//   styleUrls: ['./dog-form.component.css']
// })
// export class DogFormComponent implements OnInit {
//   dogForm: FormGroup;
//   dogId: string | null = null;
//   selectedFiles: { [key: string]: string } = {};
//   userId: string | null = null;

//   constructor(
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private dogService: DogService,
//     private userService: UserService,
//     private authService: AuthService
//   ) {
//     this.dogForm = this.fb.group({
//       name: ['', Validators.required],
//       breed: ['', Validators.required],
//       bio: ['', Validators.required],
//       description: ['', Validators.required],
//       gender: ['', Validators.required],
//       weight: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Ensure weight is a number
//       dateOfBirth: ['', Validators.required],
//       medicalHistory: ['', Validators.required],
//       allergies: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {
//     this.userId = this.userId = this.authService.getUserId();
//     if (!this.userId) {
//       console.error('UserId is not available');
//       console.log(this.userId);
//     }
//     this.dogId = this.route.snapshot.paramMap.get('id');
//     if (this.dogId) {
//       this.dogService.getDogById(this.dogId).subscribe(dog => {
//         this.dogForm.patchValue(dog);
//       });
//       console.log(this.userId)
//     }
//   }

//   onFileChange(event: any, imageField: string): void {
//     const file = event.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.selectedFiles[imageField] = e.target.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   onSubmit(): void {
//     if (this.dogForm.valid && this.userId) {
//       if (this.dogId) {
//         // Update existing dog
//         const updateDog: UpdateDogModel = {
//           ...this.dogForm.value,
//           id: this.dogId,
//           userId: this.userId,
//           imageUrl1: this.selectedFiles['image1'] || '',
//           imageUrl2: this.selectedFiles['image2'] || '',
//           imageUrl3: this.selectedFiles['image3'] || ''
//         };
//         this.dogService.updateDog(this.dogId, updateDog).subscribe(
//           response => {
//             console.log('Update successful:', response);
//             this.router.navigate(['/dogs']);
//           },
//           error => console.error('Update error:', error)
//         );
//       } else {
//         // Create new dog
//         const createDog: CreateDogModel = {
//           ...this.dogForm.value,
//           userId: this.userId.toString,
          
//           imageUrl1: this.selectedFiles['image1'] || '',
//           imageUrl2: this.selectedFiles['image2'] || '',
//           imageUrl3: this.selectedFiles['image3'] || ''
//         };
//         this.dogService.createDog(createDog).subscribe(
//           response => {
//             console.log('Creation successful:', response);
//             this.router.navigate(['/dogs']);
//           },
//           error => console.error('Creation error:', error)
//         );
//       }
//     } else {
//       console.error('Form is invalid or userId is null');
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DogService } from '../services/dog.service';
import { AuthService } from '../services/auth.service';  // Ensure you import the correct AuthService
import { CreateDogModel, UpdateDogModel, DogModel } from '../models/dog.model';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  dogForm: FormGroup;
  dogId: string | null = null;
  selectedFiles: { [key: string]: string } = {};

  userId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService,
    private authService: AuthService  // Inject AuthService
  ) {
    this.dogForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      bio: ['', Validators.required],
      description: ['', Validators.required],
      gender: ['', Validators.required],
      weight: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dateOfBirth: ['', Validators.required],
      medicalHistory: ['', Validators.required],
      allergies: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //this.userId = this.authService.getUserId();
    this.userId = "51FAA5CE-CA96-435D-9725-D35E2A1EBC4C"
   // console.log('Retrieved user ID:', this.userId);  // Log user ID to confirm retrieval
   console.log('Selected Files:', this.selectedFiles); 
    this.dogId = this.route.snapshot.paramMap.get('id');
    if (this.dogId) {
      this.dogService.getDogById(this.dogId).subscribe(dog => {
        this.dogForm.patchValue(dog);
      });
    }
  }

  onFileChange(event: any, imageField: string): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFiles[imageField] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  

  onSubmit(): void {
    if (this.dogForm.valid) {
      const dog: CreateDogModel = this.dogForm.value;
     // dog.userId = this.userId!;  // Ensure userId is added to the dog object
  dog.userId = "51FAA5CE-CA96-435D-9725-D35E2A1EBC4C";

      dog.imageUrl1 = this.selectedFiles['image1'] || '';
      dog.imageUrl2 = this.selectedFiles['image2'] || '';
      dog.imageUrl3 = this.selectedFiles['image3'] || '';
  
      console.log('Submitting dog:', dog);  // Log dog object to confirm inclusion of userId
  
      if (this.dogId) {
        const updateDog: UpdateDogModel = { ...dog, id: this.dogId };
        this.dogService.updateDog(this.dogId, updateDog).subscribe(
          () => this.router.navigate(['/dogs']),
          (error) => console.error('Update error:', error)
        );
      } else {
        this.dogService.createDog(dog).subscribe(
          () => this.router.navigate(['/dogs']),
          (error) => console.error('Creation error:', error)
        );
      }
    }
  }
}
