import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { ItineraryHomeComponent } from './app/itinerary/itinerary-home/itinerary-home.component';
import { ItineraryFormComponent } from './app/itinerary/itinerary-form/itinerary-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItineraryHomeComponent,
    ItineraryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
