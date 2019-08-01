import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './create/create.component';
import { CategoryComponent } from './category/category.component';
import { TrackComponent } from './track/track.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { EndWorkoutComponent } from './end-workout/end-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WorkoutsComponent,
    CreateComponent,
    CategoryComponent,
    TrackComponent,
    EditWorkoutComponent,
    StartWorkoutComponent,
    EndWorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
