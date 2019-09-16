import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ItineraryHomeComponent } from './app/itinerary/itinerary-home/itinerary-home.component';
import { ItineraryFormComponent } from './app/itinerary/itinerary-form/itinerary-form.component';
import { TripHomeComponent } from './app/trip/trip-home/trip-home.component';
import { TripFormComponent } from './app/trip/trip-form/trip-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'itineraries', children: [
    { path: '', component: ItineraryHomeComponent },
    { path: 'new', component: ItineraryFormComponent }
  ]},
  { path: 'trips', children: [
    { path: '', component: TripHomeComponent },
    { path: 'new', component: TripFormComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
