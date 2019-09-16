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
import { Router, ActivatedRoute } from '@angular/router';
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
  private isNewForm: boolean;

  constructor(
    private poiService: POIService,
    private eventService: EventService,
    private itineraryService: ItineraryService,
    private router: Router,
    private toastService: ToastService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.url.subscribe(segments => {
      if ((segments[0].path) === 'update') {
        this.activatedRoute.params.subscribe(params => {
          const id = params.id;
          this.itineraryService.getItineraryByID(id).subscribe(itinerary => {
            this.itinerary = itinerary;
          });
        });
        this.isNewForm = false;
      } else {
        this.itinerary.stops = [];
        this.isNewForm = true;
      }
    });
  }

  ngOnInit() {
    forkJoin(
      this.poiService.getPois(),
      this.eventService.getEvents()
    ).subscribe(res => {
      for (const i of res[0]) {
        this.pois.push({...i, type: 'poi'});
      }
      for (const e of res[1]) {
        this.events.push({...e, type: 'event'});
      }
    }, err => {
      this.toastService.showError('An error occurred. Check if POI and Event services are up!');
    });
  }

  onItemDrop(e: any, dayBagIndex: number) {
    const val = e.dragData;
    const stop = {} as TripStop;
    stop.location = val.geoLocation;
    stop.refType = val.type === 'event' ? RefType.TYPE_EVENT : RefType.TYPE_POI;
    stop.refId = val.id;
    stop.visitOrder = this.itinerary.stops.length + 1;
    stop.title = val.title;
    stop.shortDescription = val.shortDescription;
    this.itinerary.stops.push(stop);
  }

  public save() {
    let subscription;
    if (this.isNewForm) {
      subscription = this.itineraryService.save(this.itinerary);
    } else {
      subscription = this.itineraryService.update(this.itinerary);
    }

    subscription.subscribe(res => {
      this.toastService.showSuccess('Itinerary saved successfully');
      this.router.navigateByUrl('/itineraries');
    });
  }

}
