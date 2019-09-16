import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private BASE_URL = `${environment.TRIP_PLANNER_SERVICE_HOST}/api/trip`;

  constructor(
    private http: HttpClient
  ) { }

  getTrips(page: number, pageSize: number): Observable<Page<Trip>> {
    return this.http.get<Page<Trip>>(`${this.BASE_URL}/${page}/${pageSize}`);
  }

  delete(trip: Trip): Observable<boolean> {
    return this.http.delete<boolean>(`${this.BASE_URL}/${trip.id}`);
  }

  save(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.BASE_URL, trip);
  }
}
