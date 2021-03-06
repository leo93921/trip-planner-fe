import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../models/page';
import { Itinerary } from '../models/itinerary';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  private BASE_URL = `${environment.TRIP_PLANNER_SERVICE_HOST}/api/itinerary`;

  constructor(
    private http: HttpClient
  ) { }

  public getItineraries(
    pageNumber: number,
    pageSize: number
  ): Observable<Page<Itinerary>> {
    return this.http.get<Page<Itinerary>>(`${this.BASE_URL}/${pageNumber}/${pageSize}`);
  }

  public save(itinerary: Itinerary): Observable<Itinerary> {
    return this.http.post<Itinerary>(`${this.BASE_URL}`, itinerary);
  }

  public delete(itinerary: Itinerary): Observable<boolean> {
    return this.http.delete<boolean>(`${this.BASE_URL}/${itinerary.id}`);
  }

  public update(itinerary: Itinerary): Observable<Itinerary> {
    return this.http.put<Itinerary>(`${this.BASE_URL}`, itinerary);
  }

  public getItineraryByID(id: string): Observable<Itinerary> {
    return this.http.get<Itinerary>(`${this.BASE_URL}/${id}`);
  }
}
