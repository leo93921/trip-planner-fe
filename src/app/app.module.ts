import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { ItineraryHomeComponent } from './app/itinerary/itinerary-home/itinerary-home.component';
import { ItineraryFormComponent } from './app/itinerary/itinerary-form/itinerary-form.component';
import { TripHomeComponent } from './app/trip/trip-home/trip-home.component';
import { ExperienceTableComponent } from './app/components/experience-table/experience-table.component';
import { TripFormComponent } from './app/trip/trip-form/trip-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItineraryHomeComponent,
    ItineraryFormComponent,
    ExperienceTableComponent,
    TripHomeComponent,
    TripFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
