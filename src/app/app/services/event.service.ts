import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private BASE_URL = `${environment.EVENT_SERVICE_HOST}/api/event`;

  constructor(
    private http: HttpClient
  ) { }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.BASE_URL}`);
  }
}
