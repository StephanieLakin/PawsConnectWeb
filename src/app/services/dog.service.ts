import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogModel } from '../models/dog.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = environment.apiUrl + '/dogs';

  constructor(private http: HttpClient) { }

  getDogs(): Observable<DogModel[]> {
    return this.http.get<DogModel[]>(`${this.apiUrl}`);
  }

  getDogById(dogId: string): Observable<DogModel> {
    return this.http.get<DogModel>(`${this.apiUrl}/${dogId}`);
  }

  createDog(dog: DogModel): Observable<DogModel> {
    return this.http.post<DogModel>(`${this.apiUrl}`, dog);
  }

  updateDog(dog: DogModel): Observable<DogModel> {
    return this.http.put<DogModel>(`${this.apiUrl}/${dog.id}`, dog);
  }

  deleteDog(dogId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${dogId}`);
  }
}
