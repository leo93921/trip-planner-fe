import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PointOfInterest } from '../models/point-of-interest';

@Injectable({
  providedIn: 'root'
})
export class POIService {

  private BASE_URL = `${environment.POI_SERVICE_HOST}/api/poi`;

  constructor(private http: HttpClient) { }

  public getPois(): Observable<PointOfInterest[]> {
    return this.http.get<PointOfInterest[]>(`${this.BASE_URL}`);
  }
}
