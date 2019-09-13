import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ItineraryHomeComponent } from './app/itinerary/itinerary-home/itinerary-home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'itineraries', component: ItineraryHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
