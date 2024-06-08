export interface DogModel {
    id: string;
    name: string;
    breed: string;
    description: string;
    gender: string;
    weight: number;
    dateOfBirth: Date;
    medicalHistory: string;
    allergies: string;
    createdDate: Date;
    userId: string;
    imageUrl1: string;
    imageUrl2: string;
    imageUrl3: string; 
    bio: string; 
  } 
  export interface CreateDogModel {   
    name: string;
    breed: string;
    description: string;
    gender: string;
    weight: number;
    dateOfBirth: Date;
    medicalHistory: string;
    allergies: string;
    createdDate: Date;
    userId: string;
    imageUrl1: string;
    imageUrl2: string;
    imageUrl3: string; 
    bio: string; 
  } 

  export interface UpdateDogModel {
    id: string;
    name: string;
    breed: string;
    description: string;
    gender: string;
    weight: number;
    dateOfBirth: Date;
    medicalHistory: string;
    allergies: string;
    userId: string;
    imageUrl1: string;
    imageUrl2: string;
    imageUrl3: string; 
    bio: string; 
  } 