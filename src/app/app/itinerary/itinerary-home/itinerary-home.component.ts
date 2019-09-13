import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';
import { Page } from '../../models/page';
import { Itinerary } from '../../models/itinerary';

@Component({
  selector: 'app-itinerary-home',
  templateUrl: './itinerary-home.component.html',
  styleUrls: ['./itinerary-home.component.css']
})
export class ItineraryHomeComponent implements OnInit {

  private page: Page<Itinerary>;

  constructor(
    private itineraryService: ItineraryService
  ) { }

  ngOnInit() {
    this.itineraryService.getItineraries(0, 25).subscribe(res => {
      this.page = res;
    });
  }

}
