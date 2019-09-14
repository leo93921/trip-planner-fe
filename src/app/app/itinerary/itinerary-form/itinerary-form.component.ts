import { Component, OnInit } from '@angular/core';
import { POIService } from '../../services/poi.service';
import { PointOfInterest } from '../../models/point-of-interest';
import { EventService } from '../../services/event.service';
import { forkJoin } from 'rxjs';
import { Event } from '../../models/event';
import { Itinerary } from '../../models/itinerary';
import { TripStop } from '../../models/trip-stop';
import { RefType } from '../../models/ref-type';
import { ItineraryService } from '../../services/itinerary.service';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-itinerary-form',
  templateUrl: './itinerary-form.component.html',
  styleUrls: ['./itinerary-form.component.css']
})
export class ItineraryFormComponent implements OnInit {

  itinerary: Itinerary = {} as Itinerary;
  pois: PointOfInterest[] = [];
  events: Event[] = [];
  selectedPOIs: PointOfInterest[] = [];
  selectedEvents: Event[] = [];

  constructor(
    private poiService: POIService,
    private eventService: EventService,
    private itineraryService: ItineraryService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    forkJoin(
      this.poiService.getPois(),
      this.eventService.getEvents()
    ).subscribe(res => {
      this.pois = res[0];
      this.events = res[1];
    }, err => {
      this.toastService.showError('An error occurred. Check if POI and Event services are up!');
    });
  }

  public togglePOI(poi: PointOfInterest) {
    const index = this.selectedPOIs.indexOf(poi);
    if (index === -1) {
      this.selectedPOIs.push(poi);
    } else {
      this.selectedPOIs.splice(index, 1);
    }
  }

  public toggleEvent(event: Event) {
    const index = this.selectedEvents.indexOf(event);
    if (index === -1) {
      this.selectedEvents.push(event);
    } else {
      this.selectedEvents.splice(index, 1);
    }
  }

  public save() {
    let i = 0;
    this.itinerary.stops = [];

    for (const p of this.selectedPOIs) {
      const t = new TripStop();
      t.location = p.geoLocation;
      t.refId = p.id;
      t.refType = RefType.TYPE_POI;
      t.visitOrder = i;
      this.itinerary.stops.push(t);

      i++;
    }

    for (const p of this.selectedEvents) {
      const t = new TripStop();
      t.location = p.geoLocation;
      t.refId = p.id;
      t.refType = RefType.TYPE_EVENT;
      t.visitOrder = i;
      this.itinerary.stops.push(t);

      i++;
    }

    this.itineraryService.save(this.itinerary).subscribe(res => {
      this.toastService.showSuccess('Itinerary saved successfully');
      this.router.navigateByUrl('/itineraries');
    });
  }

}
