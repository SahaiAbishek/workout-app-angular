import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CreateComponent } from './create/create.component';
import { TrackComponent } from './track/track.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { EndWorkoutComponent } from './end-workout/end-workout.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';

const routes: Routes = [
    {
        path: '',
        component: WorkoutsComponent
    },
    {
        path: 'workouts',
        component: WorkoutsComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'track',
        component: TrackComponent,
    },
    {
        path: 'startWorkout',
        component: StartWorkoutComponent,
    },
    {
        path: 'endWorkout',
        component: EndWorkoutComponent,
    },
    {
        path: 'editWorkout',
        component: EditWorkoutComponent,
    }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }