import { TypeElement } from './type-element';
import { Location } from '@angular/common';

export class Event {
  id: string;
  typeElement: TypeElement;
  price: string;
  freeEntry: boolean;
  geoLocation: Location;
}
