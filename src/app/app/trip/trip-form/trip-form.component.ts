import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { EventService } from '../../services/event.service';
import { POIService } from '../../services/poi.service';
import { ToastService } from '../../services/toast.service';
import { Event } from '../../models/event';
import { PointOfInterest } from '../../models/point-of-interest';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Trip } from '../../models/trip';
import { DayBag } from '../../models/day-bag';
import { TripStop } from '../../models/trip-stop';
import { RefType } from '../../models/ref-type';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

  events: Event[] = [];
  pois: PointOfInterest[] = [];
  trip: Trip = {} as Trip;

  constructor(
    private eventService: EventService,
    private poiService: POIService,
    private toastService: ToastService,
    private tripService: TripService,
    private router: Router
  ) {
    this.trip.dayBags = [];
    this.addDay();
  }

  ngOnInit() {
    forkJoin(
      this.eventService.getEvents(),
      this.poiService.getPois()
    ).subscribe( res => {
      for (const e of res[0]) {
        this.events.push({...e, type: 'event'});
      }
      for (const p of res[1]) {
        this.pois.push({...p, type: 'poi'});
      }
    }, err => {
      this.toastService.showError('An error occurred. Make sure POI and Event services are up!');
    });
  }

  onItemDrop(e: any, dayBagIndex: number) {
    const val = e.dragData;
    const stop = {} as TripStop;
    stop.location = val.geoLocation;
    stop.refType = val.type === 'event' ? RefType.TYPE_EVENT : RefType.TYPE_POI;
    stop.refId = val.id;
    stop.visitOrder = this.trip.dayBags[dayBagIndex].tripStops.length + 1;
    stop.title = val.title;
    stop.shortDescription = val.shortDescription;
    this.trip.dayBags[dayBagIndex].tripStops.push(stop);
  }

  addDay() {
    const item = {} as DayBag;
    item.tripStops = [];
    this.trip.dayBags.push(item);
  }

  saveTrip() {
    this.tripService.save(this.trip).subscribe(res => {
      this.toastService.showSuccess('The trip has been saved successfully.');
      this.router.navigateByUrl('/trips');
    }, err => {
      this.toastService.showError('Something went wrong. Try again.');
    });
  }

}
