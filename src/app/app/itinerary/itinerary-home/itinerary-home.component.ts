import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';
import { Page } from '../../models/page';
import { Itinerary } from '../../models/itinerary';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itinerary-home',
  templateUrl: './itinerary-home.component.html',
  styleUrls: ['./itinerary-home.component.css']
})
export class ItineraryHomeComponent implements OnInit {

  private page: Page<Itinerary>;

  constructor(
    private itineraryService: ItineraryService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadPage();
  }

  public delete(itinerary: Itinerary) {
    this.itineraryService.delete(itinerary).subscribe(res => {
      if (res) {
        this.toastService.showSuccess('Itinerary deleted successfully');
        this.loadPage();
      }
    });
  }

  loadPage() {
    this.itineraryService.getItineraries(0, 50).subscribe(res => {
      this.page = res;
    }, err => {
      this.toastService.showError('An error occurred. Check if itinerary service is up!');
    });
  }

  redirect() {
    this.router.navigateByUrl('/itineraries/new');
  }
}
