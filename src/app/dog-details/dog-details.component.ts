import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../services/dog.service';
import { DogModel } from '../models/dog.model';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {
  dog: DogModel | undefined;
  dogImages: string[] = [];

  constructor(private route: ActivatedRoute, private dogService: DogService) { }

  ngOnInit(): void {
    const dogId = this.route.snapshot.paramMap.get('id')!;
    this.dogService.getDogById(dogId).subscribe(dog => {
      this.dog = dog;
      this.dogImages = [dog.imageUrl1, dog.imageUrl2, dog.imageUrl3].filter(url => !!url);
    });
  }
}

