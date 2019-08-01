import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  workouts: any[] = [
    { id:1, name: "Morning run for 5 mins" },
    { id:2, name:"Boxing parctice for 10 mins" },
    { id:3, name: "Chest and Tricep workout for 10 mins" },
    { id:4, name:"Evening walk for 30 mins" }

  ];
  constructor() {

  }

  public getAllWorkouts(){
    return this.workouts;
  }
}
