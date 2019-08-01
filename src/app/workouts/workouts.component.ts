import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  allworkouts
  constructor(private workouts: WorkoutsService) {

  }

  ngOnInit() {
    this.allworkouts = this.workouts.getAllWorkouts();
    console.log(this.allworkouts);
  }

}
