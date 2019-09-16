import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Page } from '../../models/page';
import { Trip } from '../../models/trip';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-home',
  templateUrl: './trip-home.component.html',
  styleUrls: ['./trip-home.component.css']
})
export class TripHomeComponent implements OnInit {

  page: Page<Trip>;

  constructor(
    private tripService: TripService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadPage();
  }

  private loadPage() {
    this.tripService.getTrips(0, 50).subscribe(res => {
      this.page = res;
    }, err => {
      this.toastService.showError('An error occurred. ' +
      'Please, make sure that Trip Planner service is up and running!');
    });
  }

  delete(trip: Trip) {
    this.tripService.delete(trip).subscribe(res => {
      if (res) {
        this.toastService.showSuccess('Trip deleted successfully.');
        this.loadPage();
      }
    }, err => {
      this.toastService.showError('An error occurred.');
    });
  }

  redirect() {
    this.router.navigate(['trips', 'new']);
  }

}
